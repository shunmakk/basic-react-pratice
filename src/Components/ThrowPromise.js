//promiseが終了したかを表すpromise変数
let flag = false;

export default function ThrowPromise () {
    
    //promiseが完了
    if(flag){
        return <p>正しく表示されました</p>;
    }

 //ロード中の場合はpromiseをスロー
    throw new Promise((resolve,reject) => { 
        //3000ミリ秒後に解決　（resolve）する処理
        setTimeout(() => {
            flag = true;
            resolve('susccess!');
        }, 3000);
    });
}