> CLIENT_SIDE
>
> h1
>
> Incluir cartões salvos

Para que o Payment Brick possa exibir os cartões salvos de um determinado comprador, é preciso enviar ao Brick no momento de sua inicialização, o ID do customer e os IDs dos cards, como no exemplo abaixo.

[[[
```Javascript
settings = {
   initialization: {
       ...,
       payer: {
           ...,
           customerId: '209277402-FqRqgEc3XItrxs',
           cardsIds: [ '1518023392627', '1518023332143' ]
       },
   },
   ...
}
```
]]]

Apenas passando essas duas propriedades, o Brick automaticamente dará ao usuário a opção de realizar o pagamento com seus cartões salvos.

> WARNING
>
> Atenção
>
> Somente os cartões dentro do prazo de validade serão mostrados para o comprador, cartões vencidos não serão disponibilizados.

![payment-Brick-cc](checkout-bricks/payment-brick-cc.pt.gif)

----[mlb]----
Para saber como criar, modificar e obter o `customerId` e os `cardsIds`, consulte a seção [Gestão de cartões e clientes](/developers/pt/docs/checkout-api/customer-management) da documentação do Checkout Transparente.

------------

----[mla, mlm, mpe, mco, mlu, mlc]---- 
Para saber como criar, modificar e obter o `customerId` e os `cardsIds`, consulte a seção [Gestão de cartões e clientes](/developers/pt/docs/checkout-api/customer-management) da documentação do Checkout API.

------------