"use server"

import { z } from "zod"

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
    _gotcha: z.string().optional(), // Honeypot field
})

export async function submitToGoogleSheets(formData: FormData) {
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        _gotcha: formData.get("_gotcha"),
    }

    // Zod Validation
    const validationResult = contactSchema.safeParse(rawData)

    if (!validationResult.success) {
        return {
            success: false,
            message: validationResult.error.issues[0].message,
        }
    }

    const { name, email, subject, message, _gotcha } = validationResult.data

    // Honeypot Spam Check
    if (_gotcha) {
        // Silently fail for bots
        return { success: true, message: "Message sent successfully" }
    }

    const scriptURL = process.env.GOOGLE_SHEETS_WEB_APP_URL

    // Log whether the env var is present (do not log the full URL)
    try {
        console.log("DEBUG: GOOGLE_SHEETS_WEB_APP_URL present:", !!process.env.GOOGLE_SHEETS_WEB_APP_URL)
    } catch (e) {
        // Ignore logging errors in constrained runtimes
    }

    if (!scriptURL) {
        console.error("GOOGLE_SHEETS_WEB_APP_URL is not set")
        return {
            success: false,
            message:
                "Server configuration error: GOOGLE_SHEETS_WEB_APP_URL is not set. Ensure .env.local or your host env vars include this key and restart the dev server.",
        }
    }

    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                message,
            }),
        })

        const result = await response.json()

        if (result.status === "success") {
            return { success: true, message: "Message sent successfully" }
        } else {
            console.error("Google Sheets Error:", result)
            return { success: false, message: "Failed to send message" }
        }
    } catch (error) {
        console.error("Submission Error:", error)
        return { success: false, message: "Network error occurred" }
    }
}
