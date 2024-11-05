import{W as d,r as c,j as e,a as g}from"./app-zR8_T5Oq.js";import{A as x}from"./AuthenticatedLayout-GTo-H2NV.js";import"./transition-5pInOOcg.js";import"./use-is-mounted-Ikp7_Pn9.js";import"./Permissions-Vypp2XvS.js";import"./logosite-2IKUHq9V.js";const v=({auth:n})=>{const{data:t,setData:i,post:l,processing:h,errors:a}=d({username:"",firstname:"",lastname:"",phone:"",email:""}),[r,m]=c.useState(!1);function o(s){s.preventDefault(),m(!0),l("/manage-employee")}return e.jsx(e.Fragment,{children:e.jsxs(x,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-center text-gray-800 leading-tight",children:"Ajouter Employee"}),children:[e.jsx(g,{title:"Ajouter Employee"}),e.jsx("div",{className:"py-12 px-2",children:e.jsx("div",{className:"p-4  sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsx("div",{className:" container p-10",children:e.jsxs("form",{onSubmit:o,children:[e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{className:"border-b border-gray-900/10 pb-12",children:[e.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Profile"}),e.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"This information will be displayed publicly so be careful what you share."}),e.jsx("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx("label",{htmlFor:"username",className:"block text-sm font-medium leading-6 text-gray-900",children:"Username"}),e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:[e.jsx("span",{className:"flex select-none items-center pl-3 text-gray-500 sm:text-sm",children:"workcation.com/"}),e.jsx("input",{type:"text",name:"username",onChange:s=>i("username",s.target.value),value:t.username,id:"username",autoComplete:"username",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:"janesmith"})]}),a.username&&e.jsx("div",{className:" text-red-400",children:a.username})]})]})})]}),e.jsxs("div",{className:"border-b border-gray-900/10 pb-12",children:[e.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Personal Information"}),e.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Use a permanent address where you can receive mail."}),e.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"firstname",className:"block text-sm font-medium leading-6 text-gray-900",children:"First name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"firstname",onChange:s=>i("firstname",s.target.value),value:t.firstname,id:"first-name",autoComplete:"given-name",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),a.firstname&&e.jsx("div",{className:" text-red-400",children:a.firstname})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"last-name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Last name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"lastname",onChange:s=>i("lastname",s.target.value),value:t.lastname,id:"last-name",autoComplete:"family-name",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),a.lastname&&e.jsx("div",{className:" text-red-400",children:a.lastname})]}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{id:"email",name:"email",onChange:s=>i("email",s.target.value),value:t.email,type:"email",autoComplete:"email",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),a.email&&e.jsx("div",{className:" text-red-400",children:a.email})]}),e.jsxs("div",{className:"sm:col-span-3",children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium leading-6 text-gray-900",children:"Phone"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"phone",onChange:s=>i("phone",s.target.value),value:t.phone,id:"phone",autoComplete:"phone",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),a.phone&&e.jsx("div",{className:" text-red-400",children:a.phone})]})]})]})]}),e.jsxs("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[e.jsx("button",{type:"button",className:"text-sm font-semibold leading-6 text-gray-900",onClick:()=>{window.history.back()},children:"Cancel"}),e.jsx("button",{disabled:r,type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Save"})]})]})})})})]})})};export{v as default};
