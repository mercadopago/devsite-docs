# Configurar formas de pagamento

Para começar a receber pagamentos com Mercado Pago, cartões de crédito ou débito----[mlb]---- e Pix------------, siga as etapas descritas abaixo.

## Ativar métodos de pagamento

Veja como ativar cada meio de pagamento em sua loja Salesforce:

* [Configurar Mercado Pago](/developers/pt/docs/salesforce-commerce-cloud/integration-configuration/payments-configuration/mercadopago)
* [Configurar cartões de crédito e/ou débito](/developers/pt/docs/salesforce-commerce-cloud/integration-configuration/payments-configuration/credit-debit)
----[mlb]----
* [Configurar pagamentos com Pix](/developers/pt/docs/salesforce-commerce-cloud/integration-configuration/payments-configuration/pix)
------------

## Escolha a localização do meio de pagamento

Por padrão, o cartucho do Mercado Pago mostrará primeiro a forma de pagamento Pix e depois o cartão de crédito. 

----[mlb]----
![payment_methods_v2](/images/salesforce/payment_methods_v2.png)
------------

Caso queira alterar essa ordem, siga estas etapas.

1. Em sua loja do Salesforce Commerce Cloud, vá para o menu **Ferramentas do comerciante** e clique na opção **Métodos de pagamento** encontrada no grupo de opções Pedidos. Você também pode encontrar a opção usando o mecanismo de pesquisa do menu.
2. Na caixa, procure a coluna **Ordem de classificação**. Nesta coluna, atribua uma ordem numérica aos métodos de pagamento de sua loja para definir a ordem em que deseja exibi-los.
