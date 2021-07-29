(self.webpackChunkclient=self.webpackChunkclient||[]).push([[973],{3973:(r,t,e)=>{"use strict";e.r(t),e.d(t,{OrdersModule:()=>f});var s=e(1116),o=e(8709),i=e(7368),n=e(529),c=e(2693);let a=(()=>{class r{constructor(r){this.http=r,this.baseUrl=n.N.baseUrl}getOrdersForUser(){return this.http.get(this.baseUrl+"orders")}getOrderDetail(r){return this.http.get(this.baseUrl+"orders/"+r)}}return r.\u0275fac=function(t){return new(t||r)(i.LFG(c.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function d(r,t){if(1&r&&(i.TgZ(0,"tr",6),i.TgZ(1,"th"),i._uU(2),i.qZA(),i.TgZ(3,"td"),i._uU(4),i.ALo(5,"date"),i.qZA(),i.TgZ(6,"td"),i._uU(7),i.ALo(8,"currency"),i.qZA(),i.TgZ(9,"td"),i._uU(10),i.qZA(),i.qZA()),2&r){const r=t.$implicit;i.MGl("routerLink","/orders/",r.id,""),i.xp6(2),i.hij("# ",r.id,""),i.xp6(2),i.Oqu(i.xi3(5,5,r.orderDate,"medium")),i.xp6(3),i.Oqu(i.lcZ(8,8,r.total)),i.xp6(3),i.Oqu(r.status)}}let u=(()=>{class r{constructor(r){this.orderService=r}ngOnInit(){this.getOrders()}getOrders(){this.orderService.getOrdersForUser().subscribe(r=>{this.orders=r},r=>{console.log(r)})}}return r.\u0275fac=function(t){return new(t||r)(i.Y36(a))},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(r,t){1&r&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"table",3),i.TgZ(4,"thead",4),i.TgZ(5,"tr"),i.TgZ(6,"th"),i._uU(7,"Order"),i.qZA(),i.TgZ(8,"th"),i._uU(9,"Date"),i.qZA(),i.TgZ(10,"th"),i._uU(11,"Total"),i.qZA(),i.TgZ(12,"th"),i._uU(13,"Status"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(14,"tbody"),i.YNc(15,d,11,10,"tr",5),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&r&&(i.xp6(15),i.Q6J("ngForOf",t.orders))},directives:[s.sg,o.rH],pipes:[s.uU,s.H9],styles:[""]}),r})();var l=e(1630),p=e(5683),Z=e(5895);let h=(()=>{class r{constructor(r,t,e){this.orderService=r,this.breadcrumbService=t,this.route=e,this.route.data.subscribe(r=>this.order=r.order),this.breadcrumbService.set("@OrderDetail",`# ${this.order.id} - `+this.order.status)}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)(i.Y36(a),i.Y36(l.pm),i.Y36(o.gz))},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-orde-detail"]],decls:6,vars:6,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-8"],[3,"items","isBasket","isOrder"],[1,"col-4"],[3,"shippingPrice","subtotal","total"]],template:function(r,t){1&r&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i._UZ(3,"app-basket-summary",3),i.qZA(),i.TgZ(4,"div",4),i._UZ(5,"app-order-totals",5),i.qZA(),i.qZA(),i.qZA()),2&r&&(i.xp6(3),i.Q6J("items",t.order.orderItems)("isBasket",!1)("isOrder",!0),i.xp6(2),i.Q6J("shippingPrice",t.order.shippingPrice)("subtotal",t.order.subtotal)("total",t.order.total))},directives:[p.b,Z.S],styles:[""]}),r})(),g=(()=>{class r{constructor(r){this.orderService=r}resolve(r){return this.orderService.getOrderDetail(+r.paramMap.get("id"))}}return r.\u0275fac=function(t){return new(t||r)(i.LFG(a))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const v=[{path:"",component:u},{path:":id",component:h,data:{breadcrumb:{alias:"OrderDetail"}},resolve:{order:g}}];let m=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({providers:[g],imports:[[o.Bz.forChild(v),s.ez],o.Bz]}),r})();var b=e(5425);let f=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({imports:[[s.ez,m,b.m]]}),r})()}}]);