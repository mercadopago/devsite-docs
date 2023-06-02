# Configure Checkout Transparente

With the [Checkout Transparente](/developers/en/docs/checkout-api/landing), the entire checkout process will take place within the online store environment, without the need to redirect to an external page. In addition to allowing greater control in the customization and integration process, the checkout offers a complete structure for processing payments with the main means available on the market.

> WARNING
>
> Attention
>
> If you are using the old Mercado Pago app ("Mercado Pago"), [click here](/developers/en/docs/shopify/how-tos/migration) to find out how to migrate to the current version ("Checkout Mercado Pago" ).

To install Checkout Transparente in a Shopify store, follow the steps below:

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
14. Por fim, clique em **Ativar Checkout Mercado Pago**.

> WARNING
>
> Atenção
>
> Importante salientar que instalação só estará finalizada **após clique em "Ativar Checkout Mercado Pago"**.