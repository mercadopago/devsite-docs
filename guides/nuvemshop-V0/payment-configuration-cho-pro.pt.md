# Configurar os pagamentos com Checkout Pro
 
Com o [Checkout Pro](/developers/pt/docs/checkout-pro/landing), o comprador será direcionado da loja para o site do Mercado Pago onde deverá preencher as informações solicitadas e efetuar o pagamento. Dessa forma, a transação é processada e concluída fora do ambiente de sua loja. Não é necessário que o comprador possua uma conta no Mercado Pago e, ao final da transação, o comprador será devolvido à sua loja.
 
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