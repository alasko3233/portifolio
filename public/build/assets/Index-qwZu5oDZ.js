import{r as n,j as e,a as i,d as t}from"./app-PAiKjMRq.js";import{A as a}from"./AuthenticatedLayout-PO5lHyP7.js";import{P as d}from"./PencilIcon-NtrZORac.js";import{T as o}from"./TrashIcon-Intrx1l9.js";import"./ApplicationLogo-y6-Q8Psy.js";import"./transition-AzQgLNjU.js";import"./use-is-mounted-ckcm3oFg.js";const b=({auth:l,users:r})=>(n.useEffect(()=>{console.log(r)},[]),e.jsx(e.Fragment,{children:e.jsxs(a,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-center text-gray-800 leading-tight",children:"Liste des Departements"}),children:[e.jsx(i,{title:"Liste des Departements"}),e.jsx("div",{class:"flex justify-center w-full mb-8 overflow-hidden rounded-lg ",children:e.jsxs("div",{class:"w-4/5 overflow-x-auto",children:[e.jsx("div",{className:" w-full flex justify-end my-6",children:e.jsx(t,{href:route("manage-departement.create"),className:" w-32 bg-slate-500 text-center p-2 rounded hover:bg-slate-400",children:"Add"})}),e.jsxs("table",{class:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{class:"text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600",children:[e.jsx("th",{class:"px-4 py-3",children:"ID"}),e.jsx("th",{class:"px-4 py-3",children:"Nom Departement"}),e.jsx("th",{class:"px-4 py-3",children:"Action"})]})}),e.jsx("tbody",{class:"bg-white",children:r.map((s,c)=>e.jsxs("tr",{class:"text-gray-700",children:[e.jsx("td",{class:"px-4 py-3 border",children:e.jsxs("div",{class:"flex items-center text-sm",children:[e.jsxs("div",{class:"relative w-8 h-8 mr-3 rounded-full md:block",children:[e.jsx("img",{class:"object-cover w-full h-full rounded-full",src:"https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",alt:"",loading:"lazy"}),e.jsx("div",{class:"absolute inset-0 rounded-full shadow-inner","aria-hidden":"true"})]}),e.jsx("div",{children:e.jsx("p",{class:"font-semibold text-black",children:s.id})})]})}),e.jsx("td",{class:"px-4 py-3 text-ms font-semibold border",children:s.name}),e.jsxs("td",{class:" flex justify-centerflex gap-5 items-center px-4 py-3 text-ms font-semibold border",children:[e.jsxs(t,{href:route("manage-departement.edit",s),class:"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",children:[" ",e.jsx(d,{className:" w-5 h-5"})]}),e.jsx(t,{class:"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",children:e.jsx(o,{className:" w-5 h-5"})})]})]}))})]})]})})]})}));export{b as default};
