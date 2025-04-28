"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#4c27ae] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black p-8 rounded-3xl w-full max-w-md"
      >
        <Link href="/" className="text-white text-xl font-bold mb-8 block text-center">CASH-TRACK</Link>
        
        <h1 className="text-white text-3xl font-bold mb-8 text-center">Welcome Back!</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#6B3EE8]"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#6B3EE8]"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#ED7E02] text-white font-bold py-3 rounded-xl hover:bg-[#ff8c00] transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#6B3EE8] hover:text-[#8b5cf6]">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  )
}