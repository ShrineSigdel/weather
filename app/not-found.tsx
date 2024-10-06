import { Button } from "@/app/components/ui/button"
import { CloudRainIcon, HomeIcon } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col items-center justify-center px-4">
            <CloudRainIcon className="h-24 w-24 text-green-400 mb-8 animate-bounce" />
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">404 - Page Not Found</h1>
            <p className="text-xl md:text-2xl text-slate-400 text-center mb-8">
                Oops! Looks like this forecast has evaporated. Try another place.
            </p>
            <Button asChild size="lg" className="bg-green-500 text-slate-900 hover:bg-green-400">
                <Link href="/">
                    <HomeIcon className="mr-2 h-5 w-5" />
                    Return to Homepage
                </Link>
            </Button>
            <p className="mt-8 text-sm text-slate-500 text-center">
                © 2024 NeonWeather. All rights reserved.
            </p>
        </div>
    )
}