"use client"

import React from "react"
import { useGlobalContext } from "@/app/Context/store"
import AskSomething from "@/app/components/sections/AskSomething"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Home() {
    const router = useRouter()
    return (
        <div className="flex flex-col justify-center">
            <a className="fixed top-10 left-10 p-3 border rounded-lg shadow-sm text-xs font-semibold text-zinc-600 hover:text-zinc-800 sm:hidden md:flex items-center cursor-pointer">
                <ArrowLeft size={15} />
                <span
                    className="ml-2"
                    onClick={() => {
                        router.push("/")
                    }}
                >
                    BACK TO HOME
                </span>
            </a>
            <AskSomething askMode={true} />
        </div>
    )
}
