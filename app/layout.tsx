import '@/app/globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-slate-950 text-slate-50 py-2 sm:py-6">
                {children}
            </body>
        </html >
    )
}