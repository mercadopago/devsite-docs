# Criar aplicação

Crie sua aplicação para integrar com a solução Split de Pagamentos seguindo os passos abaixo. 

   > NOTE
   >
   > Importante
   >
   > Durante a criação da sua aplicação, talvez seja necessário reautenticar sua identidade. Se já concluiu a verificação, será solicitada a reautenticação. Caso contrário, será redirecionado para enviar os documentos necessários. Esse passo extra é essencial para proteger sua conta e garantir a conformidade das operações. Você pode consultar a [documentação sobre o Painel do desenvolvedor](/developers/pt/docs/split-payment/additional-content/your-integrations/dashboard) se tiver dúvidas sobre como usá-lo.

1. Acesse [Suas integrações](https://www.mercadopago.com.br/developers/panel/app). Uma vez lá, clique no botão **Criar aplicação**, localizado no canto superior direito.
2. Insira um nome para identificar sua aplicação (você tem um limite de 50 caracteres).
3. Escolha a solução de **Pagamentos online**.
4. Ao escolher o produto a ser integrado, você pode optar por "Checkout Pro" ou "Checkout API".
5. Escolha o modelo de integração **Marketplace**.
6. Após preencher as informações solicitadas, clique em **Criar aplicação** e pronto!

## Configurar o Redirect URL

Após criar a aplicação, é necessário ir para a tela de edição para preencher o campo de Redirect URL (nas solicitações de OAuth, é mostrado como redirect_uri), o qual deve conter a URL do site do marketplace onde o token do vendedor será enviado ao concluir o processo de vinculação.

![Redirect URL](/images/split-payment/redirect-url-pt-br.png)