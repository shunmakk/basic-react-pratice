import React from 'react';
import { Profiler } from 'react';
import HeavyUI from './HeavyUI';

const ProfilerBasic = () => {
    // パフォーマンス計測用の関数 (onRender関数)
    const handleMeasure = (id, phase, actualDuration, baseDuration, startTime, endTime) => {
        console.log('id:', id);
        console.log('phase:', phase);
        console.log('actualDuration:', actualDuration);
        console.log('baseDuration:', baseDuration);
        console.log('startTime:', startTime);
        console.log('endTime:', endTime);
    };

    return (
        <Profiler id="heavy" onRender={handleMeasure}>
            <HeavyUI delay={1500}/>
            <HeavyUI delay={4500}/>
            <HeavyUI delay={2000}/>
        </Profiler>
    );
};

export default ProfilerBasic;
