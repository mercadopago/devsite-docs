# Shopify

* [Funcionalidades](#funcionalidades)
* [Configuração](#configuração)

## Funcionalidades

O módulo do Mercado Pago para Shopify esta integrado com as funcionalidades a seguir:

| Funcionalidade                                           	| Web Checkout    	|
|-----------------------------------------------------------|-------------------|
| Pagamento com Cartão de Crédito                          	| ✔               	|
| Outros Meios de Pagamento, como os Boletos               	| ✔               	|
| Divisão de Pagamento (Dois Cartões)                      	| ✔               	|
| Interfaces pré-construídas do Mercado Pago               	| ✔               	|
| Calculadora de Parcelas                                  	| ✔               	|
| Notificação instantânea de pagamentos e webhooks         	| ✔               	|
| Descontos por meio de pagamento ou cupom do Mercado Pago 	| ✔               	|

### Web Checkout

Ótimo para os vendedores que querem começar a vender rápido e fácil.

* Fácil integração do site - nenhuma linha de código necessária.
* Controle limitado da experiência de compra.
* Pagamento com um click.
* Aceite pagamentos com boleto, dinheiro em conta do Mercado Pago e cartão de crédito.
* Aceite cupons de desconto

## Configuração

<center>
  <iframe width="560" height="315" src="https://www.youtube.com/watch?v=X3mq4fbykOg" frameborder="0" allowfullscreen=""></iframe>
</center>

1) No seu painel de administração do Shopify, va até o menu **Settings > Payments**.

![Configuring Mercado Pago in shopify](/images/shopify/shopify-config-1.gif)

2) Em **Accept credit cards**, selecione **Mercado Pago**.
3) Preencha o **CLIENT ID** e **CLIENT SECRET**. [Obtenha suas credenciais](https://www.mercadopago.com/mla/account/credentials?type=basic)

  ![Configuring client id and client secret in shopify](/images/shopify/shopify-config-2.gif)

4) Click no botão "**Activate**" para salvar.

  ![Saving All Settings](/images/shopify/shopify-config-3.gif)

5) Parabéns! o **Mercado Pago** foi configurado.

### Mapeamento de declarações de pagamento

O esquema a seguir representa a correlação entre os estados de um pagamento no Mercado Pago e o status do pedido no Shopify.

| Mercado Pago status | Shopify order status |
|---------------------|----------------------|
| Approved            | Completed            |
| Pending             | Pending              |
| In process          | Pending              |
| Rejected            | Pending              |
| Cancelled           | Failed               |