import { CornerDownLeft, Plus, Twitter } from "lucide-react"
import React from "react"
import EmailForm from "../elements/EmailForm"

export default function AskSomething() {
    return (
        <div className="container mx-auto my-20 flex justify-center">
            <div>
                <div className="flex justify-center mt-10 border max-w-fit rounded-xl shadow-xl flex-col">
                    <div className="w-full bg-zinc-100 h-5 flex justify-center">
                        <p className="text-gray-400 text-sm font-semibold tracking-wide text-center">
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
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-white shadow-xl text-gray-400 flex items-center text-lg border border-gray-300 mt-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2"
                >
                    <span className="mr-2">ENTER</span>
                    <CornerDownLeft size={20} />
                </button>
            </div>
        </div>
    )
}
