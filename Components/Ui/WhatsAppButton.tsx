"use client"

import Link from "next/link"

export default function WhatsAppButton() {
    // Replace with actual number. Format: CountryCode + Number (e.g., 254712345678)
    // No dashes, no plus signs.
    const phoneNumber = "254769466706"
    const message = "Hi, Stewart;m interested in your services."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
            aria-label="Chat on WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
            >
                <path d="M.057 24l1.687-6.163c-3.104-5.368-1.67-12.253 3.326-15.531C7.944-.151 16.037-1.353 21.056 2.016c4.603 3.09 5.679 10.143 2.502 14.887l-.055.082a10.297 10.297 0 0 1-8.312 4.673c-2.43.094-4.82-.417-6.958-1.468L.057 24z" fillRule="evenodd" />
                <path d="M12.015 2.518c5.44.022 9.878 4.453 9.878 9.882 0 2.478-1.688 4.773-4.148 5.768a8.033 8.033 0 0 0-3.692-1.258c-.53-.105-1.077-.145-1.62-.058-.722.115-1.432.327-1.928.604-.49.27-.852.617-1.09 1.127-.23.498-.363 1.058-.292 1.638.07.57.306 1.093.662 1.543l.115.132.06.07-.152-.086A9.914 9.914 0 0 1 2.146 12.4c.005-5.432 4.437-9.86 9.87-9.882zm-4.34 6.643c.12-.266.08-.553-.16-.763-.223-.195-.503-.314-.798-.31-.383.006-.757.14-1.045.398-.27.238-.45.568-.52 1.012-.132.83.036 1.95.84 3.09 1.05 1.488 2.653 2.766 4.318 3.528 1.406.642 2.3.69 3.045.57.77-.123 1.604-.81 1.66-1.745.034-.523-.21-1.02-.647-1.312-.416-.278-.962-.486-1.432-.614-.28-.076-.576-.08-1.018.143L11.5 13.43c-.22.11-.47.14-.71.075-.24-.065-.453-.2-.628-.387-.514-.548-1-1.22-1.348-1.98-.12-.26-.118-.548.016-.807l.388-.69c.14-.246.332-.423.46-.478z" fill="#FFF" fillRule="evenodd" />
            </svg>
            <span className="font-semibold hidden md:inline">Chat with us</span>
        </Link>
    )
}
