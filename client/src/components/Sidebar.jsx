import React from 'react'

function Sidebar() {
  return (
    <div className=' bg-slate-200 max-w-96 m-5 p-5 rounded-lg text-xl h-screen '>
        <h2 className=' font-bold text-3xl px-5 mb-2 mt-2'>Features</h2>
         <hr />
        <ul  className=' mx-auto'>
            <li  className=' hover:bg-slate-100  rounded-lg p-5 '>CHAT BOT</li>
            <li  className=' hover:bg-slate-100  rounded-lg p-5 '>DISEASE</li>
            <li  className=' hover:bg-slate-100  rounded-lg p-5 '>LABS</li>
            <li  className=' hover:bg-slate-100  rounded-lg p-5 '>FERTILISER</li>
            <li  className=' hover:bg-slate-100  rounded-lg p-5 '> PLANT PREDECTION</li>

        </ul>
    </div>
  )
}

export default Sidebar