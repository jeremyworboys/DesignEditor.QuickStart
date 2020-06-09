(window.multistep_editor_jsonpFunction=window.multistep_editor_jsonpFunction||[]).push([[24],{860:function(t,e){t.exports='<style>\r\n    .product {\r\n        border-bottom: 1px solid #E0E0E0;\r\n    }\r\n\r\n    .product:last-child {\r\n        border-bottom: 1px solid transparent;\r\n    }\r\n</style>\r\n<div class="item-list">\r\n    <template is="dom-repeat" items="[[itemArray]]" as="product" observe="product" id="test">\r\n        <div class="product">\r\n            <au-item-product image="[[product.thumbnail]]" description="{{product.description}}"\r\n                items="[[product.items]]"></au-item-product>\r\n        </div>\r\n    </template>\r\n</div>'},861:function(t,e){t.exports='<style>\r\n    .item {\r\n        display: flex;\r\n        padding: calc(var(--au-hem)*0.75) 0;\r\n    }\r\n\r\n    .item__image-container {\r\n        width: calc(var(--au-hem)*3.75);\r\n        height: calc(var(--au-hem)*3.75);\r\n        text-align: center;\r\n    }\r\n\r\n    .item__image {\r\n        display: inline-block;\r\n        width: calc(var(--au-hem)*3.75);\r\n        max-height: calc(var(--au-hem)*3.75);\r\n    }\r\n\r\n    .item__info {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        margin-left: calc(var(--au-hem)*1);\r\n        width: calc(100% - var(--au-hem) * 1);\r\n    }\r\n\r\n    .item__description {\r\n        font-family: Roboto;\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        line-height: calc(var(--au-hem)*1.125);\r\n        font-size: calc(var(--au-hem)*0.875);\r\n        letter-spacing: calc(var(--au-hem)*0.015625);\r\n        color: #333333;\r\n    }\r\n\r\n    .item__action {\r\n        position: relative;\r\n        margin: calc(var(--au-hem)*0.5) calc(var(--au-hem)*0.5) calc(var(--au-hem)*0.5) 0;\r\n    }\r\n\r\n    .item__selected-item {\r\n\r\n\r\n        opacity: 0.8;\r\n\r\n        background: #F2F4F6;\r\n        border-radius: calc(var(--au-hem)*0.125);\r\n\r\n        padding: calc(var(--au-hem)*0.125) calc(var(--au-hem)*0.25);\r\n        margin-right: calc(var(--au-hem)*0.5);\r\n        margin-top: calc(var(--au-hem)*0.5);\r\n    }\r\n\r\n    .item__selected-item .item__selected-name {\r\n        font-family: Roboto;\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        line-height: calc(var(--au-hem)*0.875);\r\n        font-size: calc(var(--au-hem)*0.75);\r\n        letter-spacing: calc(var(--au-hem)*0.015625);\r\n\r\n        color: #000000;\r\n\r\n        margin-right: calc(var(--au-hem)*0.25);\r\n    }\r\n\r\n    .item__remove-item {\r\n        border: none;\r\n        background: transparent;\r\n    }\r\n\r\n    .item__selected-group {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    .hidden {\r\n        display: none !important;\r\n    }\r\n\r\n    .item__action-list {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        background: #fff;\r\n        z-index: 1;\r\n        width: 100%;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        padding: calc(var(--au-hem)*0.5);\r\n        box-shadow: 0px calc(var(--au-hem)*0.25) calc(var(--au-hem)*0.75) rgba(0, 0, 0, 0.25);\r\n    }\r\n\r\n    .item__action-list .item__value {\r\n        font-family: Roboto;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: calc(var(--au-hem)*1);\r\n        font-size: calc(var(--au-hem)*0.875);\r\n        letter-spacing: calc(var(--au-hem)*0.015625);\r\n        color: #30C2FF;\r\n\r\n        cursor: pointer;\r\n        padding: calc(var(--au-hem)*0.5);\r\n    }\r\n\r\n    .item__action-list .item__value:hover {\r\n        background-color: #F5F7F9;\r\n        padding: calc(var(--au-hem)*0.5);\r\n    }\r\n\r\n    .item__dropdown {\r\n        background: transparent;\r\n        border: none;\r\n\r\n        font-family: Roboto;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: calc(var(--au-hem)*1);\r\n        font-size: calc(var(--au-hem)*0.875);\r\n        letter-spacing: calc(var(--au-hem)*0.015625);\r\n        color: #30C2FF;\r\n    }\r\n</style>\r\n<div class="item">\r\n    <div class="item__image-container">\r\n        <img class="item__image" src="[[image]]">\r\n    </div>\r\n    <div class="item__info">\r\n        <div class="item__description">[[description]]</div>\r\n        <div class="item__action">\r\n            <button class="item__dropdown" onblur="{{closeDropDown}}" onclick="{{openDropDown}}">+ Additional\r\n                Material</button>\r\n\r\n            <div class="item__action-list hidden">\r\n                <template is="dom-repeat" items="[[items]]" as="option">\r\n                    <div class="item__value" onclick="{{removeItem()}}">\r\n                        <paper-checkbox noink type="value" checked="[[option.value]]"></paper-checkbox>\r\n                        <span class="item__selected-name">[[option.name]]</span>\r\n                    </div>\r\n                </template>\r\n            </div>\r\n        </div>\r\n        <div class="item__selected-group">\r\n            <template is="dom-repeat" items="[[items]]" as="option" filter="isSelected" observe="value">\r\n                <div class="item__value item__selected-item">\r\n                    <span class="item__selected-name">[[option.name]]</span>\r\n                    <button class="item__remove-item" onclick="{{removeItem()}}">\r\n                        x\r\n                    </button>\r\n                </div>\r\n            </template>\r\n        </div>\r\n    </div>\r\n</div>'},930:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(860),i=n(117),o=n(1),c=n(861),l=n(12),s=n(6),m=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}r.d(e,t),e.prototype.isSelected=function(t){return!0===t.value},e.prototype.openDropDown=function(t){s.a.isSafari()&&t.currentTarget.focus(),t.currentTarget.parentElement.querySelector(".item__action-list").classList.toggle("hidden")},e.prototype.closeDropDown=function(t){var e=t.currentTarget.parentElement.querySelector(".item__action-list");setTimeout(function(){e.classList.toggle("hidden")},150)},e.prototype.changeSelection=function(t){var e=this.items.find(function(e){return e.name===t});this.items=this.items.slice();var n=this.items.indexOf(e);this.set("items."+n+".value",!e.value)},e.prototype.removeItem=function(t){var e=this;return function(t){var n=t.target.parentElement.classList.contains("item__value")?t.target.parentElement.querySelector(".item__selected-name"):t.target.querySelector(".item__selected-name");e.changeSelection(n.textContent)}},r.c([Object(o.c)({notify:!0}),r.g("design:type",Array)],e.prototype,"items",void 0),r.c([Object(o.c)({notify:!0}),r.g("design:type",String)],e.prototype,"image",void 0),r.c([Object(o.c)({notify:!0}),r.g("design:type",String)],e.prototype,"description",void 0),e=r.c([Object(o.a)("au-item-product",c)],e)}(l.a),n(256));n.d(e,"AuWidgetItemList",function(){return d}),n.d(e,"widget",function(){return d});var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.d(e,t),e.prototype.updateParams=function(t){this.type=t.type?t.type:"product",this.defaultValue=t.defaultValue;var e=[];t.data&&this.defaultValue&&Object.keys(t.data).forEach(function(e){return Object.keys(t.defaultValue).forEach(function(n){t.data[e][n]=t.data[e][n]?t.data[e][n]:t.defaultValue[n]})}),this.data=t.data,t.data&&Object.keys(t.data).forEach(function(n){return e.push(t.data[n])}),this.itemArray=e},e.prototype.addItem=function(t,e){var n,r=this,a=[],i=((n={})[t]=e,n),o=Object(m.a)(this.data,i);this.defaultValue&&Object.keys(o).forEach(function(t){return Object.keys(r.defaultValue).forEach(function(e){o[t][e]=o[t][e]?o[t][e]:r.defaultValue[e]})}),this.data=o,o&&Object.keys(o).forEach(function(t){return a.push(o[t])}),this.itemArray=a},e.prototype.clearData=function(){this.data={},this.itemArray=[]},r.c([Object(o.c)(),r.g("design:type",Object)],e.prototype,"params",void 0),r.c([Object(o.c)(),r.g("design:type",String)],e.prototype,"type",void 0),r.c([Object(o.c)(),r.g("design:type",Object)],e.prototype,"data",void 0),r.c([Object(o.c)(),r.g("design:type",Array)],e.prototype,"itemArray",void 0),e=r.c([Object(o.a)("au-widget-item-list",a)],e)}(i.c)}}]);