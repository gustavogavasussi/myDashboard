var arrayMateriais = [ 'Caneta','Lápis','Borracha','Marca-Texto','Tesoura','Cola','Régua','Calculadora','Apontador','Corretivo'];

const materialEscolar = document.getElementById("materialEscolar");

arrayMateriais.forEach((material) => {
    option = new Option(material, material.toLowerCase());
    materialEscolar.options[materialEscolar.options.length] = option;
  });