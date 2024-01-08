"use client"
import { useState } from "react"
import { FeedFilters } from "./filters"

export default function Feed() {
  const [filter, setFilter] = useState("trending")
  return (
    <div>
      <h3 className="mt-2 mb-1 scroll-m-20 text-xl font-semibold tracking-tight">
        Filters
      </h3>
      <FeedFilters setFilter={setFilter} filter={filter} />
    </div>
  )
}
