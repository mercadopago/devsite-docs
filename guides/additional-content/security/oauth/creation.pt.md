# Criação
 
O fluxo `authorization_code` se caracteriza pela intervenção do vendedor para autorizar de forma explícita o acesso aos seus dados por parte da aplicação e pelo uso de um código concedido pelo servidor de autenticação para que a aplicação possa obter um access token e um refresh token associado.
 
Por ser um fluxo baseado em redirecionamento, você deve ser capaz de permitir interação com o navegador do vendedor e de receber o request através do redirecionamento por parte do servidor de autorização. Neste fluxo, a aplicação solicita ao vendedor o consentimento expresso para acessar os dados através da abertura de uma página web que deixa explícito os scopes aos quais se está solicitando acesso.
  
Uma vez permitido o acesso, o servidor gera um código de acesso que mediante um redirecionamento chega à aplicação. Nesta etapa, a aplicação solicita acesso ao servidor de autenticação enviando o código obtido e os dados da aplicação. Feito isso, o servidor concede o access token e o refresh token à aplicação.
 
Para gerar o authorization code é preciso atender aos requisitos abaixo.
 
| Requisitos | Descrição | Especificações |
| --- | --- | --- |
| Contas de vendedor Mercado Pago | Serão necessárias contas de vendedor Mercado Pago. Uma para você e uma para o vendedor. | Conta de vendedor no Mercado Pago. Caso não tenha, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para criar. |
| Aplicação | Aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. | Para utilizar OAuth você precisará ter uma aplicação criada. Veja a documentação do [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/your-integrations/introduction) para saber como criar uma aplicação. |
| Credenciais | As [credenciais](/developers/pt/guides/additional-content/credentials/credentials) são senhas únicas com as quais identificamos uma integração na sua conta e servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura. | Para realizar testes e garantir o funcionamento da integração, serão necessárias as credenciais de teste. Após esta etapa, você precisará das credenciais de produção para receber pagamentos reais. |
| Redirect URL | Endereço ao qual você quer encaminhar os vendedores após tê-los vinculado corretamente. | Este é um endereço no seu servidor no qual serão recebidos os access tokens. |
| URL de autenticação | Endereço ao qual você quer encaminhar os vendedores para que realizem a autorização de acesso à dados privados. | Este é um endereço no servidor do Mercado Pago no qual será feita a permissão expressa de acesso aos dados privados. |
 
> WARNING
>
> Atenção
>
> Lembre que você vai utilizar informações sensíveis dos seus vendedores. Certifique-se de resguardá-las de maneira segura. Não as utilize na URL de autenticação e gerencie todo processo somente a partir do seu servidor.
 
1. Edite sua aplicação para conter sua Redirect URL. Veja [Editar aplicação](/developers/pt/guides/additional-content/dashboard/applications).
2. Envie a URL de autenticação para o vendedor cuja conta você deseja vincular à sua com os seguintes campos:

   |Descrição|URL| 
   |---|---|
   | URL de autenticação | https://auth.mercadopago.com/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com |
     * **client_id**: substitua o valor "APP_ID" com a ID do sua aplicação. Veja [ID de aplicação](/developers/pt/guides/additional-content/dashboard/applications).
     * **state**: substitua o valor "RANDOM_ID" por um identificador que seja único para cada tentativa e que não inclua informações sensíveis de forma que você consiga identificar de quem é o código recebido.
     * **redirect_uri**: adicione a URL informada no campo Redirect URL da sua aplicação.
     <br/>
3. Aguarde o vendedor acessar a URL e permitir o acesso. Ao acessar a URL o vendedor será direcionado para o Mercado Pago e deverá realizar o login na conta dele para realizar a autorização.
4. Verifique na Redirect URL do seu servidor o código de autorização retornado no parâmetro **code**.

   |Descrição|URL| 
   |---|---|
   | Redirect URL | https://www.redirect-url.com?code=CODE&state=RANDOM_ID |
 
5. Envie as suas credenciais e o código de autorização ao endpoint [/oauth/token](/developers/pt/reference/oauth/_oauth_token/post) para receber como resposta o access token.
 
> WARNING
>
> Atenção
>
> É recomendado realizar este procedimento por completo de uma única vez em conjunto com o usuário, visto que o código recebido pela Redirect URL após a autorização tem validade de 10 minutos e o access token recebido através do endpoint tem validade de 180 dias.
> 
> Para gerar credenciais de sandbox para realização de testes, envie o parâmetro `test_token` com valor `true`.