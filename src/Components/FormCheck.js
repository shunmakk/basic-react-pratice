import React, { useState } from 'react'

const FormCheck = () => {
  
     //チェックボックス（単一選択）
     const [form, setForm] = useState({
         agreement: true
     });
     
     const handleFormChecked = e => {
         setForm({
             ...form,
             [e.target.name] : e.target.checked
         })
     };

     const show = () => {
         console.log(`同意確認: ${form.agreement ? '同意' : '反対'}`)
     };

  return (
   <form>
       <label htmlFor='agreement'>同意します</label>
       <input id="agreement" name="agreement" type="checkbox" checked={form.agreement} onChange={handleFormChecked} /><br></br>
       <button type="button" onClick={show}>送信</button>
   </form>
  )
}

export default FormCheck