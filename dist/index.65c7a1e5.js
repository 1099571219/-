let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string2 = '';
let string = `/*来自一名前端开发者，小郑
*我将在这画一个太极八卦图
*为此首先需要一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来需要将其变成圆
*添加黑白两色
*/
#div1{
    border-radius:50%;
    background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    box-shadow:0 0 5px rgba(0,0,0,0.5);
    border:none;
}
/*接下来需要添加黑白双鱼点*/
#div1::before{
    display: block;
    position:absolute;
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}
#div1::after{
    display: block;
    position:absolute;
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === '\n') string2 += '<br>';
        else if (string[n] === ' ') string2 += '&nbsp';
        else string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        console.log(n);
        console.log(string2);
        n = n + 1;
        if (n < string.length) step();
    }, 0);
};
step();

//# sourceMappingURL=index.65c7a1e5.js.map
