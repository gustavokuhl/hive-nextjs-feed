"use client"

import { usePathname } from "next/navigation"
import { ModeToggle } from "../ui/mode-toogle"

function getTitleForPath(path: string) {
  if (path === "/") return "Feed"
}

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="mt-2 px-2 md:mt-4 scroll-m-20 border-b pb-2 flex justify-between items-center">
      <h2 className="text-3xl font-semibold tracking-tight transition-colors">
        {getTitleForPath(pathname)}
      </h2>
      <ModeToggle />
    </nav>
  )
}
