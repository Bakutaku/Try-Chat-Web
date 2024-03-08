import { Button, TextField } from "@mui/material"
import { Dialog } from "@radix-ui/themes"
import { ReactNode, useState } from "react"
import ConfirmationDialog from "./ConfirmationDialog"
import { useServerList } from "@/LocalStorage"
import { v4 as uuidv4 } from "uuid";

interface serverlistDialog{
  btn : ReactNode // 表示するボタン
}

/**
 * サーバリストの追加ダイアログ
 */
const ServerListAddDialog = ({btn}:serverlistDialog) => {
  const [name,setName] = useState("");  // 入力された名前格納用
  const [url,setUrl] = useState("");  // 入力されたURL格納用

  const [server,addServerList] = useServerList();

  // 入力リセット用
  const reset = () =>{
    setName("");
    setUrl("");
  }

  // サーバを追加
  const addServer = (flg:boolean) => {
    
    // 追加するか否か
    if(flg){
      // 追加
      addServerList({
        key: uuidv4(),
        title: name,
        url: url,
      });

      // 入力リセット
      reset();
    }
  }

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          {btn}
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>
            Serverを追加
          </Dialog.Title>
          <Dialog.Description>
            Server名とURLを入力することでアクセスできるサーバを追加できます。
          </Dialog.Description>
          <div className="flex flex-col space-y-3 mt-5">
            <TextField value={name} label="Name" onChange={(e) => setName(e.target.value)}></TextField>
            <TextField value={url} label="URL" onChange={(e) => setUrl(e.target.value)}></TextField>
          </div>
          <div className="flex justify-end space-x-5 items-center mt-5">
            <Dialog.Close>
              <ConfirmationDialog btn={<Button className="bg-green-500 hover:bg-green-400" variant="contained" >追加</Button>} title="タイトル" message="メッセージ" action={addServer} />
            </Dialog.Close>
            <Dialog.Close>
              <Button className="bg-red-500 text-white hover:bg-red-400">キャンセル</Button>
            </Dialog.Close>
          </div>

        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}

export default ServerListAddDialog