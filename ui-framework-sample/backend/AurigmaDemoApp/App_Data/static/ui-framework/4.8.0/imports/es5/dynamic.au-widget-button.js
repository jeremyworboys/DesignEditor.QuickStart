(window.multistep_editor_jsonpFunction=window.multistep_editor_jsonpFunction||[]).push([[8],{725:function(t,n){t.exports='<style>\r\n    :host {\r\n        display: block;\r\n    }\r\n\r\n    #button {\r\n        @apply --au-header-button-geometry;\r\n        @apply --au-button-font;\r\n        margin: 0;\r\n    }\r\n\r\n    #button.primary {\r\n        background-color: var(--theme-primary-color);\r\n        color: var(--theme-interface-color);\r\n    }\r\n\r\n    #button.success {\r\n        background-color: var(--theme-success-color);\r\n        color: var(--theme-interface-color);\r\n    }\r\n\r\n    #button.warning {\r\n        background-color: var(--theme-warning-color);\r\n        color: var(--theme-interface-color);\r\n    }\r\n\r\n    #button.danger {\r\n        background-color: var(--theme-error-color);\r\n        color: var(--theme-interface-color);\r\n    }\r\n\r\n    #button[disabled] {\r\n        background: var(--button-disable-background);\r\n        color: var(--button-disable-color);\r\n    }\r\n</style>\r\n<paper-button id="button" class$="[[classStyle]]" on-tap="_onClick" hidden="[[!visible]]" disabled="[[!enabled]]">\r\n    <span>[[text]]</span>\r\n</paper-button>'},901:function(t,n,r){"use strict";r.r(n),r.d(n,"AuWidgetButton",function(){return l}),r.d(n,"widget",function(){return l});var o=r(0),e=r(725),c=r(1),i=r(117),a=r(6),l=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return o.d(n,t),n.prototype.updateParams=function(t){this.text=t.text,this.classStyle=t.classStyle,this.visible=t.visible,this.enabled=t.enabled,this._onClick=a.a.functionWrapperConstructor(t.onClick)},o.c([Object(c.c)(),o.g("design:type",Object)],n.prototype,"params",void 0),o.c([Object(c.c)(),o.g("design:type",String)],n.prototype,"text",void 0),o.c([Object(c.c)(),o.g("design:type",String)],n.prototype,"classStyle",void 0),o.c([Object(c.c)(),o.g("design:type",Boolean)],n.prototype,"enabled",void 0),o.c([Object(c.c)(),o.g("design:type",Boolean)],n.prototype,"visible",void 0),n=o.c([Object(c.a)("au-widget-button",e)],n)}(i.c)}}]);