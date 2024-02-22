const foo = () => {
  var arr = []
  var i
  for (i = 0; i < 10; i++) {
    // console.log(i)
    arr[i] = function () {
      console.log(i)
    }
  }
  console.log(arr)
  return arr[0]
}
// foo()()
// var fn = null
// const go = () => {
//   var a = 2
//   function innergoo() {
//     console.log(c)
//     console.log(a)
//   }
//   fn = innergoo
// }
var fnn = () => {
  console.log(c)
}
const bar = () => {
  var c = 100
  fnn()
}

// go()
bar()
