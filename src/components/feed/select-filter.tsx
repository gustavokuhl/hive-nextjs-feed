"use client"

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
    value: "trending",
    label: "Trending",
  },
  {
    value: "hot",
    label: "Hot",
  },
  {
    value: "new",
    label: "New",
  },
  {
    value: "active",
    label: "Active",
  },
  {
    value: "promoted",
    label: "Promoted",
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
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              // onClick={() => setFilter(option.value)}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
