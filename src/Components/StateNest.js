import React, { useState } from 'react'

const StateNest = () => {

  //入れ子の配列をstateとして宣言
  const [form , setForm] = useState({
    name: '梶岡',
    adress: {
        prefecture: '広島県',
        city:  '広島市'
    }
  });

  //1段落の要素を更新するためのハンドラー
  const handleForm = e => {
      setForm({
          ...form,
          [e.target.name] : e.target.value
      });
  };

  //2段落の要素を更新するためのハンドラー
  const handleFormNest = e =>  {
      setForm({
          ...form,
          adress: {
              ...form.adress,
              [e.target.name]: e.target.value
          }
      });
  };

  const show = () => {
      console.log(`${form.name}(${form.adress.prefecture}・${form.adress.city})`);
  };

  return (
    <form>
        <div>
            <label htmlFor='name'>名前:</label>
            <input id="name"  name='name' onChange={handleForm} value={form.name}/>
        </div>
        <div>
            <label htmlFor='prefecture'>住所（都道府県）:</label>
            <input id="prefecture"  name='prefecture' onChange={handleFormNest} value={form.adress.prefecture}/>
        </div>
        <div>
            <label htmlFor='city'>住所（市区町村）:</label>
            <input id="city"  name='city' onChange={handleFormNest} value={form.adress.city}/>
        </div>
        <div>
            <button type='button' onClick={show}>送信</button>
        </div>
    </form>
  )
}

export default StateNest;