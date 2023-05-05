/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path'
import fsExtra from 'fs-extra'
import fs from 'fs'

// 引入vite导出的build方法，用它来创建
import { defineConfig, build } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const text = fs.readFileSync(path.resolve('./package.json'), 'utf-8')
const version = JSON.parse(text).version

// 生成package.json
const createPackageJson = name => {
  // 预设
  const fileStr = `{
    "name": "${name ? name : 'sheep-ui'}",
    "version": "${version}",
    "main": "${name ? 'index.umd.cjs' : 'pop-ui.umd.cjs'}",
    "module": "${name ? 'index.js' : 'pop-ui.js'}",
    "author": "popopopo",
    "description": "pop-ui",
    "repository": {
      "type": "git",
      "url": ""
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": ""
    }
  }`
  // issess
  if (name) {
    // 单个组件，输出对应的package.json
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    )
  } else {
    // 全量
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8'
    )
  }
}

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})
// 入口文件
const entryFile = path.resolve('scripts', './entry.ts')
// 组件目录
const componentsDir = path.resolve('./src')
// 输出目录
const outputDir = path.resolve('./build')
console.log('21', componentsDir, outputDir, version)

// rollup配置
const rollupOptions = {
  // 外置
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 单组件按需构建
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )

  createPackageJson(name)
}

// 执行创建
// 全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'pop-ui',
          fileName: 'pop-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )

  // 生成package.json
  createPackageJson()
}

const buildLib = async () => {
  await buildAll()

  // 按需打包
  fs.readdirSync(componentsDir)
    .filter(name => {
      // 只要目录不要文件，且里面包含index.ts
      const componentDir = path.resolve(componentsDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async name => {
      console.log("name", name)
      await buildSingle(name)
    })
}

buildLib()