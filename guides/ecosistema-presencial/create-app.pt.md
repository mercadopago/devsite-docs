# Criar uma aplicação em Suas Integrações

Para criar uma aplicação em Suas integrações, siga as etapas abaixo.

1. Acesse o [Painel do Desenvolvedor](https://www.mercadopago.com.br/developers/pt). Uma vez lá, clique no botão **Suas integrações**, localizado no canto superior direito, e depois em **Criar aplicação**. 

    > NOTE
    >
    > Importante
    >
    > Durante a criação do aplicação, pode ser necessário reautenticar sua identidade. Se você já completou o processo de verificação, será solicitado que faça a reautenticação. Se ainda não o fez, será redirecionado para enviar os documentos necessários. Esse passo adicional de autenticação é essencial para proteger sua conta e garantir o cumprimento das operações. Siga as instruções fornecidas para criar sua aplicação com sucesso.

2. Digite um nome para identificar seu aplicativo (você tem um limite de 50 caracteres). 
3. Escolha a solução de **Pagamentos Presenciais**.
4. Ao escolher o produto para integrar, você pode selecionar "Código QR" ou "Point de MercadoPago". O resultado será o mesmo, independentemente da sua escolha.
5. Após preencher as informações solicitadas, clique em **Criar aplicação** e pronto!


> Se tiver dúvidas sobre como utilizá-lo, você pode consultar a [documentação sobre o Painel do Desenvolvedor](/developers/pt/docs/ecosistema-presencial/additional-content/your-integrations/dashboard).


## Informações importantes sobre a sua aplicação

Assim que você criar sua aplicação, será redirecionado para a página de informações gerais. Mantenha esses dados em mãos para continuar a integração nos próximos passos.

| Dados da aplicação  | Definição                                                           | Equivalente na Integração do Ecossistema Presencial |
|---------------------|---------------------------------------------------------------------|---------------------------------------------------|
| User ID             | Número de identificação do usuário, que é criado automaticamente.    | `user_id`                                         |
| Número da aplicação | Número de identificação da aplicação, que é criado automaticamente.  | `application.id`                                 |


Além disso, no menu localizado no lado esquerdo do painel de informações gerais da sua aplicação, você poderá acessar mais informações úteis, conforme mostrado abaixo: 

| Tipo de informação       | Definição                                                                                           |
|--------------------------|-----------------------------------------------------------------------------------------------------|
| NOTIFICAÇÃO > Webhooks   | Webhook (também conhecido como retorno de chamada web) é um método simples que permite que uma aplicação ou sistema forneça informações em tempo real sempre que ocorre um evento. Aqui, você pode configurar uma URL para a qual o estado final do 'intent' será notificado. |
| PRODUÇÃO > Credenciais de Produção | Utilize as [credenciais](/developers/pt/docs/ecosistema-presencial/additional-content/your-integrations/credentials) de produção para receber pagamentos. Aqui, você encontrará seu **access_token** de produção. |


