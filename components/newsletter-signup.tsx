"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const NewsletterSignup = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and fashion
            tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input type="email" placeholder="Enter your email" className="flex-grow bg-white text-gray-900" />
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSignup

