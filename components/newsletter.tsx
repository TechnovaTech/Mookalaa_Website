"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Newsletter() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-16 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-border/40 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <Mail size={24} className="text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-2">{t("newsletter.title")}</h2>
        <p className="text-muted-foreground mb-8">
          {t("newsletter.subtitle")}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder={t("newsletter.placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 bg-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg whitespace-nowrap"
          >
            {submitted ? (
              t("newsletter.subscribed")
            ) : (
              <>
                {t("newsletter.subscribe")}
                <ArrowRight size={18} className="ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
