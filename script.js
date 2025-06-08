// Atividade 01 Triangulos

let tri_x = document.querySelector("#tri_x");
let tri_y = document.querySelector("#tri_y");
let tri_z = document.querySelector("#tri_z");

let btn_verificar = document.querySelector("#btn_verificar");

let result_triangulos = document.querySelector("#result_triangulos");

function calcular_triangulos(){
    let x = Number(tri_x.value);
    let y = Number(tri_y.value);
    let z = Number(tri_z.value);

    let t1 = x + y > z;
    let t2 = x + z > y;
    let t3 = y + z > x;

    if(t1 && t2 && t3){
        if(x == y && y == z){
        result_triangulos.innerHTML = 'Muito bem!!' + '<br><br>' +
            'Lado A: ' + x + '<br>' + 'Lado B: ' + y + '<br>' + 'Lado C: ' + z + '<br><br>' +
            'Você formou um Triângulo <b>"Equilátero".</b>';
        }else if (x == y || x == z || y == z){
        result_triangulos.innerHTML = 'Legal!!' + '<br><br>' +
            'Lado A: ' + x + '<br>' + 'Lado B: ' + y + '<br>' + 'Lado C: ' + z + '<br><br>' +
            'Você formou um Triângulo <b>"Isósceles".</b>';
        }else {
        result_triangulos.innerHTML = 'Perfeito!!' + '<br><br>' +
            'Lado A: ' + x + '<br>' + 'Lado B: ' + y + '<br>' + 'Lado C: ' + z + '<br><br>' +
            'Você formou um Triângulo <b>"Escaleno".</b>';
        }
    }else {
        result_triangulos.innerHTML = 'Aahhh que Pena... <br><br> Suas medidas <b>"não formam um triângulo"</b>.' 
            + '<br><br> Lembre-se: <br><br>' +
            'Um triângulo é uma figura formada por três segmentos de reta, plana e, sobretudo, fechada onde' +
            'um de seus lados deve ser maior que o valor absoluto (módulo) ' +  
            'da diferença dos outros dois lados e menor que a soma dos outros dois lados.';
    }   
}

btn_verificar.onclick = function(){
    calcular_triangulos();
    tri_x.value = '';
    tri_y.value = '';
    tri_z.value = '';
}

// Atividade 02 Calculadora IMC

let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");

let btn_verificar_imc = document.querySelector("#btn_verificar_imc");

let result_imc = document.querySelector("#result_imc");

function calcular_imc(){

    let peso_1 = Number(peso.value);
    let altura_1 = Number(altura.value);

    let imc = peso_1 / (altura_1 ** 2);

    if(imc < 18.5){
        result_imc.innerHTML = 'Seu IMC é de: ' + imc.toFixed(2) + '(kg/m²) ' + '<br><br> Você está Abaixo do Peso.'
    }else if (imc >= 18.5 && imc <= 24.9){
        result_imc.innerHTML = 'Seu IMC é de: ' + imc.toFixed(2) + 'IMC (kg/m²) ' + "<br><br> Você está com Peso Normal."
    }else if (imc >= 25 && imc <= 29.9){
        result_imc.innerHTML = 'Seu IMC é de: ' + imc.toFixed(2) + 'IMC (kg/m²) ' + "<br><br> Você está com Sobrepeso."
    }else if (imc >= 30 && imc <= 34.9){
        result_imc.innerHTML = 'Seu IMC é de: ' + imc.toFixed(2) + 'IMC (kg/m²) ' + "<br><br> Você está com Obesidade grau 1."
    }else if (imc >= 35 && imc <= 39.9){
        result_imc.innerHTML = 'Seu IMC é de: ' + imc.toFixed(2) + 'IMC (kg/m²) ' + "<br><br> Você está com Obesidade grau 2."
    }else if (imc >= 40){
        result_imc.innerHTML = 'Seu IMC é de: ' + imc.toFixed(2) + 'IMC (kg/m²) ' + "<br><br> Você está com Obesidade grau 3."
    }else {
        result_imc.innerHTML = "Insira os Dados Corretamente"
    }
}

btn_verificar_imc.onclick = function(){
    calcular_imc();
    peso.value = '';
    altura.value = '';
}

// Atividade 03 Calculadora de Imposto

let ano_carro = document.querySelector("#ano_carro");
let fipe_carro = document.querySelector("#fipe_carro");

let btn_verificar_imposto = document.querySelector("#btn_verificar_imposto");

