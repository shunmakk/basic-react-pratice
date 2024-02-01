import React, { useState } from 'react'

const FormRadio = () => {

   //stateを初期化
   const [form,setForm] = useState({
     os: 'window'
   });

   //ラジオボタン変更時に入力値をstateに更新
   const handleForm = e => {
       setForm({
           ...form,
           [e.target.name]: e.target.value
       })
   };

   //出力ログを表示
   const show = () => {
       console.log(`使用OS: ${form.os}`)
   }


  return (
     <form>
        <fieldset>
            <legend>使用OS</legend>
            <label htmlFor='os_win'>windows</label>
            <input id="os_win" name="os"  type="radio" value="windows" checked={form.os === 'windows'}  onChange={handleForm}/><br/>
            <label htmlFor='os_mac'>mac</label>
            <input id="os_mac" name="os"  type="radio" value="mac" checked={form.os === 'mac'}  onChange={handleForm}/><br/>
            <label htmlFor='os_lin'>Linux</label>
            <input id="os_lin" name="os"  type="radio" value="linux" checked={form.os === 'linux'}  onChange={handleForm}/><br/>
        </fieldset>
        <button type='button' onClick={show}>送信</button>
     </form>
  )
}

export default FormRadio