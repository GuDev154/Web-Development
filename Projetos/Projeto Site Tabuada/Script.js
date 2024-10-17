function tabuada(){
    var numero = document.getElementById('numtxt')
    var tab = document.getElementById('seltab')
    if (numero.value.length == 0){
        window.alert('Por favor Digite um número!')
    }
    else{
      var n = Number(numero.value)
      tab.innerHTML=''
      for (var c =1; c<11;c++){
        let item = document.createElement('option')
        item.text=`${n} x ${c} = ${c*n}`
        tab.appendChild(item)
      }
}
}