let result_imposto = document.querySelector("#result_imposto");

function calcular_imposto(){

    let fipe_carro_1 = Number(fipe_carro.value);
    let ano_carro_1 = Number(ano_carro.value);
    if(fipe_carro.value === '' || ano_carro.value === ''){
        result_imposto.innerHTML = "Dados Inválidos ";
        return;
    }

    let taxa_detran = (1 / 100);
    let taxa_detran_2 = (1.5 / 100);
    let ano = 1990;

    let imposto = fipe_carro_1 * taxa_detran;
    if(ano_carro_1 > ano){
        imposto = fipe_carro_1 * taxa_detran_2;
    }
    result_imposto.innerHTML = "Você deve pagar:<br><br> R$ " + imposto.toFixed(2) + 
    ' de Imposto ao DETRAN.';
}
btn_verificar_imposto.onclick = function(){
    calcular_imposto();
    fipe_carro.value = '';
    ano_carro.value = '';
}

// Atividade 04 Calculadora de Reajuste Salarial

let salario_base = document.querySelector("#salario_base");
let cargo = document.querySelector("#cargo");

let btn_verificar_salario = document.querySelector("#btn_verificar_salario");

let result_salario = document.querySelector("#result_salario");

function calcular_reajuste_salario(){
    let salario_atual = Number(salario_base.value);
    let cargo = document.querySelector("#cargo").value;

    let gerente_reajuste = salario_atual * (10 / 100);
    let gerente_salario_final = gerente_reajuste + salario_atual;

    let engenheiro_reajuste = salario_atual * (20 / 100);
    let engenheiro_salario_final = engenheiro_reajuste + salario_atual;

    let tecnico_reajuste = salario_atual * (30 / 100);
    let tecnico_salario_final = tecnico_reajuste + salario_atual;

    let outro_reajuste = salario_atual * (40 / 100);
    let outro_salario_final = outro_reajuste + salario_atual;

    if(cargo == 'Selecione o Cargo/Função' || cargo == ''){
        result_salario.innerHTML = 'Nenhum Cargo Selecionado. ';
    }else if(cargo == 'Gerente'){
        result_salario.innerHTML = "<b>Cargo:</b> " + cargo + '<br>' +
                                    "<b>Salário Atual:</b> R$ " + salario_atual.toFixed(2) + '<br>' +
                                    "<b>Valor do Reajuste:</b> R$ " + gerente_reajuste.toFixed(2) + '<br>' +
                                    "<b>Salário Reajustado:</b> R$ " + gerente_salario_final.toFixed(2);
    }else if(cargo == 'Engenheiro'){
        result_salario.innerHTML = "<b>Cargo:</b> " + cargo + '<br>' +
                                    "<b>Salário Atual:</b> R$ " + salario_atual.toFixed(2) + '<br>' +
                                    "<b>Valor do Reajuste:</b> R$ " + engenheiro_reajuste.toFixed(2) + '<br>' +
                                    "<b>Salário Reajustado:</b> R$ " + engenheiro_salario_final.toFixed(2);
    }else if(cargo === "Técnico"){
        result_salario.innerHTML = "<b>Cargo:</b> " + cargo + '<br>' +
                                    "<b>Salário Atual:</b> R$ " + salario_atual.toFixed(2) + '<br>' +
                                    "<b>Valor do Reajuste:</b> R$ " + tecnico_reajuste.toFixed(2) + '<br>' +
                                    "<b>Salário Reajustado:</b> R$ " + tecnico_salario_final.toFixed(2);
    }else {
        result_salario.innerHTML = "<b>Cargo:</b> " + cargo + '<br>' +
                                    "<b>Salário Atual:</b> R$ " + salario_atual.toFixed(2) + '<br>' +
                                    "<b>Valor do Reajuste:</b> R$ " + outro_reajuste.toFixed(2) + '<br>' +
                                     "<b>Salário Reajustado:</b> R$ " + outro_salario_final.toFixed(2);
    }
}
    
btn_verificar_salario.onclick = function(){
    calcular_reajuste_salario();
    salario_base.value = '';
    cargo.value = '';
}

// Atividade 05 Calcular Crédito Bancário

let saldo_medio = document.querySelector("#saldo_medio");

let btn_verificar_credito = document.querySelector("#btn_verificar_credito");

let result_credito = document.querySelector("#result_credito");

