"use client"

import { useGlobalContext } from "@/app/Context/store"
import React, { useEffect, useState } from "react"

export default function CreatorResponse() {
    const { state } = useGlobalContext()
    const [response, setResponse] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const requestBody = {
                    model: "text-davinci-002",
                    prompt: `Imagine you're sitting down for a one-on-one conversation with ${state.creatorName}. How would ${state.creatorName} answer the question ${state.askSomething}`,
                    max_tokens: 100,
                }

                const response = await fetch(
                    "https://api.openai.com/v1/chat/completions",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                        },
                        body: JSON.stringify(requestBody),
                    }
                )

                const data = await response.json()
                setResponse(data.choices[0].text)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
    }, [])

    return <div>{response}</div>
}
