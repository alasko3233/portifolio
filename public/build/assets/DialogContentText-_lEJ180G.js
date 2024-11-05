import{g as f,b as C,s as d,B as V,d as q,e as g,P as N,u as h,f as G,_ as b,c as x,a as v,F as J,r as Q}from"./Paper-H0D-987Z.js";import{_ as s}from"./extends-z9a7DBh-.js";import{r as p,j as l}from"./app-zR8_T5Oq.js";import{u as Z,T as oo}from"./Typography-qW6Y3iqi.js";function to(o){return C("MuiDialog",o)}const eo=f("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),M=eo,ao=p.createContext({}),so=ao,io=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ro=d(V,{name:"MuiDialog",slot:"Backdrop",overrides:(o,t)=>t.backdrop})({zIndex:-1}),no=o=>{const{classes:t,scroll:e,maxWidth:a,fullWidth:i,fullScreen:r}=o,n={root:["root"],container:["container",`scroll${g(e)}`],paper:["paper",`paperScroll${g(e)}`,`paperWidth${g(String(a))}`,i&&"paperFullWidth",r&&"paperFullScreen"]};return v(n,to,t)},lo=d(q,{name:"MuiDialog",slot:"Root",overridesResolver:(o,t)=>t.root})({"@media print":{position:"absolute !important"}}),co=d("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.container,t[`scroll${g(e.scroll)}`]]}})(({ownerState:o})=>s({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),po=d(N,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.paper,t[`scrollPaper${g(e.scroll)}`],t[`paperWidth${g(String(e.maxWidth))}`],e.fullWidth&&t.paperFullWidth,e.fullScreen&&t.paperFullScreen]}})(({theme:o,ownerState:t})=>s({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},t.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},t.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},t.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${M.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&t.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[t.maxWidth]}${o.breakpoints.unit}`,[`&.${M.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[t.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${M.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),uo=p.forwardRef(function(t,e){const a=h({props:t,name:"MuiDialog"}),i=G(),r={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":c,BackdropComponent:m,BackdropProps:A,children:j,className:F,disableEscapeKeyDown:T=!1,fullScreen:U=!1,fullWidth:_=!1,maxWidth:I="sm",onBackdropClick:S,onClick:P,onClose:k,open:R,PaperComponent:L=N,PaperProps:w={},scroll:E="paper",TransitionComponent:Y=J,transitionDuration:B=r,TransitionProps:X}=a,z=b(a,io),D=s({},a,{disableEscapeKeyDown:T,fullScreen:U,fullWidth:_,maxWidth:I,scroll:E}),y=no(D),W=p.useRef(),H=u=>{W.current=u.target===u.currentTarget},K=u=>{P&&P(u),W.current&&(W.current=null,S&&S(u),k&&k(u,"backdropClick"))},$=Z(c),O=p.useMemo(()=>({titleId:$}),[$]);return l.jsx(lo,s({className:x(y.root,F),closeAfterTransition:!0,components:{Backdrop:ro},componentsProps:{backdrop:s({transitionDuration:B,as:m},A)},disableEscapeKeyDown:T,onClose:k,open:R,ref:e,onClick:K,ownerState:D},z,{children:l.jsx(Y,s({appear:!0,in:R,timeout:B,role:"presentation"},X,{children:l.jsx(co,{className:x(y.container),onMouseDown:H,ownerState:D,children:l.jsx(po,s({as:L,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":$},w,{className:x(y.paper,w.className),ownerState:D,children:l.jsx(so.Provider,{value:O,children:j})}))})}))}))}),Ao=uo;function go(o){return C("MuiDialogActions",o)}f("MuiDialogActions",["root","spacing"]);const xo=["className","disableSpacing"],mo=o=>{const{classes:t,disableSpacing:e}=o;return v({root:["root",!e&&"spacing"]},go,t)},fo=d("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,!e.disableSpacing&&t.spacing]}})(({ownerState:o})=>s({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Co=p.forwardRef(function(t,e){const a=h({props:t,name:"MuiDialogActions"}),{className:i,disableSpacing:r=!1}=a,n=b(a,xo),c=s({},a,{disableSpacing:r}),m=mo(c);return l.jsx(fo,s({className:x(m.root,i),ownerState:c,ref:e},n))}),jo=Co;function Do(o){return C("MuiDialogContent",o)}f("MuiDialogContent",["root","dividers"]);function Fo(o){return C("MuiDialogTitle",o)}const ho=f("MuiDialogTitle",["root"]),bo=ho,vo=["className","dividers"],ko=o=>{const{classes:t,dividers:e}=o;return v({root:["root",e&&"dividers"]},Do,t)},yo=d("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.dividers&&t.dividers]}})(({theme:o,ownerState:t})=>s({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${bo.root} + &`]:{paddingTop:0}})),Wo=p.forwardRef(function(t,e){const a=h({props:t,name:"MuiDialogContent"}),{className:i,dividers:r=!1}=a,n=b(a,vo),c=s({},a,{dividers:r}),m=ko(c);return l.jsx(yo,s({className:x(m.root,i),ownerState:c,ref:e},n))}),Uo=Wo;function $o(o){return C("MuiDialogContentText",o)}f("MuiDialogContentText",["root"]);const Mo=["children","className"],To=o=>{const{classes:t}=o,a=v({root:["root"]},$o,t);return s({},t,a)},So=d(oo,{shouldForwardProp:o=>Q(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,t)=>t.root})({}),Po=p.forwardRef(function(t,e){const a=h({props:t,name:"MuiDialogContentText"}),{className:i}=a,r=b(a,Mo),n=To(r);return l.jsx(So,s({component:"p",variant:"body1",color:"text.secondary",ref:e,ownerState:r,className:x(n.root,i)},a,{classes:n}))}),_o=Po;export{Ao as D,Uo as a,_o as b,jo as c,so as d,Fo as g};