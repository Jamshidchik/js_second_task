var son = +prompt( "Son kiriting:")
while (isNaN(son) || son == 0  ) {
    son = +prompt("Bu son emas Iltimos son kriting:")
}

var daraja = +prompt( "Daraja kiriting:")
while (isNaN(daraja) || daraja == 0  ) {
    daraja = +prompt("Bu daraja emas Iltimos daraja kriting:")
}

let box =1
for (let   i=0;  i<daraja && son; i++) {
  box *= son
  console.log(box);
}
alert( "Javob " + box )
alert("Tashakkur siz to'g'ri javob berdingiz")



  