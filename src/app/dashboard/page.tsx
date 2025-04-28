"use client"

import Sidebar from "@/components/Sidebar"
import { useState } from "react"
import Image from "next/image"

interface Fund {
    id: string
    name: string
    type: string
    balance: number
    returns: number
    allocation: number
}

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("dashboard")
    const [selectedTimeframe, setSelectedTimeframe] = useState("6month")

    const [funds] = useState<Fund[]>([
        {
            id: '1',
            name: 'Growth Fund',
            type: 'Equity',
            balance: 25000.00,
            returns: 12.5,
            allocation: 45
        },
        {
            id: '2',
            name: 'Balanced Fund',
            type: 'Hybrid',
            balance: 15000.00,
            returns: 8.2,
            allocation: 30
        },
        {
            id: '3',
            name: 'Debt Fund',
            type: 'Fixed Income',
            balance: 10000.00,
            returns: 6.5,
            allocation: 25
        }
    ])

    const totalPortfolio = funds.reduce((acc, fund) => acc + fund.balance, 0)

    return (
        <div className="flex h-screen bg-[#0F0F16] text-white p-4">
            <Sidebar />

            <div className="flex-1 overflow-auto">
                <header className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <p className="text-[#6C6C7D] text-sm">Track and control all your savings!!</p>
                    </div>

                    <div className="flex items-center gap-2 bg-[#1E1E2D] rounded-full px-4 py-2">

                        <div className="h-8 w-8 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-medium">
                            MN
                        </div>
                        <div>
                            <p className="text-sm font-medium">Malvika N.</p>
                            <p className="text-xs text-[#6C6C7D]">@malvi34</p>
                        </div>

                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Portfolio Performance Card */}
                    <div className="bg-[#131320] rounded-3xl overflow-hidden p-6">
                        <div className="flex flex-row items-center justify-between mb-6">
                            <h2 className="text-xl font-bold">Portfolio Performance</h2>
                            <div className="relative">
                                <select
                                    className="appearance-none bg-transparent border border-[#1E1E2D] rounded-xl px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                                    value={selectedTimeframe}
                                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                                >
                                    <option value="6month">Last 6 Month</option>
                                    <option value="3month">Last 3 Month</option>
                                    <option value="1month">Last Month</option>
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <p className="text-[#6C6C7D]">Total Portfolio Value</p>
                                <div className="flex items-center gap-3">
                                    <h2 className="text-4xl font-bold">${totalPortfolio.toLocaleString()}</h2>
                                    <span className="px-2 py-1 text-xs rounded-full bg-[#1A4D1A] text-[#4ADE80]">+8.5%</span>
                                </div>
                            </div>

                            <div className="h-40 relative">
                                {/* Chart component would go here */}
                                <div className="absolute inset-0">
                                    <svg viewBox="0 0 400 100" className="w-full h-full">
                                        <path
                                            d="M0,50 C20,40 40,60 60,50 C80,40 100,60 120,50 C140,40 160,60 180,50 C200,40 220,60 240,50 C260,40 280,60 300,50 C320,40 340,60 360,50 C380,40 400,60 400,50"
                                            fill="none"
                                            stroke="#CCFF00"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[#6C6C7D] text-xs">
                                    <span>Jan</span>
                                    <span>Feb</span>
                                    <span>Mar</span>
                                    <span>Apr</span>
                                    <span>May</span>
                                    <span>Jun</span>
                                </div>
                                <div className="absolute top-0 right-0 bottom-0 flex flex-col justify-between text-[#6C6C7D] text-xs">
                                    <span>1000</span>
                                    <span>800</span>
                                    <span>600</span>
                                    <span>400</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Key Metrics</h3>
                                <p className="text-sm text-[#6C6C7D] mb-4">Portfolio performance indicators</p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span>Annual Returns</span>
                                        <span className="font-semibold">9.8%</span>
                                    </div>
                                    <div className="h-px bg-[#1E1E2D]"></div>

                                    <div className="flex justify-between items-center">
                                        <span>Risk Level</span>
                                        <span className="font-semibold">Moderate</span>
                                    </div>
                                    <div className="h-px bg-[#1E1E2D]"></div>

                                    <div className="flex justify-between items-center">
                                        <span>Sharpe Ratio</span>
                                        <span className="font-semibold">1.2</span>
                                    </div>
                                    <div className="h-px bg-[#1E1E2D]"></div>

                                    <div className="flex justify-between items-center">
                                        <span>Beta</span>
                                        <span className="font-semibold">0.85</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fund Cards */}
                    <div className="bg-[#131320] rounded-3xl overflow-hidden p-6">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold">My Funds</h2>
                        </div>

                        <div className="space-y-4">
                            {funds.map((fund) => (
                                <div key={fund.id} className="bg-[#1E1E2D] rounded-2xl p-4">
                                    <div className="flex justify-between items-center mb-3">
                                        <div>
                                            <h3 className="font-medium">{fund.name}</h3>
                                            <p className="text-sm text-[#6C6C7D]">{fund.type}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold">${fund.balance.toLocaleString()}</p>
                                            <p className="text-sm text-[#4ADE80]">+{fund.returns}%</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-[#131320] rounded-full h-2">
                                        <div
                                            className="bg-[#4169E1] h-2 rounded-full"
                                            style={{ width: `${fund.allocation}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-[#6C6C7D] mt-2">{fund.allocation}% of portfolio</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Asset Allocation */}
                    <div className="bg-[#131320] rounded-3xl overflow-hidden p-6">
                        <div className="flex flex-row items-center justify-between mb-6">
                            <h2 className="text-xl font-bold">Asset Allocation</h2>
                            <div className="relative">
                                <select
                                    className="appearance-none bg-transparent border border-[#1E1E2D] rounded-xl px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                                    value={selectedTimeframe}
                                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                                >
                                    <option value="6month">Last 6 Month</option>
                                    <option value="3month">Last 3 Month</option>
                                    <option value="1month">Last Month</option>
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 9L12 15L18 9"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-48">
                                {/* Pie chart would go here */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg width="180" height="180" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#333" strokeWidth="20" />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="transparent"
                                            stroke="#4169E1"
                                            strokeWidth="20"
                                            strokeDasharray="251.2"
                                            strokeDashoffset="138.16"
                                        />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="transparent"
                                            stroke="#CCFF00"
                                            strokeWidth="20"
                                            strokeDasharray="251.2"
                                            strokeDashoffset="175.84"
                                            transform="rotate(112.8 50 50)"
                                        />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="transparent"
                                            stroke="#555"
                                            strokeWidth="20"
                                            strokeDasharray="251.2"
                                            strokeDashoffset="188.4"
                                            transform="rotate(239.4 50 50)"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-sm font-medium">Other</div>
                                            <div className="text-lg font-bold">25.00%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold">Total Assets</h3>
                                    <div className="text-3xl font-bold">${totalPortfolio.toLocaleString()}</div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#4169E1]"></div>
                                        <span>Equity</span>
                                        <span className="ml-auto font-semibold">45%</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#CCFF00]"></div>
                                        <span>Hybrid</span>
                                        <span className="ml-auto font-semibold">30%</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#555555]"></div>
                                        <span>Fixed Income</span>
                                        <span className="ml-auto font-semibold">25%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="bg-[#131320] rounded-3xl overflow-hidden p-6">
                        <div className="flex flex-row items-center justify-between mb-6">
                            <h2 className="text-xl font-bold">Recent Fund Activity</h2>
                            <button className="text-[#6C6C7D] hover:text-white transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor" stroke="currentColor" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#1E1E2D] rounded-xl flex items-center justify-center text-[#4ADE80]">↑</div>
                                <div className="flex-1">
                                    <p className="text-white">Investment in Growth Fund</p>
                                    <p className="text-xs text-[#6C6C7D]">2 days ago</p>
                                </div>
                                <p className="text-[#4ADE80]">+$5,000.00</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#1E1E2D] rounded-xl flex items-center justify-center text-[#F87171]">↓</div>
                                <div className="flex-1">
                                    <p className="text-white">Withdrawal from Debt Fund</p>
                                    <p className="text-xs text-[#6C6C7D]">5 days ago</p>
                                </div>
                                <p className="text-[#F87171]">-$2,000.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
