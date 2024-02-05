function sleep(delay){
    let start = Date.now();
    while (Date.now() - start < delay);
}


//delyミリ秒の遅延を発生
export default function HeavyUI({delay}){
    sleep(delay);
    return <p>遅延は{delay}ミリ秒</p>
}