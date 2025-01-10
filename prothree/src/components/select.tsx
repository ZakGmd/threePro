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
      <SelectTrigger className="w-full border-l-[0.5px] border-b-0    border-[#E6E6E6] rounded-tl-[8px] rounded-bl-none rounded-br-none shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.3px_0.3px_rgba(0,0,0,0.1)] outline-none ring-0   focus:ring-0">
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
