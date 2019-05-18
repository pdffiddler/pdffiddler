(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{197:function(t,n,e){"use strict";e.r(n);var a=e(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"understanding-coordinates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#understanding-coordinates","aria-hidden":"true"}},[t._v("#")]),t._v(" Understanding Coordinates")]),t._v(" "),e("p",[t._v("When you set the (x, y) location in any PDFFiddler API, then this location is relative to top left position of PDF Page.")]),t._v(" "),e("p",[t._v("All coordinates (x, y) in PDFFiddler API are defined in "),e("code",[t._v("mm")]),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:"/pdffiddler/coordinate.jpg",alt:"Coordinate Space",title:"Coordinate Space"}})]),t._v(" "),e("h2",{attrs:{id:"getting-coordinates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-coordinates","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting coordinates")]),t._v(" "),e("p",[t._v("We can easily get coordinates in pdf, by visually drawing region in PDFFiddler.")]),t._v(" "),e("ul",[e("li",[t._v("After uploading pdf in input or resource section. Preview the PDF file, using eye (preview) icon.")]),t._v(" "),e("li",[t._v("Now, you can draw any rectangle (region), in that pdf. By clicking on the starting point within the pdf and dragging the mouse to the opposite corner of the desired rectangle, then release.")]),t._v(" "),e("li",[t._v("After drawing is completed, a popup will appear, which will ask the Name of that region, to be defined as configuration variable.")])]),t._v(" "),e("p",[t._v("In that popup, you can see x, y, width and height coordinates in "),e("code",[t._v("mm")]),t._v(".\nYou can save that region as configuration variable, so that it can be used in script.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/pdffiddler/drawregion.gif",alt:"Draw Region",title:"Draw Region"}})]),t._v(" "),e("h2",{attrs:{id:"using-coordinates-in-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-coordinates-in-script","aria-hidden":"true"}},[t._v("#")]),t._v(" Using coordinates in script")]),t._v(" "),e("p",[t._v("In PDFFiddler API, all coordinates are defined as Point or Region. Point define a particular point in PDF, whereas region define a rectangular window of interest in PDF.")]),t._v(" "),e("p",[t._v("There are two way to use a "),e("code",[t._v("Point")]),t._v(" or "),e("code",[t._v("Region")]),t._v(" in script.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Defined as configuration variable"),e("br"),e("br"),t._v("\nif you define a configuration variable as type "),e("code",[t._v("Region")]),t._v(" and name as "),e("strong",[t._v("invoice")]),t._v(", then it can be used in below manner")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("invoiceRegion "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $invoice "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Represent the invoice region")]),t._v("\ntopLeftPoint "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $invoice"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("topLeft")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Represent the top left Point of invoice Region")]),t._v("\ntopRightPoint "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $invoice"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("topRight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Represent the top right Point of invoice Region")]),t._v("\nbottomLeftPoint "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $invoice"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bottomLeft")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Represent the bottom left Point of invoice Region")]),t._v("\nbottomRightPoint "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $invoice"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bottomRight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Represent the bottom right Point of invoice Region")]),t._v("\n")])])]),e("br")]),t._v(" "),e("li",[e("p",[t._v("Defined using Global Method"),e("br"),e("br"),t._v("\nCreate a "),e("code",[t._v("Point")]),t._v(", with x at 10 and y at 20 position.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("point "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Point")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[e("br"),e("br"),t._v("\nCreate a "),e("code",[t._v("Region")]),t._v(", with topLeft position at (10, 20) and width & height as (40, 50).")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("point "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Region")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])}],!1,null,null,null);n.default=s.exports}}]);