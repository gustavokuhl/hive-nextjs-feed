"use client"

import HiveClient from "@/lib/hive-client"
import { DiscussionQueryCategory } from "@hiveio/dhive"
import { useState } from "react"
import useSWR from "swr"
import { FeedFilters } from "./filters"

const client = HiveClient

async function fetchPosts(filter: string, tag: string | null) {
  const options = {
    limit: 100,
    ...(tag && { tag: tag }),
  }

  return await client.database.getDiscussions(
    filter as DiscussionQueryCategory,
    options
  )
}

export default function Feed() {
  const [filter, setFilter] = useState("trending")
  const [tag, setTag] = useState("")

  const queryKey = ["discussions", filter, tag]
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(queryKey, async () => await fetchPosts(filter, tag))

  return (
    <div className="p-2">
      <FeedFilters
        filter={filter}
        setFilter={setFilter}
        tag={tag}
        setTag={setTag}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts?.map((post) => {
            return <li key={post.id}>{post.title}</li>
          })}
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  )
}
