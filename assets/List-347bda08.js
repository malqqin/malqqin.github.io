import{T as f}from"./TeacherList-2d2b23ee.js";import{_ as v,u as m,a as g,r as y,o as e,c as a,F as c,b as _,d as t,t as o,e as k,f as x,g as h,h as L,i as D}from"./index-08c41c10.js";const T={class:"greetings"},b=["onClick"],w={class:"list-images"},B=["src"],C={class:"teacher-info"},N={class:"item-info"},V={class:"item-info"},$={class:"item-info"},q={key:0,class:"item-info"},F={class:"item-info"},I={__name:"TeacherList",props:{listData:{type:Array,required:!0}},setup(r){m();const i=g(),l=d=>{const{id:u}=d;i.push({path:"/Detail",query:{id:u}})};return(d,u)=>{const p=y("van-icon");return e(),a("div",T,[(e(!0),a(c,null,_(r.listData,s=>(e(),a("div",{class:"list-wrap flex",key:s.id,onClick:n=>l(s)},[t("div",w,[t("img",{src:s.pic[0],alt:"",srcset:""},null,8,B)]),t("div",C,[t("div",N,o(s.name),1),t("div",V,o(s.location),1),t("div",$,o(s.age)+"年 |"+o(s.height)+"cm | "+o(s.bust)+" |"+o(s.weight)+"斤",1),s.hometown?(e(),a("div",q,"老家："+o(s.hometown),1)):k("",!0),t("div",F,[x("推荐指数： "),(e(!0),a(c,null,_(s.star,n=>(e(),h(p,{name:"star",key:n}))),128)),(e(!0),a(c,null,_(5-s.star,n=>(e(),h(p,{name:"star-o",key:n}))),128))])])],8,b))),128))])}}},R=v(I,[["__scopeId","data-v-1189bcd4"]]);const A={class:"greetings"},E={__name:"List",props:{},setup(r){return(i,l)=>(e(),a("div",A,[L(R,{listData:D(f)},null,8,["listData"])]))}},z=v(E,[["__scopeId","data-v-331e8161"]]);export{z as default};
