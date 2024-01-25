import Navigation from "./components/Navigation"
import ImagineAskingCreator from "./components/ImagineAskingCreator"
import Hero from "./components/Hero"

export default function Home() {
    return (
        <div className="flex flex-col justify-center">
            <Navigation />
            <Hero />
            <ImagineAskingCreator />
        </div>
    )
}
