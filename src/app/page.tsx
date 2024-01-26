import Navigation from "./components/Navigation"
import ImagineAskingCreator from "./components/ImagineAskingCreator"
import Hero from "./components/Hero"
import MainContent from "./components/MainContent"

export default function Home() {
    return (
        <div className="flex flex-col justify-center">
            <div className="bg-sky-50 pb-24">
                <Navigation />
                <Hero />
                <ImagineAskingCreator />
            </div>
            <MainContent />
        </div>
    )
}
