"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <main className="flex w-full h-screen justify-center items-center">
      <Button
        onClick={() => {
          setCount((count) => count + 1)
        }}
      >
        Clicked {count} time{count == 1 || "s"}
      </Button>
    </main>
  )
}
