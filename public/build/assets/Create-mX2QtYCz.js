import{W as c,r as g,j as e,a as x}from"./app-zR8_T5Oq.js";import{A as h}from"./AuthenticatedLayout-GTo-H2NV.js";import"./transition-5pInOOcg.js";import"./use-is-mounted-Ikp7_Pn9.js";import"./Permissions-Vypp2XvS.js";import"./logosite-2IKUHq9V.js";const w=({auth:i,types:r})=>{const{data:t,setData:n,post:l,processing:p,errors:a}=c({name:"",address:"",phone:"",type:""}),[d,o]=g.useState(!1);function m(s){s.preventDefault(),o(!0),l("/manage-company")}return e.jsx(e.Fragment,{children:e.jsxs(h,{user:i.user,header:e.jsx("h2",{className:"font-semibold text-xl text-center text-gray-800 leading-tight",children:"Ajouter Compagnie"}),children:[e.jsx(x,{title:"Ajouter Compagnie"}),e.jsx("div",{className:"py-12 px-2",children:e.jsx("div",{className:"p-4  sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsx("div",{className:" container p-10",children:e.jsxs("form",{onSubmit:m,children:[e.jsx("div",{className:"space-y-12",children:e.jsxs("div",{className:"border-b border-gray-900/10 pb-12",children:[e.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Personal Information"}),e.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Use a permanent address where you can receive mail."}),e.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"name",onChange:s=>n("name",s.target.value),value:t.name,id:"name",autoComplete:"given-name",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),a.firstname&&e.jsx("div",{className:" text-red-400",children:a.name})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"last-name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Address"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"address",onChange:s=>n("address",s.target.value),value:t.address,id:"address",autoComplete:"address",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),a.lastname&&e.jsx("div",{className:" text-red-400",children:a.address})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium leading-6 text-gray-900",children:"Phone"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"phone",onChange:s=>n("phone",s.target.value),value:t.phone,id:"phone",autoComplete:"phone",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),a.phone&&e.jsx("div",{className:" text-red-400",children:a.phone})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"compagnie",className:"block text-sm font-medium leading-6 text-gray-900",children:"Type"}),e.jsx("div",{className:"mt-2",children:e.jsxs("select",{value:t.type,onChange:s=>n("type",s.target.value),name:"type",id:"type",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",children:[e.jsx("option",{value:"",children:"Selectionner"}),r.map((s,u)=>e.jsx("option",{value:s.id,children:s.name}))]})}),a.type&&e.jsx("div",{className:" text-red-400",children:a.type})]})]})]})}),e.jsxs("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[e.jsx("button",{type:"button",className:"text-sm font-semibold leading-6 text-gray-900",onClick:()=>{window.history.back()},children:"Cancel"}),e.jsx("button",{disabled:d,type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Save"})]})]})})})})]})})};export{w as default};