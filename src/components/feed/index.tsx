"use client"
import { useState } from "react"
import { Input } from "../ui/input"
import { FeedFilters } from "./filters"

export default function Feed() {
  const [filter, setFilter] = useState("trending")
  return (
    <div className="p-2 gap-2 max-w-[240px]">
      <div>
        <h2 className="mt-2 mb-1 scroll-m-20 text-lg font-semibold tracking-tight">
          Filters
        </h2>
        <FeedFilters setFilter={setFilter} filter={filter} />
      </div>
      <div>
        <h2 className="mt-2 mb-1 scroll-m-20 text-lg font-semibold tracking-tight">
          Tag
        </h2>
        <Input type="text" placeholder="Tag" />
      </div>
    </div>
  )
}
