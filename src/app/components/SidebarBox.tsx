
import { IconButton } from "@mui/material";
import Link from "next/link";
import React, { ReactNode } from "react"

interface SidebarBoxData {
  icon : ReactNode; // 表示するicon
  title : string; // 横に表示する内容
  link : string;  // url
}

const SidebarBox = ({icon,title,link}:SidebarBoxData) => {
  return (
    <div className='flex overflow-hidden items-center w-full hover:bg-slate-200'>
      <IconButton href={link}>{icon}</IconButton>
      <div className="p-1 w-full">
        <Link href={link}>{title}</Link>
      </div>
    </div>
  )
}

export default SidebarBox