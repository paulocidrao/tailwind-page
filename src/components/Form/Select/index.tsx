"use client"
import * as SelectPrimitive from "@radix-ui/react-select";
import {  ChevronDown } from "lucide-react";
import { ReactNode } from "react";

export interface SelectProps extends SelectPrimitive.SelectProps{
  children: ReactNode
  placeholder:string  
}


export const Select = ({children,placeholder,...props}:SelectProps) => {
  return (
    
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        className="flex h-11 w-full gap-2 border border-zinc-300    rounded-lg px-3 py-2 shadow-sm justify-between items-center data-[placeholder]:text-zinc-600 outline-none focus:ring-violet-100  focus:border-violet-300 focus:ring-4 'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400">
        <SelectPrimitive.Value placeholder={placeholder} className="text-black"/>
            <SelectPrimitive.Icon>
             <ChevronDown className="w-5 h-5 text-zinc-500"/>
            </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content side="bottom" sideOffset={8} position="popper" className="z-10 rounded-lg border overflow-hidden border-zinc-300 bg-white w-[--radix-select-trigger-width] animate-slideDownAndFade dark:bg-zinc-800
        dark:border-zinc-700
        ">
          <SelectPrimitive.Viewport >
           {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
     </SelectPrimitive.Root>
  )
}