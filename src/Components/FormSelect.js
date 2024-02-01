import React, { useState } from 'react'

const FormSelect = () => {
 
    //stateの初期化
    const [form,setForm] = useState({
        animal: 'dog'
    });

    //選択ボックスの変更時に入力値をstateに反映
    const handleForm = e => {
        setForm({
         ...form,
         [e.target.name]: e.target.value
        });
    }

    //コンソールで出力
    const show = () => {
        console.log(`好きな動物 ${form.animal}`)
    }

  return (
    <form>
        <label htmlFor='animal'>好きな動物:</label>
        <select id="animal" name="animal" value={form.animal} onChange={handleForm}>
         <option value="dog">犬</option>
         <option value="cat">猫</option>
         <option value="pig">豚</option>
        </select>
        <button value="button" onClick={show}>送信</button>
    </form>
  )
}

export default FormSelect