# Configurar os pagamentos com ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API ------------

----[mlb]----
Com o [Checkout Transparente](/developers/pt/docs/checkout-api/landing), todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o checkout oferece uma estrutura completa para processamento de pagamentos com os principais meios disponíveis no mercado. 

Para integrar o Checkout Transparente, siga os passos abaixo.

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Com o [Checkout API](/developers/pt/docs/checkout-api/landing), todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o checkout oferece uma estrutura completa para processamento de pagamentos com os principais meios disponíveis no mercado.

Para integrar o Checkout API, siga os passos abaixo.

------------

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
8. Em Checkout transparente, escolha os meios de pagamento que deseja oferecer no ambiente de pagamento do Mercado Pago, podendo ser: 
----[mlb]---- 
* **Pix**. Indique também um prazo de vencimento para pagamento com código Pix. Além disso, a opção de pagamento com Pix só será exibida se houver uma chave Pix cadastrada no Mercado Pago. Caso ainda não tenha criado, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.
* **Cartão de crédito**. Indique também o número máximo de parcelas permitidas.
* **Boleto**. Indique também o número de dias para vencimento do boleto (incluindo sábado e domingo).
 
------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
* **Cartão de crédito**. Indique também o número máximo de parcelas permitidas.
* **Cartão de débito**.
* **Redes de pago en efectivo**. Indique também o número de dias para vencimento do ticket (incluindo sábado e domingo).

------------
9. Por fim, clique em **Salvar alterações**.

<center>

![Payments Checkout Transparente - Nuvemshop](/images/nuvemshop/cho-api-pt.gif)

</center>

----[mlb]----
Pronto! O Checkout Transparente está pronto para receber os pagamentos da sua loja.

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Pronto! O Checkout API está pronto para receber os pagamentos da sua loja.

------------