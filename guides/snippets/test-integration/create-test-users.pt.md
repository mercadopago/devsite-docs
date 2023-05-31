Utilize contas de teste para garantir que sua integração dê suporte a todos os fluxos e cenários possíveis. Elas têm os mesmos recursos de uma conta real do Mercado Pago, o que permite testar o funcionamento das integrações que você está desenvolvendo.

Para realizar um teste é preciso ter pelo menos duas contas:

* **Vendedor**: conta necessária para **configurar a aplicação e as credenciais para a cobrança**. Esta é a sua conta de usuário.
* **Comprador**: conta necessária para **testar o processo de compra**.

Além dessas contas, é importante também utilizar os [cartões de teste](/developers/pt/docs/testing/test-cards) para testar a integração de pagamento e simular o processo de compra, assim como o **saldo na conta do Mercado Pago do usuário de teste**. Veja mais detalhes abaixo.

![testuser](test-user/create-test-users-pt.png)

Para criar contas e testar o funcionamento das integrações, siga os passos abaixo.

1. No [Devsite](/developers/pt/docs), navegue até **[Suas integrações](/developers/panel/app)** e clique no card correspondente à sua aplicação.
2. Na página da aplicação, vá até a seção **Contas de teste** e clique no botão **+ Criar conta de teste**.
3. Na tela "Criar nova conta", insira uma descrição para identificação da conta. Exemplo: "Vendedor - loja 1".
4. Em seguida, selecione o **país de operação** da conta. Essa informação **não poderá ser editada posteriormente** e, além disso, os usuários Comprador e Vendedor precisam ser do mesmo país.
5. Preencha com um **valor fictício em dinheiro** que servirá como referência para você testar suas aplicações. Esse valor aparecerá como saldo na conta do Mercado Pago do usuário de teste e poderá ser utilizado para simulação de pagamentos, assim como com os [cartões de teste](/developers/pt/docs/testing/test-cards).
6. Autorize o uso dos seus dados pessoais conforme a [Declaração de Privacidade](https://www.mercadopago.com.br/privacidade) e certifique que sua conta usa as ferramentas do Mercado Pago de acordo com os [Termos e condições](https://www.mercadopago.com.br/developers/pt/docs/resources/legal/terms-and-conditions) marcando a caixa de seleção.
7. Clique em **Criar conta de teste**.

> WARNING
>
> Atenção
>
> Você pode gerar até 15 contas de usuários de teste ao mesmo tempo e, por enquanto, ainda não é possível deletá-las.

Pronto! A conta de teste foi criada e será exibida na tabela com as seguintes informações:

* **País**: Local de origem da conta selecionado em seu cadastro.
* **Identificação da conta**: Descrição para identificação da conta de teste.
* **Usuário**: Username da conta de teste gerado automaticamente. Esse é o username utilizado para fazer login com o test user.
* **Senha**: Senha de acesso à conta do usuário de teste gerada automaticamente. Para gerar uma nova senha, clique nos 3 pontos verticais ao final da linha da tabela e selecione a opção **Gerar nova senha**.
* **Criado em**: Data em que a conta de teste foi criada.

> NOTE
>
> Importante
>
> Para editar a **identificação da conta** ou **adicionar mais dinheiro fictício** para testar suas aplicações, clique nos **3 pontos verticais** ao final da linha da tabela e selecione a opção **Editar dados**.
