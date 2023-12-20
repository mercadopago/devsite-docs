# Criar aplicação

1. Acesse [Suas integrações](https://www.mercadopago.com.br/developers/panel/app). Uma vez lá, clique no botão **Criar aplicação**, localizado no canto superior direito.

   > WARNING
   >
   > Importante
   >
   > Durante a criação da sua aplicação, pode ser necessário realizar uma reautenticação de identidade. Se você já concluiu o processo de verificação, será solicitada a reautenticação. Se ainda não o fez, será redirecionado para enviar os documentos necessários. Este passo adicional de autenticação é essencial para proteger sua conta e garantir a conformidade das operações. Siga as instruções fornecidas para criar sua aplicação com sucesso.

2. Insira um nome para identificar sua aplicação (você tem um limite de 50 caracteres).
3. Escolha a solução de **Pagamentos online**.
4. Ao escolher o produto a ser integrado, você pode optar por "Checkout Pro" ou "Checkout API".
5. Escolha o modelo de integração **Marketplace**.
6. Após preencher as informações solicitadas, clique em **Criar aplicação** e pronto!

> Você pode consultar a [documentação sobre o Painel do Desenvolvedor](/developers/pt/docs/split-payment/additional-content/your-integrations/dashboard) se tiver dúvidas sobre como usá-lo.

## Configurar o Redirect URL

Após criar a aplicação, é necessário ir para a tela de edição para preencher o campo de Redirect URL (nas solicitações de OAuth, é mostrado como redirect_uri), o qual deve conter a URL do site do marketplace onde o token do vendedor será enviado ao concluir o processo de vinculação.

![Redirect URL](/images/split-payment/redirect-url-pt-br.png)