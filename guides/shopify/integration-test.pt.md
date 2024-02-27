# Testar pagamentos

Os testes de compras são essenciais para garantir que os pagamentos sejam processados corretamente antes de autorizar transações reais. Para verificar se a sua loja está configurada corretamente, recomendamos que você teste os pagamentos antes de iniciá-la em produção. 

> WARNING
> 
> Importante
>
> O teste só poderá ser realizado após a etapa de [configuração da integração.](/developers/pt/docs/shopify/integration-configuration/checkout-pro)

Veja abaixo como testar a integração:

1. Acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** no admin do Mercado Pago e selecione a aplicação que deseja testar. 
2. Clique em **Contas de teste** no menu à esquerda.
3. Dentro da seção **Contas de teste**, clique em **Criar conta de teste** e crie duas contas diferentes: uma para vendedor e outra para comprador. Não é possível utilizar a mesma conta de teste para vendedor e comprador. Consulte a [documentação de Contas de teste](/developers/pt/docs/shopify/additional-content/your-integrations/test/accounts) para acessar o passo a passo de criação de contas teste.

![Criar conta](/images/shopify/test-create-account.gif)

4. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste do vendedor criada no passo anterior.
5. Na mesma janela anônima logada como vendedor, acesse o [Painel do desenvolvedor](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) e crie uma nova aplicação, seguindo as instruções detalhadas na [documentação do Painel do desenvolvedor.](/developers/pt/docs/shopify/additional-content/your-integrations/dashboard)

![Login](/images/shopify/test-login.gif)

Agora, siga o passo a passo de acordo com o tipo de checkout escolhido para processar os pagamentos:

## Checkout Pro

6. Acesse a aplicação criada no passo 5 e clique em **Credenciais de produção** no menu à esquerda. Copie o `client_id` e o `client_secret`.

![Credenciais de produção](/images/shopify/test-prod-credentials.png)

7. Vá até as configurações do painel da Shopify (**Configurações > Pagamentos > Gerenciar**).
8. Insira o `client_id` e o `client_secret` da conta de teste do vendedor.

![Painel](/images/shopify/test-pro-shopify.png)

9. Clique em **Salvar**.
10. Acesse o Mercado Pago e faça login na conta de teste do comprador criada no passo 3.
----[mlb]----
11. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como CPF, RG, telefone e e-mail da conta de teste do comprador. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopiy/additional-content/your-integrations/test/cards) correspondente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
11. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

------------

## Checkout Transparente

> WARNING
>
> Importante
>
> Para garantir o correto funcionamento do Checkout Transparente, é essencial configurar o Checkout Pro e usar as respectivas credenciais de produção da conta de teste do vendedor em ambas as configurações, tanto no Checkout Transparente quanto no Checkout Pro.

6. Acesse a aplicação criada no passo 5 e clique em **Credenciais de produção** no menu à esquerda. Copie a `public_key`.

![Credenciais de produção](/images/shopify/test-prod-credentials.png)

7. Vá até as configurações do painel da Shopify (**Apps > Checkout Transparente MP**).
8. Insira a `public_key` da conta de teste do vendedor.

![Painel](/images/shopify/test-api-shopify.png)

9. Clique em **Salvar alterações**.
10. Acesse o Mercado Pago e faça login na conta de teste do comprador criada no passo 3.
----[mlb]----
11. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como CPF, RG, telefone e e-mail da conta de teste do comprador. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
11. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

------------

> WARNING
> 
> Importante
>
> Durante os testes, você estará operando no ambiente de produção, no entanto, trata-se de um teste no qual você estará utilizando credenciais fictícias para simular cenários reais. Ao concluir os testes, lembre-se de substituir as credenciais do vendedor (tanto de produção quanto de teste), inseridas no painel do plugin nos passos 8, pelas credenciais reais da sua conta no Mercado Pago. Essa ação permitirá que você continue vendendo em sua loja e evitará confusões.

Após concluir uma compra de teste utilizando o Checkout Pro ou o Checkout Transparente, a aprovação da compra será visível no Painel Administrativo da Shopify, com exceção das compras feitas por meios offline e Pix, que permanecerão com status pendente.

Além disso, os pedidos serão registrados no histórico da conta de teste de vendedor do Mercado Pago.