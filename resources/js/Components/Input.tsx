import React from "react";
export default function Input({type='text',title,error=null,...props}){
    return (
        <label>
            {
                title && (
                    <span className="block text-sm font-semibold mb-3">{title}</span>
                )
            }
            <div>
                {
                    type==='textarea' ? (
                        <textarea
                            {...props}
                            className={`w-full h-12 resize-none appearance-none rounded px-3 border focus:outline-none focus:ring-2 ${error ? 'border-red-600 focus:ring-red-600' : 'border-gray-200 focus:ring-indigo-600'}`}
                        />
                    ) : type==='select' ? (
                        <select
                            {...props}
                            className={`w-full h-12 resize-none appearance-none rounded px-3 border focus:outline-none focus:ring-2 ${error ? 'border-red-600 focus:ring-red-600' : 'border-gray-200 focus:ring-indigo-600'}`}
                        />
                    ) : (
                        <input
                            type={type}
                            {...props}
                            className={`w-full h-12 resize-none appearance-none rounded px-3 border focus:outline-none focus:ring-2 ${error ? 'border-red-600 focus:ring-red-600' : 'border-gray-200 focus:ring-indigo-600'}`}
                        />
                    )
                }
            </div>
            {
                error && (
                    <span className="block text-xs mt-3 text-red-600">{error[0]}</span>
                )
            }
        </label>
    )
}
