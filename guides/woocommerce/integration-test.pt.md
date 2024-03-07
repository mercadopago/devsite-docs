# Testar pagamentos

Os testes de compras são essenciais para garantir que os pagamentos sejam processados corretamente antes de autorizar transações reais. Para verificar se a sua loja está configurada corretamente, recomendamos que você teste os pagamentos antes de iniciá-la em produção. 

> WARNING
> 
> Importante
>
> O teste só poderá ser realizado após a etapa de [configuração da integração.](/developers/pt/docs/woocommerce/integration-configuration/plugin-configuration)


Veja abaixo como testar a integração:
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
## Checkout Pro

------------
1. Acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** no admin do Mercado Pago e selecione a aplicação que deseja testar. 
2. Clique em **Contas de teste** no menu à esquerda.
3. Dentro da seção **Contas de teste**, clique em **Criar conta de teste** e crie duas contas diferentes: uma para vendedor e outra para comprador. Não é possível utilizar a mesma conta de teste para vendedor e comprador. Consulte a [documentação de Contas de teste](/developers/pt/docs/shopify/additional-content/your-integrations/test/accounts) para acessar o passo a passo de criação de contas teste.

![Criar conta](/images/woocomerce/test-create-account.gif)

4. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste do vendedor criada no passo anterior.
5. Na mesma janela anônima logada como vendedor, acesse o [Painel do desenvolvedor](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) e crie uma nova aplicação, seguindo as instruções detalhadas na [documentação do Painel do desenvolvedor.](/developers/pt/docs/woocommerce/additional-content/your-integrations/dashboard)

![Login](/images/woocomerce/test-login.gif)

6. Acesse a aplicação criada no passo anterior e clique em **Credenciais de produção** no menu à esquerda. Copie o `access_token` e a `public_key`.

![Credenciais de produção](/images/woocomerce/test-prod-credentials.png)

7. Vá até as configurações do painel de WooCommerce (**WooCommerce > Mercado Pago > Integre a loja com o Mercado Pago**).
8. Insira as credenciais produtivas `access_token` e a `public_key` da conta de teste do vendedor no campo **Credenciais de produção**.
9. Na aplicação criada no passo 5, clique em **Credenciais de teste** no menu à esquerda. Copie o `access_token` e a `public_key`.

![Credenciais de teste](/images/woocomerce/test-test-credentials.png)

10. Insira também as credenciais de teste `access_token` e a `public_key` da conta de teste do vendedor no campo **Credenciais de teste**.

![Painel](/images/woocomerce/test-woo.png)

11. Clique em **Salvar e continuar**.
12. Ainda no painel de Woocommerce, vá até o passo "4. Teste sua loja antes de vender" e selecione a opção **Modo vendas (produção)**.
13. Clique em **Salvar mudanças**.
14. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste do comprador criada no passo 3.

----[mlb]----
15. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como CPF, RG, telefone e e-mail da conta de teste do comprador. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/woocommerce/additional-content/your-integrations/test/cards) correspondente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
15. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/woocommerce/additional-content/your-integrations/test/cards) correspondente.

------------
----[mlb]----
> WARNING
> 
> Importante
>
> Durante os testes, você estará operando no ambiente de produção, no entanto, trata-se de um teste no qual você estará utilizando credenciais fictícias para simular cenários reais. Ao concluir os testes, lembre-se de substituir as credenciais do vendedor (tanto de produção quanto de teste), inseridas no painel do plugin nos passos 8 e 10, pelas credenciais reais da sua conta no Mercado Pago. Essa ação permitirá que você continue vendendo em sua loja e evitará confusões.

Após concluir uma compra de teste utilizando o Checkout Pro ou o Checkout Transparente, a aprovação da compra será visível no Painel Administrativo de WooCommerce, com exceção das compras feitas por meios offline e Pix, que permanecerão com status pendente.

Além disso, os pedidos serão registrados no histórico da conta de teste de vendedor do Mercado Pago.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
> WARNING
> 
> Importante
>
> Durante os testes em Checkout Pro, você estará operando no ambiente de produção, no entanto, trata-se de um teste no qual você estará utilizando credenciais fictícias para simular cenários reais. Ao concluir os testes, lembre-se de substituir as credenciais do vendedor (tanto de produção quanto de teste), inseridas no painel do plugin no passo 9, pelas credenciais reais da sua conta no Mercado Pago. Essa ação permitirá que você continue vendendo em sua loja e evitará confusões.

Após concluir uma compra de teste utilizando o Checkout Pro a aprovação da compra será visível no Painel Administrativo de WooCommerce, com exceção das compras feitas por meios offline, que permanecerão com status pendente.

Além disso, os pedidos serão registrados no histórico da conta de teste de vendedor do Mercado Pago.

## Checkout API

1. Acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** no admin do Mercado Pago e selecione a aplicação que deseja testar. 
2. Clique em **Credenciais de produção** no menu à esquerda. Copie o `access_token` e a `public_key`.

![Credenciais de produção](/images/woocomerce/test-prod-credentials.png)

3. Vá até as configurações do painel de WooCommerce (**WooCommerce > Mercado Pago > Integre a loja com o Mercado Pago**).
4. Insira suas credenciais produtivas `access_token` e a `public_key` no campo **Credenciais de produção**.
5. Na sua aplicação, clique em **Credenciais de teste** no menu à esquerda. Copie o `access_token` e a `public_key`.

![Credenciais de teste](/images/woocomerce/test-test-credentials.png)

6. Insira também as credenciais de teste `access_token` e a `public_key` da conta de teste do vendedor no campo **Credenciais de teste**.

![Painel](/images/woocomerce/test-woo.png)

7. Clique em **Salvar e continuar**.
8. Acesse sua loja e efetue uma compra fornecendo informações de teste, como número de telefone e um endereço de e-mail diferente daquele associado à sua conta no Mercado Pago. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/woocommerce/additional-content/your-integrations/test/cards) correspondente.

------------