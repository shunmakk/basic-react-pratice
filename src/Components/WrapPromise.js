//promiseの結果を表示する

const WrapPromise = (promise) => {
  
    //promiseの状態管理(pending fullfilled, rejiected)
    let status = 'pending'

    //promiseから受けとったデータ
    let data;

    //元のPromiseに後処理
    let wrapper = promise.then(
      //成功時はstatusをfulfilled(成功), dataに取得したデータを設定
      result => {
       status = 'fullfilled';
       data = result;
      },
      //失敗時はstatusをrejiected,   dataにエラーオブジェクトを追加
      e => {
          status = 'rejiected';
          data =  e;
      }
    );

  return{
      get(){
          switch(status){
           case 'fullfilled':
               return data;    //成功時はデータを返す
            case 'rejiected':
                throw data;    //失敗時はデータをスロー
            case 'pending':   
               throw wrapper   //完了前はpromiseをスロー
            default:
                break;
          }
      }
  };
}

export default WrapPromise;