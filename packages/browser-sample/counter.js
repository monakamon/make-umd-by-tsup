import '../../libs/hoge/dist/index.js'

const hoge = new Hoge();
hoge.sayHello();
console.log(hoge.name);

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
