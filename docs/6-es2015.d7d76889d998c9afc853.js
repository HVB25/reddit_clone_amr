(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RE8E:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var i=t("pMnS"),o=t("SVse"),s=t("mrSG");class a{constructor(l,n){this.router=l,this.service=n,this.displayList=[],this.showLoader=!1,window.scrollTo(0,0)}ngOnInit(){return s.a(this,void 0,void 0,(function*(){this.changeListing("top")}))}changeListing(l){return s.a(this,void 0,void 0,(function*(){switch(l){case"top":document.querySelector(".top").classList.add("selected"),document.querySelector(".hot").classList.remove("selected"),document.querySelector(".new").classList.remove("selected"),this.heading="Showing the top posts of all time",this.showLoader=!0,this.displayList=yield this.getListing("all/top"),console.log(JSON.stringify(this.displayList)),this.showLoader=!1;break;case"hot":document.querySelector(".top").classList.remove("selected"),document.querySelector(".hot").classList.add("selected"),document.querySelector(".new").classList.remove("selected"),this.heading="Showing the hottest posts of all time",this.showLoader=!0,this.displayList=yield this.getListing("all/hot"),this.showLoader=!1;break;case"new":document.querySelector(".top").classList.remove("selected"),document.querySelector(".hot").classList.remove("selected"),document.querySelector(".new").classList.add("selected"),this.heading="Showing the newest posts of all time",this.showLoader=!0,this.displayList=yield this.getListing("all/new"),this.showLoader=!1}}))}getListing(l){return fetch("https://www.reddit.com/r/"+l+".json").then((function(l){return l.json()})).then((function(l){return l.data.children})).catch((function(l){console.log(l)}))}goToPost(l){"link"!=l.post_hint?this.router.navigate(["/post/",l.permalink]):this.gotoLink(l.url_overridden_by_dest)}truncateString(l){return l.length>100?l.substr(0,99)+"...":l}gotoLink(l){window.open(l,"_blank")}}var c=t("iInd"),r=t("ONoS"),d=e.nb({encapsulation:0,styles:[[".ani-disappear[_ngcontent-%COMP%]{transition:.3s;-webkit-animation:.5s ease-in infinite blink;animation:.5s ease-in infinite blink}@-webkit-keyframes blink{0%,100%{opacity:0}50%{opacity:1}}@keyframes blink{0%,100%{opacity:0}50%{opacity:1}}.listing-body[_ngcontent-%COMP%]{width:80%;margin:80px auto}.listing-body-tags[_ngcontent-%COMP%]{text-align:center}.post-body[_ngcontent-%COMP%]{text-align:center;margin-bottom:25px}.post-body[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:90%;margin:0 auto;border:1px solid gray;border-radius:5px;height:450px}.desc[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;word-wrap:break-word}img[_ngcontent-%COMP%]{width:100%;height:300px!important}.btn-tags[_ngcontent-%COMP%]{background:0 0;border:none;outline:0;text-align:left}.btn-tags[_ngcontent-%COMP%]:hover, .selected[_ngcontent-%COMP%]{background:#000;color:#fff}.card[_ngcontent-%COMP%]{cursor:pointer;transition:.3s}.card[_ngcontent-%COMP%]:hover{transform:scale(1.03)}@media screen and (max-width:1450px){.listing-body[_ngcontent-%COMP%]{width:90%;margin:80px auto}}@media screen and (max-width:400px){.listing-body[_ngcontent-%COMP%]{width:95%;margin:80px auto}}"]],data:{}});function b(l){return e.Db(0,[(l()(),e.pb(0,0,null,null,0,"img",[["alt","..."],["class","card-img-top"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.data.thumbnail)}))}function p(l){return e.Db(0,[(l()(),e.pb(0,0,null,null,2,"div",[["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),e.Cb(2,null,["",""]))],null,(function(l,n){l(n,1,0,e.tb(1,"",n.parent.context.$implicit.data.url_overridden_by_dest,"")),l(n,2,0,n.parent.context.$implicit.data.url_overridden_by_dest)}))}function g(l){return e.Db(0,[(l()(),e.pb(0,0,null,null,8,"div",[["class","post-body col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,7,"div",[["class","card"],["style","width: 90%;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.goToPost(l.context.$implicit.data)&&e),e}),null,null)),(l()(),e.eb(16777216,null,null,1,null,b)),e.ob(3,16384,null,0,o.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,p)),e.ob(5,16384,null,0,o.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(6,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.pb(7,0,null,null,1,"h5",[["class","card-title desc"]],null,null,null,null,null)),(l()(),e.Cb(8,null,["",""]))],(function(l,n){l(n,3,0,"default"!=n.context.$implicit.data.thumbnail),l(n,5,0,"default"==n.context.$implicit.data.thumbnail)}),(function(l,n){l(n,8,0,n.component.truncateString(n.context.$implicit.data.title))}))}function h(l){return e.Db(0,[(l()(),e.pb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["Looks like there were some issues while fetching data..."])),(l()(),e.pb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["Please try again in some time."]))],null,null)}function m(l){return e.Db(0,[(l()(),e.pb(0,0,null,null,6,"div",[["class","listing-body-posts row my-4"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"h3",[["class","text-center mb-4"]],null,null,null,null,null)),(l()(),e.Cb(2,null,["",""])),(l()(),e.eb(16777216,null,null,1,null,g)),e.ob(4,278528,null,0,o.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.eb(16777216,null,null,1,null,h)),e.ob(6,16384,null,0,o.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,4,0,t.displayList),l(n,6,0,0==t.displayList.length||null==t.displayList||null==t.displayList||t.displayList==e.Y)}),(function(l,n){l(n,2,0,n.component.heading)}))}function f(l){return e.Db(0,[(l()(),e.pb(0,0,null,null,4,"div",[["style","text-align: center;margin-top: 10%;"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,3,"h3",[],null,null,null,null,null)),(l()(),e.Cb(-1,null,["Loading.."])),(l()(),e.pb(3,0,null,null,1,"span",[["class","ani-disappear"]],null,null,null,null,null)),(l()(),e.Cb(-1,null,["."]))],null,null)}function y(l){return e.Db(0,[(l()(),e.pb(0,0,null,null,11,"div",[["class","listing-body"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,6,"div",[["class","listing-body-tags my-2"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,1,"button",[["class","btn-tags mx-1 ml-0 top"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.changeListing("top")&&e),e}),null,null)),(l()(),e.Cb(-1,null,["TOP"])),(l()(),e.pb(4,0,null,null,1,"button",[["class","btn-tags mx-1 ml-0 hot"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.changeListing("hot")&&e),e}),null,null)),(l()(),e.Cb(-1,null,["HOT"])),(l()(),e.pb(6,0,null,null,1,"button",[["class","btn-tags mx-1 ml-0 new"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.changeListing("new")&&e),e}),null,null)),(l()(),e.Cb(-1,null,["NEW"])),(l()(),e.eb(16777216,null,null,1,null,m)),e.ob(9,16384,null,0,o.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,f)),e.ob(11,16384,null,0,o.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,9,0,!t.showLoader),l(n,11,0,t.showLoader)}),null)}function w(l){return e.Db(0,[(l()(),e.pb(0,0,null,null,1,"app-main-listing",[],null,null,null,y,d)),e.ob(1,114688,null,0,a,[c.k,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var L=e.lb("app-main-listing",a,w,{},{},[]);class v{}t.d(n,"MainListingModuleModuleNgFactory",(function(){return k}));var k=e.mb(u,[],(function(l){return e.yb([e.zb(512,e.j,e.W,[[8,[i.a,L]],[3,e.j],e.v]),e.zb(4608,o.k,o.j,[e.s,[2,o.q]]),e.zb(1073742336,o.b,o.b,[]),e.zb(1073742336,c.m,c.m,[[2,c.r],[2,c.k]]),e.zb(1073742336,v,v,[]),e.zb(1073742336,u,u,[]),e.zb(1024,c.i,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);