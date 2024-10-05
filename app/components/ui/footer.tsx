import { Button } from "@/app/components/ui/button"
import { Github, Linkedin } from "lucide-react"

import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full bg-slate-900 text-slate-200 py-8">
            <div className="container mx-auto flex flex-col items-center space-y-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-green-400">© 2024 Shrine Sigdel
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">Created using Next.js, TypeScript, and shadcn/ui</p>
                </div>
                <div className="flex space-x-6 mt-4">
                    <Button variant="ghost" size="lg" asChild className="hover:bg-slate-800">
                        <Link href="https://www.linkedin.com/in/shrine-sigdel-1a6884268/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-8 w-8 text-green-400" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="lg" asChild className="hover:bg-slate-800">
                        <Link href="https://github.com/ShrineSigdel" target="_blank" rel="noopener noreferrer">
                            <Github className="h-8 w-8 text-green-400" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </footer>
    )
}