function calcular_credito(){
    let salario = Number(saldo_medio.value);
    let media_saldo = salario / 12; 
    let p1 = "Nenhum Crédito Disponível no Momento.";

    let p2 = (salario * (20 / 100));
    let p3 = (salario * (30 / 100));
    let p4 = (salario * (40 / 100));

    
    if(media_saldo < 200){
        result_credito.innerHTML = "Seu Saldo Médio é: " + media_saldo + '<br><br>' + p1;
    }else if(media_saldo >= 200 && media_saldo < 400){
        result_credito.innerHTML = "Seu Saldo Médio é: " + media_saldo + '<br><br>' + 
        'Você Possui um Crédito Disponivel de: R$ ' +  p2.toFixed(2);
    }else if(media_saldo >= 400 && media_saldo < 600){
        result_credito.innerHTML = "Seu Saldo Médio é: " + media_saldo + '<br><br>' + 
        'Você Possui um Crédito Disponivel de: R$ ' + p3.toFixed(2);
    }else if(media_saldo > 600){
        result_credito.innerHTML = "Seu Saldo Médio é: " + media_saldo + '<br><br>' + 
        'Você Possui um Crédito Disponivel de: R$ ' + p4.toFixed(2);
    }
}

btn_verificar_credito.onclick = function(){
    calcular_credito();
    saldo_medio.value = '';
}

// Atividade 06 Lanchonete

let lanchonete = document.querySelector("#lanchonete");

let btn_mais = document.querySelector("#btn_mais");
let btn_menos = document.querySelector("#btn_menos");
let btn_calcular_lanches = document.querySelector("#btn_calcular_lanches");

let qtd_lanches = document.querySelector("#qtd_lanches");

let result_lanchonete = document.querySelector("#result_lanchonete");

function calcular_lanches(){
    let lanche = document.querySelector("#lanchonete").value;
    let qtd_produto = Number(qtd_lanches.value);

    let cod01 = 11;
    let cod02 = 8.5;
    let cod03 = 8;
    let cod04 = 9;
    let cod05 = 10;
    let cod06 = 4.5;

    if(lanche == 'Esolha seu Lanche' || lanche == ''){
        result_lanchonete.innerHTML = "Pedido Vazio";
    }else if(lanche == '01 - Cachorro Quente'){
        result_lanchonete.innerHTML = '<b>Lanche: </b>' + lanche + '<br>' +
                                        '<b>Total R$ </b>' + (cod01 * qtd_produto).toFixed(2);
    }else if(lanche == '02 - Bauru'){
        result_lanchonete.innerHTML = '<b>Lanche: </b>' + lanche + '<br>' +
                                        '<b>Total R$ </b>' + (cod02 * qtd_produto).toFixed(2);
    }else if(lanche == '03 - Misto Quente'){
        result_lanchonete.innerHTML = '<b>Lanche: </b>' + lanche + '<br>' +
                                        '<b>Total R$ </b>' + (cod03 * qtd_produto).toFixed(2);
    }else if(lanche == '04 - Hamburger'){
        result_lanchonete.innerHTML = '<b>Lanche: </b>' + lanche + '<br>' +
                                        '<b>Total R$ </b>' + (cod04 * qtd_produto).toFixed(2);
    }else if(lanche == '05 - Cheesburger'){
        result_lanchonete.innerHTML = '<b>Lanche: </b>' + lanche + '<br>' +
                                        '<b>Total R$ </b>' + (cod05 * qtd_produto).toFixed(2);
    }else if(lanche == '06 - Refrigerante'){
        result_lanchonete.innerHTML = '<b>Lanche: </b>' + lanche + '<br>' +
                                        '<b>Total R$ </b>' + (cod06 * qtd_produto).toFixed(2);
    }
}

btn_calcular_lanches.onclick = function(){
    calcular_lanches();
    qtd_lanches.value = '';
    lanchonete.value = '';
}

btn_mais.onclick = function(){
    qtd_lanches.value = Number(qtd_lanches.value) + 1;
}

btn_menos.onclick = function(){
    qtd_lanches.value = Number(qtd_lanches.value) - 1;
    if (qtd_lanches.value < 0){
        qtd_lanches.value = 0;
    }
}

// Atividade 07 Recebimento

let valor_a_pagar = document.querySelector("#valor_a_pagar");
let loja = document.querySelector("#loja");

let btn_receber = document.querySelector("#btn_receber");

let result_pagamento = document.querySelector("#result_pagamento");

