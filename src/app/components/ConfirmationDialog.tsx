import { Button } from "@mui/material";
import { Dialog } from "@radix-ui/themes"
import { ReactNode } from "react"


interface ConfirmationDialogData{
  action : (flg : boolean) => void;  // 実行する内容
  btn : ReactNode;  // 表示するボタン
  title : string; // タイトル
  message : string;  // 内容
}


/**
 * 確認ダイアログ
 */
const ConfirmationDialog = ({btn,action,title,message}:ConfirmationDialogData) => {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          {btn}
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Title>
            {title}
          </Dialog.Title>
          <Dialog.Description>
            {message}
          </Dialog.Description>
          <div className="flex justify-end space-x-5 items-center mt-5">
            <Dialog.Close>
              <Button className="bg-green-500 hover:bg-green-400" variant="contained" onClick={() => action(true)}>追加</Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button className="bg-red-500 text-white hover:bg-red-400" onClick={() => action(false)}>キャンセル</Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}

export default ConfirmationDialog