# Configure o Checkout Pro

> WARNING
>
> Atenção
>
> Caso esteja utilizando a antiga versão do plugin do Mercado Pago, [clique aqui](/developers/pt/docs/shopify/how-tos/migration) para saber como migrar para a versão atual.

Ao instalar o [Checkout Pro](/developers/pt/docs/checkout-pro/landing), é possível que haja um **aumento na taxa de aprovação das vendas da loja on-line**. Isso acontece porque os compradores poderão pagar usando uma conta Mercado Pago e todo o processo de compra será feito em nosso ambiente, o que facilita o pagamento. Ao final da transação, esses compradores são redirecionados ao ambiente da loja.

----[mlb, mlm, mpe, mco, mlu, mlc]----
Para configurar o Checkout Pro em uma loja Shopify, siga os passos abaixo:

1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações**.
3. Uma vez lá, selecione a opção **Pagamentos**. Depois clique no botão **Escolher um provedor**.
4. Digite "Mercado Pago" na barra de busca. Após encontrá-lo, selecione-o como o seu método de pagamento.
5. Digite as suas **credenciais de produção** (`Client_id` e `Client_secret`) nos campos que as solicitam. Lembre-se de ter suas [credenciais](/developers/pt/docs/shopify/additional-content/credentials) à mão. 
6. No próximo passo, você poderá selecionar as imagens dos meios de pagamento que deseja exibir na loja. **Importante: estas imagens são apenas para fins ilustrativos e não implicam a ativação do método de pagamento selecionado**.
7. Por último, a loja oferecerá a opção **habilite o modo de teste**. Ao ativar essa opção os pedidos finalizados com o Checkout Pro **não serão pedidos reais**. Ou seja, serão pedidos de teste que, mesmo finalizados, não terão seus status atualizados na plataforma e não aparecerão no painel do Mercado Pago na conta do vendedor.
8. Ao finalizar, clique em **Ativar Mercado Pago**.
 
> No caso de renovar suas credenciais, lembre-se de substituir as credenciais de produção e de teste em sua integração.

------------
----[mla]----
Para instalar o Checkout Pro em sua loja Shopify, siga os passos abaixo:

1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações**.
3. Uma vez lá, selecione a opção **Pagamentos**. 
4. Em **Formas de pagamento adicionais**, clique em **Adicionar formas de pagamento**.
5. Digite "Checkout Mercado Pago" na barra de busca. Após encontrá-lo, clique na opção **disponível**.
6. Digite as suas **credenciais de produção** (`public key` e `access token`) nos campos que as solicitam. Lembre-se de ter suas [credenciais](/developers/pt/docs/shopify/additional-content/credentials) à mão. 
7. No próximo passo, você poderá selecionar as imagens dos meios de pagamento que deseja exibir na loja. **Importante: estas imagens são apenas para fins ilustrativos e não implicam a ativação do método de pagamento selecionado**.
8. Por último, a loja oferecerá a opção **habilite o modo de teste**. Ao ativar essa opção os pedidos finalizados com o Checkout Pro **não serão pedidos reais**. Ou seja, serão pedidos de teste que, mesmo finalizados, não terão seus status atualizados na plataforma e não aparecerão no painel do Mercado Pago na conta do vendedor.
9. Ao finalizar, clique em **Ativar Mercado Pago**.
 
> No caso de renovar suas credenciais, lembre-se de substituir as credenciais de produção e de teste em sua integração.

------------