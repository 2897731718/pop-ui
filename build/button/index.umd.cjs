(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.index={},e.Vue))})(this,function(e,t){"use strict";const d={type:{type:String,default:"secondary"},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1},tag:{type:String,default:"button"},loading:{type:Boolean,default:!1},attrType:{type:String,default:"button"},onClick:{type:[Function,Array]}},n=t.defineComponent({name:"SButton",props:d,setup(o,{slots:u}){const{type:f,size:s,disabled:a,block:p,attrType:r}=t.toRefs(o);return()=>{const l=u.default?u.default():"按钮";return t.createVNode("button",{disabled:a.value},[l])}}}),i={install(o){o.component(n.name,n)}};e.Button=n,e.default=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
