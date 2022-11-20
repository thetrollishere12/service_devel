import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Input from "@/Components/Input";
import ToggleButton from "@/Components/ToggleButton";
import {useMutation, useQueryClient} from "react-query";
import axios from "axios";

export default function CreateServiceModal() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [state,setState]=useState({
        name:'',
        hours:'',
        minutes:'',
        price:'',
        priceType:'',
    })

    const [open,setOpen]=useState(false)

    const handleChange=(e)=>{
      setState(prev=>({...prev,[e?.target?.name]:e?.target?.value}))
    }


    const [errors,setErrors]=useState({
        price: undefined,
        name: undefined,
        hours: undefined,
        minutes: undefined,
        priceType: undefined
    })
    const queryClient=useQueryClient()
    const mutation=useMutation(value=>axios.post('/services',value).then(res=>res.data),{
        onSuccess:async(data: any)=>{
            await queryClient.invalidateQueries(['services'])
            closeModal()
        },
        onError:(error: any)=>{
            setErrors(error.response.data.errors || {})
        }
    })


    const _submit=()=>{
        // @ts-ignore
        mutation.mutate({
            ...state,
            mobile:open
        })
    }

    return (
        <>
            <button type="button" onClick={openModal} className="px-7 py-2 text-xs font-medium flex items-center space-x-2 border border-gray-600 rounded">
                + Add Service
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-[600px] transform overflow-hidden rounded bg-white p-10 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-3xl font-semibold leading-6 text-gray-900"
                                    >
                                        Add Service
                                    </Dialog.Title>
                                    <div className="mt-6">
                                        <div className="grid grid-cols-2 gap-6">

                                            <div className="col-span-2">
                                                <Input
                                                 title={'Service Name'}
                                                 name={'name'}
                                                 value={state.name}
                                                 onChange={handleChange}
                                                 error={errors.name}
                                                />
                                            </div>

                                            <div>
                                                <Input
                                                    title={'Hours'}
                                                    name={'hours'}
                                                    value={state.hours}
                                                    onChange={handleChange}
                                                    error={errors.hours}
                                                />
                                            </div>

                                            <div >
                                                <Input
                                                    title={'Minutes'}
                                                    name={'minutes'}
                                                    value={state.minutes}
                                                    onChange={handleChange}
                                                    error={errors.minutes}
                                                />
                                            </div>

                                            <div className="col-span-2">
                                                <Input
                                                    title={'Price'}
                                                    name={'price'}
                                                    value={state.price}
                                                    onChange={handleChange}
                                                    error={errors.price}
                                                />
                                            </div>

                                            <div className="col-span-2">
                                                <Input
                                                    title={'Price Type'}
                                                    name={'priceType'}
                                                    value={state.priceType}
                                                    onChange={handleChange}
                                                    type={'select'}
                                                    error={errors.priceType}
                                                >
                                                    <option value="fixed">Fixed</option>
                                                    <option value="custom">Custom</option>
                                                </Input>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="block text-sm font-medium">Mobile Service</span>
                                        <ToggleButton open={open} setOpen={setOpen}/>
                                    </div>

                                    <div className="mt-6 flex justify-end items-center space-x-5">
                                        <button onClick={closeModal} className="h-12 px-7 bg-orange-600 text-sm text-white rounded">
                                            Cancel
                                        </button>
                                        <button onClick={()=>mutation.isLoading ? null : _submit()} className="h-12 px-7 bg-indigo-700 text-sm text-white rounded">
                                            {
                                                mutation.isLoading ? '...Saving' : 'Save'
                                            }
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
