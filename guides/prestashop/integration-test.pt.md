# Testar pagamentos

Os testes de compras são essenciais para garantir que os pagamentos sejam processados corretamente antes de autorizar transações reais. Para verificar se a sua loja está configurada corretamente, recomendamos que você teste os pagamentos antes de iniciá-la em produção. 

> WARNING
> 
> Importante
>
> O teste só poderá ser realizado após a etapa de [configuração da integração.](/developers/pt/docs/prestashop/integration)


Veja abaixo como testar a integração:
1. Acesse **[Suas integrações](https://www.mercadopago.com/developers/panel/app)** e selecione a aplicação que deseja testar. 
2. Clique em **Contas de teste** no menu à esquerda.
3. Dentro da seção **Contas de teste**, clique em **Criar conta de teste** e crie duas contas diferentes: uma para vendedor e outra para comprador. Não é possível utilizar a mesma conta de teste para vendedor e comprador. Consulte a [documentação de Contas de teste](/developers/pt/docs/prestashop/additional-content/your-integrations/test/accounts) para acessar o passo a passo de criação de contas teste.

![Criar conta](/images/prestashop/test-create-account.gif)

4. Abra uma nova janela anônima e faça login no [Mercado Pago](https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEA42QTU_DMAyG_0sPnNAGQuJjUoXSUrZq6zrWDTYuVpZ4aUTSVGlKhxD_nbTAnaOf149j5zNQRsgK3EeNwSTAU60kky44D2pF3dFYDZL7QNceNdLhb6kOfQu1VKND2wSTz36QQB6hl_pRR6oa9E20dSUclek8G97yTDaAJ-9VVEGHh3eJffpnCOOL0rm6mYzHXdeNNFpGuampMCNm9OhgxzWV_J4ZjuHDZbFaXOyn-VnrNDSmtQxDYYxQOBCNXLY6bJBaVg6EUe11UYXZIoJsBVMgOUTzF9hBkZB1PIN0WWxgsytglmfJj2Mqh5ULh6SnXhwCf4UOY5KtyHJGhv7BTjfbOM2XZAGr7To_09Q5cMao8Obi9uru-vryB3XG8v-uIZiSPExIStMnc4jLLK35x_yE8bQk2fMueUxJdAXYvW4TQvakICQR85s9PEDUJcHXuf_fxi9hKXsLJs62-PUNyyMqtf0BAAA/user) usando a conta de teste do vendedor criada no passo anterior.
5. Na mesma janela anônima logada como vendedor, acesse o [Painel do desenvolvedor](https://www.mercadopago.com/developers/panel/app) e crie uma nova aplicação, seguindo as instruções detalhadas na [documentação do Painel do desenvolvedor.](/developers/pt/docs/prestashop/additional-content/your-integrations/dashboard)

![Login](/images/prestashop/test-login.gif)

6. Acesse a aplicação criada e clique em **Credenciais de produção** no menu à esquerda. Copie o `access_token` e a `public_key`.

![Credenciais de produção](/images/prestashop/test-prod-credentials.png)

7. Vá até as configurações do painel de Prestashop (**CAMINHO**).
8. Insira as credenciais produtivas `access_token` e a `public_key` da conta de teste do vendedor no campo **Credenciais de produção**.
9. Na aplicação, clique em **Credenciais de teste** no menu à esquerda. Copie o `access_token` e a `public_key`.

![Credenciais de teste](/images/prestashop/test-test-credentials.png)

10. Insira também as credenciais de teste `access_token` e a `public_key` da conta de teste do vendedor no campo **Credenciais de teste**.

![Painel](/image)

11. Clique em **Salvar e continuar**.
12. Acesse o [Mercado Pago](https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEA42QTU_DMAyG_0sPnNAGQuJjUoXSUrZq6zrWDTYuVpZ4aUTSVGlKhxD_nbTAnaOf149j5zNQRsgK3EeNwSTAU60kky44D2pF3dFYDZL7QNceNdLhb6kOfQu1VKND2wSTz36QQB6hl_pRR6oa9E20dSUclek8G97yTDaAJ-9VVEGHh3eJffpnCOOL0rm6mYzHXdeNNFpGuampMCNm9OhgxzWV_J4ZjuHDZbFaXOyn-VnrNDSmtQxDYYxQOBCNXLY6bJBaVg6EUe11UYXZIoJsBVMgOUTzF9hBkZB1PIN0WWxgsytglmfJj2Mqh5ULh6SnXhwCf4UOY5KtyHJGhv7BTjfbOM2XZAGr7To_09Q5cMao8Obi9uru-vryB3XG8v-uIZiSPExIStMnc4jLLK35x_yE8bQk2fMueUxJdAXYvW4TQvakICQR85s9PEDUJcHXuf_fxi9hKXsLJs62-PUNyyMqtf0BAAA/user) e faça login na conta de teste do comprador criada anteriormente.
13. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como [CPF](https://www.4devs.com.br/gerador_de_cpf), [RG](https://www.4devs.com.br/gerador_de_rg), [telefone](https://geradornv.com.br/gerador-telefone/) e e-mail da conta de teste do comprador. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/prestashop/additional-content/your-integrations/test/cards) correspondente.

> WARNING
> 
> Importante
>
> Após concluir uma compra de teste utilizando o Checkout Pro, observe que no Painel Administrativo da Prestashop, não será possível visualizar a aprovação da compra. Isso ocorre porque o processo acontece dentro do ambiente do Mercado Pago, e não na loja. No entanto, ao realizar o teste utilizando o Checkout Transparente, será possível visualizar a aprovação do pedido no mesmo painel. 
> </br> <br/> 
> Além disso, em ambos os checkouts, a informação de pagamento aprovado não será registrada no histórico da conta do Mercado Pago. Isso acontece porque nesse histórico só constam despesas reais realizadas em ambiente de produção.

> NOTE
> 
> Nota
>
> Para saber mais sobre as credenciais utilizadas durante os testes de pagamentos, consulte a [documentação dedicada às Credenciais.](/developers/pt/docs/prestashop/additional-content/your-integrations/credentials)