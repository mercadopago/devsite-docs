# Configuração de meios de pagamento 

Para começar a receber pagamentos com o Mercado Pago, após criar uma afiliação do gateway MercadoPagoV2, você deverá configurar os meios de pagamento que deseja disponibilizar.

> WARNING
>
> Importante
>
> A afiliação de gateway MercadoPagoV1 será descontinuada. Se você já possui uma afiliação de gateway MercadoPagoV1, você precisará [migrar para o MercadoPagoV2](/developers/pt/docs/vtex/integration/v1-v2-migration) para continuar operando com o Mercado Pago e aproveitar as novas vantagens que esse conector oferece.

Ao utilizar o MercadoPagoV2 como conector, você pode escolher quais métodos de pagamento oferecer nas lojas VTEX por meio da configuração dos nossos checkouts: 

* ----[mla, mlu, mlc, mlm, mpe, mco]----[Checkout API:](/developers/pt/docs/vtex/payments-configuration/checkout-api)------------ ----[mlb]---- [Checkout Transparente:](/developers/pt/docs/vtex/payments-configuration/checkout-api)------------ Você pode oferecer pagamentos parcelados sem juros, ----[mla, mlm, mlb]----financiamentos sem cartão,------------ pagamentos com cartões de débito, ----[mlb]---- com Boleto Bancário ou Pix------------, e todo o processo de pagamento será realizado dentro do ambiente da loja, sem a necessidade de redirecionar para uma página externa. 

* [Checkout Pro:](/developers/pt/docs/vtex/payments-configuration/checkout-pro) O comprador será direcionado da loja para o site do Mercado Pago, onde a transação será processada e concluída com qualquer um dos meios de pagamento configurados anteriormente. Após a conclusão dessa transação, o cliente será redirecionado para a loja VTEX. 


> WARNING
>
> Importante
>
> Verifique se você instalou o **Mercado Pago Payment APP** para poder configurar os meios de pagamento em sua loja VTEX. Caso ainda não tenha feito isso, você pode instalá-lo na seção "Meus Apps".

