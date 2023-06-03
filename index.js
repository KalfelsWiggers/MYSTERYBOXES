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
    if (!email.includes("@") || !email.includes(".com")) {
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
    popUp.style.animation = 'popFade .3s ease-in-out forwards'; 
  }
  function fecharPopUp() {
  var popUp = document.getElementById('popUp');
  popUp.style.display = 'none';
  popUp.style.animation = 'none'; 
}
  