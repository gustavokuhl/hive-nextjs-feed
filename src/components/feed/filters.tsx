import { Dispatch, SetStateAction } from "react"
import { Input } from "../ui/input"
import { SelectFilter, SelectFilterProps } from "./select-filter"

interface TagFilterProps {
  tag: string
  setTag: Dispatch<SetStateAction<string>>
}

export function FeedFilters({
  filter,
  setFilter,
  tag,
  setTag,
}: SelectFilterProps & TagFilterProps) {
  return (
    <div className="p-2 gap-2 max-w-[240px]">
      <div>
        <h2 className="mt-2 mb-1 scroll-m-20 text-lg font-semibold tracking-tight">
          Filters
        </h2>
        <SelectFilter filter={filter} setFilter={setFilter} />
      </div>
      <div>
        <h2 className="mt-2 mb-1 scroll-m-20 text-lg font-semibold tracking-tight">
          Tag
        </h2>
        <Input
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
        />
      </div>
    </div>
  )
}
