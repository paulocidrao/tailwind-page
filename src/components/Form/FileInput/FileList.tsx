'use client'

import { CloudUpload, Trash2 } from "lucide-react"
import { useFileInput } from "./Root"
import { formatBytes } from "@/utils/formatBytes"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Button } from "@/components/Button"
import { FileItem } from "./FileItem"

export const FileList = () => {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate({
      
    })
  return (
    <div ref={parent} className="mt-4 space-y-4">
      {files.map((file) => {
        return (
          <FileItem name={file.name} size={file.size} key={file.name} state="error" />
        )
      })}
    </div>
  )
}