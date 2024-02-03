import React, { useState } from 'react';
import './StateTodo.css'

// Todo項目のidの最大値
let maxId = 0;
const StateTodo = () => {
  // 入力値(title), Todoリスト(todo)をstateで管理
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState([]);

  //次のソート方向（降順であればtrue）
  const [desc,setDesc]= useState(true);

  // テキストボックスの入力をstateに反映
  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    // 新規のTodoを追加
    setTodo([
      ...todo,
      {
        id: ++maxId, // id値
        title, // Todo本体
        created: new Date(), // 作成日時
        isDone: false // 実行済みか
      }
    ]);
  };

  //配列の更新　　Todoの済チェック
  const handleDone = e => {
      //todoを配列を走査し,id値が等しいものを検索
      setTodo(todo.map(item => {
         if(item.id === Number(e.target.dataset.id)){
             return{
              ...item,
              isDone: true
             };
         } else {
            return  item;
         }
      }));
  };

  //配列の削除
  const handleRemove = e => {
   setTodo(todo.filter(item => 
    //id値が一致しない要素を残す事で、削除ボタンが押されてた項目でけ消す
    item.id !== Number(e.target.dataset.id)
   ));
  };


  //ソート　（配列の並び替え）
  const handleSort = e => {
    //既存のリストを複製の上でソート
    const sorted = [...todo];
    sorted.sort((m ,n) => {
        //desc値に応じて昇順降順を決定
        if(desc){
            return  n.created.getTime() -  m.created.getTime();
        }else{
            return  m.created.getTime()  -  n.created.getTime();
        }
    });
    //desc値を反転
    setDesc(d => !d);
    //ソート済みのリストをリセット
    setTodo(sorted);
  };



  return (
    <div>
      <label>
        やること:
        <input type="text" name="title" value={title} onChange={handleChangeTitle} />
      </label>
      <button type="button" onClick={handleClick}>追加</button>
      <button type="button" onClick={handleSort}>ソート({desc ? `新しい順に変更` :`古い順に変更`})</button>
      <hr />
      <ul>
        {todo.map(item => (
          <li key={item.id} className={item.isDone ? 'done' : ''}>{item.title}
        <button type="button" onClick={handleDone} data-id={item.id}>済</button>
        <button type='button' onClick={handleRemove} data-id={item.id}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateTodo;
