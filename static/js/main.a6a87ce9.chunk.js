(this.webpackJsonpmms=this.webpackJsonpmms||[]).push([[0],{38:function(e,t,a){e.exports=a(65)},65:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(16),r=a.n(l),s=a(10),c=a(33),o=a.n(c),d=a(9),m=a(37);var u=function(e){var t=Object(d.b)(),a=Object(n.useState)([]),l=Object(m.a)(a,2),r=l[0],s=l[1],c=Object(d.c)((function(e){return e}));return Object(n.useEffect)((function(){if(0!=Object.keys(e.movies).length&&"movie"===e.mode){var t=e.movies.filter((function(e){return c.list.find((function(t){return t.imdbID===e.imdbID}))})),a=e.movies.filter((function(e){return c.watched.find((function(t){return t.imdbID===e.imdbID}))})),n=[];t.map((function(e){n[e.imdbID]="fa fa-list"})),a.map((function(e){n[e.imdbID]="fa fa-clock-o"})),s(n)}}),[]),"True"===e.response?i.a.createElement("table",{border:"1"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Add"),i.a.createElement("th",null,"Poster"),i.a.createElement("th",null,"Title "),i.a.createElement("th",null,"Year"))),i.a.createElement("tbody",null,e.movies.map((function(a,n){return i.a.createElement("tr",{key:a.imdbID+c.list_mode},i.a.createElement("td",{className:"align_middle"},r[a.imdbID]?i.a.createElement("div",{className:"badge"},i.a.createElement("i",{className:r[a.imdbID]})):i.a.createElement("input",{type:"checkbox",value:a.imdbID,"data-index":n,id:a.imdbID,onChange:function(a){return function(a,n,i){if(n)t({type:"ADD_IDS",ids_details:e.movies[i]});else{c.ids_details.map((function(e,t){e.imdbID===a&&(c.ids_details[t]=null)}));var l=c.ids_details.filter((function(e){return null!=e}));t({type:"REMOVE_IDS",ids_details:l})}}(a.target.value,a.target.checked,a.target.dataset.index)}})),i.a.createElement("td",{className:"align_middle"},"N/A"===a.Poster?"No Image in Api":i.a.createElement("img",{width:"100",src:a.Poster,alt:"Poster"})),i.a.createElement("td",null,a.Title),i.a.createElement("td",null,a.Year))})))):i.a.createElement("div",{className:"align_middle"},c.error)},E=a(15),b=function(e,t,a,n){a({type:n,list:_(e,t)})},_=function(e,t){return e.filter((function(e){return!t.find((function(t){return t.imdbID===e.imdbID}))}))},f=function(e,t){var a=[];if(0!==e.length)for(var n,i=[].concat(Object(E.a)(e),Object(E.a)(t)),l={},r=0;n=i[r++];){var s=n.imdbID;s in l||(l[s]=1,a.push(n))}else a=t;return a},v=function(e,t,a,n){a({type:n,list:f(e,t)})},p=function(e,t,a,n,i){n({type:i,watchedList:f(e,t),myList:_(a,t)})};var h=function(){var e=Object(d.c)((function(e){return e})),t=Object(d.b)();return Object(n.useEffect)((function(){o.a.get("https://www.omdbapi.com/?apikey=32395055&type=movie&s=bad&y="+e.year_filter).then((function(e){t({type:"FETCH_SUCCESS",movieDetails:e.data.Search,response:e.data.Response,error:void 0!==e.data.Error?e.data.Error:""})})).catch((function(e){t({type:"FETCH_ERROR",error:"Something Went wrong",response:"False"})}))}),[e.year_filter]),i.a.createElement("div",{className:"screen"},"True"===e.response?i.a.createElement("div",{className:"select_container align_middle"},i.a.createElement("select",{value:e.year_filter,onChange:function(e){return a=e.target.value,void t({type:"YEAR_FILTER",year_filter:a});var a}},i.a.createElement("option",{value:""},"Clear Filter"),function(){for(var e=[],t=2e3;t<2021;t++)e.push(i.a.createElement("option",{key:t,value:t},"Filter On The Basis of ",t," Year"));return e}()),""!==e.year_filter?i.a.createElement("div",{className:"filter"},"Data on the basis of ",e.year_filter):""):null,i.a.createElement("div",{className:"movie_details"},i.a.createElement(u,{movies:e.movies,response:e.response,mode:"movie"})),"True"===e.response?i.a.createElement("div",{className:"align_middle"},i.a.createElement(s.b,{to:"./list"},i.a.createElement("button",{className:"btn-primary",disabled:0===e.ids_details.length,onClick:function(){return v(e.list,e.ids_details,t,"ADD_LIST")}},"Add To My list")),i.a.createElement(s.b,{to:"./list"},i.a.createElement("button",{className:"btn-primary",disabled:0===e.ids_details.length,onClick:function(){return v(e.watched,e.ids_details,t,"ADD_WATCHED")}},"Add To Watched List "))):null)};var y=function(){var e=Object(d.c)((function(e){return e})),t=Object(d.b)(),a=e.list_mode?e.list:e.watched;return i.a.createElement("div",{className:"screen"},i.a.createElement("div",{className:"toggle_btn",title:e.list_mode?"Toggle in My Watched List":"Toggle in My List"},i.a.createElement("div",{className:"toggle_label"},e.list_mode?"Toggle in My Watched List":"Toggle in My List"),i.a.createElement("label",{className:"switch"},i.a.createElement("input",{type:"checkbox",onChange:function(e){return a=e.target.checked,void t({type:"LIST_MODE",mode:a});var a},checked:e.list_mode}),i.a.createElement("span",{className:"slider round"}))),i.a.createElement("h1",{className:"align_middle"},"My ",e.list_mode?"":"Watched ","List"),0!==a.length?i.a.createElement("div",null,i.a.createElement(u,{movies:a,response:e.response,mode:"list"}),i.a.createElement("div",{className:"align_middle"},e.list_mode?i.a.createElement("div",null,i.a.createElement(s.b,{to:"./list"},i.a.createElement("button",{className:"btn-primary",disabled:0===e.ids_details.length,onClick:function(){return b(e.list,e.ids_details,t,"REMOVE_LIST")}},"Remove From My list")),i.a.createElement(s.b,{to:"./list"},i.a.createElement("button",{className:"btn-primary",disabled:0===e.ids_details.length,onClick:function(){return p(e.watched,e.ids_details,e.list,t,"ADD_FROM_LIST")}},"Add To Watched List "))):i.a.createElement(s.b,{to:"./list"},i.a.createElement("button",{className:"btn-primary",disabled:0===e.ids_details.length,onClick:function(){return b(e.watched,e.ids_details,t,"REMOVED_WATCHED")}},"Remove From My Watched list")))):i.a.createElement("div",{className:"align_middle"},"Add Movies into My ",e.list_mode?"List From Movie List":"Watched List From Movie List or My List"))},O=a(2),D=a(12),g=a(35),j=a.n(g),T=a(3),I={movies:{},error:"",response:"False",watched:[],list:[],list_mode:!0,ids_details:[],year_filter:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SUCCESS":return Object(T.a)(Object(T.a)({},e),{},{movies:t.movieDetails,response:t.response,error:t.error});case"FETCH_ERROR":return Object(T.a)(Object(T.a)({},e),{},{response:t.response,error:t.error});case"ADD_IDS":return Object(T.a)(Object(T.a)({},e),{},{ids_details:[].concat(Object(E.a)(e.ids_details),[t.ids_details])});case"ADD_LIST":case"REMOVE_LIST":return Object(T.a)(Object(T.a)({},e),{},{ids_details:[],list_mode:!0,list:t.list});case"ADD_WATCHED":case"REMOVED_WATCHED":return Object(T.a)(Object(T.a)({},e),{},{ids_details:[],list_mode:!1,watched:t.list});case"REMOVE_IDS":return Object(T.a)(Object(T.a)({},e),{},{ids_details:t.ids_details});case"YEAR_FILTER":return Object(T.a)(Object(T.a)({},e),{},{year_filter:t.year_filter});case"LIST_MODE":return Object(T.a)(Object(T.a)({},e),{},{list_mode:t.mode});case"ADD_FROM_LIST":return Object(T.a)(Object(T.a)({},e),{},{ids_details:[],watched:t.watchedList,list:t.myList,list_mode:!1});default:return e}},M=a(36),N=Object(D.createStore)(L,Object(M.composeWithDevTools)(Object(D.applyMiddleware)(j.a)));var S=function(){return i.a.createElement(d.a,{store:N},i.a.createElement(s.a,null,i.a.createElement("div",{className:"App"},i.a.createElement("nav",{className:"navigation"},i.a.createElement("ul",null,i.a.createElement(s.b,{to:"./"},i.a.createElement("li",null,"Movie list")),i.a.createElement(s.b,{to:"./list"},i.a.createElement("li",null,"My List")))),i.a.createElement(O.c,null,i.a.createElement(O.a,{path:"./",exact:!0,component:h}),i.a.createElement(O.a,{path:"./list",component:y})))))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a6a87ce9.chunk.js.map