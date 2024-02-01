import React from 'react'
import { useState } from 'react';

const StateForm = () => {
    
    //フォームとして扱う値をstateとして宣言
    const [form, setForm] = useState({  
    name: '山田太郎',
    age: 18
    });

    //フォームの変更の要素をstateを反映
    const handleForm = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //[送信] ボタンをログにメッセージ出力
    const show = () =>{
        console.log(`こんにちは ${form.name} (${form.age}歳)さん！`);
    }

  return (
   <form>
    {/* stateの値を個々のフォーム要素に割り当て */}
    <div>
        <label htmlFor='name'>名前:</label>
        <input id="name" name="name" type="text" onChange={handleForm} value={form.name}/>
    </div>
    <div>
        <label htmlFor='age'>年齢:</label>
        <input id="age" name="age" type="text" onChange={handleForm} value={form.age}/>
    </div>
    <div>
        <button type="button" onClick={show}>送信</button>
    </div>
    <p>こんにちは、{form.name}({form.age}歳)さん</p>
   </form>
  )
}

export default StateForm;