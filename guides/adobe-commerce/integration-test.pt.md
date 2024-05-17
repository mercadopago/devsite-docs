# Testar pagamentos

Os testes de compras são essenciais para garantir que os pagamentos sejam processados corretamente antes de autorizar transações reais. Para verificar se a sua loja está configurada corretamente, recomendamos que você teste os pagamentos antes de iniciá-la em produção. 

> WARNING
> 
> Importante
>
> O teste só poderá ser realizado após a etapa de [configuração da integração.](/developers/pt/docs/adobe-commerce/integration-configuration)

Veja abaixo como testar a integração:
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
## Checkout Pro

------------
1. Acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** no admin do Mercado Pago e selecione a aplicação que deseja testar. 
2. Clique em **Contas de teste** no menu à esquerda.
3. Dentro da seção **Contas de teste**, clique em **Criar conta de teste** e crie duas contas diferentes: uma para vendedor e outra para comprador. Não é possível utilizar a mesma conta de teste para vendedor e comprador. Consulte a [documentação de Contas de teste](/developers/pt/docs/adobe-commerce/additional-content/your-integrations/test/accounts) para acessar o passo a passo de criação de contas teste.

![Criar conta](/images/adobe-commerce/test-create-account.gif)

4. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste do vendedor criada no passo anterior.
5. Na mesma janela anônima logada como vendedor, acesse o [Painel do desenvolvedor](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) e crie uma nova aplicação, seguindo as instruções detalhadas na [documentação do Painel do desenvolvedor.](/developers/pt/docs/adobe-commerce/additional-content/your-integrations/dashboard)

![Login](/images/adobe-commerce/test-login.gif)

 > WARNING
 >
 > Importante
 >
 > Se, ao fazer login com uma conta de teste ou navegar pelas seções de Suas integrações solicitarem a autenticação por e-mail, acesse nossa documentação para saber [como validar o login em contas teste](/developers/pt/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_login_com_usuarios_teste).

6. Acesse a aplicação criada no passo anterior e clique em **Credenciais de produção** no menu à esquerda. Copie o `access_token` e a `public_key`.

![Credenciais de produção](/images/adobe-commerce/test-prod-credentials.png)

7. Vá até as configurações do painel de Adobe Commerce (**Stores > Configuration > Sales > Payment Methods > Other payments methods > Configure > Basic Settings > Mercado Pago Integration**).
8. Selecione a opção **Production** no campo "Checkout operation mode".
9. Insira as credenciais produtivas `access_token` e `public_key` da conta de teste do vendedor.

![Painel](/images/adobe-commerce/test-adobe-commerce.png)

11. Clique em **Save Config**.
12. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste do comprador criada no passo 3. 

> WARNING
>
> Importante
>
> Se, ao fazer login com uma conta de teste ou navegar pelas seções de Suas integrações, solicitarem a autenticação por e-mail, acesse nossa documentação para saber [como validar o login em contas teste](/developers/pt/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_login_com_usuarios_teste). 

----[mlb]----
13. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como CPF, RG, telefone e e-mail da conta de teste do comprador. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/adobe-commerce/additional-content/your-integrations/test/cards) correspondente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
13. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/adobe-commerce/additional-content/your-integrations/test/cards) correspondente.

------------
----[mlb]----
> WARNING
> 
> Importante
>
> Durante os testes, você estará operando no ambiente de produção, no entanto, trata-se de um teste no qual você estará utilizando credenciais fictícias para simular cenários reais. Ao concluir os testes, lembre-se de substituir as credenciais do vendedor (tanto de produção quanto de teste), inseridas no painel do plugin no passo 9, pelas credenciais reais da sua conta no Mercado Pago. Essa ação permitirá que você continue vendendo em sua loja e evitará confusões.

Após concluir uma compra de teste utilizando o Checkout Pro ou o Checkout Transparente, a aprovação da compra será visível no Painel Administrativo de Adobe, com exceção das compras feitas por meios offline e Pix que permanecerão com status pendente.

Além disso, os pedidos serão registrados no histórico da conta de teste de vendedor do Mercado Pago.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
> WARNING
> 
> Importante
>
> Durante os testes em Checkout Pro, você estará operando no ambiente de produção, no entanto, trata-se de um teste no qual você estará utilizando credenciais fictícias para simular cenários reais. Ao concluir os testes, lembre-se de substituir as credenciais do vendedor (tanto de produção quanto de teste), inseridas no painel do plugin no passo 9, pelas credenciais reais da sua conta no Mercado Pago. Essa ação permitirá que você continue vendendo em sua loja e evitará confusões.

Após concluir uma compra de teste utilizando o Checkout Pro a aprovação da compra será visível no Painel Administrativo de Adobe, com exceção das compras feitas por meios offline, que permanecerão com status pendente.

Além disso, os pedidos serão registrados no histórico da conta de teste de vendedor do Mercado Pago.

## Checkout API

1. Acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** no admin do Mercado Pago e selecione a aplicação que deseja testar. 
2. Clique em **Credenciais de teste** no menu à esquerda. Copie o `access_token` e a `public_key`.

![Credenciais de teste](/images/adobe-commerce/test-test-credentials-api.png)

3. Vá até as configurações do painel de Adobe Commerce (**Stores > Configuration > Sales > Payment Methods > Other payments methods > Configure > Basic Settings > Mercado Pago Integration**).
4. Selecione a opção **Sandbox** no campo "Checkout operation mode".
5. Insira as credenciais de teste `access_token` e `public_key` da sua aplicação.

![Painel](/images/adobe-commerce/test-adobe-commerce-all.png)

6. Clique em **Save Config**.
7. Acesse sua loja e efetue uma compra fornecendo informações de teste, como número de telefone e um endereço de e-mail diferente daquele associado à sua conta no Mercado Pago. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/adobe-commerce/additional-content/your-integrations/test/cards) correspondente.

------------
