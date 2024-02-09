import React from "react"
import { useGlobalContext } from "@/app/Context/store"
import AskSomething from "@/app/components/sections/AskSomething"

export default function Home() {
    return (
        <div className="flex flex-col justify-center">
            <AskSomething askMode={true} />
        </div>
    )
}
