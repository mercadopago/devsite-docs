# Checkout Pro

----[mlb]----
Ao instalar o [Checkout Pro](/developers/pt/docs/checkout-pro/landing), é possível que haja um **aumento na taxa de aprovação das vendas da loja on-line**. Isso acontece porque os compradores poderão pagar usando uma conta Mercado Pago e todo o processo de compra será feito em nosso ambiente, o que facilita o pagamento. Ao final da transação, esses compradores são redirecionados ao ambiente da loja.

Para configurar o Checkout Pro em uma loja Shopify, siga os passos abaixo:

1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações**.
3. Uma vez lá, selecione a opção **Pagamentos**. Depois clique no botão **Escolher um provedor**.
4. Digite "Mercado Pago" na barra de busca. Após encontrá-lo, selecione-o como o seu método de pagamento.
5. Digite as suas **credenciais de produção** (`client_id` e `client_secret`) nos campos que as solicitam. Lembre-se de ter suas [credenciais](/developers/pt/docs/shopify/additional-content/your-integrations/credentials) à mão. 
6. No próximo passo, você poderá selecionar as imagens dos meios de pagamento que deseja exibir na loja.

> Essas imagens são apenas para **fins ilustrativos e não implicam na ativação do método de pagamento selecionado**.

7. Por último, a loja oferecerá a opção **habilite o modo de teste**. Ao ativar essa opção os pedidos finalizados com o Checkout Pro **não serão pedidos reais**. Ou seja, serão pedidos de teste que, mesmo finalizados, não terão seus status atualizados na plataforma e não aparecerão no painel do Mercado Pago na conta do vendedor.
8. Ao finalizar, clique em **Ativar Mercado Pago**.
 
> No caso de renovar suas credenciais, lembre-se de substituir as credenciais de produção e de teste em sua integração.

------------
----[mla, mlm, mpe, mlu, mlc, mco]----
Ao instalar o [Checkout Pro](/developers/pt/docs/checkout-pro/landing) (**Checkout Mercado Pago**), é possível que haja um **aumento na taxa de aprovação das vendas da loja on-line**. Isso acontece porque os compradores poderão pagar usando uma conta Mercado Pago e todo o processo de compra será feito em nosso ambiente, o que facilita o pagamento. Ao final da transação, esses compradores são redirecionados ao ambiente da loja.

> WARNING
>
> Atenção
>
> Se estava utilizando o antigo app do Mercado Pago (**Mercado Pago**) e deixou de receber pagamentos em sua loja, não se preocupe. Para voltar a vender, instale nosso novo app (**Checkout Mercado Pago**) seguindo os passos abaixo.

Para instalar o Checkout Pro (**Checkout Mercado Pago**) em sua loja Shopify, siga os seguintes passos:

1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).

2. No painel administrativo da loja, clique em **Configurações** no canto inferior esquerdo da página.

![Painel](/images/shopify/store-panel-pt.png)

3. Uma vez lá, selecione a opção **Pagamentos** no menu ao lado esquerdo da página. 

![Pagos](/images/shopify/payments-page-pt.png)

4. Em "Formas de pagamento aceitas", clique em **Adicionar formas de pagamento**.

5. Selecione a aba **Buscar por provedor** e procure pelo aplicativo "Checkout Mercado Pago".

![Agregar forma de pago](/images/shopify/add-payment-method-pt.png)

6. Após localizá-lo, selecione-o e clique em **Instalar**.

![Agregar forma de pago](/images/shopify/provider-pt.png)

7. Leia com atenção as informações sobre as permissões solicitadas e clique em **Instalar** outra vez.

![Agregar forma de pago](/images/shopify/install-app-pt.png)

8. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para vincular sua conta Mercado Pago a sua loja.

![Agregar forma de pago](/images/shopify/manage-account-pt.png)

9. Insira as suas **credenciais de produção** (`public key` e `access token`) nos campos solicitados, tomando cuidado para não inverter os campos no momento de copiar e colar as credenciais. Clique em **Salvar**. Saiba como obter suas credenciais na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/credentials) correspodente.

> WARNING
>
> Importante
>
> As credenciais são responsáveis por identificar a conta coletora dos pagamentos que você receberá em sua loja. Caso não insira suas credenciais no painel administrativo da loja, você será automaticamente redirecionado para configurar essa etapa. **Lembre-se, a ativação dos meios de pagamento só será possível após a inserção bem-sucedida das suas credenciais**.

![Agregar forma de pago](/images/shopify/add-credentials-es.png)

> NOTE
>
> Nota
>
> Renove suas credenciais conforme necessário, consultando a [documentação](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials) correspondente como guia. Após a renovação, é essencial atualizá-las no painel de Shopify. Lembre-se: ao alterar a senha, **é necessário renovar suas credenciais**. Para isso, exclua as credenciais antigas do painel, copie as novas e insira no painel administrativo da loja.

9. Para finalizar a instalação, clique em **Ativar**.

> Nesta etapa, você pode selecionar as imagens dos meios de pagamento que deseja exibir em sua loja para fins ilustrativos. 

------------

Pronto! O Checkout Pro do Mercado Pago está pronto para receber os pagamentos da sua loja.