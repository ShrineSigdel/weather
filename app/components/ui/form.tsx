'use client'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import React, { useState } from "react"

interface WeatherFormProps {
    onSearch: (location: string) => void
}


const WeatherForm: React.FC<WeatherFormProps> = ({ onSearch }) => {

    const [value, setValue] = useState<string>('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(value)
    };

    return (
        <form className="flex space-x-2 w-full max-w-md" onSubmit={handleSearch}>
            <Input
                className="flex-1 bg-slate-800 border-slate-700 text-slate-50 placeholder:text-slate-400"
                placeholder="Enter city or zip code"
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                type="text"
            />
            <Button type="submit" className="bg-green-500 text-slate-900 hover:bg-green-400" disabled={value===''}>Search</Button>
        </form>
    )
}

export default WeatherForm
