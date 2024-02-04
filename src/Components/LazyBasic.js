import { Suspense, lazy } from 'react';

// msミリ秒の遅延を発生させるsleep関数
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// LazyButtonを遅延ロード
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));

const LazyBasic = () => {
  return (
    <Suspense fallback={<p>now loading</p>}>
      <LazyButton />
    </Suspense>
  );
}

export default LazyBasic;
