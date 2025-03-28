'use client'
import * as Select from "@radix-ui/react-select";
import { Check } from "lucide-react";
export type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export const SelectItem = ({text,...props}:SelectItemProps) => {
  return (
    <Select.Item {...props} className="flex outline-none items-center gap-2 py-2.5 px-3 data-[highlighted]:bg-zinc-50 justify-between dark:data-[highlighted]:bg-zinc-700">
      <Select.ItemText asChild>
        <span className="text-black dark:text-zinc-100">
        {text}
        </span>
      </Select.ItemText>
        <Select.ItemIndicator>
          <Check className="h-4 w-4 text-violet-500 dark:text-violet-300"/>
        </Select.ItemIndicator>
    </Select.Item>
  );
}