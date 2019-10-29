var arrayMateriais = [ 'Caneta','Lápis','Borracha','Marca-Texto','Tesoura','Cola','Régua','Calculadora','Apontador','Corretivo'];

const materialEscolar = document.getElementById("materialEscolar");

arrayMateriais.forEach((material) => {
    option = new Option(material, material.toLowerCase());
    materialEscolar.options[materialEscolar.options.length] = option;
  });


function habilitarBotao() {
if ($('#nomeAluno').valid())
   ($('#gastarMaterial').valid());{
  document.getElementById("Button").disabled = false;
}
}
else{
  document.getElementById("Button").disabled=true;
}

$("#nomeAluno").focusout(function focusOutz(){
 habilitarBotao(); 
});

$("#gastarMaterial").focusout(function focusOutz(){
  habilitarBotao();
})