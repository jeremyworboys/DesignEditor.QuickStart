(window.multistep_editor_jsonpFunction=window.multistep_editor_jsonpFunction||[]).push([[19],{905:function(t,r,e){"use strict";e.r(r),e.d(r,"AuWidgetOrder",function(){return n}),e.d(r,"widget",function(){return n});var i=e(0),d=e(117),s=e(1),o=e(6);let n=class extends d.a{updateParams(t){this.images=t.images||[],this.downloadUrls=t.downloadUrls||[],this.data=t.data||{},this.props=t.props||{},this.quantity=null===t.quantity||void 0===t.quantity?this.driver.orders.current.quantity||1:t.quantity,this.changeDriver()}changeDriver(){this.driver.orders.current.images=this.images,this.driver.orders.current.downloadUrls=this.downloadUrls,this.driver.orders.current.data=this.data,this.driver.orders.current.props=this.props,o.a.isNotNullOrUndefined(this.quantity)&&(this.driver.orders.current.quantity=this.quantity)}};i.b([Object(s.c)(),i.d("design:type",Object)],n.prototype,"params",void 0),i.b([Object(s.c)(),i.d("design:type",Array)],n.prototype,"images",void 0),i.b([Object(s.c)(),i.d("design:type",Array)],n.prototype,"downloadUrls",void 0),i.b([Object(s.c)(),i.d("design:type",Object)],n.prototype,"data",void 0),i.b([Object(s.c)(),i.d("design:type",Object)],n.prototype,"props",void 0),i.b([Object(s.c)(),i.d("design:type",Number)],n.prototype,"quantity",void 0),n=i.b([Object(s.a)("au-widget-order")],n)}}]);