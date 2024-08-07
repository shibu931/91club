"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import a from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'


const DialogComponent = ({ state }) => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsOpen(true); 
        }, 5000);
    
        return () => clearTimeout(timer); 
      }, []);
      const router = useRouter()
    async function sendAlert(msg){
      if(msg){
        await fetch(`/api/send-alert/${msg}`)
        }else{
        await fetch('/api/send-alert/new-user-arrived')
    }}
    return (
        <div className={`${isOpen ? 'fixed' : 'hidden'}  w-full h-full bg-black/75 z-50 inset-0`} >
            <div className="flex h-full justify-center items-center">
                <div className=" bg-gray-300 animated-border border-6 rounded-lg p-5 lg:p-10 relative">
                    <div className="absolute top-3 right-3 cursor-pointer w-[30px] h-[30px] text-xl rounded-full bg-red-500 flex justify-center items-center font-extrabold text-center" onClick={()=>{setIsOpen(false) }}>
                        <span className="text-gray-900">X</span>
                    </div>
                    <h2 className="text-center text-purple-700 text-3xl font-bold">Register Now<br /> &<br /> Start Playing Now</h2>
                    <div className="mx-auto text-center mt-10">
                        <a href="https://91in04.com/#/register?invitationCode=814585940557" target="_blank" className='cta-btn px-6 font-semibold py-2 animated-border bg-orange-500 text-white rounded-md my-auto me-2' onClick={()=>{()=>{sendAlert('user-clicked-register')}}}>Register Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DialogComponent