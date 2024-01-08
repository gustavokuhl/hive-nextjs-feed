"use client"

import Navbar from "@/components/navbar"
import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <main className="max-w-[700px] mx-auto min-h-screen">
      <Navbar />
    </main>
  )
}
