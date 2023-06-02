# How to migrate to the new version of the Mercado Pago app

Learn how to install the new app and uninstall the old one to avoid service interruption in Shopify.

## Install the new app

----[mla, mlm, mpe, mco, mlu, mlc]----
1. Go to your [Shopify](https://accounts.shopify.com/store-login) store.
2. In the store's administrative panel, click on **Settings**.
3. Once there, select the **Payments** option. 
4. In "Additional payment methods", click on the **Add payment methods** option.
5. Go to the **Search by provider** tab and look for the new app with the name "Checkout Mercado Pago".
6. Once you have found it, select it and click **Activate** and then **Connect**.
7. Select **Install App** and then **Manage**.
8. Put your **production credentials** (`public key` and `access token`) in the fields that request it and click **Save**. Remember to keep your [credentials](/developers/en/docs/shopify/additional-content/credentials) handy.
9. To finish the installation, select **Activate Checkout Mercado Pago**.

> In this step, you can select the images of the means of payment that you want to show in your store for illustrative purposes. Also, if you wish, you can enable [test mode.](/developers/en/docs/shopify/sales-processing/integration-test)

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
 - **Pix**. Selecione o prazo para pagamento do código Pix. Para oferecer pagamentos com Pix é preciso garantir que as chaves Pix tenham sido criadas. Caso ainda não tenha criado, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.
 - **Boleto e lotérica**. Selecione o prazo para vencimento do boleto, não incluindo sábado e domingo.

12. [Configure](https://www.mercadopago.com.br/costs-section#from-section=menu), diretamente na conta Mercado Pago associada à loja, as informações de parcelamento e juros que serão oferecidas.
13. Clique em **Salvar configurações > Entendi** para retornar ao painel administrativo da loja e finalizar a instalação.
14. Por fim, clique em **Ativar Checkout Mercado Pago**. Importante salientar que instalação só estará finalizada **após clique em "Ativar Checkout Mercado Pago"**.

------------

> NOTE
>
> Important
>
> At this exact moment, you are going to have both versions installed on your site. This will ensure that your store does not run out of payment methods while the migration steps are taking place.

## Deactivate the old app

After installing the new version, it is necessary to uninstall the old version following the step by step below.

1. Go to your [Shopify](https://accounts.shopify.com/store-login) store.
2. In the store's administrative panel, click on **Settings**.
3. Once there, select the **Payments** option. 
4. Find the old app with the name "Mercado Pago" and select **Manage**.
5. To finish, click on **Deactivate Mercado Pago**.

> WARNING
>
> Attention
>
> Be careful to not uninstall the new version.