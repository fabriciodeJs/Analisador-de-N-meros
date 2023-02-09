var entrada = document.getElementById("entrada");
var saidaSelect = document.getElementById("saida");
var saidaCalculo = document.getElementById("saidaCalculo");
let lista = [];

function adicionar() {

  let n1 = Number(entrada.value);

  if (verificar(entrada, lista) == true) {
    if (entrada.value.length == "") {
      window.alert("Prencha com algum número!");
    } else if (n1 < 1 || n1 > 100) {
      window.alert("Digite um número menor que 1 e maior 100");
    } else {
      lista.push(Number(n1));
      let option = document.createElement("option");
      option.text = `Valor ${n1} Adicionado`;
      saidaSelect.appendChild(option);
      saidaCalculo.innerHTML ='';
    }

  }
  entrada.value = '';
}

function verificar(valor, array) {
  

  let validar = array.indexOf(Number(valor.value));

  if (validar != -1) {
    window.alert('Valor já existe!');
    return false;
  } else {
    return true;
  }

}

function finalizar() {
  if (lista.length != '') {
    let p = document.createElement('p');
    let soma = 0;

    for (let i in lista) {
      soma += lista[i];
    }

    let media = soma / lista.length;
    
    p.innerText = `Ao todo, temos ${lista.length} números cadastrados.
                \n O maior valor informado foi ${Math.max(...lista)}
                \n O menor valor informado foi ${Math.min(...lista)}
                \n Somando todos os valores temos ${soma}
                \n A média dos valores digitados é ${media}`;


    saidaCalculo.appendChild(p);
  } else {
    window.alert('Prencha com algum número!');
  }
}