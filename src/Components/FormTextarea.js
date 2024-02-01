import React, { useState } from 'react'


const FormTextarea = () => {
    
   //stateを初期化
   const [form ,setForm]= useState({
    comment: '様々な要素....'
   });

   //テキストエリアの変更時に入力値をstateに反映
   const handleForm = e => {
       setForm({
           ...form,
           [e.target.name]: e.target.value
       })
   }

   //入力値をログ出力
   const show = () =>{
       console.log(`コメント:${form.comment}`);
   }


  return (
   <form>
       <label htmlFor='comment'>コメント:</label><br/>
       <textarea id="comment" name="comment" cols="30" rows="7" value={form.comment} onChange={handleForm}></textarea><br/>
       <button type='button' onClick={show}>送信</button>
   </form>
  )
}

export default FormTextarea