"use client"

import { useGlobalContext } from "@/app/Context/store"
import React, { useEffect, useState } from "react"
import TypewriterComponent from "typewriter-effect"

export default function CreatorResponse() {
    const [response, setResponse] = useState("")
    const { state } = useGlobalContext()
    const { askSomething, creatorName } = state

    useEffect(() => {
        const getCreatorResponse = async () => {
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
                    "https://getopinions-api.vercel.app/completions",
                    options
                )
                const data = await res.json()
                console.log(data.choices[0].message)
                setResponse(data.choices[0].message.content)
            } catch (e) {
                console.log(e)
            }
        }

        getCreatorResponse()
    }, [])

    return (
        <div className="w-full mb-20">
            {response !== "" && (
                <TypewriterComponent
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(10)
                            .typeString(
                                `<p className="text-zinc-700 text-base px-4 font-normal tracking-tighter">
                                ${response}
                                </p>`
                            )
                            .start()
                    }}
                />
            )}
            {response == "" && (
                <TypewriterComponent
                    onInit={(typewriter) => {
                        typewriter.typeString("").start()
                    }}
                />
            )}
        </div>
    )
}
