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
* **Parcelamento**: parcelar sem acréscimos em bancos selecionados.

<center>

![woo-chopro-pt-all](/images/woocomerce/woo-chopro-pt-all.png)

</center>
------------

## Ative e configure o meio de pagamento

1. Para ativar o Checkout Pro, vá até as configurações do painel de WooCommerce (**WooCommerce > Mercado Pago**).
2. Clique em **3. Ative e configure os meios de pagamento**.
3. Na opção "Seus cartões salvos ou dinheiro no Mercado Pago", clique em **Configurar**.

![Active and configure](/images/woocomerce/cho-pro-active-configure-pt.png)

2. A opção "Ativar checkout" permite habilitar ou desabilitar o Checkout Pro em sua loja. Para ativar, clique no botão deslizante.
3. No campo **Título no checkout da loja**, insira o nome pelo qual esta forma de pagamento será identificada na loja. Por exemplo, você pode chamá-la de "Mercado Pago".
4. A opção **Converter moeda** permite que o valor da moeda configurada no WooCommerce seja compatível com o valor da moeda que você utiliza no Mercado Pago. Para ativá-la, clique no botão deslizante.

![Activate and configure](/images/woocomerce/activate-title-convert-pt.png)

5. Na seção **Escolha os meios de pagamento aceitos na loja**, escolha quais tipos e meios de pagamento serão aceitos na loja através do Checkout Pro, podendo ser:
----[mlb]----
    - **Cartões de débito e crédito**: Marque a caixa de seleção nas bandeiras dos cartões que serão aceitos em sua loja.
    - **Dinheiro (saldo da conta Mercado Pago, boleto bancário e lotérica)**.
    - **Transferência bancária (Pix e PEC)**: A opção de pagamento Pix só será exibida se houver uma chave Pix cadastrada no Mercado Pago.
    - **Parcelamento sem cartão**: Ao configurar o Checkout Pro, você pode oferecer a opção de pagar em até 12 parcelas sem cartão. Caso queira exibir esta opção no checkout da sua loja, acesse a [documentação](/developers/pt/docs/woocommerce/payments-configuration/mercado-credito). 

![Activate and configure](/images/woocomerce/cho-pro-payments-methods-pt.gif)

------------
----[mla, mlm]----
    - **Cartões de débito e crédito**.
    - **Dinheiro (saldo da conta Mercado Pago)**.
    - **Transferência bancária**.
    - **Parcelamento sem cartão**: Ao configurar o Checkout Pro, você pode oferecer a opção de pagar em até 12 parcelas sem cartão. Se também quiser mostrar esta opção no checkout da sua loja, acesse a [documentação](/developers/pt/docs/woocommerce/payments-configuration/mercado-credito). 

![Activate and configure](/images/woocomerce/cho-pro-payments-methods-es.gif)

> Para saber quais tipos e meios de pagamento são aceitos em cada país, acesse a [documentação](#).

------------
----[mpe, mco, mlu, mlc]----
    - **Cartões de débito e crédito**.
    - **Dinheiro (saldo da conta Mercado Pago)**.
    - **Transferência bancária**.

> Para saber quais tipos e meios de pagamento são aceitos em cada país, acesse a [documentação](#).

------------
6. No campo **Parcelas máximas**, selecione o número máximo de parcelas que deseja disponibilizar aos seus clientes por meio do Mercado Pago. Você pode optar por oferecer entre 1 e 24 parcelas.

![Installments](/images/woocomerce/cho-pro-installment-pt.png)

Para salvar as alterações nas configurações de Checkout Pro, clique no botão **Salvar alterações**.

## Configurações avançadas

É possível personalizar as opções na seção de configurações avançadas da forma de pagamento, proporcionando uma experiência mais customizada na loja. Para acessar essas opções, clique no título **Configurações avançadas** e as opções descritas abaixo serão exibidas:

- **Experiência de pagamento**: escolha se a experiência de pagamento será dentro da loja ou redirecionando os clientes para o site do Mercado Pago.
- **Voltar à loja**: clique no botão deslizante para escolher se deseja que o cliente retorne à loja assim que o pagamento for concluído ou se prefere que sua experiência de compra termine no site do Mercado Pago.
- **URL de sucesso**: insira uma URL de sucesso personalizada para redirecionar os clientes assim que eles concluírem a compra.
- **URL de pagamento recusado**: insira uma URL personalizada para redirecionar os clientes caso o pagamento tenha sido recusado.
- **URL de pagamento pendente**: insira uma URL personalizada para redirecionar os clientes caso o pagamento estiver pendente de aprovação.
- **Rejeição automática de pagamentos sem aprovação instantânea**: ative esta opção para rejeitar automaticamente pagamentos que não são aprovados instantaneamente. Para ativar, clique no botão deslizante.
- **Desconto em checkouts do Mercado Pago**: insira um valor percentual de desconto para os clientes que pagarem por esta forma de pagamento. Para ativá-lo, insira um percentual de desconto e marque a opção "Ativar e mostrar esta informação no checkout do Mercado Pago".
- **Comissões nos checkouts do Mercado Pago**: insira um valor percentual adicional que quiser cobrar como comissão aos clientes que optarem por esta forma de pagamento. Para ativá-lo, insira um percentual de desconto e marque a opção "Ativar e mostrar esta informação no checkout do Mercado Pago".

![Advanced settings](/images/woocomerce/cho-pro-advanced-settings-pt.gif)

Para salvar as alterações nas configurações, clique no botão **Salvar alterações**.