# Solicitar permissão aos usuários

Para solicitar permissão aos seus usuários para gerenciar vendas em seu nome, é necessário implementar o fluxo de autorização usando o OAuth. Siga os passos abaixo:

1. Redirecione seus usuários para a seguinte URL para autorizar o gerenciamento de vendas:

| Valor              | Descrição                                                                                                              |
|--------------------------|----------------------------------------------------------------------------------------------------------------------|
| `<APP_ID>`               | Valor obtido durante a [Criação da aplicação](/developers/pt/docs/split-payment/integration-configuration/create-application).      |
| `<REDIRECT_URI>`         | Valor inserido no campo Redirect Uri durante a [Configuração do Redirect URL](/developers/pt/docs/split-payment/integration-configuration/create-application). |

----[mla]----
     ```curl
     https://auth.mercadopago.com.ar/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```

------------
----[mlb]----
     ```curl
     https://auth.mercadopago.com.br/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
     
------------
----[mlm]----
     ```curl
     https://auth.mercadopago.com.mx/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
     
------------
----[mlc]----
     ```curl
     https://auth.mercadopago.cl/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
     
------------
----[mlc]----
     ```curl
     https://auth.mercadopago.com.co/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
     
------------
----[mlu]----
     ```curl
     https://auth.mercadopago.com.uy/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
     
------------
----[mpe]----
     ```curl
     https://auth.mercadopago.com.pe/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
     
------------


2. Assim que os usuários autorizarem o gerenciamento de vendas, você receberá um código de autorização na URL que especificou no passo anterior. Este código estará no parâmetro `code` da seguinte forma:

    ```curl
    http://<REDIRECT_URI>?code=AUTHORIZATION_CODE
    ```

> NOTE
>
> Nota
>
> O `AUTHORIZATION_CODE` tem uma validade de 10 minutos e será utilizado para criar as credenciais necessárias.