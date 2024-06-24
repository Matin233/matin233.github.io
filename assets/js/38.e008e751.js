(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{439:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"样式与-wxss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式与-wxss"}},[t._v("#")]),t._v(" 样式与 WXSS")]),t._v(" "),s("p",[t._v("WXSS (WeiXin Style Sheets) 是一套样式语言，用于描述 WXML 的组件样式。")]),t._v(" "),s("p",[t._v("WXSS 用来决定 WXML 的组件应该怎么显示。")]),t._v(" "),s("p",[t._v("为了适应广大的前端开发者，WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改。")]),t._v(" "),s("p",[t._v("与 CSS 相比，WXSS 扩展的特性有：")]),t._v(" "),s("ul",[s("li",[t._v("尺寸单位")]),t._v(" "),s("li",[t._v("样式导入")])]),t._v(" "),s("h2",{attrs:{id:"尺寸单位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尺寸单位"}},[t._v("#")]),t._v(" 尺寸单位")]),t._v(" "),s("ul",[s("li",[t._v("rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("设备")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("rpx换算px (屏幕宽度/750)")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("px换算rpx (750/屏幕宽度)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("iPhone5")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1rpx = 0.42px")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1px = 2.34rpx")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("iPhone6")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1rpx = 0.5px")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1px = 2rpx")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("iPhone6 Plus")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1rpx = 0.552px")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1px = 1.81rpx")])])])]),t._v(" "),s("p",[s("strong",[t._v("建议：")]),t._v(" 开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。")]),t._v(" "),s("p",[s("strong",[t._v("注意：")]),t._v(" 在较小的屏幕上不可避免的会有一些毛刺，请在开发时尽量避免这种情况。")]),t._v(" "),s("h2",{attrs:{id:"样式导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式导入"}},[t._v("#")]),t._v(" 样式导入")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("@import")]),t._v("语句可以导入外联样式表，"),s("code",[t._v("@import")]),t._v("后跟需要导入的外联样式表的相对路径，用"),s("code",[t._v(";")]),t._v("表示语句结束。")]),t._v(" "),s("p",[s("strong",[t._v("示例代码：")])]),t._v(" "),s("div",{staticClass:"language-less extra-class"},[s("pre",{pre:!0,attrs:{class:"language-less"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** common.wxss **/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".small-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** app.wxss **/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"common.wxss"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".middle-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"内联样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联样式"}},[t._v("#")]),t._v(" 内联样式")]),t._v(" "),s("p",[t._v("框架组件上支持使用 style、class 属性来控制组件的样式。")]),t._v(" "),s("ul",[s("li",[t._v("style：静态的样式统一写到 class 中。style 接收动态的样式，在运行时会进行解析，请尽量避免将静态的样式写进 style 中，以免影响渲染速度。")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("color:")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("class：用于指定样式规则，其属性值是样式规则中类选择器名(样式类名)的集合，样式类名不需要带上"),s("code",[t._v(".")]),t._v("，样式类名之间用空格分隔。")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("normal_view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[t._v("#")]),t._v(" 选择器")]),t._v(" "),s("p",[t._v("目前支持的选择器有：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("选择器")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("样例")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("样例描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(".class")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(".intro")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('选择所有拥有 class="intro" 的组件')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("#id")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("#firstname")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('选择拥有 id="firstname" 的组件')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("element")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("view")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选择所有 view 组件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("element, element")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("view, checkbox")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选择所有文档的 view 组件和所有的 checkbox 组件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("::after")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("view::after")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在 view 组件后边插入内容")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("::before")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("view::before")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在 view 组件前边插入内容")])])])]),t._v(" "),s("h2",{attrs:{id:"全局样式与局部样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局样式与局部样式"}},[t._v("#")]),t._v(" 全局样式与局部样式")]),t._v(" "),s("p",[t._v("定义在 app.wxss 中的样式为全局样式，作用于每一个页面。在 page 的 wxss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 app.wxss 中相同的选择器。")])])}),[],!1,null,null,null);a.default=n.exports}}]);