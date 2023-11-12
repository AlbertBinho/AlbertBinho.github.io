<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obter os dados do formulário
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensagem = htmlspecialchars($_POST["mensagem"]);

    // Configurar o destinatário e o assunto do e-mail
    $para = "albert14maga@gmail.com;
    $assunto = "Nova mensagem de contato de $nome";

    

   
// Construir o corpo da mensagem
    $corpo_mensagem = "Nome: $nome\n";
    
   
$corpo_mensagem .= "E-mail: $email\n\n";
    
   
$corpo_mensagem .= "Mensagem:\n$mensagem";

    

// Configurar cabeçalhos do e-mail
    $cabecalhos = "De: $email\r\n";
    $cabecalhos .= "Reply-To: $email\r\n";

    // Enviar e-mail
    if (mail($para, $assunto, $corpo_mensagem, $cabecalhos)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
} else {
    echo "Erro no envio do formulário.";
}
?>