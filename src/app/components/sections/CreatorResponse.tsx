"use client"

import { useGlobalContext } from "@/app/Context/store"
import React, { useEffect, useState } from "react"

export default function CreatorResponse() {
    const [response, setResponse] = useState("")
    const { state } = useGlobalContext()
    const { askSomething, creatorName } = state

    useEffect(() => {
        const getMessage = async () => {
            try {
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        askSomething,
                        creatorName,
                    }),
                }
                const res = await fetch(
                    "http://localhost:8080/completions",
                    options
                )
                const data = await res.json()
                setResponse(data.choices[0].message.content)
            } catch (e) {
                console.log(e)
            }
        }

        getMessage()
    }, [])

    return <div className="w-full">{response}</div>
}
