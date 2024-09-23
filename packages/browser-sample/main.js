import './style.css'
import '../../libs/hoge/dist/index.umd.js';


/*
const hoge = new Hoge();
hoge.sayHello();
console.log(hoge.name);
*/
console.log(window.Hoge);
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
