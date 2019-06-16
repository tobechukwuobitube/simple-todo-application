const h = document.createElement('h1')
const myvalue = document.createTextNode('Hello World!');
h.appendChild(myvalue)
document.querySelector('h1').appendChild(h)

let val = 5

while (val > 0) {
  console.log(val)
  val--
}