"use client"
import { CornerDownLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import imagine from "../../data/imagine.json"
import { useGlobalContext } from "@/app/Context/store"
import { ActionTypes } from "@/app/Context/storeInterface"
import CreatorResponse from "./CreatorResponse"

interface Props {
    bgColor?: string
    askMode?: boolean
}

export default function AskSomething({ bgColor, askMode }: Props) {
    const router = useRouter()
    const { state, dispatch } = useGlobalContext()

    const handleEnter = () => {
        if (state.askSomething !== "") {
            router.push("/demo/ask")
        }
    }

    const handleKeyDown = (
        ev: KeyboardEvent | React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (ev.key === "Enter") {
            handleEnter()
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
    }, [])

    const renderCreatorAvatars = () => {
        return imagine.map((i) => {
            const creatorName = i.creator
            const ringColor =
                state.creatorName === creatorName
                    ? "ring-green-500"
                    : "ring-gray-300 hover:ring-gray-400"
            return (askMode && state.creatorName === creatorName) ||
                !askMode ? (
                <a
                    className="cursor-pointer"
                    onClick={() =>
                        dispatch({
                            type: ActionTypes.SET_CREATOR,
                            payload: {
                                creatorName,
                            },
                        })
                    }
                    key={`avatar-${creatorName}`}
                >
                    <img
                        className={`w-8 h-8 p-[1.5px] object-cover rounded-full mr-1 ring-2 ${ringColor}`}
                        src={`/images/creators/${creatorName.replace(
                            /\s/g,
                            ""
                        )}.jpeg`}
                    />
                </a>
            ) : (
                ""
            )
        })
    }

    return (
        <div className={bgColor}>
            <div
                className={`container mx-auto flex justify-center w-[500px] ${
                    !askMode ? "py-20" : ""
                }`}
            >
                <div className="w-full">
                    <div className="flex justify-center mt-10 border rounded-xl shadow-xl flex-col w-full">
                        <div className="w-full bg-zinc-100 h-7 flex justify-center items-center">
                            <p className="text-gray-500 text-sm font-semibold tracking-wide text-center">
                                {askMode ? "ASKING" : "ASK SOMETHING"}
                            </p>
                        </div>
                        <div className="w-full">
                            <input
                                type="search"
                                id="search"
                                className="block w-full p-6 border-none text-lg text-gray-800 border border-gray-300 rounded-lg focus:border-transparent focus:outline-none"
                                placeholder="How do I come up with startup ideas?"
                                required
                                autoComplete={"off"}
                                value={state.askSomething}
                                onKeyDown={(ev) => handleKeyDown(ev)}
                                onChange={(event) =>
                                    dispatch({
                                        type: ActionTypes.SET_ASK_SOMETHING,
                                        payload: {
                                            askSomething: event.target.value,
                                        },
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        {!askMode && (
                            <p className="text-gray-500 text-base font-medium tracking-normal">
                                Choose a creator
                            </p>
                        )}
                        <div className="ml-4 flex my-6 items-center">
                            {renderCreatorAvatars()}
                            {askMode && (
                                <p className="text-gray-800 text-base ml-3 font-medium tracking-tight">
                                    {state.creatorName} says
                                </p>
                            )}
                        </div>
                    </div>
                    {!askMode && (
                        <button
                            type="submit"
                            className="bg-white shadow-xl text-gray-500 flex items-center text-lg border border-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2"
                            onClick={handleEnter}
                        >
                            <span className="mr-2">ENTER</span>
                            <CornerDownLeft size={20} />
                        </button>
                    )}
                    {askMode && <CreatorResponse />}
                </div>
            </div>
        </div>
    )
}
