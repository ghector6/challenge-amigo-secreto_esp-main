let friendsList = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value
  if(nombreAmigo.replace(/\s/g,"") === ""){
    alert("Por favor, inserte un nombre.")
  }else{
    friendsList.push(nombreAmigo)
    mostrarListaAmigos()

  }
  obtenerAmigo()
}

function mostrarListaAmigos(){
  let elementoHTML = document.getElementById('listaAmigos')
  elementoHTML.innerHTML = ""
  for(let i = 0; i <= friendsList.length - 1; i++){
    let li = document.createElement("li")
    li.innerHTML = friendsList[i]
    elementoHTML.appendChild(li)
  }
  limpiarInput()
}

function limpiarInput(){
  document.querySelector("#amigo").value = ""
}


function obtenerAmigo(){
  let randomIndex;
  if(friendsList.length === 0){
    alert("Debes ingresar un amigo")
  }else {
    randomIndex = Math.floor(Math.random() * friendsList.length)
  }
  return friendsList[randomIndex]
}

function sortearAmigo(){
  let resultado = obtenerAmigo()
  if(resultado){
    document.getElementById('listaAmigos').innerHTML = ""
    let elementoResultado = document.getElementById('resultado')
    elementoResultado.innerHTML = `El amigo sorteado es: ${resultado}`
  }else{
    let elementoResultado = document.getElementById('resultado')
    elementoResultado.innerHTML = ""
  }
}
