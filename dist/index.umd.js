!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.inputkeyboard={})}(this,function(e){"use strict";!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=' .keyboard_bg[data-v-4db33905] *{ -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box } .keyboard_bg[data-v-4db33905]{ position: fixed; /*top: 0;*/ /*right: 0;*/ bottom:0; left: 0; width: 100vw; height: 100vh; z-index: 9999; user-select: none; -moz-user-select: none; } .keyboard_bg .keyboard_overlay[data-v-4db33905]{ background-color: gray; opacity: 0.9; width:100%; height: 100%; } .keyboard_bg .keyboard_body[data-v-4db33905]{ position: absolute; left:50%; bottom: 0; background-color: white; } .keyboard_bg .keyboard_body .keyboard_header[data-v-4db33905]{ position: relative; height: 84px; background-color: #f0f1f2; } .keyboard_header .keyboard_numbers[data-v-4db33905]{ width: 70%; white-space: nowrap; text-align: right; height: 84px; position: relative; } .keyboard_header .keyboard_numbers .li_bg[data-v-4db33905]{ display: inline-block; width: 9%; height: 100%; text-align: center; } .keyboard_header .keyboard_numbers .li_number[data-v-4db33905]{ width: 95%; margin-top:7px; line-height: 70px; display: inline-block; border:1px solid #f0f1f2; position: relative; } .keyboard_header .li_cursor_before[data-v-4db33905]:before{ content: " "; width: 2px; height: 100%; background-color: #0081f9; display: block; position: absolute; top: 0; left: 0; } .keyboard_header .li_cursor_after[data-v-4db33905]:after{ content: " "; width: 2px; height: 100%; background-color: #0081f9; display: block; position: absolute; top: 0; right: 0; } .li_touch[data-v-4db33905]{ position: relative; top: -3px; } .btn_clear[data-v-4db33905]{ position: absolute; top:0; right: 0; line-height: 80px; width: 25%; text-align: center; color:#0089f8; } .keyboard_frame[data-v-4db33905]{ position: relative; color:#000000; background-color:#d1d5db; } .keyboard_frame .keyboard_keys[data-v-4db33905]{ width:70%; text-align: center; } .keyboard_frame .keyboard_keys .li_bg[data-v-4db33905]{ display: inline-block; width: 33%; height: 84px; text-align:center; } .keyboard_frame .keyboard_keys .li_bg .li_key[data-v-4db33905]{ display: inline-block; background-color: #ffffff; width: 95%; margin-top:7px; line-height: 70px; border-radius: 5px; box-shadow: 0px 1px 2px gray; } .keyboard_frame .keyboard_btns[data-v-4db33905]{ position: absolute; right: 0; top: 0; width: 30%; height: 100%; } .keyboard_frame .keyboard_btns .li_bg[data-v-4db33905]{ width: 100%; height: 50%; padding: 7px; } .keyboard_frame .keyboard_btns .li_bg .li_btn[data-v-4db33905]{ background-color: #acb3bd; width: 100%; height: 100%; border-radius: 5px; box-shadow: 0px 1px 2px gray; position: relative; } .keyboard_frame .keyboard_btns .li_bg .li_btn span[data-v-4db33905]{ position: absolute; right: 10px; bottom: 10px; } .li_disable[data-v-4db33905]{ pointer-events: none; color: #a7a7a7; } .body-prevent-class { overflow: hidden; } .body-prevent-class { touch-action: none; } ';t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var t={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"keyboard_bg"},[n("div",{staticClass:"keyboard_overlay",on:{mouseup:function(t){return t.target!==t.currentTarget?null:e.hide(t)},touchend:function(t){return t.target!==t.currentTarget?null:e.hide(t)}}}),e._v(" "),n("div",{staticClass:"keyboard_body",style:{width:e.bodyWidth+"px","margin-left":0-e.bodyWidth/2+"px"},on:{mouseup:function(t){e.numberTouchCancel()}}},[n("div",{staticClass:"keyboard_header"},[n("div",{staticClass:"keyboard_numbers",class:{li_cursor_after:0==e.numbers.length},on:{mouseup:function(t){if(t.target!==t.currentTarget)return null;e.cursorTouchBefore()},touchend:function(t){if(t.target!==t.currentTarget)return null;e.cursorTouchBefore(t)}}},e._l(e.numbers,function(t,i){return n("div",{staticClass:"li_bg",attrs:{index:i},on:{mousedown:function(t){e.numberTouch(i)},touchstart:function(t){e.numberTouch(i,t)},mouseover:function(t){e.numberMouseOverInTouch(i)},touchmove:function(t){e.numberTouchMoveInTouch(i,t)},touchend:function(t){e.numberTouchEndInTouch(i,t)}}},[n("div",{staticClass:"li_number",class:{li_touch:i==e.number_touch,li_cursor_after:i-e.cursor_index==e.numbers.length,li_cursor_before:0==i&&i-e.cursor_index>e.numbers.length},attrs:{index:i}},[e._v(e._s(t))])])})),e._v(" "),n("div",{staticClass:"btn_clear",class:{li_disable:0==e.numbers.length},on:{mouseup:function(t){e.clear()},touchend:function(t){e.clear(t)}}},[e._v("clear")])]),e._v(" "),n("div",{staticClass:"keyboard_frame",on:{mouseout:function(t){e.key_touch=null}}},[n("div",{staticClass:"keyboard_keys"},e._l([7,8,9,4,5,6,1,2,3,"+/-",0,"."],function(t){return n("div",{staticClass:"li_bg"},[n("div",{staticClass:"li_key",class:{li_touch:t==e.key_touch&&!e.isLiDisable(t),li_disable:e.isLiDisable(t)},attrs:{num:t},on:{mousedown:function(n){e.keyTouchOver(t)},mouseover:function(n){e.keyTouchOver(t)},touchstart:function(n){e.keyTouchOver(t,n)},touchmove:function(n){e.keyTouchMove(t,n)},mouseup:function(n){e.keyMouseUp(t)},touchend:function(n){e.keyTouchEnd(t,n)}}},[e._v(e._s(e.isILoveYou&&[5,2,0].indexOf(t)>=0?{5:"I",2:"LOVE",0:"U"}[t]:t))])])})),e._v(" "),n("div",{staticClass:"keyboard_btns"},e._l(["delete","return"],function(t){return n("div",{staticClass:"li_bg"},[n("div",{staticClass:"li_btn",class:{li_touch:t==e.key_touch&&!e.isLiDisable(t),li_disable:e.isLiDisable(t)},attrs:{num:t},on:{mousedown:function(n){e.keyTouchOver(t)},mouseover:function(n){e.keyTouchOver(t)},touchstart:function(n){e.keyTouchOver(t,n)},touchmove:function(n){e.keyTouchMove(t,n)},mouseup:function(n){e.keyMouseUp(t)},touchend:function(n){e.keyTouchEnd(t,n)}}},[n("span",[e._v(e._s(t))])])])}))])])])},staticRenderFns:[],_scopeId:"data-v-4db33905",name:"keyboardbg",components:{},props:{value:{type:Number,default:0},maxlength:{type:[String,Number],default:11,validator:function(e){return e>=1&&e<=11}},max:{type:[String,Number],default:99999999999,validator:function(e){return e>=-99999999999&&e<=99999999999}},min:{type:[String,Number],default:-99999999999,validator:function(e){return e>=-99999999999&&e<=99999999999}},decimals:{type:[String,Number],default:2,validator:function(e){return e>=0&&e<=9}},visible:{type:[Boolean],default:!1}},data:function(){return{numbers:[],number_touch:-1,cursor_index:-1,key_touch:null}},computed:{bodyWidth:function(){return Math.min(document.body.offsetWidth,750)},currentValue:function(){return this.numbers.length>0?parseFloat(this.numbers.join("")):null},isILoveYou:function(){return"5201314"==this.currentValue}},methods:{isDataValid:function(e){if(!1===e)return!1;if(0==e.length)return!0;if(1==e.length&&"-"==e[0])return!0;var t=parseFloat(e.join(""));if(isNaN(t))return!1;if(e.length>this.maxlength)return!1;var n=e.indexOf(".");return!(n>=0&&e.length-(n+1)>this.decimals)&&(t>=this.min&&t<=this.max)},updateNumbers:function(e){this.isDataValid(e)&&(this.numbers=e,e.length+this.cursor_index<0&&(this.cursor_index=0-Math.max(e.length)-1))},updateValue:function(e){var t=(e+"").split("");this.updateNumbers(t)},append:function(e){if("return"==e)return this.submit();if("delete"==e&&this.numbers.length>0)return this.delete();var t=this.numbers.length+this.cursor_index+1;this.updateNumbers(this.numsOfSplice(t,0,e))},delete:function(){var e=this.numbers.length+this.cursor_index;e<0&&(e=0),this.updateNumbers(this.numsOfSplice(e,1))},replace:function(e,t){this.updateNumbers(this.numsOfSplice(e,1,t)),this.number_touch=null},isLiDisable:function(e){var t;if("return"==e)return this.number_touch>=0;if("delete"==e&&this.numbers.length>0)return!1;if(this.number_touch>=0)t=this.numsOfSplice(this.number_touch,1,e);else{var n=this.numbers.length+this.cursor_index+1;t=this.numsOfSplice(n,0,e)}return!1===t||!this.isDataValid(t)||t.join("")==this.numbers.join("")},numsOfSplice:function(e,t,n){var i=this.numbers.slice();if(void 0!=n)if(n>=0){if(0==e&&0==t&&i.length>0&&"-"==i[0])return!1;i.splice(e,t,n)}else if("."==n){if(i.indexOf(".")>=0||0==this.decimals)return!1;i.splice(e,t,n)}else if("+/-"==n){if(t>0&&0!=e)return!1;0==i.indexOf("-")?i.shift():i.splice(0,t,"-")}else{if("delete"!=n)return!1;i.splice(e,t)}else i.splice(e,t);return i.length>0&&(i.length>=2&&0==i[0]&&"."!=i[1]?i.splice(0,1):i.length>=3&&"-"==i[0]&&0==i[1]&&"."!=i[2]&&i.splice(1,1),i.length>=1&&"."==i[0]?i.splice(0,0,0):i.length>=2&&"-"==i[0]&&"."==i[1]&&i.splice(1,0,0)),i},cursorTouchBefore:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.cursor_index=0-this.numbers.length-1},numberTouch:function(e,t){t&&(t.preventDefault(),t.stopPropagation()),this.number_touch=e,this.cursor_index=0-(this.numbers.length-e)},numberTouchMoveInTouch:function(e,t){if(t&&(t.preventDefault(),t.stopPropagation()),this.number_touch>=0){var n=t.changedTouches[0],i=document.elementFromPoint(n.clientX,n.clientY),o=i.getAttribute("index");if(o>=0&&null!=o)this.numberMouseOverInTouch(o,t);else{var r=i.getAttribute("num");(r||"0"==r)&&this.keyTouchOver(r,t)}}},numberTouchEndInTouch:function(e,t){if(t&&(t.preventDefault(),t.stopPropagation()),this.number_touch>=0){var n=t.changedTouches[0],i=document.elementFromPoint(n.clientX,n.clientY),o=i.getAttribute("index");if(o>=0&&null!=o);else{var r=i.getAttribute("num");(r||"0"==r)&&this.keyMouseUp(r,t)}this.numberTouchCancel(t)}},numberMouseOverInTouch:function(e,t){var n=this;t&&(t.preventDefault(),t.stopPropagation()),this.number_touch>=0&&this.number_touch!=e&&setTimeout(function(){if(n.key_touch)return!1;n.numberTouch(e,t)},160)},numberTouchCancel:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.number_touch=-1},keyTouchMove:function(e,t){t&&(t.preventDefault(),t.stopPropagation());var n=t.changedTouches[0],i=document.elementFromPoint(n.clientX,n.clientY).getAttribute("num");(i||"0"==i)&&this.keyTouchOver(i,t)},keyTouchEnd:function(e,t){t&&(t.preventDefault(),t.stopPropagation());var n=t.changedTouches[0],i=document.elementFromPoint(n.clientX,n.clientY).getAttribute("num");(i||"0"==i)&&this.keyMouseUp(i,t)},keyTouchOver:function(e,t){t&&(t.preventDefault(),t.stopPropagation()),this.key_touch=e},keyMouseUp:function(e,t){t&&(t.preventDefault(),t.stopPropagation()),this.number_touch>=0?this.replace(this.number_touch,e):this.append(e),this.key_touch=null},submit:function(){isNaN(this.currentValue)||this.$emit("input",this.currentValue),this.hide()},clear:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.updateNumbers([])},hide:function(){this.$emit("update:visible",!1)}},watch:{visible:function(e){},value:function(e){this.updateValue(e)}},mounted:function(){document.body.appendChild(this.$el),document.body.classList.add("body-prevent-class"),this.$emit("open"),this.updateValue(this.value)},destroyed:function(){document.body.classList.contains("body-prevent-class")&&document.body.classList.remove("body-prevent-class"),this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.$emit("closed")}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" .input_keyboard[data-v-23da8e28]{ display: inline-block; min-width: 100px; padding: 0 10px; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var n={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"input_keyboard",on:{click:function(t){e.visible=!0}}},[e._v(e._s(null!==e.value?e.value:e.placeholder)),e.visible?n("keyboardbg",e._g(e._b({directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],attrs:{value:e.value,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},"keyboardbg",e.$attrs,!1),e.$listeners)):e._e()],1)},staticRenderFns:[],_scopeId:"data-v-23da8e28",name:"inputkeyboard",inheritAttrs:!1,components:{keyboardbg:t},props:{value:{type:Number,default:0},placeholder:{type:String,default:"　"}},data:function(){return{visible:!1}}};function i(e){i.installed||(i.installed=!0,e.component(n.name,n))}var o={install:i},r=null;"undefined"!=typeof window?r=window.Vue:"undefined"!=typeof global&&(r=global.Vue),r&&r.use(o),e.install=i,e.default=n,Object.defineProperty(e,"__esModule",{value:!0})});