function recebiveis(){
    let valor1 = Number(valor_a_pagar.value);
    let forma_pagamento = document.querySelector("#loja").value;

    let din_cheq = valor1 * (10 / 100)
    let valor_opc1 = valor1 - din_cheq;

    let cartao = valor1 * (15 / 100);
    let valor_opc2 = valor1 - cartao;

    let parcelado_1 = valor1 / 2;

    let parcelado_2x = valor1 * (10 / 100);
    let valor_opc4 = (valor1 + parcelado_2x) / 2;

    if(forma_pagamento === 'Escolha a Forma de Pagamento' || forma_pagamento === ''){
        result_pagamento.innerHTML = 'Escolha uma Forma de Pagamento';
    }else if (forma_pagamento === 'À Vista Dinheiro ou Cheque (10% desconto)'){
        result_pagamento.innerHTML = '<b>Valor a Pagar: R$ </b>' + valor_opc1.toFixed(2) + 
        '<br><br> À Vista Dinheiro ou Cheque (10% desconto).';
    }else if (forma_pagamento === 'À Vista Cartão de Crédito (15% desconto)'){
        result_pagamento.innerHTML = '<b>Valor a Pagar: R$ </b>' + valor_opc2.toFixed(2) +
        ' <br><br> À Vista Cartão de Crédito (15% desconto).';
    }else if (forma_pagamento === '2x sem juros'){
        result_pagamento.innerHTML = '<b>Valor a Pagar: R$ </b>' + '2x de ' + parcelado_1.toFixed(2) +
        '<br><br> 2x sem juros.';
    }else if (forma_pagamento === '2x com juros(acréscimo de 10%)'){
        result_pagamento.innerHTML = '<b>Valor a Pagar: R$ </b>' + '2x de ' + valor_opc4.toFixed(2) +
        '<br><br> 2x com juros(acréscimo de 10%).';
    }
}
btn_receber.onclick = function(){
    recebiveis();
    valor_a_pagar.value = '';
    loja.value = '';
}

// Atividade 08 Salario de Professor

let nivel_prof = document.querySelector("#nivel_prof");

let qtd_aulas = document.querySelector("#qtd_aulas");
let btn_salaio_prof = document.querySelector("#btn_salaio_prof");
let result_salario_prof = document.querySelector("#result_salario_prof");

function calcular_salário(){
    let n_aulas = Number(qtd_aulas.value);
    let cargo_prof = document.querySelector("#nivel_prof").value;

    let hora_aula_n1 = 12;
    let hora_aula_n2 = 17;
    let hora_aula_n3 = 25;

    let calculo_salario_n1 = n_aulas * hora_aula_n1 * 4.5;
    let calculo_salario_n2 = n_aulas * hora_aula_n2 * 4.5;
    let calculo_salario_n3 = n_aulas * hora_aula_n3 * 4.5;
    
    if(cargo_prof === 'Escolha seu Nível' || cargo_prof === ''){
        result_salario_prof.innerHTML = 'Escolha um Nível ';
    }else if(cargo_prof === 'Nível 1'){
        result_salario_prof.innerHTML = 'Quantidade de Aulas: ' + n_aulas + '<br><br>' +
                                        'Nível 1: R$ 12,00/h ' + '<br><br>' +
                                        'Salário(R$): ' + calculo_salario_n1.toFixed(2);
    }else if(cargo_prof === 'Nível 2'){
        result_salario_prof.innerHTML = 'Quantidade de Aulas: ' + n_aulas + '<br><br>' +
                                        'Nível 1: R$ 17,00/h ' + '<br><br>' +
                                        'Salário(R$): ' + calculo_salario_n2.toFixed(2);
    }else if(cargo_prof === 'Nível 3'){
        result_salario_prof.innerHTML = 'Quantidade de Aulas: ' + n_aulas + '<br><br>' +
                                        'Nível 1: R$ 25,00/h ' + '<br><br>' +
                                        'Salário(R$): ' + calculo_salario_n3.toFixed(2);
    }
}

btn_salaio_prof.onclick = function(){
    calcular_salário();
    qtd_aulas.value = '';
    nivel_prof.value = '';
}


// Menu Atalho de Navegação

let inicio = document.querySelector("#inicio");
let atividades = document.querySelector("#atividades");
let autores = document.querySelector("#autores");
let info = document.querySelector("#info");
let contato = document.querySelector("#contato");

// Divs a serem exibidas

