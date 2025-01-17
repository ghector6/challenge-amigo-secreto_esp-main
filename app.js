let friendsList = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value
  if(nombreAmigo.replace(/\s/g,"") === ""){
    alert("Por favor, inserte un nombre.")
  }
}
