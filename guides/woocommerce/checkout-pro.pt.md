# Checkout Pro

Ao instalar o [Checkout Pro](/developers/pt/docs/checkout-pro/landing), é possível que haja um **aumento na taxa de aprovação das vendas da loja on-line**. Isso acontece porque os compradores poderão pagar usando uma conta Mercado Pago e todo o processo de compra será feito em nosso ambiente, o que facilita o pagamento. Ao final da transação, esses compradores são redirecionados ao ambiente da loja.

No checkout, quando os compradores escolhem pagar com Mercado Pago, é apresentado um informativo que ressalta as vantagens exclusivas de pagar com uma conta Mercado Pago, como:

----[mlb]----
* **Login facilitado**: iniciar a sessão com o mesmo e-mail e senha do Mercado Livre.
* **Pagar mais rápido e de várias maneiras**: utilizar os cartões salvos, Pix ou saldo disponível na conta Mercado Pago.
* **Proteção à compra**: receber o dinheiro de volta caso o produto não seja entregue.

<center>

![woo-chopro-pt-mlb](/images/woocomerce/woo-chopro-pt-mlb.png)

</center>
------------

----[mla]----
* **Pagar mais rápido**: utilizar os cartões salvos ou saldo disponível na conta Mercado Pago.
* **Parcelamento**: parcelar com ou sem cartão de crédito.
* **Suporte do Mercado Pago**: receber ajuda caso tenha algum problema com a compra.

<center>

![woo-chopro-pt-mla](/images/woocomerce/woo-chopro-pt-mla.png)

</center>>
------------

----[mlm]----
* **Login facilitado**: iniciar a sessão com o mesmo e-mail e senha do Mercado Livre. 
* **Pagar mais rápido e de várias maneiras**: utilizar os cartões salvos, efectivo, meios de pagamento off-line ou saldo disponível na conta Mercado Pago.
* **Proteção à compra**: receber o dinheiro de volta caso o produto não seja entregue.

<center>

![woo-chopro-pt-mlm](/images/woocomerce/woo-chopro-pt-mlm.png)

</center>>
------------

----[mpe, mco, mlu, mlc]----
* **Login facilitado**: iniciar a sessão com o mesmo e-mail e senha do Mercado Livre. 
* **Pagar mais rápido**: utilizar dinheiro ou saldo disponível na conta Mercado Pago. 
* **Parcelamento**: parcelar sem juros em bancos selecionados.

<center>

![woo-chopro-pt-all](/images/woocomerce/woo-chopro-pt-all.png)

</center>
------------

## Configure o meio de pagamento

1. Para ativar o checkout, você deve clicar no botão deslizante.
2. No campo **Título no checkout da loja** você pode escolher o nome com que essa forma de pagamento será exibida na loja. Por exemplo, você pode chamá-la de **Mercado Pago**.
3. A opção **Converter moeda** permite que o valor da moeda configurada no WooCommerce seja compatível com o valor da moeda que você utiliza no Mercado Pago. Se você quiser ativá-la, basta clicar no botão deslizante.
4. Em **Escolha as formas de pagamento aceitas na loja** você pode escolher quais formas de pagamento aceitará na loja através do Checkout Pro, podendo ser:
----[mlb]----
    - **Cartões de débito e crédito**.
    - **Dinheiro (saldo da conta Mercado Pago ou boleto bancário)**.
    - **Transferência bancária (Pix e PEC)**. A opção de pagamento Pix só será exibida se houver uma chave Pix cadastrada no Mercado Pago.
    - **Parcelamento sem cartão**. Ao configurar o Checkout Pro, você pode oferecer a opção de pagar em até 12 parcelas sem cartão. Caso queira exibir esta opção no checkout da sua loja, clique [aqui](/developers/pt/docs/woocommerce/payments-configuration/mercado-credito). 

------------
----[mla, mlm]----
    - **Cartões de débito e crédito**.
    - **Dinheiro (saldo da conta Mercado Pago)**.
    - **Transferência bancária**.
    - **Parcelamento sem cartão**. Ao configurar o Checkout Pro, você pode oferecer a opção de pagar em até 12 parcelas sem cartão. Se também quiser mostrar esta opção no checkout da sua loja, clique [aqui](/developers/pt/docs/woocommerce/payments-configuration/mercado-credito). 

------------
----[mpe, mco, mlu, mlc]----
    - **Cartões de débito e crédito**.
    - **Dinheiro (saldo da conta Mercado Pago)**.
    - **Transferência bancária**.

------------
5. No campo **Parcelas máximas** você pode escolher quantas parcelas deseja oferecer aos clientes através do Mercado Pago. Você pode escolher entre 1 e 24 parcelas.

Para salvar as alterações nas configurações, clique no botão **Salvar alterações**.

## Configuração avançada

Se desejar, você pode alterar as opções nas configurações avançadas da forma de pagamento para oferecer uma experiência mais personalizada na loja. Para acessar essas opções, clique no título **Configurações Avançadas** e as opções descritas abaixo serão exibidas:

- **Experiência de pagamento**: esta opção permite que você escolha se a experiência de pagamento será dentro da loja ou redirecionando os clientes para o site do Mercado Pago.
- **Voltar à loja**: clique no botão deslizante para escolher se deseja que o cliente retorne à loja assim que o pagamento for concluído ou se prefere que sua experiência de compra termine no site do Mercado Pago.
- **URL de sucesso**: este campo permite que você coloque um URL de sucesso personalizado para redirecionar os clientes assim que eles concluírem a compra.
- **URL de pagamento recusado**: esta opção permite colocar um URL personalizado para redirecionar os clientes caso o pagamento tenha sido recusado.
- **URL de pagamento pendente**: este campo permite que você coloque um URL personalizado para o qual os clientes serão redirecionados se o pagamento estiver pendente de aprovação.
- **Rejeição automática de pagamentos sem aprovação instantânea**: ative esta opção com o botão deslizante para rejeitar automaticamente pagamentos aprovados instantaneamente.
- **Desconto em checkouts do Mercado Pago**: permite que você escolha um valor percentual de desconto que deseja oferecer aos clientes que pagam por esta forma de pagamento. Para ativá-lo, você deve inserir uma porcentagem e selecionar o botão _Ativar e mostrar esta informação no checkout do Mercado Pago_.
- **Comissões nos checkouts do Mercado Pago**: permite que você escolha um valor percentual adicional que deseja cobrar como comissão aos clientes que optarem por esta forma de pagamento. Para ativá-lo, você deve inserir uma porcentagem e selecionar o botão _Ativar e mostrar esta informação no checkout do Mercado Pago_.

Para salvar as alterações nas configurações, clique no botão **Salvar alterações**.