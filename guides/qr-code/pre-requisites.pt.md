# Pré-requisitos

Considere os pontos a seguir antes de começar:

* Acesse a uma conta
* Crie uma aplicação
* Gere usuários de teste
* Obtenha o seu Access Token
* Identifique a sua integração

## 1. Acesse uma conta

Para começar a integração, você precisa **ter uma conta no Mercado Pago ou Mercado Livre**.

Você pode Acessar uma conta existente ou [Criar uma nova conta](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing).

## 2. Crie uma aplicação

Para realizar transações através da integração do Mercado Pago é necessário criar uma credencial. Essa credencial terá uma identificação, assim como um Access Token que permitirá fazer transações usando uma conta Mercado Pago.

Crie uma aplicação para obter as credenciais e configurar notificações webhooks.

É muito simples, veja como: 

1. Acesse [Suas integrações](https://www.mercadopago.com/developers/panel/app) e clique em **Criar aplicação**.
2. Nomeie a aplicação para identificação posterior.
3. Selecione a opção **Pagamentos presenciais** e depois **QRCode**.
4. Opcionalmente, você pode selecionar o modelo de integração, **presencial** ou **dinâmico**
5. Aceite nossos Termos e Condições, e clique novamente em **Criar aplicação**. E pronto!

> NOTE
>
> Nota
>
> Caso o caixa integrado tenha várias conexões com contas Mercado Pago, consulte os itens 4 e 5. Fique atento à segurança da sua integração e implemente [OAuth.](/developers/pt/docs/qr-code/additional-content/security/oauth/introduction)

## 3. Gere usuários de teste

Utilize contas de teste para garantir que sua integração dê suporte a todos os fluxos e cenários possíveis. Elas têm os mesmos recursos de uma conta real do Mercado Pago, o que permite testar o funcionamento das integrações que você está desenvolvendo.

Para realizar um teste é preciso ter pelo menos duas contas:

* **Vendedor**: conta necessária para **configurar a aplicação e as credenciais para a cobrança**. Esta é a sua conta de usuário.
* **Comprador**: conta necessária para **testar o processo de compra**.

Além dessas contas, é importante também utilizar os [cartões de teste](/developers/pt/guides/additional-content/your-integrations/test-cards) para testar a integração de pagamento e simular o processo de compra, assim como o **saldo na conta do Mercado Pago do usuário de teste**. Veja mais detalhes abaixo.

![testuser](/images/dashboard/new-test-users-pt.png)

Para criar contas e testar o funcionamento das integrações, siga os passos abaixo.

1. No [Devsite](/developers/pt/docs), navegue até **[Suas integrações](/developers/panel/app)** e clique no card correspondente à sua aplicação.
2. Na página da aplicação, vá até a seção **Contas de teste** e clique no botão **+ Criar conta de teste**.
3. Na tela "Criar nova conta", insira uma descrição para identificação da conta. Exemplo: "Vendedor - loja 1".
4. Em seguida, selecione o **país de operação** da conta. Essa informação **não poderá ser editada posteriormente** e, além disso, os usuários Comprador e Vendedor precisam ser do mesmo país.
5. Preencha com um **valor fictício em dinheiro** que servirá como referência para você testar suas aplicações. Esse valor aparecerá como saldo na conta do Mercado Pago do usuário de teste e poderá ser utilizado para simulação de pagamentos, assim como com os [cartões de teste](/developers/pt/guides/additional-content/your-integrations/test-cards).
6. Autorize o uso dos seus dados pessoais conforme a ----[mlb]----[Declaração de Privacidade](https://www.mercadopago.com.br/privacidade)------------ ----[mla, mlm, mpe, mco, mlu, mlc]----[Declaração de Privacidade](https://www.mercadopago[FAKER][URL][DOMAIN]/privacidad)------------ e certifique que sua conta usa as ferramentas do Mercado Pago de acordo com os [Termos e condições](https://www.mercadopago.com.br/developers/pt/docs/resources/legal/terms-and-conditions) marcando a caixa de seleção.
7. Clique em **Criar conta de teste**.

Pronto! A conta de teste foi criada e será exibida na tabela com as informações abaixo.

![testuser](/images/dashboard/test-users-pt.png)

* **País**: Local de origem da conta selecionado em seu cadastro.
* **Identificação da conta**: Descrição para identificação da conta de teste.
* **Usuário**: Username da conta de teste gerado automaticamente. Esse é o username utilizado para fazer login com o test user.
* **Senha**: Senha de acesso à conta do usuário de teste gerada automaticamente. Para gerar uma nova senha, clique nos 3 pontos verticais ao final da linha da tabela e selecione a opção **Gerar nova senha**.
* **Criado em**: Data em que a conta de teste foi criada.

> NOTE
>
> Nota
>
> Para editar a **identificação da conta** ou **adicionar mais dinheiro fictício** para testar suas aplicações, clique nos **3 pontos verticais** ao final da linha da tabela e selecione a opção **Editar dados**. É possível criar **até 15 contas** de usuários de teste simultaneamente, no entanto, ainda não é possível deletá-las.

## Validar login com usuários teste

Ao realizar o login com usuários de teste e acessar algumas seções do Painel do Desenvolvedor, a autenticação da conta mediante um código enviado por e-mail pode ser solicitada.

Como se tratam de usuários fictícios, você não terá acesso ao e-mail que receberá o código. Em vez disso, você deve realizar essa autenticação inserindo os **últimos 6 dígitos que compõem o User ID da conta de teste** ou os **últimos 6 dígitos que compõem o Access Token produtivo**.

> WARNING
>
> Importante
>
> Para acessar o User ID ou o Access Token de uma conta de teste, é necessário criar previamente uma aplicação. Para isso, consulte a documentação [Painel do Desenvolvedor](/developers/pt/docs/your-integrations/dashboard). Caso tenha dúvidas sobre como obter o User ID ou o Access Token, consulte [Detalhes da aplicação](/developers/pt/docs/your-integrations/application-details) ou [Credenciais](/developers/pt/docs/your-integrations/credentials).

Tenha em mente que ao fazer login com uma conta de teste, você não terá acesso a determinadas seções do Painel do desenvolvedor, como Credenciais de teste ou Qualidade de integração. São secções que não são necessárias para este tipo de contas, e também podem interferir na sua utilização adequada e desejada.

Após a geração dos usuários de teste, você pode começar a integração e criar as lojas e os caixas.

## 4. Obtenha o seu Access Token (OAuth)

Se você é um integrador que trabalha com diversas lojas que operam com o Mercado Pago, recomendamos que faça o **OAuth - autenticação entre contas***. Através do processo o vendedor autoriza o compartilhamento seguro dos seus dados com um sistema de terceiros.

O Access Token só pode ser compartilhado via OAuth. Consulte a [documentação](/developers/en/docs/qr-code/additional-content/security/oauth/introduction) para obter mais informações.

## 5. Identifique a sua integração (Sponsor ID)

Ao criar uma conta no Mercado Pago, você recebe um User ID, se for usuário, ou um Cust ID, se for vendedor. Ambos são IDs únicos gerados automaticamente, e permitirão que as integrações sejam associadas a cada conta, incluindo-as nas chamadas de API.

Ao fazer integrações para terceiros, o parâmetro `sponsor_id` permitirá identificar os pedidos que são realizados pelo seu ponto de venda. Você deverá enviar o Sponsor ID nos chamados para a [API de Pedidos Presenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put). Siga as instruções abaixo para saber como obtê-lo e incluí-lo:

1. Se você ainda não fez, crie uma conta no portal do Mercado Pago.
2. Obtenha o ID do usuário (Cust ID ou User ID) da sua conta acessando os [detalhes da aplicação](/developers/pt/docs/qr-code/additional-content/your-integrations/application-details) que você criou anteriormente.
3. Inclua o ID da sua conta de integrador no Sponsor ID do vendedor.
4. Envie o Sponsor ID em todas as transações QR, conforme mostrado em nossa [Referência de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).