//promiseの結果を表示する
import React, { Suspense } from 'react'
import ThorwResult from './ThorwResult';

const SuspenceResult = () => {
  return (
   <Suspense fallback={<p>ローディング中です</p>}>
       <ThorwResult/>
   </Suspense>
  )
}

export default SuspenceResult;