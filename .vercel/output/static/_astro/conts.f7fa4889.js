import{r as c}from"./index.ed373d49.js";var l={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=c,d=Symbol.for("react.element"),m=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,f=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,a){var r,o={},n=null,i=null;a!==void 0&&(n=""+a),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)_.call(e,r)&&!y.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:d,type:t,key:n,ref:i,props:o,_owner:f.current}}s.Fragment=m;s.jsx=u;s.jsxs=u;l.exports=s;var v=l.exports;const x=[{title:"Carne salada",stock:!0},{title:"Carne dulce",stock:!0},{title:"Pollo",stock:!0},{title:"Jamon y queso",stock:!0,option:"Ricota"},{title:"Cebolla y queso",stock:!0},{title:"Verdura",stock:!0}],O=2500,R=2500/2,C={"Carne salada":0,"Carne dulce":0,Pollo:0,"Jamon y queso":0,"Cebolla y queso":0,Verdura:0},E={name:"name",surname:"surname",direction:"direction",delivery:"delivery",retire:"retire"};export{R as a,E as b,x as e,C as i,v as j,O as p};
