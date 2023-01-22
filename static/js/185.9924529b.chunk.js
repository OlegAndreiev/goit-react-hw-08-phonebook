"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[185],{185:function(e,o,t){t.r(o),t.d(o,{default:function(){return b}});t(2791);var a,n,r,i=t(9434),l=t(168),c=t(7691),s=c.ZP.form(a||(a=(0,l.Z)(["\n  width: 320px;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n"]))),d=(c.ZP.label(n||(n=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n"]))),c.ZP.button(r||(r=(0,l.Z)(["\n  margin: 0 auto;\n  background-color: white;\n  border-radius: 7%;\n  font-weight: 500;\n  &:focus,\n  &:hover {\n    background-color: lightgreen;\n    outline: transparent;\n  }\n"]))),t(3660)),u=t(5527),p=t(7665),v=t(6151),m=t(184),h=function(){var e=(0,i.I0)();return(0,m.jsxs)(u.Z,{elevation:2,style:{width:400,padding:20,paddingTop:40,marginTop:50,marginBottom:50,marginLeft:"auto",marginRight:"auto",borderRadius:10,backgroundColor:"white"},children:[(0,m.jsx)("h2",{style:{display:"flex",justifyContent:"center",marginBottom:20},children:"Registration form"}),(0,m.jsxs)(s,{autoComplete:"off",onSubmit:function(o){o.preventDefault();var t=o.currentTarget;e((0,d.z2)({name:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value})),t.reset()},children:[(0,m.jsx)(p.Z,{required:!0,id:"outlined-required",label:"Name",type:"text",name:"name",style:{marginBottom:20}}),(0,m.jsx)(p.Z,{required:!0,id:"outlined-required",label:"Email",type:"email",name:"email",style:{marginBottom:20}}),(0,m.jsx)(p.Z,{required:!0,id:"outlined-required",label:"Password",type:"password",name:"password",style:{marginBottom:20}}),(0,m.jsx)("p",{style:{margin:0,fontSize:12,color:"#9e9e9e"},children:"* - required"}),(0,m.jsx)(v.Z,{type:"submit",children:"Register"})]})]})};function b(){return(0,m.jsxs)("div",{children:[(0,m.jsx)("title",{children:"Registration"}),(0,m.jsx)(h,{})]})}},6151:function(e,o,t){t.d(o,{Z:function(){return k}});var a=t(4942),n=t(3366),r=t(7462),i=t(2791),l=t(8182),c=t(5735),s=t(4419),d=t(2065),u=t(7630),p=t(1046),v=t(3701),m=t(4036),h=t(5878),b=t(1217);function g(e){return(0,b.Z)("MuiButton",e)}var x=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var f=i.createContext({}),S=t(184),y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],z=function(e){return(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},Z=(0,u.ZP)(v.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o[t.variant],o["".concat(t.variant).concat((0,m.Z)(t.color))],o["size".concat((0,m.Z)(t.size))],o["".concat(t.variant,"Size").concat((0,m.Z)(t.size))],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})((function(e){var o,t,n,i=e.theme,l=e.ownerState;return(0,r.Z)({},i.typography.button,(o={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===l.variant&&"inherit"!==l.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[l.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[l.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===l.variant&&"inherit"!==l.color&&{border:"1px solid ".concat((i.vars||i).palette[l.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[l.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[l.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===l.variant&&{backgroundColor:(i.vars||i).palette.grey.A100,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===l.variant&&"inherit"!==l.color&&{backgroundColor:(i.vars||i).palette[l.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[l.color].main}}),"&:active":(0,r.Z)({},"contained"===l.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,a.Z)(o,"&.".concat(x.focusVisible),(0,r.Z)({},"contained"===l.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,a.Z)(o,"&.".concat(x.disabled),(0,r.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===l.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"outlined"===l.variant&&"secondary"===l.color&&{border:"1px solid ".concat((i.vars||i).palette.action.disabled)},"contained"===l.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),o),"text"===l.variant&&{padding:"6px 8px"},"text"===l.variant&&"inherit"!==l.color&&{color:(i.vars||i).palette[l.color].main},"outlined"===l.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===l.variant&&"inherit"!==l.color&&{color:(i.vars||i).palette[l.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[l.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(i.palette[l.color].main,.5))},"contained"===l.variant&&{color:i.vars?i.vars.palette.text.primary:null==(t=(n=i.palette).getContrastText)?void 0:t.call(n,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],boxShadow:(i.vars||i).shadows[2]},"contained"===l.variant&&"inherit"!==l.color&&{color:(i.vars||i).palette[l.color].contrastText,backgroundColor:(i.vars||i).palette[l.color].main},"inherit"===l.color&&{color:"inherit",borderColor:"currentColor"},"small"===l.size&&"text"===l.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===l.size&&"text"===l.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===l.size&&"outlined"===l.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===l.size&&"outlined"===l.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===l.size&&"contained"===l.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===l.size&&"contained"===l.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},l.fullWidth&&{width:"100%"})}),(function(e){var o;return e.ownerState.disableElevation&&(o={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,a.Z)(o,"&.".concat(x.focusVisible),{boxShadow:"none"}),(0,a.Z)(o,"&:active",{boxShadow:"none"}),(0,a.Z)(o,"&.".concat(x.disabled),{boxShadow:"none"}),o)})),w=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,o){var t=e.ownerState;return[o.startIcon,o["iconSize".concat((0,m.Z)(t.size))]]}})((function(e){var o=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===o.size&&{marginLeft:-2},z(o))})),C=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,o){var t=e.ownerState;return[o.endIcon,o["iconSize".concat((0,m.Z)(t.size))]]}})((function(e){var o=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===o.size&&{marginRight:-2},z(o))})),k=i.forwardRef((function(e,o){var t=i.useContext(f),a=(0,c.Z)(t,e),d=(0,p.Z)({props:a,name:"MuiButton"}),u=d.children,v=d.color,h=void 0===v?"primary":v,b=d.component,x=void 0===b?"button":b,z=d.className,k=d.disabled,I=void 0!==k&&k,R=d.disableElevation,j=void 0!==R&&R,E=d.disableFocusRipple,B=void 0!==E&&E,W=d.endIcon,q=d.focusVisibleClassName,M=d.fullWidth,P=void 0!==M&&M,T=d.size,N=void 0===T?"medium":T,F=d.startIcon,L=d.type,_=d.variant,O=void 0===_?"text":_,V=(0,n.Z)(d,y),D=(0,r.Z)({},d,{color:h,component:x,disabled:I,disableElevation:j,disableFocusRipple:B,fullWidth:P,size:N,type:L,variant:O}),A=function(e){var o=e.color,t=e.disableElevation,a=e.fullWidth,n=e.size,i=e.variant,l=e.classes,c={root:["root",i,"".concat(i).concat((0,m.Z)(o)),"size".concat((0,m.Z)(n)),"".concat(i,"Size").concat((0,m.Z)(n)),"inherit"===o&&"colorInherit",t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,m.Z)(n))],endIcon:["endIcon","iconSize".concat((0,m.Z)(n))]},d=(0,s.Z)(c,g,l);return(0,r.Z)({},l,d)}(D),G=F&&(0,S.jsx)(w,{className:A.startIcon,ownerState:D,children:F}),H=W&&(0,S.jsx)(C,{className:A.endIcon,ownerState:D,children:W});return(0,S.jsxs)(Z,(0,r.Z)({ownerState:D,className:(0,l.Z)(t.className,A.root,z),component:x,disabled:I,focusRipple:!B,focusVisibleClassName:(0,l.Z)(A.focusVisible,q),ref:o,type:L},V,{classes:A,children:[G,u,H]}))}))}}]);
//# sourceMappingURL=185.9924529b.chunk.js.map