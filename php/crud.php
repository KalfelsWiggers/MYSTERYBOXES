<?php
    include("conecta.php");

    $email_usuario = $_POST["email"];
    $senha_usuario = $_POST["senha"];
    $senhaconfirmada_usuario = $_POST["senhaconfirmada"];

    if(isset($_POST["gravar"]) )
    {
        $comando = $pdo->prepare("INSERT INTO usuario VALUE('', '$email_usuario','$senha_usuario', '$senhaconfirmada_usuario')");
        $resultado = $comando->execute();
        header("Location: ./index.html");
    }
?>