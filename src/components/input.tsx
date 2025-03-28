import {twMerge} from "tailwind-merge"
import { ComponentProps } from "react";

type InputControlProps = ComponentProps<"input">;
type InputPrefixProps = ComponentProps<"div">
type InputRootProps = ComponentProps<"div">


export function Prefix(props:InputPrefixProps) {
  return (
    <div {...props} />
  )
}

export function Control(props:InputControlProps) {
  return (
    <input className="flex-1 outline-none border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 dark:placeholder-zinc-400 dark:text-zinc-100" {...props} />
  )
}


export function Root(props:InputRootProps) {
    return (
      <div className={twMerge(
        "flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm",
        "focus-within:ring-violet-100 focus-within:border-violet-300 focus-within:ring-4",
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
        props.className
      )} {...props}>
      </div>
    )
}



