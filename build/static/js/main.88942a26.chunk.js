(this["webpackJsonprebels-market"]=this["webpackJsonprebels-market"]||[]).push([[0],Array(21).concat([function(e,t,a){e.exports=a(54)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/misfits-market-w-header-logo.63118c28.svg"},function(e,t,a){e.exports=a.p+"static/media/arrows_down.26d5000f.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./apples.jpg":32,"./bread.jpg":33,"./eggs.jpg":34,"./milk.jpg":35,"./vegetables-1.jpg":36,"./vegetables-2.jpg":37,"./vegetables-3.jpg":38};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=31},function(e,t,a){e.exports=a.p+"static/media/apples.44cf5fd3.jpg"},function(e,t,a){e.exports=a.p+"static/media/bread.50e1186a.jpg"},function(e,t,a){e.exports=a.p+"static/media/eggs.a62fc03a.jpg"},function(e,t,a){e.exports=a.p+"static/media/milk.c71e5005.jpg"},function(e,t,a){e.exports=a.p+"static/media/vegetables-1.81bf1dc0.jpg"},function(e,t,a){e.exports=a.p+"static/media/vegetables-2.2fcf1f4f.jpg"},function(e,t,a){e.exports=a.p+"static/media/vegetables-3.c033b15b.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/shopping-cart.8948d130.svg"},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),i=(a(26),function(){return r.a.createElement("header",{className:"hero"},r.a.createElement("div",{className:"hero__logo-container"},r.a.createElement("img",{className:"logo",src:a(27),alt:"Misfits Market logo"})),r.a.createElement("div",{className:"hero__arrow-container"},r.a.createElement("a",{href:"#section-shopping"},r.a.createElement("img",{src:a(28),alt:"Down arrow"}))))}),o=a(12),l=a(13),u=a(14),d=a(19),m=a(15),p=a(20),f=(a(29),function(e){var t=e.productId,a=e.handleAddToCart,n=e.isDisabled;return r.a.createElement("div",null,r.a.createElement("button",{disabled:n,onClick:function(e){return a(e,t)},className:"btn-text"},n?"Added!":"Add to Cart"))}),h=(a(30),function(e){var t=e.id,n=e.product,c=e.price,s=e.handleCartUpdate,i=e.cartCheck;return r.a.createElement("div",{id:t,className:"item-card"},r.a.createElement("div",{className:"mg-container"},r.a.createElement("img",{className:"img-container__img",src:a(31)("./".concat(n.toLowerCase(),".jpg")),alt:n})),r.a.createElement("div",{className:"item-card-container"},r.a.createElement("div",{className:"text-center margin-bottom-s"},r.a.createElement("h3",{className:"heading-tertiary"},n)),r.a.createElement("div",{className:"text-center margin-bottom-s"},r.a.createElement("div",{className:"item-card__price"},r.a.createElement("span",null,"Price:")," $",c)),r.a.createElement("div",{className:"text-center"},r.a.createElement(f,{isDisabled:i,productId:t,handleAddToCart:s}))))}),v=(a(39),function(e){var t=e.handlePurchase;return r.a.createElement("button",{onClick:t,className:"btn-order-now"},"Order Now!")}),g=(a(40),function(e){var t=e.cartCount,n=e.orderSuccess,c=e.handlePurchase;return r.a.createElement("div",{className:"cart margin-bottom-m"},r.a.createElement("div",{className:"cart--order-success"},n?"Order Placed!":null),r.a.createElement("div",{className:"cart--sub-ready"},t>=1?r.a.createElement(v,{handlePurchase:c}):null),r.a.createElement("img",{className:"cart--icon",src:a(41),alt:"Cart icon"}),r.a.createElement("div",{className:"cart--copy"},t))}),E=(a(42),function(){return r.a.createElement("div",{className:"loader-container margin-top-s"},r.a.createElement("div",{className:"loader",role:"status"}))}),b=function(e){return function(t){return t({type:"UPDATE_CART",payload:e})}},j=a(4),N=a.n(j),w=a(8),k=function(){var e=Object(w.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://applicant-dev.misfitsmarket.com/api/test/v1",e.next=3,fetch("https://applicant-dev.misfitsmarket.com/api/test/v1");case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,200===t.status){e.next=9;break}throw Error(a.message);case 9:return e.abrupt("return",a.data.items);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(w.a)(N.a.mark((function e(t,a){var n,r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://applicant-dev.misfitsmarket.com/api/test/v1/".concat(a),e.next=3,fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Customer-Token":t}});case 3:return r=e.sent,e.next=6,r.json();case 6:if(c=e.sent,200===r.status){e.next=9;break}throw Error(c.message);case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),C=a(6),_=(a(50),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={fetched:!1,loading:!1,orderSuccess:!1},a.handleCartUpdate=function(e,t){var n=a.props.dispatch;return e.preventDefault(),n(b(t))},a.cartCheck=function(e){var t=a.props.cart;if(t.length>=1)return t.find((function(t){if(t===e)return!0}))},a.handlePurchase=function(){var e=a.props,t=e.user,n=e.cart,r=e.dispatch;n.length>=1&&n.map((function(e){return O(t.token,e).then((function(e){"Success"===e.msg&&(r((function(e){return e({type:"CLEAR_CART"})})),a.setState({orderSuccess:!0}))}))}))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dispatch;return this.setState({loading:!0}),k().then((function(a){return e.setState({loading:!0,fetched:!0}),t((n=a,function(e){return e({type:"FETCH_SHOP_ITEMS",payload:n})}));var n}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.fetched,c=t.orderSuccess,s=this.props,i=s.items,l=(s.user,s.cart.length);return a&&!n?r.a.createElement(E,null):a&&n&&0===i.length?r.a.createElement("div",null,"Sold out!"):a||n?r.a.createElement("div",{id:"section-shopping",className:"shopping-list"},r.a.createElement("div",{className:"text-center margin-bottom-m"},r.a.createElement("h2",{className:"heading-secondary"},"Pick Your Litter")),r.a.createElement("div",{className:"shopping-list__cart"},r.a.createElement(g,{orderSuccess:c,handlePurchase:this.handlePurchase,cartCount:l})),r.a.createElement("div",{className:"shopping-list__container"},i.map((function(t){var a=t.id,n=Object(o.a)(t,["id"]);return r.a.createElement(h,Object.assign({key:a,id:a},n,{handleCartUpdate:e.handleCartUpdate,cartCheck:e.cartCheck(a)}))})))):r.a.createElement("div",null)}}]),t}(n.Component)),x=Object(C.b)((function(e){return{items:e.shopState.items,cart:e.shopState.cart,user:e.userState.user}}))(_),y=(a(51),function(){return r.a.createElement("section",{className:"section-homepage"},r.a.createElement(i,null),r.a.createElement(x,null))});a(52);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(2),A=a(18),P=a(3),D={items:[],cart:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SHOP_ITEMS":return Object(P.a)({},e,{items:t.payload});case"UPDATE_CART":return Object(P.a)({},e,{cart:[].concat(Object(A.a)(e.cart),[t.payload])});case"CLEAR_CART":return Object(P.a)({},e,{cart:[]});default:return e}},R={user:{id:1,token:721028102}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return Object(P.a)({},e);default:return e}},I=Object(T.c)({shopState:U,userState:M}),L=a(17);a(53);var H=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d;return Object(T.e)(I,e(Object(T.a)(L.a)))}();s.a.render(r.a.createElement(C.a,{store:H},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[21,1,2]]]);
//# sourceMappingURL=main.88942a26.chunk.js.map