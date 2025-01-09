import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectCountry() {
  return (
    <Select>
      <SelectTrigger className="w-full border-none outline-none ring-0 shadow-none  focus:ring-0">
        <SelectValue  placeholder={<span className="text-[16px] text-gray-400/90  font-inter">United States</span>}  />
      </SelectTrigger>
      <SelectContent className="text-black/50 transition-colors duration-300 cursor-pointer">
        <SelectGroup >
         
          <SelectItem value="United States" className="transition-colors duration-300 cursor-pointer ">United States</SelectItem>
          <SelectItem value="United Kingdom" className="transition-colors duration-300 cursor-pointer ">United Kingdom</SelectItem>
          <SelectItem value="Norway" className="transition-colors duration-300 cursor-pointer ">Norway</SelectItem>
          <SelectItem value="Netherlands" className="transition-colors duration-300 cursor-pointer ">Netherlands</SelectItem>
          <SelectItem value="Morocco" className="transition-colors duration-300 cursor-pointer ">Morocco</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
