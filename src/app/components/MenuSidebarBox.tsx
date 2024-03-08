import { IconButton } from "@mui/material";
import { ReactNode } from "react";

interface SidebarBoxData {
  icon : ReactNode; // 表示するicon
  open : Function
}

/**
 * サイドバーのメニューicon
 * @param アイコンと処理
 */
const MenuSidebarBox = ({icon,open}:SidebarBoxData) => {
  return (
    <div>
      <IconButton onClick={() => open()}>
        {icon}
      </IconButton>
    </div>
  )
}

export default MenuSidebarBox