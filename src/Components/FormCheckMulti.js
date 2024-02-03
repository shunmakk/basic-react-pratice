import React, { useState } from 'react'

const FormCheckMulti = () => {
   
    //チェックボックス（複数選択）

    const [form , setForm] = useState({
      animal:['dog','hamster']
    });

    const handleFormMulti = e => {
        const fa = form.animal
        
        //チェック時は配列に値を追加、チェック解除時は削除
        if(e.target.checked){
            fa.push(e.target.value);
        }else{
            fa.splice(fa.indexOf(e.target.value),1)
        }

        setForm({
            ...form,
            [e.target.name]:  fa
        });
    };

    const show = e => {
        console.log(`好きな動物:${form.animal}`)
    }


  return (
    <form>
        <fieldset>
            <legend>好きな動物:</legend>
            <label htmlFor='animal_dog'>イヌ</label>
           <input id="animal_dog" name='animal' type="checkbox" value="dog" 
            checked={form.animal.includes('dog')} onchange={handleFormMulti} /><br/>
             <label htmlFor='animal_cat'>猫</label>
           <input id="animal_cat" name='animal' type="checkbox" value="cat" 
            checked={form.animal.includes('cat')} onchange={handleFormMulti} /><br/>
             <label htmlFor='animal_hamster'>ハムスター</label>
           <input id="animal_hamster" name='animal' type="checkbox" value="hamster" 
            checked={form.animal.includes('hamster')} onchange={handleFormMulti} /><br/>
        </fieldset>
        <button type="button" onClick={show}>送信</button>
    </form>
  )
}

export default FormCheckMulti