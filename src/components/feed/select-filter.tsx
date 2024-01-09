import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Dispatch, SetStateAction } from "react"

const options = [
  {
    value: "created",
    label: "Created",
  },
  {
    value: "trending",
    label: "Trending",
  },
  {
    value: "hot",
    label: "Hot",
  },
]

export interface SelectFilterProps {
  filter: string
  setFilter: Dispatch<SetStateAction<string>>
}

export function SelectFilter({ filter, setFilter }: SelectFilterProps) {
  return (
    <Select onValueChange={(value) => setFilter(value)} defaultValue={filter}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filters</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
