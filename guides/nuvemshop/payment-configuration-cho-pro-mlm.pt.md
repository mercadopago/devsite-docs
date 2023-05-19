# Configurar os pagamentos com Checkout Pro (Checkout Mercado Pago)
 
Ao instalar o [Checkout Pro](/developers/pt/docs/checkout-pro/landing), é possível que haja um **aumento na taxa de aprovação das vendas da loja on-line**. Isso acontece porque os compradores poderão pagar usando uma conta Mercado Pago e todo o processo de compra será feito em nosso ambiente, o que facilita o pagamento. Ao final da transação, esses compradores são redirecionados ao ambiente da loja.

Para integrar o Checkout Pro, siga os passos abaixo.

1. No Painel Administrativo da sua loja na Nuvemshop, acesse **Meus aplicativos - Ver todos os aplicativos**.
2. Localize o plugin do Mercado Pago na lista das aplicações e clique em **Configurar aplicativo**.
3. Na lista de meios de pagamentos, localize o plugin do Mercado Pago e clique em **Editar**.
4. Para aplicar um valor mínimo de parcelas para os pagamentos, informe o valor no campo disponível.
----[mla, mlm, mpe, mco, mlu, mlc]---- 
5. Se deseja aplicar descontos para pagamentos com Checkout transparente (Checkout API), **informe a porcentagem** para pagamentos em efectivo e cartões (crédito e débito).
------------
----[mlb]---- 
5. Se deseja aplicar descontos para pagamentos com Checkout transparente, **informe a porcentagem** para pagamentos em boleto, cartão de crédito e Pix.
------------
6. Caso queira aplicar descontos para pagamentos com Checkout externo (Checkout Pro / Checkout Mercado Pago), **informe o percentual** no campo disponível.
7. Para configurar as experiências de pagamento da sua loja, clique em **Editar no site do Mercado Pago**.
8. Em Checkout Mercado Pago, escolha os meios de pagamento que deseja oferecer no ambiente de pagamento do Mercado Pago, podendo ser: 
 ----[mlb]---- 
 * **Parcelamento sem cartão**.
 * **Cartão de crédito**. Indique também o número máximo de parcelas permitidas.
 * **Cartão de débito**.
 * **Outros meios de pagamentos**. Indique também o número de dias para vencimento do boleto. Além disso, a opção de pagamento com Pix só será exibida se houver uma chave Pix cadastrada no Mercado Pago. Caso ainda não tenha criado, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.

 ------------ 
----[mla, mlm]----
 * **Parcelamento sem cartão**.
 * **Cartão de crédito**.
 * **Cartão de débito**.
 * **Outros meios de pagamentos**. Indique também o número de dias para vencimento do boleto.

  ------------
6. Por fim, clique em **Salvar configurações**.

<center>

![Payments Checkout Pro - Nuvemshop](/images/nuvemshop/cho-pro-pt.gif)

</center>

Pronto! O Checkout Pro do Mercado Pago está pronto para receber os pagamentos da sua loja.