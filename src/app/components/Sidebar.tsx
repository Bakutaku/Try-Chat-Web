"use client"
import SidebarBox from './SidebarBox';
import HomeIcon from '@mui/icons-material/Home';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion";
import { useState } from 'react';
import MenuSidebarBox from './MenuSidebarBox';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ServerListAddDialog from './ServerListAddDialog';
import { IconButton } from '@mui/material';
import { useServerList } from '@/LocalStorage';
import ServerRoomSidebarBox from './ServerSidebarBox';

const Sidebar = () => {
  // 開いているか閉じているか保存する用
  const [isOpen,setIsOpen] = useState(false);

  // サーバリスト
  const [servers,addServer] = useServerList();

  // 内容反転
  const openSidbar = () => setIsOpen(!isOpen);

  // 右クリック時の処理(サーバーの)
  const serverMenu = (e : React.MouseEvent<HTMLDivElement,MouseEvent>) => {
    e.preventDefault();
    console.log("ログ");
  }


  return (
    <motion.div 
      className='rounded-3xl w-14 p-0.5 whitespace-nowrap'
      animate={{width: isOpen ? "100%" : "56px",backgroundColor: isOpen ? "rgb(248 250 252 / 0.5)" : "rgb(248 250 252 / 0.2)"}}
    >
      <div className='flex flex-col justify-center'>
        <MenuSidebarBox icon={<MenuIcon fontSize='large'/>} open={openSidbar} /> {/* メニューボタン */}
        <div className='border-b-2 border-gray-600 mx-2'></div> {/* ボーダー */}
        <SidebarBox icon={<HomeIcon fontSize='large' />} title='Home' link="/" /> {/* ホームボタン */}
        <SidebarBox icon={<LocalPostOfficeIcon fontSize='large'/>} title='Post' link="post"/> {/* 投稿ボタン */}
        <SidebarBox icon={<PeopleAltRoundedIcon fontSize='large'/>} title='Friend' link="friend"/> {/* 投稿ボタン */}
        <div className='border-b-2 border-gray-600 mx-2'></div> {/* ボーダー */}
        <div className='overflow-y-scroll hidden-scrollbar max-h-80 m-1.5 bg-slate-600/20 rounded-3xl pt-2'>
          {servers.map((val) => (
            <ServerRoomSidebarBox key={val.key} link={val.url} title={val.title} menu={serverMenu}></ServerRoomSidebarBox>
          ))}
        </div>
        <div className='flex flex-col justify-center items-center'>
          <ServerListAddDialog btn={<IconButton><AddCircleRoundedIcon fontSize='large' /></IconButton>} />  {/* サーバ追加ボタン */}
        </div>
      </div>
    </motion.div>
  )
}

export default Sidebar