"use client"

import { useState } from "react"
import Button from "@/Components/Ui/Button"
import { submitToGoogleSheets } from "./actions"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")

    const formData = new FormData(e.currentTarget)
    const result = await submitToGoogleSheets(formData)

    if (result.success) {
      setStatus("success")
    } else {
      setStatus("error")
      setErrorMessage(result.message)
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm animate-fade-in">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white">Message Sent!</h3>
        <p className="mt-2 text-gray-400">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-md md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={status === "submitting"}
            placeholder="John Doe"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={status === "submitting"}
            placeholder="john@example.com"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-gray-300">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          disabled={status === "submitting"}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 [&>option]:bg-zinc-900 disabled:opacity-50"
        >
          <option value="project">Start a Project</option>
          <option value="collaboration">Collaboration</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={status === "submitting"}
          placeholder="Tell me about your project..."
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-50"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      )}

      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        style={{ display: "none" }}
      />

      <div className="pt-2">
        <Button type="submit" className="w-full py-4 text-base" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  )
}
