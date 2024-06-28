Utilize contas de teste para garantir que sua integração dê suporte a todos os fluxos e cenários possíveis. Elas têm os mesmos recursos de uma conta real do Mercado Pago, o que permite testar o funcionamento das integrações que você está desenvolvendo.

> WARNING
>
> Importante
>
> Integrações com Checkout ----[mlb]----Transparente----------- ----[mla, mlm, mpe, mco, mlu, mlc]---- API ----------- e Checkout Bricks não suportam usuários de teste para testes de integração. Por esse motivo, você não poderá acessar esta seção a partir de uma aplicação criada para qualquer um desses dois produtos. Acesse a documentação do Teste de Integração para ----[mlb]----[Checkout Transparente](/developers/pt/docs/checkout-api/integration-test/make-test-purchase)------------ ----[mla, mlm, mpe, mco, mlu, mlc]----[Checkout API](/developers/pt/docs/checkout-api/integration-test/make-test-purchase)------------ e [Checkout Bricks](/developers/pt/docs/checkout-bricks/integration-test/test-payment-flow) para obter mais informações.

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


