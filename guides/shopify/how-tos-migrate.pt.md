# Como migrar para a nova versão do app Mercado Pago

Saiba como instalar o novo app e desinstalar o antigo para evitar a interrupção do serviço na Shopify.

## Instale o novo app

1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações**.
3. Uma vez lá, selecione a opção **Pagamentos**. 
4. Em "Formas de pagamento adicionais", clique em **Adicionar formas de pagamento**.
5. Acesse a aba **Pesquisar por fornecedor** e procure o novo app com o nome "Checkout Mercado Pago".
6. Após localizá-lo, selecione-o, clique em **Ativar** e, por fim, em **Conectar**.
7. Selecione **Instalar app** e, depois, clique em **Gerenciar**.
8. Insira as suas **credenciais de produção** (`public key` e `access token`) nos campos solicitados e clique em **Salvar**.
9. Para finalizar a instalação, clique em **Ativar Checkout Mercado Pago**.

> Nesta etapa, você pode selecionar as imagens dos meios de pagamento que deseja exibir em sua loja para fins ilustrativos. Além disso, se desejar, você pode ativar o [modo de teste.](/developers/pt/docs/shopify/sales-processing/integration-test)

> NOTE
>
> Importante
>
> Neste exato momento você terá ambas as versões instaladas em seu site. Isso servirá para garantir que a sua loja não fique sem nenhum meio de pagamento enquanto estiverem sendo realizadas as etapas de migração. 

## Desative o antigo app

Feita a instalação da nova versão, é necessário desinstalar a antiga versão seguindo o passo a passo abaixo.

1. Vá para sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações**.
3. Uma vez lá, selecione a opção **Pagamentos**. 
4. Localize o antigo app com o nome "Mercado Pago" e selecione **Gerenciar**.
5. Por fim, clique em **Desativar Mercado Pago**.

> WARNING
>
> Atenção
>
> Tenha cuidado para não desinstalar a nova versão.