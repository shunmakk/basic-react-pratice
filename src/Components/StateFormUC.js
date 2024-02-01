import React, { useRef } from 'react'

const StateFormUC = () => {
//非制御コンポーネントによるフォーム管理
 
  //React要素への参照を準備
  const name = useRef(null);
  const age = useRef(null);

  //要素（参照経由）で入力値を準備
 const show = () => {
    console.log(`こんにちは ${name.current.value} (${age.current.value}歳)さん！`);
 }

  return (
    <form>
    {/* 準備した参照を書く要素に紐付け */}
    <div>
        <label htmlFor='name'>名前:</label>
        <input id="name" name="name" type="text" ref={name} defaultValue="立浪和義"/>
    </div>
    <div>
        <label htmlFor='age'>年齢:</label>
        <input id="age" name="age" type="number" ref={age} defaultValue="42"/>
    </div>
    <div>
        <button type="button" onClick={show}>送信</button>
    </div>
   </form>
  )
}

export default StateFormUC