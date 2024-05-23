# Test payments

Purchase tests are essential to ensure that payments are being processed correctly before authorizing real transactions. To verify that your store is set up correctly, we recommend testing payments before going live.

----[mla, mpe, mco, mlu, mlc]----
> WARNING
> 
> Importante
>
> O teste só poderá ser realizado após a etapa de configuração da integração do [Checkout Mercado Pago](/developers/pt/docs/shopify/integration-configuration/checkout-pro).


------------
----[mlb]----
> WARNING
> 
> Importante
>
> O teste só poderá ser realizado após a etapa de configuração da integração de um dos checkouts de pagamento, seja o [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards) ou o [Checkout Mercado Pago](/developers/pt/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlm]----
> WARNING
> 
> Importante
>
> O teste só poderá ser realizado após a etapa de configuração da integração de um dos checkouts de pagamento, seja o [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards) ou o [Mercado Pago Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro).

------------

Veja abaixo como testar a integração:

1. Acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** no admin do Mercado Pago e selecione a aplicação que deseja testar. 
2. Clique em **Contas de teste** no menu à esquerda.
3. Dentro da seção **Contas de teste**, clique em **Criar conta de teste** e crie duas contas diferentes: uma para vendedor e outra para comprador. Não é possível utilizar a mesma conta de teste para vendedor e comprador. Consulte a [documentação de Contas de teste](/developers/pt/docs/shopify/additional-content/your-integrations/test/accounts) para acessar o passo a passo de criação de contas teste.

![Criar conta](/images/shopify/test-create-account.gif)

4. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste do vendedor criada no passo anterior.
5. Na mesma janela anônima logada como vendedor, acesse o [Painel do desenvolvedor](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) e crie uma nova aplicação, seguindo as instruções detalhadas na [documentação do Painel do desenvolvedor.](/developers/pt/docs/shopify/additional-content/your-integrations/dashboard)

![Login](/images/shopify/test-login.gif)

> WARNING
>
> Importante
>
> Se, ao fazer login com uma conta de teste ou navegar pelas seções de Suas integrações, for solicitada a autenticação por e-mail, acesse nossa documentação para saber [como validar o login em contas teste](/developers/pt/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_login_com_usuarios_teste). 

6. Acesse a aplicação criada no passo 5 e clique em **Credenciais de produção** no menu à esquerda. Copie a `public_key` e o `access_token`.

![Credenciais de produção](/images/shopify/test-prod-credentials.png)

----[mlm]----
7. Vá até as configurações do painel da Shopify (**Configurações > Pagamentos**) e clique para **Gerenciar** um dos checkout do Mercado Pago, sendo ele o [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards) ou o [Checkout Mercado Pago](/developers/pt/docs/shopify/integration-configuration/checkout-pro). 

Agora, siga o passo a passo de acordo com o tipo de checkout escolhido para processar os pagamentos:

## Mercado Pago Cartões

8. Insira a `public_key` e o `access_token` da conta de teste do vendedor.

![Painel](/images/shopify/test-pro-shopify-es-all.jpg)

9. Clique em **Salvar credenciais**.

10. Acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

## Checkout Mercado Pago

8. Insira a `public_key` e o `access_token` da conta de teste do vendedor.

![Painel](/images/shopify/test-pro-shopify-es-all.jpg)

9. Clique em **Salvar credenciais**.

10. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste do comprador criada no passo 3.
11. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

> WARNING
> 
> Importante
>
> Após concluir uma compra de teste utilizando um dos checkouts, a aprovação da compra será visível no Painel Administrativo da Shopify, com exceção das compras feitas por meios offline que permanecerão com status pendente.
> <br><br>
> Durante os testes, você estará operando no ambiente de produção, no entanto, trata-se de um teste no qual você estará utilizando credenciais fictícias para simular cenários reais. Ao concluir os testes, lembre-se de substituir as credenciais do vendedor (tanto de produção quanto de teste), inseridas no painel do plugin nos passos 8, pelas credenciais reais da sua conta no Mercado Pago. Essa ação permitirá que você continue vendendo em sua loja e evitará confusões.
> <br><br>
> Além disso, os pedidos serão registrados no histórico da conta de teste de vendedor do Mercado Pago.

------------
----[mlb]----
7. Vá até as configurações do painel da Shopify (**Configurações > Pagamentos**) e clique para **Gerenciar** um dos checkout do Mercado Pago, sendo ele o [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards) ou o [Mercado Pago Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro). 

Agora, siga o passo a passo de acordo com o tipo de checkout escolhido para processar os pagamentos:

## Mercado Pago Cartões

8. Insira a `public_key` e o `access_token` da conta de teste do vendedor.

![Painel](/images/shopify/test-pro-shopify-es-all.jpg)

9. Clique em **Guardar credenciais**.
10. Acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

## Mercado Pago Checkout Pro

8. Insira a `public_key` e o `access_token` da conta de teste do vendedor.

![Painel](/images/shopify/test-pro-shopify-es-all.jpg)

9. Clique em **Salvar credenciais**.
10. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste do comprador criada no passo 3.
11. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

> WARNING
> 
> Importante
>
> Após concluir uma compra de teste utilizando um dos checkouts, a aprovação da compra será visível no Painel Administrativo da Shopify, com exceção das compras feitas por meios offline (Pix e boleto) que permanecerão com status pendente.
> <br><br>
> Durante os testes, você estará operando no ambiente de produção, no entanto, trata-se de um teste no qual você estará utilizando credenciais fictícias para simular cenários reais. Ao concluir os testes, lembre-se de substituir as credenciais do vendedor (tanto de produção quanto de teste), inseridas no painel do plugin nos passos 8, pelas credenciais reais da sua conta no Mercado Pago. Essa ação permitirá que você continue vendendo em sua loja e evitará confusões.
> <br><br>
> Além disso, os pedidos serão registrados no histórico da conta de teste de vendedor do Mercado Pago.

------------
----[mla, mpe, mco, mlu, mlc]----
7. Vá até as configurações do painel da Shopify (**Configurações > Pagamentos**) e clique para **Gerenciar** o [Checkout Mercado Pago](/developers/pt/docs/shopify/integration-configuration/checkout-pro). 
8. Insira a `public_key` e o `access_token` da conta de teste do vendedor.

![Painel](/images/shopify/test-pro-shopify-es-all.jpg)

9. Clique em **Salvar credenciais**.
10. Acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

> WARNING
> 
> Importante
>
> Após concluir uma compra de teste utilizando um dos checkouts, a aprovação da compra será visível no Painel Administrativo da Shopify, com exceção das compras feitas por meios offline que permanecerão com status pendente.
> <br><br>
> Durante os testes, você estará operando no ambiente de produção, no entanto, trata-se de um teste no qual você estará utilizando credenciais fictícias para simular cenários reais. Ao concluir os testes, lembre-se de substituir as credenciais do vendedor (tanto de produção quanto de teste), inseridas no painel do plugin nos passos 8, pelas credenciais reais da sua conta no Mercado Pago. Essa ação permitirá que você continue vendendo em sua loja e evitará confusões.
> <br><br>
> Além disso, os pedidos serão registrados no histórico da conta de teste de vendedor do Mercado Pago.

------------