const stopLight = document.querySelector('.stopLight');
const slow = document.querySelector('.slowLight');
const go = document.querySelector('.goLight');

setInterval(() => {

  setTimeout(() => {
    stopLight.style.backgroundColor ="red";
    slow.style.backgroundColor ="black";
  }, 1000)

  setTimeout(() => {
    stopLight.style.backgroundColor ="black";
    slow.style.backgroundColor ="yellow";
  }, 2000)


  setTimeout(() => {
    slow.style.backgroundColor ="black";
  }, 2500)

  setTimeout(() => {
    slow.style.backgroundColor ="yellow";
  }, 3000)

  setTimeout(() => {
    slow.style.backgroundColor ="black";
  }, 3500)

  setTimeout(() => {
    slow.style.backgroundColor ="yellow";
  }, 4000)

  setTimeout(() => {

    slow.style.backgroundColor ="black";
    go.style.backgroundColor ="green";
  }, 4500)

  setTimeout(() => {
    go.style.backgroundColor ="black";
    slow.style.backgroundColor ="yellow";
  }, 6000)

  setTimeout(() => {
    slow.style.backgroundColor ="black";
  }, 6500)

  setTimeout(() => {
    slow.style.backgroundColor ="yellow";
  }, 7000)

  setTimeout(() => {
    slow.style.backgroundColor ="black";
  }, 7500)

  setTimeout(() => {
    slow.style.backgroundColor ="yellow";
  }, 8000)

}, 9000)
