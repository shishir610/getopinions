import { Twitter } from "lucide-react"
import React from "react"

export default function Supports() {
    return (
        <div className="flex mt-14 justify-center">
            <p className="text-gray-500 text-xl mr-2 font-medium tracking-tighter text-center">
                Currently supports:
            </p>
            <Twitter color={"grey"} />
        </div>
    )
}
