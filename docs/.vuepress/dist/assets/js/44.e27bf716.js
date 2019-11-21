(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{195:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"step-by-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step","aria-hidden":"true"}},[t._v("#")]),t._v(" Step By Step")]),t._v(" "),a("h2",{attrs:{id:"upload-input-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-input-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Upload Input file")]),t._v(" "),a("p",[t._v("By clicking on "),a("strong",[t._v("Browse input files")]),t._v(" or "),a("strong",[t._v("drag-drop")]),t._v(" file under this section, we can upload some pdf file, which needs to be modified or data to be extracted from.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/browseInputFile.jpg",alt:"Browse Input File",title:"Browse Input File"}})]),t._v(" "),a("h2",{attrs:{id:"upload-resource-file-if-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-resource-file-if-any","aria-hidden":"true"}},[t._v("#")]),t._v(" Upload Resource File, if any")]),t._v(" "),a("p",[t._v("If PDF has to be modified with additional resource file, then it can be uploaded by clicking on "),a("strong",[t._v("Browse resource file")]),t._v(" or "),a("strong",[t._v("drag-drop")]),t._v(" file under this section. Resource file such as image, json, csv, font file or any other pdf for attachment.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/browseResourceFile.jpg",alt:"Browse Resource File",title:"Browse Resource File"}})]),t._v(" "),a("h2",{attrs:{id:"define-configuration-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-configuration-variable","aria-hidden":"true"}},[t._v("#")]),t._v(" Define Configuration Variable")]),t._v(" "),a("p",[t._v("Configuration variable are global variables, which can be used/reused in script at any place.\nBy default, two global configuration variable defined by system, are always present")]),t._v(" "),a("ul",[a("li",[t._v("$input "),a("code",[t._v("Represent the Uploaded input file name")]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//access uploaded input file via ")]),t._v("\n$input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//positional index, represent the filePath, where it is uploaded ")]),t._v("\n$input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fileName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//file name, represent the filePath, where it is uploaded")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("$resource "),a("code",[t._v("Represend the Uploaded resource file name")]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//access uploaded resource file via ")]),t._v("\n$resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//positional index, represent the filePath, where it is uploaded ")]),t._v("\n$resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fileName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//file name, represent the filePath, where it is uploaded")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("Apart from this, user can create his own configuration variable by\n"),a("br")]),t._v(" "),a("ul",[a("li",[t._v("Clicking on "),a("strong",[t._v("New Variable")]),t._v(" "),a("br")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/configurationVariable.jpg",alt:"Configuration Variable",title:"Configuration Variable"}})]),t._v(" "),a("p",[a("br"),a("br")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Drawing region on PDF")]),t._v(" (preview mode)"),a("br")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/drawregion.jpg",alt:"Draw Region",title:"Draw Region"}})]),t._v(" "),a("h2",{attrs:{id:"write-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-script","aria-hidden":"true"}},[t._v("#")]),t._v(" Write Script")]),t._v(" "),a("p",[t._v("The script written in this section, get applied to all uploaded pdf and resource files.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/script.jpg",alt:"Script",title:"Script"}})]),t._v(" "),a("p",[t._v("Below is basic sample script")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("doc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//load the input file")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("output")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//output the file")]),t._v("\n")])])]),a("p",[t._v("For advanced example, go to "),a("a",{attrs:{href:"/guide/cookbook"}},[t._v("here")])]),t._v(" "),a("h2",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[t._v("#")]),t._v(" Run")]),t._v(" "),a("p",[t._v("Click on Run button, to check the output of script")]),t._v(" "),a("p",[a("img",{attrs:{src:"/run.jpg",alt:"Script",title:"Script"}})])])}],!1,null,null,null);e.default=r.exports}}]);