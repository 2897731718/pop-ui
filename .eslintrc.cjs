module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        // "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        // 现在这个默认支持 vue3 了 如果是 vue/essential 是支持 vue2 的
        "plugin:vue/vue3-essential",
        // "plugin:vue/vue3-recommended", // 这个也能开启 vue3 识别
    ],
    "overrides": [
    ],
    // "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser",
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
