import React, { Suspense } from 'react'
import ThrowPromise from './ThrowPromise'

const SuspenceSimple = () => {
  return (
    <Suspense fallback={<p>now Loading</p>}>
        <ThrowPromise/>
    </Suspense>
  )
}

export default SuspenceSimple;