> CLIENT_SIDE
>
> h1
>
> Customers & Cards

Com o Payment Brick você poderá utilizar a funcionalidade Customers & Cards, que permite o uso de cartões salvos nos pagamentos em seu site. 

## Incluindo cartões salvos no Payment Brick

Para que o Payment Brick possa exibir os cartões salvos de um determinado comprador, é preciso enviar ao Brick no momento de sua inicialização o ID do cliente e dos cartões, como no exemplo abaixo.

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

## Obtendo o customerId e os cardsIds

Para o `customerId` e os `cardsIds` necessários para a feature de C&C, o integrador deve ter acesso ao e-mail de um usuário e ao token gerado através de um pagamento realizado com cartão.

Com o e-mail do usuário é possível gerar um Customer ID e, utilizando o Customer ID combinado com o token do cartão, é possível salvá-lo para que o comprador possa utilizá-lo nas próximas compras.

> PREV_STEP_CARD_PT
>
> Exemplo de código
>
> Para facilitar e otimizar o seu processo de integração, veja um exemplo completo integração com o Checkout Bricks.
>
> [Exemplo de código](/developers/pt/docs/checkout-bricks/payment-brick/code-example)

> NEXT_STEP_CARD_PT
>
> Configurar meios de pagamento aceitos 
>
> Saiba como configurar pagamentos com os diversos meios aceitos em seu país.
>
> [Configurar meios de pagamento aceitos](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/configure-payment-methods)