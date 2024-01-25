import React from "react"

export default function EmailForm() {
    return (
        <form>
            <div className="relative">
                <input
                    type="search"
                    id="search"
                    className="block w-max p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-transparent focus:ring-red-600 focus:outline-zinc-500"
                    placeholder="Enter your email"
                    required
                    size={30}
                    autoComplete={"off"}
                />
                <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-zinc-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                    Join
                </button>
            </div>
        </form>
    )
}
