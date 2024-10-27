import{r as o,W as m,j as e,a as c}from"./app-PAiKjMRq.js";import{A as g}from"./AuthenticatedLayout-PO5lHyP7.js";import"./ApplicationLogo-y6-Q8Psy.js";import"./transition-AzQgLNjU.js";import"./use-is-mounted-ckcm3oFg.js";const j=({auth:d,user:s})=>{o.useEffect(()=>{console.log(s)},[]);const{data:n,setData:i,put:r,processing:x,errors:t}=m({name:s.name?s.name:"",address:s.address?s.address:"",phone:s.phone?s.phone:""});function l(a){a.preventDefault(),r(route("manage-company.update",s.id))}return e.jsx(e.Fragment,{children:e.jsxs(g,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-center text-gray-800 leading-tight",children:"Modifier Compagnie"}),children:[e.jsx(c,{title:"Modifier Compagnie"}),e.jsx("div",{className:"py-12 px-2",children:e.jsx("div",{className:"p-4  sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsx("div",{className:" container p-10",children:e.jsxs("form",{onSubmit:l,children:[e.jsx("div",{className:"space-y-12",children:e.jsxs("div",{className:"border-b border-gray-900/10 pb-12",children:[e.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Personal Information"}),e.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Use a permanent address where you can receive mail."}),e.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"name",onChange:a=>i("name",a.target.value),value:n.name,id:"name",autoComplete:"given-name",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),t.firstname&&e.jsx("div",{className:" text-red-400",children:t.name})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"last-name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Address"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"address",onChange:a=>i("address",a.target.value),value:n.address,id:"address",autoComplete:"address",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),t.lastname&&e.jsx("div",{className:" text-red-400",children:t.address})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium leading-6 text-gray-900",children:"Phone"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"phone",onChange:a=>i("phone",a.target.value),value:n.phone,id:"phone",autoComplete:"phone",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),t.phone&&e.jsx("div",{className:" text-red-400",children:t.phone})]})]})]})}),e.jsxs("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[e.jsx("button",{type:"button",className:"text-sm font-semibold leading-6 text-gray-900",children:"Cancel"}),e.jsx("button",{type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Save"})]})]})})})})]})})};export{j as default};