let home = document.querySelector("#home");
let task = document.querySelector("#task");
let aut = document.querySelector("#aut");
let info_info = document.querySelector("#info_info");
let contact = document.querySelector("#contact");

let divs_click = document.querySelector("#divs_click");

function fechar_divs(seletor){
    let divs_exit = document.querySelectorAll(".teste1")
    divs_exit.forEach(teste1 => teste1.style.display = 'none');

    let el = document.querySelector(seletor);
    if (el) el.style.display = 'none';
}

function abrir_divs(seletor){
    
    let divs_open = document.querySelectorAll('.teste1');
    divs_open.forEach(div => div.style.display = 'none');

    let divParaAbrir = document.querySelector(seletor);
    if(divParaAbrir) {
        divParaAbrir.style.display = 'flex';
    }
}


inicio.addEventListener('click', function(){
    trocarPlanoDeFundo('home');
    abrir_divs('#home');
    
});
atividades.addEventListener('click', function(){
    trocarPlanoDeFundo('task');
    abrir_divs('#task');
    
});
autores.addEventListener('click', function(){
    trocarPlanoDeFundo('aut');
    abrir_divs('#aut');
});
info.addEventListener('click', function(){
    trocarPlanoDeFundo('info_info');
    abrir_divs('#info_info');
});
contato.addEventListener('click', function(){
    trocarPlanoDeFundo('contact');
    abrir_divs('#contact');
});

// Botoes atividades
let btn_atv01 = document.querySelector("#btn_atv01");
let btn_atv02 = document.querySelector("#btn_atv02");
let btn_atv03 = document.querySelector("#btn_atv03");
let btn_atv04 = document.querySelector("#btn_atv04");
let btn_atv05 = document.querySelector("#btn_atv05");
let btn_atv06 = document.querySelector("#btn_atv06");
let btn_atv07 = document.querySelector("#btn_atv07");
let btn_atv08 = document.querySelector("#btn_atv08");

// id atividades a aparecer

let atv01 = document.querySelector("#atv01");
let atv02 = document.querySelector("#atv02");
let atv03 = document.querySelector("#atv03");
let atv04 = document.querySelector("#atv04");
let atv05 = document.querySelector("#atv05");
let atv06 = document.querySelector("#atv06");
let atv07 = document.querySelector("#atv07");
let atv08 = document.querySelector("#atv08");

btn_atv01.addEventListener('click', function(){
    trocarPlanoDeFundo('atv01');
    abrir_divs('#atv01');
});
btn_atv02.addEventListener('click', function(){
    trocarPlanoDeFundo('atv02');
    abrir_divs('#atv02');
});
btn_atv03.addEventListener('click', function(){
    trocarPlanoDeFundo('atv03');
    abrir_divs('#atv03');
});
btn_atv04.addEventListener('click', function(){
    trocarPlanoDeFundo('atv04');
    abrir_divs('#atv04');
});
btn_atv05.addEventListener('click', function(){
    trocarPlanoDeFundo('atv05');
    abrir_divs('#atv05');
});
btn_atv06.addEventListener('click', function(){
    trocarPlanoDeFundo('atv06');
    abrir_divs('#atv06');
});
btn_atv07.addEventListener('click', function(){
    trocarPlanoDeFundo('atv07');
    abrir_divs('#atv07');
});
btn_atv08.addEventListener('click', function(){
    trocarPlanoDeFundo('atv08');
    abrir_divs('#atv08');
});



let btn_voltar01 = document.querySelector("#btn_voltar01");
let btn_voltar02 = document.querySelector("#btn_voltar02");
let btn_voltar03 = document.querySelector("#btn_voltar03");
let btn_voltar04 = document.querySelector("#btn_voltar04");
let btn_voltar05 = document.querySelector("#btn_voltar05");
let btn_voltar06 = document.querySelector("#btn_voltar06");
let btn_voltar07 = document.querySelector("#btn_voltar07");
let btn_voltar08 = document.querySelector("#btn_voltar08");

