# Test payments

Purchase tests are essential to ensure that payments are being processed correctly before authorizing real transactions. To verify that your store is set up correctly, we recommend testing payments before going live.

----[mla, mpe, mco, mlu, mlc]----
> WARNING
> 
> Important
>
> The test can only be performed after the integration configuration stage of [Checkout Mercado Pago](/developers/en/docs/shopify/integration-configuration/checkout-pro).


------------
----[mlb]----
> WARNING
> 
> Important
>
> The test can only be performed after the integration configuration stage of one of the payment checkouts, either [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) or [Checkout Mercado Pago](/developers/en/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlm]----
> WARNING
> 
> Important
>
> The test can only be performed after the integration configuration stage of one of the payment checkouts, either [Mercado Pago Cartões](/developers/en/docs/shopify/integration-configuration/checkout-cards) or [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).

------------

See below how to test the integration:

1. Access **[Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** in the Mercado Pago admin and select the application you want to test.
2. Click on **Test accounts** in the menu on the left.
3. In the "Test accounts" section, click on **Create test account** and create two different accounts: one for the seller and one for the buyer. You cannot use the same test account for both seller and buyer. Refer to the [Test accounts documentation](/developers/es/docs/shopify/additional-content/your-integrations/test/accounts) for step-by-step instructions on creating test accounts.
4. Open a new incognito window and log in to Mercado Pago using the seller test account created in the previous step.
5. In the same incognito window logged in as the seller, access the [Developer panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) and create a new application, following the detailed instructions in the [Developer panel documentation](/developers/es/docs/shopify/additional-content/your-integrations/dashboard).

> WARNING
>
> Important
>
> If, when logging in with a test account or navigating through the Your integrations sections, email authentication is requested, refer to our documentation to learn [how to validate login in test accounts](/developers/en/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validate_login_with_test_users).

6. Access the application created in step 5 and click on **Production credentials** in the menu on the left. Copy the `public_key` and the `access_token`.

----[mlm]----
7. Vá até as configurações do painel da Shopify (**Configurações > Pagamentos**) e clique para **Gerenciar** um dos checkout do Mercado Pago, sendo ele o [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards) ou o [Checkout Mercado Pago](/developers/pt/docs/shopify/integration-configuration/checkout-pro). 
8. Insira a `public_key` e o `access_token` da conta de teste do vendedor.
9. Clique em **Salvar credenciais**.

Agora, siga o passo a passo de acordo com o tipo de checkout escolhido para processar os pagamentos:

## Mercado Pago Cartões

10. Acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

## Checkout Mercado Pago

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
8. Insira a `public_key` e o `access_token` da conta de teste do vendedor.
9. Clique em **Guardar credenciais**.

Agora, siga o passo a passo de acordo com o tipo de checkout escolhido para processar os pagamentos:

## Mercado Pago Cartões

10. Acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

## Mercado Pago Checkout Pro

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