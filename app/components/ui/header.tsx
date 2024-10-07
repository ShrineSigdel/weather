import React from 'react'
import Link from 'next/link'
import { CloudRainIcon } from "lucide-react"
import { Button } from '@/app/components/ui/button'

const header = () => {

    return (
        <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-6 sm:px-20">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <CloudRainIcon className="h-8 w-8 text-green-500" />
                        <span className="inline-block font-bold hover:text-green-400 text-lg">NeonWeather</span>
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <Button variant="default" className='text-green-400'>
                    {new Date().toLocaleDateString()}
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default header