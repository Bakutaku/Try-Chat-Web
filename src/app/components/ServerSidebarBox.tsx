import { Avatar, IconButton } from "@mui/material"
import Link from "next/link"

interface ChatRoomSidebarBoxData{
  link : string
  title : string
  menu : Function
}

/**
 * 文字を抜き出す
 * @param str 
 */
function stringAvatar(str : string){
  return str.split("")[0];
}

/**
 * チャットグループのサイドバー
 * @param 宛先とタイトル
 */
const ServerRoomSidebarBox = ({link,title,menu}: ChatRoomSidebarBoxData) => {
  return (
    <div onContextMenu={(e) => menu(e)} className='flex overflow-hidden items-center w-full mb-2 hover:bg-slate-600/30'>
      <Link href={link}><Avatar>{stringAvatar(title)}</Avatar></Link>
      <div className="p-1 w-full">
        <Link href={link}>{title}</Link>
      </div>
    </div>
  )
}

export default ServerRoomSidebarBox