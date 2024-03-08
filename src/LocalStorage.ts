import { title } from "process";
import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";


const SERVER_LIST_KEY : string = "try-servers"; // サーバリストのkey
const SERVER_LIST_DEFALT_VALUE : ServerListType[] = [{  // サーバリストの初期値
  key: uuidv4(),
  title : "Game",
  url : "/",
}];


// TODO ページがリセットされるたびにLocalStorageがリセットされる問題ががある


/**
 * ServerListのLocalStorage操作用カスタムフック
 */
export const useServerList = () : [ServerListType[] , (data : ServerListType) => void] => {
  const [server,setServer] = useState<ServerListType[]>(SERVER_LIST_DEFALT_VALUE);


  // 初期化
  useEffect(() => {

    console.log("初期化");

    // LocalStrageから値を取得
    var data = localStorage.getItem(SERVER_LIST_KEY);

    // データを登録
    if(data){
      // データがある場合
      setServer(JSON.parse(data));
    }else{
      // データがなかった場合
      setServer(SERVER_LIST_DEFALT_VALUE);
    }
  },[]);

  // setServerが更新された場合
  useEffect(() => {
    
    console.log("更新");

    // LocalStrageを更新
    localStorage.setItem(SERVER_LIST_KEY,JSON.stringify(server));

  },[server]);

  const addServerList = useCallback(
    (data : ServerListType) => {
      
      // コピーを作成
      const temp : ServerListType[] = server.concat();

      // サーバを追加
      temp.push(data);

      // 更新
      setServer(temp);
    }
  ,[]);

  return [server,addServerList];
}