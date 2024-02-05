
//promiseの結果を表示する
import WrapPromise from "./WrapPromise";


//promiseの状態を管理するオブジェクトを取得
const info = getInfo();

//promiseの状態に応じて結果を表示するコミット
const ThorwResult = () => {
  const result = info.get();
  return <p>{result}</p>;
};

//非同期でデータを取得するための関数
function getInfo(){
    return WrapPromise(new Promise((resolve,rejiect) => {
   //2000ms後に90%の確率で成功　失敗するメッセージを生成
   setTimeout(() => {
       if(Math.random() > 0.1){
           resolve('成功です')
       }else{
           rejiect('エラーです')
       }
   })
    }));
}

export default ThorwResult