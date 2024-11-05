import{r as m,W as c,j as e,a as g}from"./app-zR8_T5Oq.js";import{A as x}from"./AuthenticatedLayout-GTo-H2NV.js";import"./transition-5pInOOcg.js";import"./use-is-mounted-Ikp7_Pn9.js";import"./Permissions-Vypp2XvS.js";import"./logosite-2IKUHq9V.js";const N=({auth:d,user:a,types:l})=>{m.useEffect(()=>{console.log(a)},[]);const{data:n,setData:i,put:r,processing:p,errors:t}=c({name:a.name?a.name:"",address:a.address?a.address:"",phone:a.phone?a.phone:"",type:a.type_apps_id?a.type_apps_id:""});function o(s){s.preventDefault(),r(route("manage-company.update",a.id))}return e.jsx(e.Fragment,{children:e.jsxs(x,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-center text-gray-800 leading-tight",children:"Modifier Compagnie"}),children:[e.jsx(g,{title:"Modifier Compagnie"}),e.jsx("div",{className:"py-12 px-2",children:e.jsx("div",{className:"p-4  sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsx("div",{className:" container p-10",children:e.jsxs("form",{onSubmit:o,children:[e.jsx("div",{className:"space-y-12",children:e.jsxs("div",{className:"border-b border-gray-900/10 pb-12",children:[e.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Personal Information"}),e.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Use a permanent address where you can receive mail."}),e.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"name",onChange:s=>i("name",s.target.value),value:n.name,id:"name",autoComplete:"given-name",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),t.firstname&&e.jsx("div",{className:" text-red-400",children:t.name})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"last-name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Address"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"address",onChange:s=>i("address",s.target.value),value:n.address,id:"address",autoComplete:"address",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),t.lastname&&e.jsx("div",{className:" text-red-400",children:t.address})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium leading-6 text-gray-900",children:"Phone"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"phone",onChange:s=>i("phone",s.target.value),value:n.phone,id:"phone",autoComplete:"phone",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),t.phone&&e.jsx("div",{className:" text-red-400",children:t.phone})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"compagnie",className:"block text-sm font-medium leading-6 text-gray-900",children:"Type"}),e.jsx("div",{className:"mt-2",children:e.jsxs("select",{value:n.type,onChange:s=>i("type",s.target.value),name:"type",id:"type",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",children:[e.jsx("option",{value:"",children:"Selectionner"}),l.map((s,h)=>e.jsx("option",{value:s.id,children:s.name}))]})}),t.type&&e.jsx("div",{className:" text-red-400",children:t.type})]})]})]})}),e.jsxs("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[e.jsx("button",{type:"button",className:"text-sm font-semibold leading-6 text-gray-900",onClick:()=>{window.history.back()},children:"Cancel"}),e.jsx("button",{type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Save"})]})]})})})})]})})};export{N as default};