btn_voltar01.addEventListener('click', function(){
    fechar_divs('#atv01');
    abrir_divs('#task');
    trocarPlanoDeFundo('task');
});
btn_voltar02.addEventListener('click', function(){
    fechar_divs('#atv02');
    abrir_divs('#task');
    trocarPlanoDeFundo('task');
});
btn_voltar03.addEventListener('click', function(){
    fechar_divs('#atv03');
    abrir_divs('#task');
    trocarPlanoDeFundo('task');
});
btn_voltar04.addEventListener('click', function(){
    fechar_divs('#atv04');
    abrir_divs('#task');
    trocarPlanoDeFundo('task');
});
btn_voltar05.addEventListener('click', function(){
    fechar_divs('#atv05');
    abrir_divs('#task');
    trocarPlanoDeFundo('task');
});
btn_voltar06.addEventListener('click', function(){
    fechar_divs('#atv06');
    abrir_divs('#task');
    trocarPlanoDeFundo('task');
});
btn_voltar07.addEventListener('click', function(){
    fechar_divs('#atv07');
    abrir_divs('#task');
    trocarPlanoDeFundo('task');
});
btn_voltar08.addEventListener('click', function(){
    fechar_divs('#atv08');
    abrir_divs('#task');
    trocarPlanoDeFundo('task');
});

// proxima atividade
let prox_atv01 = document.querySelector("#prox_atv01");
let prox_atv02 = document.querySelector("#prox_atv02");
let prox_atv03 = document.querySelector("#prox_atv03");
let prox_atv04 = document.querySelector("#prox_atv04");
let prox_atv05 = document.querySelector("#prox_atv05");
let prox_atv06 = document.querySelector("#prox_atv06");
let prox_atv07 = document.querySelector("#prox_atv07");
let prox_atv08 = document.querySelector("#prox_atv08");

prox_atv01.addEventListener('click', function(){
    trocarPlanoDeFundo('atv02');
    abrir_divs('#atv02');
});
prox_atv02.addEventListener('click', function(){
    trocarPlanoDeFundo('atv03');
    abrir_divs('#atv03');
});
prox_atv03.addEventListener('click', function(){
    trocarPlanoDeFundo('atv04');
    abrir_divs('#atv04');
});
prox_atv04.addEventListener('click', function(){
    trocarPlanoDeFundo('atv05');
    abrir_divs('#atv05');
});
prox_atv05.addEventListener('click', function(){
    trocarPlanoDeFundo('atv06');
    abrir_divs('#atv06');
});
prox_atv06.addEventListener('click', function(){
    trocarPlanoDeFundo('atv07');
    abrir_divs('#atv07');
});
prox_atv07.addEventListener('click', function(){
    trocarPlanoDeFundo('atv08');
    abrir_divs('#atv08');
});
prox_atv08.addEventListener('click', function(){
    trocarPlanoDeFundo('info_info');
    abrir_divs('#info_info');
});

let atividades_btn = document.querySelector("#atividades_btn");
let contato_btn = document.querySelector("#contato_btn");
let autores_btn = document.querySelector("#autores_btn");

atividades_btn.addEventListener('click', function(){
    trocarPlanoDeFundo('task');
    abrir_divs('#task');
});
contato_btn.addEventListener('click', function(){
    trocarPlanoDeFundo('contact');
    abrir_divs('#contact');
});
autores_btn.addEventListener('click', function(){
    trocarPlanoDeFundo('aut');
    abrir_divs('#aut');
});


// trocar imagem

let trocar_img = document.querySelector("#trocar_img");


const fundos = {
  home: { tipo: 'img', valor: 'img/home.jpg' },
  task: {tipo: 'img', valor: 'img/task.jpg'},
  aut: {tipo: 'img', valor: 'img/aut.png'},
  info_info: {tipo: 'img', valor: 'img/info_info.jpg'},
  contact: {tipo: 'img', valor: 'img/contact.jpg'},
  atv01: { tipo: 'img', valor: 'img/atv01.png' },
  atv02: { tipo: 'img', valor: 'img/atv02.jpg' },
  atv03: { tipo: 'img', valor: 'img/atv03.png' },
  atv04: { tipo: 'img', valor: 'img/atv04.jpg' },
  atv05: { tipo: 'img', valor: 'img/atv05.jpg' },
  atv06: { tipo: 'img', valor: 'img/atv06.png' },
  atv07: { tipo: 'img', valor: 'img/atv07.png' },
  atv08: { tipo: 'img', valor: 'img/atv08.jpeg' },
  
};

function trocarPlanoDeFundo(id) {
  const fundo = fundos[id];

  if (!fundo) return;

  if (fundo.tipo === 'img') {
    trocar_img.style.backgroundImage = `url('${fundo.valor}')`;
    trocar_img.style.backgroundSize = 'cover';
    trocar_img.style.backgroundPosition = 'center';
  }
}
