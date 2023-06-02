# Como migrar para a nova versão do app Mercado Pago

Saiba como instalar o novo app e desinstalar o antigo para evitar a interrupção do serviço na Shopify.

## Instale o novo app

----[mla, mlm, mpe, mco, mlu, mlc]----
1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações**.
3. Uma vez lá, selecione a opção **Pagamentos**. 
4. Em "Formas de pagamento adicionais", clique em **Adicionar formas de pagamento**.
5. Acesse a aba **Pesquisar por fornecedor** e procure o novo app com o nome "Checkout Mercado Pago".
6. Após localizá-lo, selecione-o, clique em **Ativar** e, por fim, em **Conectar**.
7. Selecione **Instalar app** e, depois, clique em **Gerenciar**.
8. Insira as suas **credenciais de produção** (`public key` e `access token`) nos campos solicitados e clique em **Salvar**. Lembre-se de ter suas [credenciais](/developers/pt/docs/shopify/additional-content/credentials) à mão.
9. Para finalizar a instalação, clique em **Ativar Checkout Mercado Pago**.

> Nesta etapa, você pode selecionar as imagens dos meios de pagamento que deseja exibir em sua loja para fins ilustrativos. Além disso, se desejar, você pode ativar o [modo de teste.](/developers/pt/docs/shopify/sales-processing/integration-test)

------------
----[mlb]----
1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações**.
3. Uma vez lá, selecione a opção **Pagamentos**. 
4. Em "Formas de pagamento adicionais", clique em **Adicionar formas de pagamento**.
5. Acesse a aba **Pesquisar por fornecedor** e procure o novo app com o nome "Checkout Mercado Pago".
6. Após localizá-lo, selecione-o, clique em **Ativar** e, por fim, em **Conectar**.
7. Selecione **Instalar app** e, depois, clique em **Gerenciar**.
8. Insira as suas **credenciais de produção** (`public key` e `access token`) nos campos solicitados e clique em **Salvar**. Lembre-se de ter suas [credenciais](/developers/pt/docs/shopify/additional-content/credentials) à mão e, no caso de renovar suas credenciais, lembre-se de substituir as credenciais de produção e de teste em sua integração.
9. Em seguida, clique em **Validar conta** para garantir a validade das credencias inseridas e manter a sua conta segura. O processo de validação é feito totalmente pelo Mercado Pago.
10. Selecione o **modelo de negócio** para auxiliar o Mercado Pago a enviar soluções personalizadas para a loja. As opções disponíveis são: **dropshipping**, **e-commerce tracicional** e **produtos ou serviçOes digitais**.
11. Habilite os **meios de pagamento** que serão oferecidos, podendo ser:

 - **Cartões de crédito e débito**. Para saber quais cartões são aceitos, verifique a lista completa [aqui](/developers/pt/docs/sales-processing/payment-methods).
 - **Pix**. Selecione o prazo para pagamento do código Pix. Para oferecer pagamentos com Pix é preciso garantir que as chaves Pix tenham sido criadas. Você poderá cadastrá-las neste momento de configuração ou, caso opte por cadastrá-las em outro momento, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.
 - **Boleto e lotérica**. Selecione o prazo para vencimento do boleto, não incluindo sábado e domingo.

12. [Configure](https://www.mercadopago.com.br/costs-section#from-section=menu), diretamente na conta Mercado Pago associada à loja, as informações de parcelamento e juros que serão oferecidas.
13. Clique em **Salvar configurações > Entendi** para retornar ao painel administrativo da loja e finalizar a instalação.
14. Por fim, clique em **Ativar Checkout Mercado Pago**. Importante salientar que instalação só estará finalizada **após clique em "Ativar Checkout Mercado Pago"**.

------------

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