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
    <div className="pb-4 pt-0 gap-2 w-full flex">
      <div>
        <h2 className="mt-2 mb-1 scroll-m-20 text-md font-semibold tracking-tight">
          Filters
        </h2>
        <SelectFilter filter={filter} setFilter={setFilter} />
      </div>
      <div>
        <h2 className="mt-2 mb-1 scroll-m-20 text-md font-semibold tracking-tight">
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
