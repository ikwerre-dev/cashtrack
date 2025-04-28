"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [techNiche, setTechNiche] = useState("")
    const [employmentStatus, setEmploymentStatus] = useState("")
    const [income, setIncome] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className="min-h-screen flex items-center py-[5rem] justify-center bg-[#4c27ae] p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-black p-8 rounded-3xl w-full max-w-5xl"
            >
                <Link href="/" className="text-white text-xl font-bold mb-8 block text-center">CASH-TRACK</Link>

                <h1 className="text-white text-3xl font-bold mb-8 text-center">Create Account</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#6B3EE8]"
                                required
                            />
                        </div>

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

                        <div>
                            <label htmlFor="techNiche" className="block text-white mb-2">Tech Niche</label>
                            <select
                                id="techNiche"
                                value={techNiche}
                                onChange={(e) => setTechNiche(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#6B3EE8]"
                                required
                            >
                                <option value="">Select your tech niche</option>
                                <option value="frontend">Frontend Development</option>
                                <option value="backend">Backend Development</option>
                                <option value="fullstack">Full Stack Development</option>
                                <option value="mobile">Mobile Development</option>
                                <option value="devops">DevOps Engineering</option>
                                <option value="ai">AI/ML Engineering</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="employmentStatus" className="block text-white mb-2">Employment Status</label>
                            <select
                                id="employmentStatus"
                                value={employmentStatus}
                                onChange={(e) => setEmploymentStatus(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#6B3EE8]"
                                required
                            >
                                <option value="">Select your employment status</option>
                                <option value="employed">Employed</option>
                                <option value="selfEmployed">Self Employed</option>
                                <option value="freelancer">Freelancer</option>
                                <option value="student">Student</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="income" className="block text-white mb-2">Average Annual Income</label>
                            <select
                                id="income"
                                value={income}
                                onChange={(e) => setIncome(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#6B3EE8]"
                                required
                            >
                                <option value="">Select your income range</option>
                                <option value="50000-100000">₦50,000 - ₦100,000</option>
                                <option value="100000-500000">₦100,000 - ₦500,000</option>
                                <option value="500000-1000000">₦500,000 - ₦1,000,000</option>
                                <option value="1000000-5000000">₦1,000,000 - ₦5,000,000</option>
                                <option value="5000000+">₦5,000,000+</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#ED7E02] text-white font-bold py-3 rounded-xl hover:bg-[#ff8c00] transition-colors mt-6"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-gray-400 text-center mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#6B3EE8] hover:text-[#8b5cf6]">
                        Sign In
                    </Link>
                </p>
            </motion.div>
        </div>
    )
}