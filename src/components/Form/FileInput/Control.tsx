'use client'
import { ChangeEvent, ComponentProps } from "react"
import { useFileInput } from "./Root"

export type ControllProps = ComponentProps<"input">


export const Controll = ({multiple = false,...props}: ControllProps) => {
  const { id, onFilesSelected } = useFileInput()

  const handleFileSelected = (event:ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
        return
    }
    const files = Array.from(event.target.files)
    onFilesSelected(files,multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      multiple={multiple}
      onChange={handleFileSelected}
      id={id}
      {...props} />
  )
}