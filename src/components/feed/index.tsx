"use client"

import HiveClient from "@/lib/hive-client"
import { Discussion, DiscussionQueryCategory } from "@hiveio/dhive"
import { useState } from "react"
import useSWR from "swr"
import { FeedFilters } from "./filters"

const client = HiveClient

async function fetchPosts(filter: string, tag: string) {
  if (!filter) return [] as Discussion[]

  const options = {
    limit: 100,
    ...(tag && { tag: tag }),
  }

  const posts = await client.database.getDiscussions(
    filter as DiscussionQueryCategory,
    options
  )

  return posts
}

export default function Feed() {
  const [filter, setFilter] = useState("")
  const [tag, setTag] = useState("")

  const queryKey = ["discussions", filter, tag]
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(queryKey, async () => await fetchPosts(filter, tag), {
    shouldRetryOnError: false,
  })

  let errorMessage = ""
  if (error) {
    console.log(error)
    if (typeof error?.jse_info === "object") {
      errorMessage = Object.values(error.jse_info).join("")
    }
  }

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
        posts && (
          <ul>
            {posts?.map((post) => {
              return <li key={post.id}>{post.title}</li>
            })}
          </ul>
        )
      )}
      {error && <p>{errorMessage ?? error.message}</p>}
    </div>
  )
}
