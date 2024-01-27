import React from "react"
import { Lato } from "next/font/google"

const lato = Lato({ subsets: ["latin"], weight: "700" })

export default function Navigation() {
    return (
        <div className={`flex p-5 ${lato.className} justify-between`}>
            <div className="ml-5 flex items-center">
                <img src="./logo.png" className="w-8 h-auto" />
                <p className="text-zinc-900/80 font-light text-xl tracking-tight text-center ml-3">
                    GetOpinions
                </p>
            </div>
        </div>
    )
}
