/*botoes quantidade*/
function QuantSubtrair() {
	if (document.getElementById('quantidade').value == 0) {
	alert('Não é possivel solicitar um valor menor que zero!!!')
	}
	else
	{
	document.getElementById('quantidade').value--
	}
	}


function QuantSoma() {
	document.getElementById('quantidade').value++
	}

function validarCheckbox(){
	var adesivos = document.getElementsByName('Adesivo');
	var arrayAdesivosSelecionados = []
	for (var i = 0; i < adesivos.length; i++)
	{
	if ( adesivos[i].checked ) {
	if(adesivos[i].value == "React"){
	arrayAdesivosSelecionados.push(" React");
	}else if (adesivos[i].value == "Vue") {
	arrayAdesivosSelecionados.push(" Vue");
	}else if (adesivos[i].value == "Angular") {
	arrayAdesivosSelecionados.push(" Angular");
	} else if (adesivos[i].value == "JavaScript") {
	arrayAdesivosSelecionados.push(" JavaScript");
	}
	var adesivosSelecionados = arrayAdesivosSelecionados
	arrayAdesivosSelecionados = adesivosSelecionados
	}
	}
	return arrayAdesivosSelecionados
	}

function enviar()
	{
	var inputQuantidade = document.getElementById('quantidade').value
	var campoObservacao = document.getElementById('observacoes').value
	var adesivosEscolhidos = validarCheckbox()
	window.alert("Adesivos escolhidos:\n\n" + adesivosEscolhidos + "\n\n\Quantidade:\n\n" + inputQuantidade +" unidades de cada.\n\nObservações:\n\n" + campoObservacao)
	}
