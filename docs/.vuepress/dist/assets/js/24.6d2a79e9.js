(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{205:function(t,a,e){},229:function(t,a,e){"use strict";var n=e(205);e.n(n).a},270:function(t,a,e){"use strict";e.r(a);var n={name:"CdrDocIntro",props:{breadcrumbs:{type:[Array,Boolean],default:function(){return[{text:"Components/",href:"#"}]}},title:{type:String,default:"Button"},metadata:{type:[String,Boolean],default:"Also known as a Call-to-Action (CTA)"},size:{type:String}},computed:{hasSlotData:function(){return this.$slots.default&&"false"!==this.$slots.default[0].text.trim()}}},s=(e(229),e(0)),r=Object(s.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cdr-doc-intro",class:[t.size?"cdr-doc-intro--"+t.size:""]},[e("div",{staticClass:"cdr-doc-intro__inner"},[t.breadcrumbs?e("ul",{staticClass:"cdr-doc-intro__breadcrumbs"},t._l(t.breadcrumbs,function(a){return e("li",{key:a.text},[e("a",{staticClass:"cdr-doc-intro__breadcrumb-link",attrs:{href:a.href}},[t._v(t._s(a.text))])])})):t._e(),e("h1",{staticClass:"cdr-doc-intro__title"},[t._v(t._s(t.title))]),t.metadata?e("h2",{staticClass:"cdr-doc-intro__title-metadata"},[t._v(t._s(t.metadata))]):t._e(),t.hasSlotData?e("p",{staticClass:"cdr-doc-intro__summary"},[t._t("default",[t._v("\n          Buttons are used to invoke an event and communicate the action that will occur.\n        ")])],2):t._e()])])},[],!1,null,null,null);a.default=r.exports}}]);