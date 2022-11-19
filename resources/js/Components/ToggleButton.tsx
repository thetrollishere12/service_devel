import React from "react";


export default function ToggleButton({open,setOpen}){


    return (
        <button onClick={()=>setOpen(!open)} className={`h-8 w-12 flex transition-all duration-500 ease-in-out p-1 items-center rounded-full ${open ? 'justify-end bg-green-500' : 'bg-gray-200'}`}>
            <div className='w-6 h-6 bg-white rounded-full'/>
        </button>
    )
}
