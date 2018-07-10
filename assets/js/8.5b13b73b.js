(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{246:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("cdr-doc-table-of-contents-shell",[a("h2",{attrs:{id:"cedar-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cedar-vue","aria-hidden":"true"}},[t._v("#")]),t._v(" Cedar + Vue")]),a("p",[t._v("Cedar components are built using "),a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue"),a("OutboundLink")],1),t._v(" and can only be used in Vue projects\n")]),a("hr"),a("p"),a("h2",{attrs:{id:"about-component-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-component-packages","aria-hidden":"true"}},[t._v("#")]),t._v(" About component packages")]),a("p",[t._v("All components are available as a package on "),a("a",{attrs:{href:"https://www.npmjs.com/search?q=%40rei",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm within the REI organization"),a("OutboundLink")],1),t._v(".")]),a("p",[t._v("Each component is a separate NPM package. This ensures that you only have the essentials for your application - nothing more.")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save @rei"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cdr"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("component"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("p",[t._v("Once installed, files are located in the package‘s "),a("code",[t._v("dist/")]),t._v(" folder. Component packages often contain one JS file and one CSS file.")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("node_modules"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("@rei"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cdr"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("component"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cdr"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("component"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\nnode_modules"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("@rei"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cdr"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("component"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cdr"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("component"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),a("p",[t._v("Some packages contain more (or fewer) than these two files which is noted in the package’s documentation.")]),a("hr"),a("h2",{attrs:{id:"setup-a-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-a-project","aria-hidden":"true"}},[t._v("#")]),t._v(" Setup a project")]),a("p",[t._v("All components depend upon core style and font assets. Without these assets included, components may be styled incorrectly.")]),a("p",[t._v("First, install the assets package:")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save @rei"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cdr"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("assets\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("p",[t._v("The "),a("a",{attrs:{href:"https://www.npmjs.com/package/@rei/cdr-assets",target:"_blank",rel:"noopener noreferrer"}},[t._v("cdr-assets package"),a("OutboundLink")],1),t._v(" contains these files:")]),a("ul",[a("li",[t._v("cdr-core.css")]),a("li",[t._v("cdr-fonts.css")]),a("li",[t._v("cdr-tokens.scss")])]),a("h3",{attrs:{id:"install-required-core-styles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-required-core-styles","aria-hidden":"true"}},[t._v("#")]),t._v(" Install required core styles")]),a("p",[t._v("Cedar requires a core stylesheet to render components properly.")]),a("p",[t._v("To include the stylesheet, import "),a("code",[t._v("cdr-core.css")]),t._v(":")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@rei/cdr-assets/dist/cdr-core.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("h2",{attrs:{id:"install-required-fonts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-required-fonts","aria-hidden":"true"}},[t._v("#")]),t._v(" Install required fonts")]),a("p",[t._v("Cedar uses specific fonts – Roboto, Roboto Condensed, and Sentinel – that are required for your project.")]),a("p",[t._v("Roboto and Roboto Condensed are available from "),a("a",{attrs:{href:"https://fonts.google.com/specimen/Roboto",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Fonts"),a("OutboundLink")],1),t._v(".")]),a("p",[t._v("Sentinel is available in the "),a("code",[t._v("cdr-assets")]),t._v(" package and mapped using the "),a("code",[t._v("cdr-fonts.css")]),t._v(" file.")]),a("p",[t._v("To include these fonts, import "),a("code",[t._v("cdr-fonts.css")]),t._v(":")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@rei/cdr-assets/dist/cdr-fonts.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("hr"),a("h2",{attrs:{id:"install-a-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-a-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Install a component")]),a("p",[t._v("Examples below demo the "),a("code",[t._v("CdrButton")]),t._v(" component.")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("save @rei"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cdr"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("button\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("h3",{attrs:{id:"including-component-specific-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#including-component-specific-css","aria-hidden":"true"}},[t._v("#")]),t._v(" Including component-specific CSS")]),a("p",[t._v("How you include css depends on your tech stack and varies from project to project.")]),a("p",[t._v("Here are a few common methods:")]),a("h4",{attrs:{id:"webpack-css-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-css-loader","aria-hidden":"true"}},[t._v("#")]),t._v(" Webpack (css-loader)")]),a("p",[t._v("If using a bundler, import css into javascript and let loaders extract it.")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@rei/cdr-button/dist/cdr-button.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("h4",{attrs:{id:"postcss-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss-import","aria-hidden":"true"}},[t._v("#")]),t._v(" Postcss-import")]),a("p",[t._v("Cedar packages include the "),a("a",{attrs:{href:"https://jaketrent.com/post/package-json-style-attribute/",target:"_blank",rel:"noopener noreferrer"}},[t._v("unofficial style field"),a("OutboundLink")],1),t._v(" supported by postcss-import.")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" '@rei"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cdr"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("button’"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("h4",{attrs:{id:"scss-or-another-pre-processor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scss-or-another-pre-processor","aria-hidden":"true"}},[t._v("#")]),t._v(" SCSS (or another pre-processor)")]),a("p",[t._v("You can also import css from the node_modules folder.")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'path/to/node_modules/@rei/cdr-button/dist/cdr-button.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("p",[t._v("Note: Code snippets provided throughout the docs will demonstrate the webpack + css-loader method.")]),a("hr"),a("h2",{attrs:{id:"use-a-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-a-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Use a component")]),a("p",[t._v("The examples in our documentation demonstrate usage in a "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Single File Component"),a("OutboundLink")],1),t._v(". If you aren’t using SFCs, read the vue docs for "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/components-registration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("registering components"),a("OutboundLink")],1),t._v(".")]),a("p",[t._v("Examples below demonstrate the "),a("code",[t._v("CdrButton")]),t._v(" component. Refer to each component’s documentation for a complete component API and advanced examples.")]),a("h3",{attrs:{id:"including-component-specific-css-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#including-component-specific-css-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Including component-specific CSS")]),a("ol",[a("li",[t._v("Import the component within the "),a("code",[t._v("script")]),t._v(" block.")])]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CdrButton "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@rei/cdr-button'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Register the component in the "),a("code",[t._v("components:")]),t._v(" object.")])]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("components"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  CdrButton\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Add the component element, such as "),a("code",[t._v("<cdr-button>")]),t._v(" into the template.")])]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1}},[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cdr-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I'm a button"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cdr-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("p",[t._v("Final file:")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1,"max-height":!1}},[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cdr-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I'm a button"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cdr-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CdrButton "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@rei/cdr-button'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  components"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      CdrButton\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])]),a("h3",{attrs:{id:"configure-component-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-component-props","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure component props")]),a("p",[t._v("Most Cedar components provide properties to configure component data, display, and logic. For example, the "),a("code",[t._v("<cdr-button>")]),t._v(" component provides a "),a("code",[t._v("size")]),t._v(" property to configure the button’s size.")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1,"max-height":!1}},[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cdr-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("size")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("large"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I'm a large button"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cdr-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("p",[t._v("Refer to each component’s API documentation for a full list of available properties.")]),a("h4",{attrs:{id:"bind-dynamic-data-to-the-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bind-dynamic-data-to-the-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Bind dynamic data to the component")]),a("p",[t._v("Props can be "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/components-props.html#Passing-Static-or-Dynamic-Props",target:"_blank",rel:"noopener noreferrer"}},[t._v("static or dynamic"),a("OutboundLink")],1),t._v(". To provide dynamic data (or non-string data) add a ‘:’ before the prop name.")]),a("p",[t._v("Prop names are also documented and referenced in javascript as camel case, but "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/components-props.html#Prop-Casing-camelCase-vs-kebab-case",target:"_blank",rel:"noopener noreferrer"}},[t._v("used in the template in kebab-case"),a("OutboundLink")],1),t._v(".")]),a("p",[t._v("In this example, the "),a("code",[t._v("responsiveSize")]),t._v(" prop accepts an array of strings denoting size at different breakpoints. Note that "),a("code",[t._v("responsiveSize")]),t._v(" is used as "),a("code",[t._v("responsive-size")]),t._v(" in the template.")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1,"max-height":!1}},[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cdr-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":responsive-size")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("small@xs"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("large@sm"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I'm a responsive button"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cdr-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("hr"),a("h2",{attrs:{id:"customize-components-using-token-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customize-components-using-token-variables","aria-hidden":"true"}},[t._v("#")]),t._v(" Customize components using token variables")]),a("p",[t._v("Cedar provides a robust collection of "),a("a",{attrs:{href:"https://rei.github.io/rei-cedar-tokens/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("design tokens"),a("OutboundLink")],1),t._v(" corresponding to Cedars foundations. Standard colors, typography mixins, space, size and other properties are available in the "),a("code",[t._v("cdr-assets")]),t._v(" package as Sass/SCSS variables. If you need them in a different format such as LESS or XML, please "),a("a",{attrs:{href:"https://airtable.com/shrcbq9CHthuMO7AC",target:"_blank",rel:"noopener noreferrer"}},[t._v("submit a feature request"),a("OutboundLink")],1),t._v(".")]),a("p",[t._v("As you extend Cedar components and create your own components, work with your designer to take advantage of this inventory in your custom classes. Using them this way will ensure your custom styles remain consistent with design guidelines.")]),a("p",[t._v("Here we’re using a typography mixin and a color token to style "),a("code",[t._v(".myClass")]),t._v(".")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1,"max-height":!1}},[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myClass"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I'm styled with tokens!"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scss"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'path/to/node_modules/@rei/cdr-assets/dist/cdr-tokens.scss'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{attrs:{class:"token selector"}},[t._v(".myClass")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@include")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("redwood-display-10")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $text-on-light"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])])]),a("hr"),a("h2",{attrs:{id:"accessibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessibility","aria-hidden":"true"}},[t._v("#")]),t._v(" Accessibility")]),a("p",[t._v("REI requires 100% compliance with WCAG AA guidelines.\nWe have provided the relevant guidelines in each "),a("a",{attrs:{href:"../../components/link/?active-tab=api&active-link=accessibility-2"}},[t._v("component's documentation")]),t._v(".")]),a("hr"),a("h2",{attrs:{id:"css-modules-and-custom-class-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-modules-and-custom-class-names","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS Modules and custom class names")]),a("p",[t._v("Component css class names are "),a("a",{attrs:{href:"https://github.com/css-modules/css-modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("css modules"),a("OutboundLink")],1),t._v(" that reflect the package version. For example, "),a("code",[t._v("CdrButton@0.2.0")]),t._v(" will have classes that end in ‘_0-2-0’. This allows the possibility of components at different versions to live together without having css class name collisions.")]),a("p",[t._v("Never use Cedar class names within your own css or target them in javascript; they will change as you upgrade the package and break any functionality/styling you attach to them.")]),a("p",[t._v("To target CSS, create custom selectors such as "),a("code",[t._v("my-wrapper")]),t._v(" and "),a("code",[t._v("my-selector")]),t._v(" in the following example…")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1,"max-height":!1}},[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-wrapper"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cdr-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-selector"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I'm a button"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cdr-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n...\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v(".my-wrapper > .my-selector")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{attrs:{class:"token comment"}},[t._v("/* override button styles here */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])]),a("p",[t._v("Some components are more complex and have templates with multiple areas you may wish to add your own selectors. We try to be mindful of this and add props that will allow you to target your own classes to various elements.")]),a("p",[t._v("For example with checkbox you may want to target both the label and the content areas.")]),a("cdr-doc-code-snippet",{attrs:{"copy-button":!1,"line-numbers":!1,"max-height":!1}},[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cdr-checkbox")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("label-class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-label"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("content-class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-content"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("My checkbox"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cdr-checkbox")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n...\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v(".my-label")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token selector"}},[t._v(".my-content")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])])]),a("p",[t._v("If you find that a component needs to have a targeted prop class added, please "),a("a",{attrs:{href:"https://github.com/rei/rei-cedar/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("create an issue"),a("OutboundLink")],1),t._v(" and let us know.")])],1)],1)},[],!1,null,null,null);s.default=e.exports}}]);