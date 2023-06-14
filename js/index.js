function selecionarInput(event) {
  event.preventDefault(); // Impede que o link redirecione para outra página
  var input = document.getElementById('seuInputId'); // Substitua 'seuInputId' pelo ID do seu campo de entrada
  input.focus(); // Dá foco ao campo de entrada selecionado
}

// Selecionar o link e adicionar o evento de clique
var link = document.getElementById('seuLinkId'); // Substitua 'seuLinkId' pelo ID do seu link
link.addEventListener('click', selecionarInput);

function validarFormulario() {
  var email = document.getElementById("seuInputId").value;
  var senha = document.getElementById("senhaInput").value;
  var confirmarSenha = document.getElementById("confirmarSenhaInput").value;
  var resultadoLabel = document.getElementById("resultadoLabel");
  

  // Verifica se o email contém "@" e ".com"
  if (!email.includes("@") || !email.includes(".com")){
    resultadoLabel.innerText = "O email não é válido!";
    return;
  }

  // Verifica se a senha possui pelo menos 8 dígitos
  if (senha.length < 8) {
    resultadoLabel.innerText = "A senha deve ter pelo menos 8 dígitos!";
    return;
  }

  // Verifica se a senha é a mesma que a senha confirmada
  if (senha !== confirmarSenha) {
    resultadoLabel.innerText = "As senhas não coincidem!";
    return;
  }

  // Todas as validações passaram, exibe mensagem de sucesso
  resultadoLabel.innerText = "";
}

function exibirPopUp() {
  var popUp = document.getElementById('popUp');
  popUp.style.display = 'block';
  popUp.style.animation = 'popFade .3s forwards';
}
function fecharPopUp() {
  var popUp = document.getElementById('popUp');
  popUp.style.display = 'none';
  popUp.style.animation = 'none';
}

//MTQQ

topico = "ContatoMysteryFood";

client = new Paho.MQTT.Client("broker.hivemq.com", Number(8000), "");

client.onConnectionLost = ConexaoPerdida;
client.onMessageArrived = MensagemRecebida;

client.connect({onSuccess:Conectar});

function Conectar() 
{
  client.subscribe(topico);  
}

function ConexaoPerdida(responseObject) 
{
  if (responseObject.errorCode !== 0) {
    resposta.innerHTML += "Desconectado";
  }
}

function MensagemRecebida(message) 
{
    resposta.innerHTML += "<br><br>" + message.payloadString;
    resposta.scrollTop = resposta.scrollHeight;
}
function Send()
{
  texto = mensagem.value;
  message = new Paho.MQTT.Message(texto);
  message.destinationName = topico;
  if (texto != "")
  {
    client.send(message);
    mensagem.value = ""
  }
}
function searchKeyPress(e)
{
  e = e || window.event;
  if (e.keyCode == 13)
  {
      document.getElementById('botao').click();
      return false;
  }
  return true;
}

var mtqq = document.getElementById("MTQQ");
function toggleScreen()
{
    if (MTQQ.style.display === "none") 
    {
        MTQQ.style.display = "block";
    } 
    else 
    {
        MTQQ.style.display = "none";
    }
}


// Obtém a referência para o link e a div
var link = document.getElementById("link");
var divConteudo = document.getElementById("criarBtn");
var input = document.getElementById("confirmarSenhaInput");
var label = document.getElementById("label");

var conteudoOriginal = divConteudo.textContent; // Salva o conteúdo original da div
var conteudoOriginal2 = link.textContent;

// Adiciona um ouvinte de evento para o clique no link
link.addEventListener("click", function(event) {
  // Impede o comportamento padrão do link (redirecionar para outra página)
  event.preventDefault();

  // Verifica se o conteúdo atual é o conteúdo original

  if (divConteudo.textContent === conteudoOriginal) {
    // Altera o conteúdo da div para um novo texto
    divConteudo.textContent = "CRIAR";
    link.textContent = "Entrar";
    label.classList.remove("hidden"); // Exibe o input
    input.classList.remove("hidden"); // Exibe o input
  } else {
    // Caso contrário, restaura o conteúdo original
    divConteudo.textContent = conteudoOriginal;
    link.textContent = conteudoOriginal2;
    label.classList.add("hidden"); // Oculta o input
    input.classList.add("hidden"); // Oculta o input
  }
});