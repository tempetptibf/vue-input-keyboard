!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),i=' .keyboard_bg[data-v-4db33905] *{ -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box } .keyboard_bg[data-v-4db33905]{ position: fixed; /*top: 0;*/ /*right: 0;*/ bottom:0; left: 0; width: 100vw; height: 100vh; z-index: 9999; user-select: none; -moz-user-select: none; } .keyboard_bg .keyboard_overlay[data-v-4db33905]{ background-color: gray; opacity: 0.9; width:100%; height: 100%; } .keyboard_bg .keyboard_body[data-v-4db33905]{ position: absolute; left:50%; bottom: 0; background-color: white; } .keyboard_bg .keyboard_body .keyboard_header[data-v-4db33905]{ position: relative; height: 84px; background-color: #f0f1f2; } .keyboard_header .keyboard_numbers[data-v-4db33905]{ width: 70%; white-space: nowrap; text-align: right; height: 84px; position: relative; } .keyboard_unvalid .keyboard_numbers[data-v-4db33905]{ color:#fc1520; } .keyboard_header .keyboard_numbers .li_bg[data-v-4db33905]{ display: inline-block; width: 9%; height: 100%; text-align: center; } .keyboard_header .keyboard_numbers .li_number[data-v-4db33905]{ width: 95%; margin-top:7px; line-height: 70px; display: inline-block; border:1px solid #f0f1f2; position: relative; } .keyboard_header .li_cursor_before[data-v-4db33905]:before{ content: " "; width: 2px; height: 100%; background-color: #0081f9; display: block; position: absolute; top: 0; left: 0; } .keyboard_header .li_cursor_after[data-v-4db33905]:after{ content: " "; width: 2px; height: 100%; background-color: #0081f9; display: block; position: absolute; top: 0; right: 0; } .keyboard_unvalid .li_cursor_before[data-v-4db33905]:before,.keyboard_unvalid .li_cursor_after[data-v-4db33905]:after{ background-color:#fc1520; } .li_touch[data-v-4db33905]{ position: relative; top: -3px; } .btn_clear[data-v-4db33905]{ position: absolute; top:0; right: 0; line-height: 80px; width: 25%; text-align: center; color:#0089f8; } .keyboard_frame[data-v-4db33905]{ position: relative; color:#000000; background-color:#d1d5db; } .keyboard_frame .keyboard_keys[data-v-4db33905]{ width:70%; text-align: center; } .keyboard_frame .keyboard_keys .li_bg[data-v-4db33905]{ display: inline-block; width: 33%; height: 84px; text-align:center; } .keyboard_frame .keyboard_keys .li_bg .li_key[data-v-4db33905]{ display: inline-block; background-color: #ffffff; width: 95%; margin-top:7px; line-height: 70px; border-radius: 5px; box-shadow: 0px 1px 2px gray; } .keyboard_frame .keyboard_btns[data-v-4db33905]{ position: absolute; right: 0; top: 0; width: 30%; height: 100%; } .keyboard_frame .keyboard_btns .li_bg[data-v-4db33905]{ width: 100%; height: 50%; padding: 7px; } .keyboard_frame .keyboard_btns .li_bg .li_btn[data-v-4db33905]{ background-color: #acb3bd; width: 100%; height: 100%; border-radius: 5px; box-shadow: 0px 1px 2px gray; position: relative; } .keyboard_frame .keyboard_btns .li_bg .li_btn span[data-v-4db33905]{ position: absolute; right: 10px; bottom: 10px; } .li_disable[data-v-4db33905]{ pointer-events: none; color: #a7a7a7; } .body-prevent-class { overflow: hidden; } .body-prevent-class { touch-action: none; } ';t.type="text/css",t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i)),e.appendChild(t)}}();var messages={delete:{zh:"删除",en:"delete"},return:{zh:"确认",en:"return"},clear:{zh:"清除",en:"clear"}},keyboardbg={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"keyboard_bg",on:{touchstart:function(t){e.preventEvent(t)}}},[i("div",{staticClass:"keyboard_overlay",on:{mouseup:function(t){return t.target!==t.currentTarget?null:e.hide(t)},touchend:function(t){return t.target!==t.currentTarget?null:e.hide(t)}}}),e._v(" "),i("div",{staticClass:"keyboard_body",class:{keyboard_unvalid:!e.isCurrentValueValid},style:{width:e.bodyWidth+"px","margin-left":0-e.bodyWidth/2+"px"},on:{mouseup:function(t){e.numberTouchCancel()}}},[i("div",{staticClass:"keyboard_header"},[i("div",{staticClass:"keyboard_numbers",class:{li_cursor_after:0==e.numbers.length},on:{mouseup:function(t){if(t.target!==t.currentTarget)return null;e.cursorTouchBefore()},touchend:function(t){if(t.target!==t.currentTarget)return null;e.cursorTouchBefore(t)}}},e._l(e.numbers,function(t,n){return i("div",{staticClass:"li_bg",attrs:{index:n},on:{mousedown:function(t){e.numberTouch(n)},touchstart:function(t){e.numberTouch(n,t)},mouseover:function(t){e.numberMouseOverInTouch(n)},touchmove:function(t){e.numberTouchMoveInTouch(n,t)},touchend:function(t){e.numberTouchEndInTouch(n,t)}}},[i("div",{staticClass:"li_number",class:{li_touch:n==e.number_touch,li_cursor_after:n-e.cursor_index==e.numbers.length,li_cursor_before:0==n&&n-e.cursor_index>e.numbers.length},attrs:{index:n}},[e._v(e._s(t))])])})),e._v(" "),i("div",{staticClass:"btn_clear",class:{li_disable:0==e.numbers.length},on:{mouseup:function(t){e.clear()},touchend:function(t){e.clear(t)}}},[e._v(e._s(e.tt("clear")))])]),e._v(" "),i("div",{staticClass:"keyboard_frame",on:{mouseout:function(t){e.key_touch=null}}},[i("div",{staticClass:"keyboard_keys"},e._l([7,8,9,4,5,6,1,2,3,"+/-",0,"."],function(t){return i("div",{staticClass:"li_bg"},[i("div",{staticClass:"li_key",class:{li_touch:t==e.key_touch&&!e.isLiDisable(t),li_disable:e.isLiDisable(t)},attrs:{num:t},on:{mousedown:function(i){e.keyTouchOver(t)},mouseover:function(i){e.keyTouchOver(t)},touchstart:function(i){e.keyTouchOver(t,i)},touchmove:function(i){e.keyTouchMove(t,i)},mouseup:function(i){e.keyMouseUp(t)},touchend:function(i){e.keyTouchEnd(t,i)}}},[e._v(e._s(e.isILoveYou&&[5,2,0].indexOf(t)>=0?{5:"I",2:"LOVE",0:"U"}[t]:t))])])})),e._v(" "),i("div",{staticClass:"keyboard_btns"},e._l(["delete","return"],function(t){return i("div",{staticClass:"li_bg"},[i("div",{staticClass:"li_btn",class:{li_touch:t==e.key_touch&&!e.isLiDisable(t),li_disable:e.isLiDisable(t)},attrs:{num:t},on:{mousedown:function(i){e.keyTouchOver(t)},mouseover:function(i){e.keyTouchOver(t)},touchstart:function(i){e.keyTouchOver(t,i)},touchmove:function(i){e.keyTouchMove(t,i)},mouseup:function(i){e.keyMouseUp(t)},touchend:function(i){e.keyTouchEnd(t,i)}}},[i("span",[e._v(e._s(e.tt(t)))])])])}))])])])},staticRenderFns:[],_scopeId:"data-v-4db33905",name:"keyboardbg",components:{},props:{value:{type:Number,default:0},maxlength:{type:[String,Number],default:11,validator:function(e){return e>=1&&e<=11}},max:{type:[String,Number],default:99999999999,validator:function(e){return e>=-99999999999&&e<=99999999999}},min:{type:[String,Number],default:-99999999999,validator:function(e){return e>=-99999999999&&e<=99999999999}},decimals:{type:[String,Number],default:2,validator:function(e){return e>=0&&e<=9}},visible:{type:[Boolean],default:!1}},data:function(){return{numbers:[],number_touch:-1,cursor_index:-1,key_touch:null}},computed:{bodyWidth:function(){return Math.min(document.body.offsetWidth,750)},maxValue:function(){return Math.max(parseFloat(this.max),parseFloat(this.min))},minValue:function(){return Math.min(parseFloat(this.max),parseFloat(this.min))},maxValueLength:function(){return Math.min((parseInt(this.maxValue)+"").length+(this.maxValue<0&&0==parseInt(this.maxValue)?1:0)+(this.decimals>0?parseInt(this.decimals)+1:0),this.maxlength)},minValueLength:function(){return Math.min((parseInt(this.minValue)+"").length+(this.minValue<0&&0==parseInt(this.minValue)?1:0)+(this.decimals>0?parseInt(this.decimals)+1:0),this.maxlength)},realMaxLength:function(){return Math.max(this.maxValueLength,this.minValueLength)},realMinLength:function(){return 0<=this.maxValue&&0>=this.minValue?1:Math.min((parseInt(this.maxValue)+"").length,(parseInt(this.minValue)+"").length,this.maxlength)},currentValue:function(){return this.numbers.length>0?parseFloat(this.numbers.join("")):null},isCurrentValueValid:function(){return null===this.currentValue||this.isValValid(this.currentValue)},isILoveYou:function(){return"5201314"==this.currentValue},isCnLanguage:function(){return!navigator.language||("zh-CN"==navigator.language||"zh"==navigator.language)}},methods:{tt:function(e){return messages[e]?this.isCnLanguage?messages[e].zh:messages[e].en:e},numsToFloat:function(e){if(!1===e)return!1;if(0==e.length)return 0;if(1==e.length&&"-"==e[0])return 0;if(e.length>this.realMaxLength)return!1;var t=e.indexOf(".");if(t>=0&&e.length-(t+1)>this.decimals)return!1;var i=parseFloat(e.join(""));return!isNaN(i)&&i},isValValid:function(e){return!1!==e&&(!((e+"").length<this.realMinLength)&&(e>=this.minValue&&e<=this.maxValue))},isDataValid:function(e){var t=this.numsToFloat(e);return this.isValValid(t)},isDataMaybeValid:function(e){if(0==e.length)return!0;var t=this.numsToFloat(e);if(this.isValValid(t))return!0;if(!1===t)return!1;if(e.length<this.realMaxLength){if(this.maxValue>0&&t>this.maxValue)return!1;if(this.minValue<0&&t<this.minValue)return!1;if(!(t>=0&&t<this.minValue||t<=0&&t>this.maxValue))return!1;if(e.length<this.maxValueLength)if(e.indexOf(".")>=0){var i=e.length-(e.indexOf(".")+1);if(this.decimals>i){var n=this.decimals-i,a=parseFloat(e.concat(Array(n+1).join("9").split("")).join(""));if(!isNaN(a)&&(a>0&&a>=this.minValue&&this.minValue>=0||a<0&&a<=this.maxValue&&this.maxValue<=0))return!0}}else{var r,o;if(!(r=e.join("")+(this.maxValue+"").substr(e.length)).match(/^(-|)0[^\.]/)&&(o=parseFloat(r),!isNaN(o)&&o<=this.maxValue&&o>=this.minValue))return!0;if(!(r=e.join("")+(this.minValue+"").substr(e.length)).match(/^(-|)0[^\.]/)&&(o=parseFloat(r),!isNaN(o)&&o<=this.maxValue&&o>=this.minValue))return!0}}return!1},updateNumbers:function(e,t){void 0===t&&(t=0),(t||this.isDataMaybeValid(e))&&(this.numbers=e,this.numbers.length+this.cursor_index<0&&(this.cursor_index=0-Math.max(this.numbers.length)-1))},updateValue:function(e){if(null!==e&&void 0!==e){var t=(e+"").split("");this.updateNumbers(t,1)}},trigger:function(e){if("return"==e)return this.submit();if("delete"==e&&this.numbers.length>0)return this.delete();if(this.number_touch>=0)this.updateNumbers(this.numsOfSplice(this.number_touch,1,e));else{var t=this.numbers.length+this.cursor_index+1;this.updateNumbers(this.numsOfSplice(t,0,e))}this.number_touch=-1},delete:function(){var e=this.numbers.length+this.cursor_index;e<0&&(e=0),this.updateNumbers(this.numsOfSplice(e,1,"delete"),1)},isLiDisable:function(e){var t;if("return"==e)return this.number_touch>=0||!this.isCurrentValueValid;if("+/-"==e&&this.minValue>=0)return!0;if("delete"==e)return 0==this.numbers.length;if(this.number_touch>=0)t=this.numsOfSplice(this.number_touch,1,e);else{var i=this.numbers.length+this.cursor_index+1;t=this.numsOfSplice(i,0,e)}return!1===t||t.join("")==this.numbers.join("")||!this.isDataMaybeValid(t)},numsOfSplice:function(e,t,i){var n=this.numbers.slice();if(void 0!=i)if(i>=0){if(0==e&&0==t&&n.length>0&&"-"==n[0])return!1;n.splice(e,t,i)}else if("."==i){if(n.indexOf(".")>=0||0==this.decimals)return!1;n.splice(e,t,i)}else if("+/-"==i){if(t>0&&0!=e)return!1;0==n.indexOf("-")?n.shift():n.splice(0,t,"-")}else{if("delete"!=i)return!1;n.splice(e,t)}else n.splice(e,t);if(n.length>0){if("delete"==i){for(;n.length>=1&&"."==n[0];)n.splice(0,1);for(;n.length>=2&&"-"==n[0]&&"."==n[1];)n.splice(1,1)}else{for(;n.length>=1&&"."==n[0];)n.splice(0,0,0);for(;n.length>=2&&"-"==n[0]&&"."==n[1];)n.splice(1,0,0)}for(;n.length>=2&&0==n[0]&&"."!=n[1];)n.splice(0,1);for(;n.length>=3&&"-"==n[0]&&0==n[1]&&"."!=n[2];)n.splice(1,1)}return n},preventEvent:function(e){e&&(e.preventDefault(),e.stopPropagation())},cursorTouchBefore:function(e){this.preventEvent(e),this.cursor_index=0-this.numbers.length-1},numberTouch:function(e,t){this.preventEvent(t),this.number_touch=e,this.cursor_index=0-(this.numbers.length-e)},numberTouchMoveInTouch:function(e,t){if(this.preventEvent(t),this.number_touch>=0){var i=t.changedTouches[0],n=document.elementFromPoint(i.clientX,i.clientY),a=n.getAttribute("index");if(a>=0&&null!=a)this.numberMouseOverInTouch(a,t);else{var r=n.getAttribute("num");(r||"0"==r)&&this.keyTouchOver(r,t)}}},numberTouchEndInTouch:function(e,t){if(this.preventEvent(t),this.number_touch>=0){var i=t.changedTouches[0],n=document.elementFromPoint(i.clientX,i.clientY),a=n.getAttribute("index");if(a>=0&&null!=a);else{var r=n.getAttribute("num");(r||"0"==r)&&this.keyMouseUp(r,t)}this.numberTouchCancel(t)}},numberMouseOverInTouch:function(e,t){var i=this;this.preventEvent(t),this.number_touch>=0&&this.number_touch!=e&&setTimeout(function(){if(i.key_touch)return!1;i.numberTouch(e,t)},160)},numberTouchCancel:function(e){this.preventEvent(e),this.number_touch=-1},keyTouchMove:function(e,t){this.preventEvent(t);var i=t.changedTouches[0],n=document.elementFromPoint(i.clientX,i.clientY).getAttribute("num");(n||"0"==n)&&this.keyTouchOver(n,t)},keyTouchEnd:function(e,t){this.preventEvent(t);var i=t.changedTouches[0],n=document.elementFromPoint(i.clientX,i.clientY).getAttribute("num");(n||"0"==n)&&this.keyMouseUp(n,t)},keyTouchOver:function(e,t){this.preventEvent(t),this.key_touch=e},keyMouseUp:function(e,t){this.preventEvent(t),this.trigger(e),this.key_touch=null},submit:function(){this.isCurrentValueValid&&(this.$emit("input",this.currentValue),this.hide())},clear:function(e){this.preventEvent(e),this.updateNumbers([])},hide:function(){this.$emit("update:visible",!1)}},watch:{visible:function(e){},value:function(e){this.updateValue(e)}},mounted:function(){if(this.maxValue<this.minValue)return alert("vue-input-keyboard: error! the prop of min or max is wrong! "),!1;document.body.appendChild(this.$el),document.body.classList.add("body-prevent-class"),this.$emit("open"),this.updateValue(this.value)},destroyed:function(){document.body.classList.contains("body-prevent-class")&&document.body.classList.remove("body-prevent-class"),this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.$emit("closed")}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),i=" .input_keyboard[data-v-23da8e28]{ display: inline-block; min-width: 100px; padding: 0 10px; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i)),e.appendChild(t)}}();var inputkeyboard={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"input_keyboard",class:{input_disabled:e.isDisabled,input_readonly:e.isReadonly},on:{click:e.showKeyboard}},[e._v(e._s(null!==e.value?e.value:""!=e.placeholder?e.placeholder:"...")),e.visible?i("keyboardbg",e._g(e._b({directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],attrs:{value:e.value,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},"keyboardbg",e.$attrs,!1),e.$listeners)):e._e()],1)},staticRenderFns:[],_scopeId:"data-v-23da8e28",name:"inputkeyboard",inheritAttrs:!1,components:{keyboardbg:keyboardbg},props:{value:{type:Number,default:0},placeholder:{type:String,default:""},disabled:{type:[String,Boolean,Number],default:!1},readonly:{type:[String,Boolean,Number],default:!1}},data:function(){return{visible:!1}},computed:{isDisabled:function(){return!(!this.disabled||"false"===this.disabled||"0"===this.disabled)},isReadonly:function(){return!(!this.readonly||"false"===this.readonly||"0"===this.readonly)}},methods:{showKeyboard:function(){if(this.isDisabled||this.isReadonly)return!1;this.visible=!0}}};function install(e){install.installed||(install.installed=!0,e.component(inputkeyboard.name,inputkeyboard))}var plugin={install:install},GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin);export default inputkeyboard;export{install};
