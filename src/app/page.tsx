import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/input";
import { Bold, ChevronDown, Italic, Link, List, ListOrderedIcon, Mail } from "lucide-react";
import * as FileInput from "@/components/Form/FileInput"
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { TextArea } from "@/components/Textarea";
import { Button } from "@/components/Button";
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col ">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:items-center pb-5 border-b border-zinc-200 dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg text-zinc-900 font-medium dark:text-zinc-100">Personal info </h2>
            <span className=" dark:text-zinc-400 text-sm text-zinc-500">Update your photo and personal details</span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">Cancel</Button>

            <Button type="submit" form="settings" > Save</Button>
          </div>
        </div>
        <form action="" id="settings" className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700">

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Paulo"/>
              </Input.Root>
              <div className="flex flex-col gap-3 lg:block">
                <label htmlFor="lastName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only" >
                Last name
              </label>
              <Input.Root>
                <Input.Control defaultValue="Cidrão"/>
              </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="Email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email address</label>
           
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500"/>
              </Input.Prefix>
                <Input.Control id="Email" type="email" defaultValue="paulo@email.com"/>
              </Input.Root>
              
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="photo" className="text-sm font-medium  text-zinc-700">Your photo
              <span className="text-sm font-normal text-zinc-500 mt-0.5 block">This will be displayed on your profile.</span>
            </label>
           
              <FileInput.Root className="flex lg:flex-row lg:items-start flex-col gap-5">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Controll/>
              </FileInput.Root>
              
          </div>
          <div className="lg:grid gap-3 flex flex-col lg:grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Role</label>
           
            <Input.Root>
                <Input.Control id="role" type="email" defaultValue="Owner"/>
              </Input.Root>
              
          </div>
          <div className="lg:grid gap-3 flex flex-col lg:grid-cols-form pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Country</label> 
            <Select placeholder="Choose a country">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>
          <div className="lg:grid gap-3 flex flex-col lg:grid-cols-form pt-5">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Timezone</label>  
            <Select placeholder="Select a timezone">
              <SelectItem value="PST" text="Pacific Standard Time (UTC−08:00)" />
              <SelectItem value="ASP" text="America São Paulo (UTC -03:00)" />
            </Select>
          </div>
           <div className="lg:grid gap-3 flex flex-col lg:grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium  text-zinc-700">Bio
              <span className="text-sm font-normal text-zinc-500 mt-0.5 block">Write your introduction</span>
            </label>
           
            <div className="space-y-3">
              <div className="lg:grid flex flex-col gap-3 lg:grid-cols-form">
                <Select placeholder="" defaultValue="Normal">
                  <SelectItem value="Normal" defaultChecked text="Normal Text" />
                  <SelectItem value="MD" text="MarkDown" />
                </Select>
                <div className="flex items-center gap-1">
                    <Button variant='ghost'type="button">
                      <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                    </Button>
                    <Button variant="ghost" type="button">
                      <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                    </Button>
                    <Button variant="ghost" type="button">
                      <Link className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                    </Button>
                    <Button variant="ghost" type="button">
                      <List className="w-4 h-4 text-zinc-500" strokeWidth={3}/>
                    </Button>
                    <Button variant="ghost" type="button">
                      <ListOrderedIcon className="w-5 h-5 text-zinc-500"/>
                    </Button>
                </div>
              </div>
              <TextArea id="bio" defaultValue="Im a front-end developer"/>
            </div>              
          </div>
           <div className="lg:grid gap-3 flex flex-col lg:grid-cols-form pt-5">
            <label htmlFor="projects" className="text-sm font-medium  text-zinc-700">Portifolio projects
              <span className="text-sm font-normal text-zinc-500 mt-0.5 block">Share a few snippets of your work</span>
            </label>
           
           <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList/>
                <FileInput.Controll multiple/>
              </FileInput.Root>
              
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
              <Button type="button" variant="outline">Cancel</Button>

            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </>
  );
}
