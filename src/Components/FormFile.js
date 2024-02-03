import React, { useRef } from 'react'

const FormFile = () => {

   //ファイル入力ボックスの参照
   const file = useRef(null);

   //[送信]ボタンクリックでファイル情報をログ出力
   function show() {
       const fs = file.current.files;
       //取得したファイル群を順番に精査
       for(const f of fs){
           console.log(`ファイル群: ${f.name}`);
           console.log(`種類: ${f.type}`);
           console.log(`サイズ: ${Math.trunc(f.size / 1024)}KB`);
       }
   }

  return (
    <form>
        <input type="file" ref={file} multiple/>
        <button type='button' onClick={show}>送信</button>
    </form>
  )
}

export default FormFile