# Configurar os pagamentos com Checkout Pro
 
Ao instalar o [Checkout Pro](/developers/pt/docs/checkout-pro/landing), é possível que haja um **aumento na taxa de aprovação das vendas da loja on-line**. Isso acontece porque os compradores poderão pagar usando uma conta Mercado Pago e todo o processo de compra será feito em nosso ambiente, o que facilita o pagamento. Ao final da transação, esses compradores são redirecionados ao ambiente da loja.

No checkout, quando os compradores escolhem pagar com Mercado Pago, é apresentado um informativo que ressalta as vantagens exclusivas de pagar com uma conta Mercado Pago, como:

----[mlb]----
* **Login facilitado**: iniciar a sessão com o mesmo e-mail e senha do Mercado Livre.
* **Pagar mais rápido e de várias maneiras**: utilizar os cartões salvos, Pix ou saldo disponível na conta Mercado Pago.
* **Proteção à compra**: receber o dinheiro de volta caso o produto não seja entregue.

<center>

![woo-chopro-pt-mlb](/images/nuvemshop/nuvemshop-chopro-pt-mlb.png)

</center>
------------

----[mla]----
* **Pagar mais rápido**: utilizar os cartões salvos ou saldo disponível na conta Mercado Pago.
* **Parcelamento**: parcelar com ou sem cartão de crédito.
* **Suporte do Mercado Pago**: receber ajuda caso tenha algum problema com a compra.

<center>

![woo-chopro-pt-mla](/images/nuvemshop/nuvemshop-chopro-pt-mla.png)

</center>>
------------

----[mlm]----
* **Login facilitado**: iniciar a sessão com o mesmo e-mail e senha do Mercado Livre. 
* **Pagar mais rápido e de várias maneiras**: utilizar os cartões salvos, efectivo, meios de pagamento off-line ou saldo disponível na conta Mercado Pago.
* **Proteção à compra**: receber o dinheiro de volta caso o produto não seja entregue.

<center>

![woo-chopro-pt-mlm](/images/nuvemshop/nuvemshop-chopro-pt-mlm.png)

</center>>
------------

----[mpe, mco, mlu, mlc]----
* **Login facilitado**: iniciar a sessão com o mesmo e-mail e senha do Mercado Livre. 
* **Pagar mais rápido**: utilizar dinheiro ou saldo disponível na conta Mercado Pago. 
* **Parcelamento**: parcelar sem juros em bancos selecionados.

<center>

![woo-chopro-pt-all](/images/nuvemshop/nuvemshop-chopro-pt-all.png)

</center>
------------
 
Para integrar o Checkout Pro, siga os passos abaixo.

1. No Painel Administrativo da sua loja na Nuvemshop, acesse as **Configurações > Meios de pagamento**. 
2. Localize o plugin do Mercado Pago na lista de meios de pagamentos e clique em **Editar**.
3. Selecione o **país de operação** da sua loja e a **moeda**.
4. No campo "Tipo de integração", altere para **Processo de compra no site do Mercado Pago**.
5. Escolha os meios de pagamento que deseja oferecer no ambiente de pagamento do Mercado Pago, podendo ser: 
 ----[mlb]---- 
 * **Cartão de crédito**.
 * **Boleto bancário (ou saldo da conta do Mercado Pago)**.
 * **Pix**. A opção de pagamento com Pix só será exibida se houver uma chave Pix cadastrada no Mercado Pago. Caso ainda não tenha criado, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.
 ------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
 * **Cartão de crédito**.
 * **Transferência bancária**.
 * **Redes de pagamento em efectivo**.
  ------------
6. Por fim, clique em **Salvar alterações**.

> A Nuvemshop utiliza as informações de **parcelamento diretamente de sua conta Mercado Pago**. As alterações feitas nas configurações de parcelamento em sua conta serão refletidas na sua loja online em até 24h. <br/></br>
> <br/></br>
> Para **sincronizar suas alterações de parcelamento manualmente**, vá ao "Painel Administrativo" da sua loja, acesse as **Configurações > Meios de pagamento > Mercado Pago**, clique em **Editar** e, no item "Parcelas", clique em **Ativar agora**.

Pronto! O Checkout Pro do Mercado Pago está pronto para receber os pagamentos da sua loja.