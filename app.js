let friendsList = [];
let elementoHTML = document.getElementById("listaAmigos")

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value
  if(nombreAmigo.replace(/\s/g,"") === ""){
    alert("Por favor, inserte un nombre.")
  }else{
    friendsList.push(nombreAmigo)
    mostrarListaAmigos()

  }
}

function mostrarListaAmigos(){
  let elementoHTML = document.getElementById('listaAmigos')
  elementoHTML.innerHTML = ""
  for(let i = 0; i <= friendsList.length - 1; i++){
    let li = document.createElement("li")
    li.innerHTML = friendsList[i]
    elementoHTML.appendChild(li)
  }
}



