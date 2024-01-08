"use client"
import { useState } from "react"
import { FeedFilters } from "./filters"

export default function Feed() {
  const [filter, setFilter] = useState("trending")
  const [tag, setTag] = useState("")
  return (
    <>
      <FeedFilters
        filter={filter}
        setFilter={setFilter}
        tag={tag}
        setTag={setTag}
      />
    </>
  )
}
