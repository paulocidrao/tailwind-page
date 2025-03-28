import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className=" flex items-center gap-3 ">
      <img src="https://github.com/paulocidrao.png" alt="" className="w-10 h-10 rounded-full" />
      <div className="flex flex-1 truncate flex-col ">
        <span className="text-sm font-semibold text-zinc-700
        dark:text-zinc-100
        ">
          Paulo Cidrão
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400 ">
          paulocdrao.123@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button">
          <LogOut className="w-5 h-5 text-zinc-500"/>
      </Button>
    </div>
  )
}