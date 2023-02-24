# Configurar os pagamentos com ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------

----[mlb]----
Com o [Checkout Transparente](/developers/pt/docs/checkout-api/landing), todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o checkout oferece uma estrutura completa para processamento de pagamentos com os principais meios disponíveis no mercado. 

Para integrar o Checkout Transparente, siga os passos abaixo.

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Com o [Checkout API](/developers/pt/docs/checkout-api/landing), todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o checkout oferece uma estrutura completa para processamento de pagamentos com os principais meios disponíveis no mercado.

Para integrar o Checkout API, siga os passos abaixo.

------------

1. No Painel Administrativo da sua loja na Nuvemshop, acesse as **Configurações > Meios de pagamento**. 
2. Localize o plugin do Mercado Pago na lista de meios de pagamentos e clique em **Editar**.
3. Selecione o **país de operação** da sua loja e a **moeda**.
4. No campo "Tipo de integração", altere para **Processo de compra sem sair da loja**.
5. Escolha os meios de pagamento que deseja oferecer no ambiente de pagamento do Mercado Pago, podendo ser: 
 ----[mlb]---- 
 * **Cartão de crédito**.
 * **Boleto bancário (ou saldo da conta do Mercado Pago)**.
 * **Pix**. A opção de pagamento com Pix só será exibida se houver uma chave Pix cadastrada no Mercado Pago. Caso ainda não tenha criado, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.
 ------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
 * **Cartão de crédito**.
 * **Redes de pagamento em efectivo**.
  ------------
6. Caso deseje que o pagamento com boleto bancário tenha desconto, informe a porcentagem de desconto no campo “Desconto para pagamentos com boleto”. 
7. Embora a Nuvemshop utilize as informações de **parcelamento diretamente de sua conta Mercado Pago**, no campo "Parcelas" você poderá aplicar um valor mínimo de parcelas para pagamento.
8. Por fim, clique em **Salvar alterações**.

----[mlb]----
Pronto! O Checkout Transparentr está pronto para receber os pagamentos da sua loja.

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Pronto! O Checkout API está pronto para receber os pagamentos da sua loja.

------------

> NOTE
>
> Atenção
>
>  As alterações feitas nas configurações de parcelamento em sua conta serão refletidas na sua loja online em até 24h. <br/></br>
> <br/></br>
> Para **sincronizar suas alterações de parcelamento manualmente**, vá ao "Painel Administrativo" da sua loja, acesse as **Configurações > Meios de pagamento > Mercado Pago**, clique em **Editar** e, no item "Parcelas", clique em **Ativar agora**.