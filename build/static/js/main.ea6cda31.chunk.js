(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{12:function(e,a,t){e.exports={top:"sidebar_top__10i6C",page_content:"sidebar_page_content__3jYEm",page_title:"sidebar_page_title__2v2uz",page_title_text:"sidebar_page_title_text__20nj9",page_title_info:"sidebar_page_title_info__hqbaB",back:"sidebar_back__1mnMS",sidebar:"sidebar_sidebar__3RTeE",sidebar_menu:"sidebar_sidebar_menu__d-wM4",sidebar_menu_title:"sidebar_sidebar_menu_title__1sGAE",sidebar_menu_link:"sidebar_sidebar_menu_link__22zPq",sidebar_menu_link_active:"sidebar_sidebar_menu_link_active__2qUcB",sidebar_menu_link_title:"sidebar_sidebar_menu_link_title__24qSR",overlay:"sidebar_overlay__1-IdM",open:"sidebar_open__jYpUE",closer:"sidebar_closer__3ED2M"}},14:function(e,a,t){e.exports={top:"navbar_top__1dw11",page_content:"navbar_page_content__AsQ1P",page_title:"navbar_page_title__9mf9F",page_title_text:"navbar_page_title_text__1i0k-",page_title_info:"navbar_page_title_info__22Xuu",back:"navbar_back__2rult",navbar:"navbar_navbar__30ZsL",navbar_toggler:"navbar_navbar_toggler__1EoQ3",navbar_search:"navbar_navbar_search__2eRbf",navbar_drop:"navbar_navbar_drop__23m35",navbar_drop_toggle:"navbar_navbar_drop_toggle__N23YG",open:"navbar_open__2y8Q5"}},15:function(e,a,t){e.exports={top:"treeselect_top__2FAA5",page_content:"treeselect_page_content__3T2sB",page_title:"treeselect_page_title__2_vpd",page_title_text:"treeselect_page_title_text__j-kTi",page_title_info:"treeselect_page_title_info__5WH6f",back:"treeselect_back__Yx6yV",treeselect:"treeselect_treeselect__rkwzJ",treeselect_menu:"treeselect_treeselect_menu__wH3NR",treeselect_menu_label:"treeselect_treeselect_menu_label__1eAs0",treeselect_placeholder:"treeselect_treeselect_placeholder__tu2So",focused:"treeselect_focused__1Y8DV"}},18:function(e,a,t){e.exports={top:"dashboard_top__1snGq",page_content:"dashboard_page_content__1uAW9",page_title:"dashboard_page_title__2lCd8",page_title_text:"dashboard_page_title_text__3adn8",page_title_info:"dashboard_page_title_info__1RJkR",back:"dashboard_back__2S_O8",dashboard:"dashboard_dashboard__2Y2Sr",sales_report:"dashboard_sales_report__auZ_t",sales_report_item:"dashboard_sales_report_item__3i-j9",sales_report_item_content:"dashboard_sales_report_item_content__1GRu_"}},20:function(e,a,t){e.exports={top:"addCategory_top__3HDi9",page_content:"addCategory_page_content__3EF9Q",page_title:"addCategory_page_title__1Z31C",page_title_text:"addCategory_page_title_text__2jbUp",page_title_info:"addCategory_page_title_info__2cwZA",back:"addCategory_back__1mNHu",addCategory:"addCategory_addCategory__6XFdp",addCategory_submit:"addCategory_addCategory_submit__PsQTE"}},25:function(e,a,t){e.exports={content:"AppLayout_content__3P42V",open:"AppLayout_open__2-wPy"}},26:function(e,a,t){e.exports={top:"category_top__jXllQ",page_content:"category_page_content__2ziQC",page_title:"category_page_title__19EIT",page_title_text:"category_page_title_text__fvhIe",page_title_info:"category_page_title_info__XJD4H",back:"category_back__3Ugnw",addcategory:"category_addcategory__3bMin"}},41:function(e,a,t){e.exports={top:"pagetitle_top__2EEqk",page_content:"pagetitle_page_content__2MH7b",page_title:"pagetitle_page_title__1gmAd",page_title_text:"pagetitle_page_title_text__3N0iT",page_title_info:"pagetitle_page_title_info__1x6kH",back:"pagetitle_back__1AR_c",title:"pagetitle_title__4VNOA"}},42:function(e,a,t){e.exports=t(76)},47:function(e,a,t){},69:function(e,a,t){e.exports=t.p+"static/media/product.cf490500.svg"},70:function(e,a,t){e.exports=t.p+"static/media/order.3c2ea25c.svg"},71:function(e,a,t){e.exports=t.p+"static/media/shipped.76db4949.svg"},72:function(e,a,t){e.exports=t.p+"static/media/waiting.bc85e7df.svg"},76:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(38),i=t.n(r),c=t(11),o=(t(47),t(17)),_=t(9),s=t.n(_),m=t(1),d=t.n(m),u=t(4),p=t.n(u),g=t(39),b=t.n(g),f=function(e){return b.a.post("".concat("http://umdsoft.uz/api/auth/","login"),e)};var v=function(){var e=Object(l.useState)({phone:"",password:""}),a=Object(c.a)(e,2),t=a[0],r=a[1],i=Object(l.useState)({load:!1,error:!1}),_=Object(c.a)(i,2),m=_[0],u=_[1];return Object(l.useEffect)((function(){p.a.init(),p.a.attach("button","waves-effect")}),[]),n.a.createElement("div",{className:d()(s.a.login)},n.a.createElement("h2",{className:d()(s.a.login_title)}," KARVON "),n.a.createElement("div",{className:d()(s.a.login_card,"card")},n.a.createElement("p",{className:d()(s.a.login_card_info)}," Boshqaruv paneliga kirish "),n.a.createElement("form",{className:d()(s.a.form),onSubmit:function(e){e.preventDefault(),u({error:!1,load:!0}),f(t).then((function(e){localStorage.setItem("token",e.data.token),window.location.reload()}),(function(e){u({load:!1,error:!0})}))}},n.a.createElement("div",{className:d()(s.a.form_group,"form-group")},n.a.createElement("label",{htmlFor:"phone"},"Telefon raqami"),n.a.createElement("input",{onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{phone:e.target.value}))},autoComplete:"off",type:"tel",className:d()(s.a.form_input),id:"phone",placeholder:"+998991234567"})),n.a.createElement("div",{className:d()(s.a.form_group,"form-group")},n.a.createElement("label",{htmlFor:"password"},"Parol"),n.a.createElement("input",{onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{password:e.target.value}))},autoComplete:"off",type:"password",className:d()(s.a.form_input),id:"password"})),m.error&&n.a.createElement("div",{className:"alert alert-danger",style:{fontSize:"13px"}},"Telefon raqami yoki parol noto'g'ri kiritildi"),n.a.createElement("button",{type:"submit",className:d()(s.a.submit),disabled:m.load},"Kirish ",m.load&&n.a.createElement("i",{className:"bx bx-loader-alt bx-spin"})," "))))},E=t(18),h=t.n(E),N=t(19),y=t(14),x=t.n(y);var k=function(e){var a=e.onToggle,t=e.id,r=e.isOpen;return Object(l.useEffect)((function(){p.a.init(),p.a.attach(".navigation button","waves-effect")}),[]),n.a.createElement("div",{className:d()(x.a.navbar,"navigation",r&&d()(x.a.open)),id:t},n.a.createElement("button",{onClick:a,className:d()(x.a.navbar_toggler)},n.a.createElement("i",{className:"bx bx-menu-alt-right"})),n.a.createElement("input",{placeholder:"Izlash...",type:"search",className:d()(x.a.navbar_search)}),n.a.createElement("div",Object(N.a)({className:"dropdown"},"className",d()(x.a.navbar_drop)),n.a.createElement("button",{className:d()("dropdown-toggle",x.a.navbar_drop_toggle),"data-toggle":"dropdown"},n.a.createElement("i",{className:"bx bx-user-circle"})),n.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},n.a.createElement("a",{href:"#",className:"dropdown-item"},n.a.createElement("i",{className:"bx bx-fw bx-user-check"})," Profil "),n.a.createElement("a",{href:"#",className:"dropdown-item"},n.a.createElement("i",{className:"bx bx-fw bx-log-out-circle"})," Chiqish "))))},w=t(12),j=t.n(w),C=t(10);var O=function(e){var a=e.id,t=e.isOpen,r=e.overlayClick;return Object(l.useEffect)((function(){p.a.init(),p.a.attach("#closer","waves-effect")}),[]),n.a.createElement("div",null,n.a.createElement("div",{className:d()(j.a.sidebar,t&&d()(j.a.open)),id:a},n.a.createElement("div",{className:d()(j.a.sidebar_menu)},n.a.createElement("button",{onClick:r,className:d()(j.a.closer),id:"closer"}," \xd7 "),n.a.createElement(C.c,{to:"/",className:d()(j.a.sidebar_menu_title)},"Karvon"),[{title:"Statistika",icon:"pie-chart-alt-2",to:"/dashboard"},{title:"Kategoriyalar",icon:"package",to:"/categories"},{title:"Mahsulotlar",icon:"grid-alt",to:"/products"},{title:"Buyurtmalar",icon:"cart",to:"/orders"},{title:"Foydalanuvchilar",icon:"group",to:"/users"},{title:"Sotuvchilar",icon:"user-pin",to:"/sellers"},{title:"Akciyalar",icon:"purchase-tag",to:"/sale"},{title:"Sahifalar",icon:"window-alt",to:"/pages"}].map((function(e,a){return n.a.createElement(C.c,{key:a,to:e.to,className:d()(j.a.sidebar_menu_link),activeClassName:d()(j.a.sidebar_menu_link_active)},n.a.createElement("i",{className:"bx bx-".concat(e.icon)}),n.a.createElement("span",{className:d()(j.a.sidebar_menu_link_title)}," ",e.title," "))})))),t&&n.a.createElement("div",{onClick:r,className:d()(j.a.overlay)}))},S=t(25),q=t.n(S);var A=function(e){var a=e.children,t=Object(l.useState)(!0),r=Object(c.a)(t,2),i=r[0],o=r[1];return Object(l.useEffect)((function(){window.innerWidth<1101&&o(!1)}),[]),n.a.createElement("div",null,n.a.createElement(k,{isOpen:i,onToggle:function(){return o(!i)},id:"navbar"}),n.a.createElement(O,{isOpen:i,overlayClick:function(){return o(!i)},canOverlayVisible:i,id:"sidebar"}),n.a.createElement("div",{className:d()(q.a.content,i&&q.a.open)},a))},T=t(41),K=t.n(T);function F(e){var a=e.title,t=e.subTitle,l=e.component;return n.a.createElement("div",{className:d()(K.a.title)},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("div",null,n.a.createElement("h5",null," ",a," "),n.a.createElement("p",null," ",t," ")),n.a.createElement("div",null,l)))}var H=t(15),z=t.n(H);function I(e){var a=e.data,t=e.onSelect;return Object(l.useEffect)((function(){p.a.init(),p.a.attach(".catLabel",["waves-effect","waves-block"])}),[]),a.map((function(e,a){return n.a.createElement("li",{key:a},n.a.createElement("div",{onClick:function(){return t(e.label,e.value)},className:d()(z.a.treeselect_menu_label,"catLabel")},e.children&&e.children.length>0&&n.a.createElement("i",{className:"bx bx-plus","data-toggle":"collapse","data-target":"#child-".concat(a)}),n.a.createElement("label",{className:d()(z.a.treeselect_menu_label)}," ",e.label," ")),e.children&&e.children.length>0&&n.a.createElement("ul",{className:"collapse",id:"child-".concat(a)},n.a.createElement(I,{onSelect:t,data:e.children})))}))}var Q=function(e){var a=e.data,t=e.onChange,r=e.placeholder,i=e.id,o=Object(l.useState)(!1),_=Object(c.a)(o,2),s=_[0],m=_[1],u=Object(l.useState)(r),p=Object(c.a)(u,2),g=p[0],b=p[1];return n.a.createElement("div",{className:d()(z.a.treeselect),id:i,onFocus:function(){return m(!0)}},n.a.createElement("div",{onClick:function(){return m(!s)},className:d()(z.a.treeselect_placeholder,s&&z.a.focused)}," ",g," ",n.a.createElement("i",{className:"bx bx-chevron-".concat(s?"up":"down")})),s&&n.a.createElement("ul",{className:d()(z.a.treeselect_menu)},n.a.createElement(I,{data:a,onSelect:function(e,a){b(e),t(a)}})))};function R(e){var a=e.data;return n.a.createElement("div",{className:d()(h.a.sales_report)},n.a.createElement("div",{className:"row"},a.map((function(e,a){return n.a.createElement("div",{className:d()(h.a.sales_report_item,"col-12 col-sm-6 col-md-3"),key:a},n.a.createElement("div",{className:d()(h.a.sales_report_item_content)},n.a.createElement("div",{className:"row h-100"},n.a.createElement("div",{className:"col-9 d-flex justify-content-center flex-wrap flex-column"},n.a.createElement("h5",null," ",e.title," "),n.a.createElement("h4",null," ",e.amount," ")),n.a.createElement("div",{className:"col-3 p-0 d-flex align-items-end"},n.a.createElement("img",{src:e.img,alt:e.title})))))}))))}var U=function(){var e=[{title:"Umumiy maxsulotlar soni :",amount:"3700",img:t(69)},{title:"Umumiy buyurtmalar soni :",amount:"1034",img:t(70)},{title:"Yetkazib berilgan :",amount:"902",img:t(71)},{title:"Eltib berish jarayonida :",amount:"132",img:t(72)}];return n.a.createElement("div",{className:d()(h.a.dashboard)},n.a.createElement(F,{title:"Statistika",subTitle:"Karvon statistikalari bo'limi"}),n.a.createElement(R,{data:e}))},B=t(26),M=t.n(B);function P(){return n.a.createElement(C.b,{to:"/categories/add",className:d()(M.a.addcategory,"d-flex align-items-center addCatbtn")},n.a.createElement("i",{className:"bx bx-layer-plus"}),"\xa0 qo'shish ")}var V=function(){return Object(l.useEffect)((function(){p.a.init(),p.a.attach(".addCatbtn","waves-effect")}),[]),n.a.createElement("div",null,n.a.createElement(F,{title:"Kategoriyalar",subTitle:"Karvon kategoriyalari bo'limi",component:n.a.createElement(P,null)}),n.a.createElement("div",{className:d()(M.a.category)}))},Y=t(20),D=t.n(Y);t(73),t(74);var J=function(){return n.a.createElement("div",null,n.a.createElement(F,{title:"Kategoriya qo'shish",subTitle:"Asosiy yoki sub kategoriya qoshish",component:n.a.createElement(C.b,{to:"/categories",className:d()(D.a.back)}," ",n.a.createElement("i",{className:"bx bx-arrow-back"})," Orqaga")}),n.a.createElement("div",{className:d()(D.a.addCategory)},n.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"Sarlavha (ru)"),n.a.createElement("input",{placeholder:"\u0418\u0433\u0440\u0443\u0448\u043a\u0438...",type:"text",className:"form-control"}))),n.a.createElement("div",{className:"col-12 col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"Sarlavha (uz)"),n.a.createElement("input",{placeholder:"O'yinchoqlar...",type:"text",className:"form-control"}))),n.a.createElement("div",{className:"form-group my-3"},n.a.createElement("label",{htmlFor:"category"},"Asosiy kategoriyani tanlash"),n.a.createElement(Q,{id:"category",placeholder:"Kategoriyani tanlash",onChange:function(e){return console.log(e)},data:[{label:"Item 1",value:"item1",children:[{label:"item 1.1",value:"item1.1"},{label:"item 1.2",value:"item1.2"},{label:"item 1.3",value:"item1.3",children:[{label:"item 1.3.1",value:"item1.3.1"},{label:"item 1.3.2",value:"item1.3.2"},{label:"item 1.3.1",value:"item1.3.1"},{label:"item 1.3.2",value:"item1.3.2"},{label:"item 1.3.1",value:"item1.3.1"},{label:"item 1.3.asdfasdfasdfasdfasdf2",value:"item1.3.2"},{label:"item 1.asdfgadfg3.1",value:"item1.3.1"},{label:"item 1.3.2",value:"item1.3.2"}]}]}],placeHolder:"Kategoriyani tanlang"}),n.a.createElement("button",{className:d()(D.a.addCategory_submit,"d-flex align-items-center justify-content-center")},n.a.createElement("i",{className:"bx bx-plus mr-1"})," Qo'shish "))))))},X=(t(75),t(2));var G=function(){var e=Object(l.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1];return Object(l.useEffect)((function(){localStorage.getItem("token")?r(!0):r(!1)}),[]),t?n.a.createElement("div",null,n.a.createElement(A,null,n.a.createElement(X.c,null,n.a.createElement(X.a,{exact:!0,path:"/",component:U}),n.a.createElement(X.a,{exact:!0,path:"/dashboard",component:U}),n.a.createElement(X.a,{exact:!0,path:"/categories",component:V}),n.a.createElement(X.a,{exact:!0,path:"/categories/add",component:J})))):n.a.createElement(v,null)};i.a.render(n.a.createElement(C.a,null,n.a.createElement(G,null)),document.getElementById("root"))},9:function(e,a,t){e.exports={top:"login_top__1asK9",page_content:"login_page_content__3iSl6",page_title:"login_page_title__3qXHV",page_title_text:"login_page_title_text__1fNKi",page_title_info:"login_page_title_info__1X2IU",back:"login_back__33dtb",login:"login_login__3PK5r",login_title:"login_login_title__3gvqH",login_card:"login_login_card__3-mJ_",login_card_icon:"login_login_card_icon__3B-WQ",login_card_info:"login_login_card_info__2cB79",form_group:"login_form_group__Ghv7y",form_input:"login_form_input__2wr8U",submit:"login_submit__1vUM7"}}},[[42,1,2]]]);
//# sourceMappingURL=main.ea6cda31.chunk.js.map