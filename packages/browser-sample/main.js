import './style.css'

import { setupCounter } from './counter.js'


/*
const hoge = new Hoge();
hoge.sayHello();
console.log(hoge.name);
*/

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
