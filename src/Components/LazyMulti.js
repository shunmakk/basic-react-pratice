import React from 'react'
import { Suspense ,lazy } from 'react'

const sleep = ms => new Promise(resolve => setTimeout(resolve,ms));

const LazyButton = lazy(() => sleep(4000).then(() => import('./LazyButton')));
const LazyButton2 = lazy(() => sleep(3000).then(() => import('./LazyButton2')))

const LazyMulti = () => {
  return (
    <Suspense fallback={<p></p>}>
        <LazyButton/>
        <LazyButton2/>
    </Suspense>
  )
}

export default LazyMulti