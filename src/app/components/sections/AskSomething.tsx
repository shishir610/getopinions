"use client"
import { CornerDownLeft, Plus, Twitter } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { ReactNode, useState } from "react"
import imagine from "../../data/imagine.json"

interface Props {
    bgColor?: string
}

export default function AskSomething({ bgColor }: Props) {
    const [askInput, setAskInput] = useState("")
    const [askCreator, setAskCreator] = useState("elon")
    const router = useRouter()

    const handleEnter = () => {
        if (askInput !== "") {
            router.push("/demo/ask")
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleEnter()
        }
    }

    const renderCreatorAvatars = () => {
        return imagine.map((i) => {
            const creator = i.creator.split(" ")[0].toLowerCase()
            const ringColor =
                askCreator === creator
                    ? "ring-green-500"
                    : "ring-gray-300 hover:ring-gray-400"
            return (
                <a
                    className="cursor-pointer"
                    onClick={() => setAskCreator(creator)}
                    key={`avatar-${creator}`}
                >
                    <img
                        className={`w-8 h-8 p-[1.5px] object-cover rounded-full mr-1 ring-2 ${ringColor}`}
                        src={`/images/creators/${creator}.jpeg`}
                    />
                </a>
            )
        })
    }

    return (
        <div className={bgColor}>
            <div className="container mx-auto py-20 flex justify-center">
                <div>
                    <div className="flex justify-center mt-10 border max-w-fit rounded-xl shadow-xl flex-col">
                        <div className="w-full bg-zinc-100 h-7 flex justify-center items-center">
                            <p className="text-gray-500 text-sm font-semibold tracking-wide text-center underline decoration-dashed">
                                ASK SOMETHING
                            </p>
                        </div>
                        <div className="relative">
                            <input
                                type="search"
                                id="search"
                                className="block w-max p-6 border-none text-lg text-gray-800 border border-gray-300 rounded-lg focus:border-transparent focus:outline-none"
                                placeholder="How do I come up with startup ideas?"
                                required
                                size={50}
                                autoComplete={"off"}
                                onKeyDown={(event) => handleKeyDown(event)}
                                value={askInput}
                                onChange={(event) =>
                                    setAskInput(event.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="text-gray-500 text-base font-medium tracking-wide my-6">
                            Choose a creator
                        </p>
                        <div className="ml-4 flex">
                            {renderCreatorAvatars()}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-white shadow-xl text-gray-500 flex items-center text-lg border border-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2"
                        onClick={handleEnter}
                    >
                        <span className="mr-2">ENTER</span>
                        <CornerDownLeft size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}
