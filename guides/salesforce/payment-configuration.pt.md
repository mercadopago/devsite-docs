# Configurar formas de pagamento

----[mlb]----
Para começar a receber pagamentos com Mercado Pago, cartões de crédito ou débito, Pix e Mercado Crédito, siga as etapas descritas abaixo.

------------
----[mla, mlm]----
Para começar a receber pagamentos com Mercado Pago, cartões de crédito ou débito e Mercado Crédito, siga as etapas descritas abaixo.

------------

## Ativar métodos de pagamento

Veja como ativar cada meio de pagamento em sua loja Salesforce:

* [Configurar Checkout Pro](/developers/pt/docs/salesforce-commerce-cloud/payments-configuration/checkout-pro)
* [Configurar Checkout Transparente](/developers/pt/docs/salesforce-commerce-cloud/payments-configuration/checkout-api)
----[mlb]----
* [Configurar pagamentos com Pix](/developers/pt/docs/salesforce-commerce-cloud/payments-configuration/checkout-api/pix)
* [Configurar parcelamento sem cartão](/developers/pt/docs/salesforce-commerce-cloud/payments-configuration/checkout-api/credits)
------------
----[mla, mlm]----
* [Configurar parcelamento sem cartão](/developers/pt/docs/salesforce-commerce-cloud/payments-configuration/checkout-api/credits)
------------

## Escolha a localização do meio de pagamento

Por padrão, o cartucho do Mercado Pago mostrará os tipos de pagamento em uma determinada ordem.

----[mlb]----
![payment_methods_v2](/images/salesforce/payment_methods_v2.png)

------------

Caso queira alterar essa ordem, siga estas etapas.

1. Em sua loja do Salesforce Commerce Cloud, vá para o menu **Ferramentas do comerciante** e clique na opção **Métodos de pagamento** encontrada no grupo de opções Pedidos. Você também pode encontrar a opção usando o mecanismo de pesquisa do menu.
2. Na caixa, procure a coluna **Ordem de classificação**. Nesta coluna, atribua uma ordem numérica aos métodos de pagamento de sua loja para definir a ordem em que deseja exibi-los.
