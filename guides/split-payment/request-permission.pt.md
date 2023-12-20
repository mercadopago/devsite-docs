# Solicitar permissão aos seus usuários

Para iniciar o processo de autorização e solicitar permissões aos seus usuários para gerenciar vendas em seu nome, é necessário implementar o fluxo de autorização utilizando o OAuth. A seguir, estão detalhados os passos a serem seguidos:

1. Redirecione seus usuários para a seguinte URL para autorizar o gerenciamento de vendas:

    ```curl
    https://auth.mercadopago.com.ar/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
    ```

    - Onde `<APP_ID>` é o valor obtido durante a [Criação da aplicação](/developers/pt/docs/split-payment/integration-configuration/create-application), e
    - `<REDIRECT_URI>` é o valor inserido no campo Redirect Uri durante a [Configuração do Redirect URL](/developers/pt/docs/split-payment/integration-configuration/create-application).

2. Assim que os usuários autorizarem o gerenciamento de vendas, você receberá um código de autorização na URL que especificou no passo anterior. Este código estará no parâmetro `code` da seguinte forma:

    ```curl
    http://<REDIRECT_URI>?code=AUTHORIZATION_CODE
    ```

> NOTE
>
> O `AUTHORIZATION_CODE` tem uma validade de 10 minutos e será utilizado para criar as credenciais necessárias.