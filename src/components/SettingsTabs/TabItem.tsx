'use client'
import * as Tabs from "@radix-ui/react-tabs";
import {motion} from "framer-motion"

export interface TabItemProps{
    valeu: string
    title: string
    isSelected?:boolean
}

export function TabItem({title,valeu,isSelected=false}:TabItemProps) {
    return (
        <Tabs.Trigger className="whitespace-nowrap outline-none group relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 dar" value={valeu}  >
            <span className="rounded group-focus-visible:ring-2
                group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4
                dark:text-zinc-400 dark:data-[state=active]:text-violet-300
                ">{title}</span>
            {isSelected && (
                <motion.div layoutId="ActiveTab" className="
                absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-zinc-300"></motion.div>
        )}
        </Tabs.Trigger>
    )
}