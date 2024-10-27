import{r as a,W as d,j as e,a as h}from"./app-PAiKjMRq.js";import{A as m}from"./AuthenticatedLayout-PO5lHyP7.js";import{G as x}from"./iconBase-cB5WC4vq.js";import"./ApplicationLogo-y6-Q8Psy.js";import"./transition-AzQgLNjU.js";import"./use-is-mounted-ckcm3oFg.js";function u({title:r,titleId:s,...i},l){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":s},i),r?a.createElement("title",{id:s},r):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"}))}const p=a.forwardRef(u),f=p;function g(r){return x({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"path",attr:{d:"M8 13h2"},child:[]},{tag:"path",attr:{d:"M8 17h2"},child:[]},{tag:"path",attr:{d:"M14 13h2"},child:[]},{tag:"path",attr:{d:"M14 17h2"},child:[]}]})(r)}const M=({auth:r})=>{const{data:s,setData:i,post:l,processing:j,errors:v}=d({files:""});a.useEffect(()=>{console.log(s)},[s]);function n(t){t.preventDefault(),l("/manage-archivecloud")}function o(t){return(t/(1024*1024)).toFixed(2)}return e.jsx(e.Fragment,{children:e.jsxs(m,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-center text-gray-800 leading-tight",children:"Ajouter Votre Archive"}),children:[e.jsx(h,{title:"Ajouter Archive"}),e.jsx("div",{className:"py-12 px-2",children:e.jsx("div",{className:"p-4  sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsx("div",{className:" container p-10",children:e.jsxs("form",{onSubmit:n,children:[e.jsx("div",{className:"space-y-12",children:e.jsxs("div",{className:"border-b border-gray-900/10 pb-12",children:[e.jsx("div",{className:"mt-10 flex justify-center",children:e.jsxs("div",{class:"border border-dashed border-gray-500 relative",children:[e.jsx("input",{type:"file",multiple:!0,onChange:t=>{i("files",t.target.files)},class:"cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"}),e.jsxs("div",{class:"text-center p-10 absolute top-0 right-0 left-0 m-auto",children:[e.jsxs("h4",{children:["Drop files anywhere to upload",e.jsx("br",{}),"or"]}),e.jsx("p",{class:"",children:"Select Files"})]})]})}),e.jsx("div",{className:"flex justify-center",children:s.files.length>0&&e.jsx("ul",{className:"w-1/2 divide-y divide-gray-200 dark:divide-gray-700",children:Array.from(s.files).map((t,c)=>e.jsx("li",{className:"py-3 sm:py-4",children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"flex-shrink-0",children:t.type.includes("image")?e.jsx(f,{className:"h-6 w-6"}):e.jsx(g,{className:"h-6 w-6"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-gray-400",children:t.name}),e.jsxs("p",{className:"text-sm text-gray-500 truncate dark:text-gray-400",children:[o(t.size)," ","MB"]})]})]})},c))})})]})}),e.jsxs("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[e.jsx("button",{type:"button",className:"text-sm font-semibold leading-6 text-gray-900",children:"Cancel"}),e.jsx("button",{type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Save"})]})]})})})})]})})};export{M as default};