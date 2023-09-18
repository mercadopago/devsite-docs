# Pagamentos QR modelo desatendido

> WARNING
>
> Contato comercial necessário
>
> Você só pode integrar este produto se o seu contato comercial compartilhar todas as informações necessárias para isso.

## O que é QR por modelo desatendido?

Este modelo lhe **permite que não seja necessário criar explicitamente a ordem de pagamento em Mercado Pago**. A ordem é gerada com a seleção de um produto ou serviço e o escaneio do QR do caixa. 

Recomenda-se para postos de gasolina, máquinas de venda automática ou para sistemas integrados com múltiplas carteiras. 

## Características do modelo

As características principais são: 

- Cada caixa possui um URL associado ao qual Mercado Pago consultará se existe um pedido pronto para pagar. 
- Quando o cliente escaneia o QR do caixa, Mercado Pago realiza um request de forma recorrente ao URL associado ao caixa e quando o pedido estiver pronto exibirá ao cliente no app o valor a pagar. 
- O cliente poderá pagar somente se existe um pedido criado para o QR que escaneou. 

> O URL deverá objetivar um serviço de seu domínio onde você exponha por caixa de sua sucursal se tem ou não um pedido pronto para pagamento. 

## Fluxo do modelo

Explicamos a você o funcionamento do modelo desatendido:

![Fluxo do modelo](/images/mobile/qr-gas-station-flow.pt.png)

1. O cliente escaneia o código QR desde seu aplicativo.
2. Em função do URL associado ao caixa, Mercado Pago busca o pedido no server do  vendedor.
3. (A) O ponto de venda informa seu estado ao server do vendedor. <br/>
   (B) Se as informações não estiverem disponíveis, o server do vendedor responderá  `HTTP 400`.<br/>
   (C) Mercado Pago exibe uma tela de espera no aplicativo. <br/> 
   (D) E volta à procura do pedido no server do vendedor.
4. (A) O ponto de venda envia os dados do pedido para o server do vendedor. <br/>
   (B) Se o pedido for disponibilizado, o server do vendedor responde `HTTP 200` com as informações do pedido a cobrar.
5. (A) Depois exibe a tela de pagamento no app do cliente. <br/>
   (B) O server do vendedor recebe uma notificação do pedido. <br/> 
   (C) E confirma seu recebimento. 
6. Finalmente, o cliente paga o pedido. 
7. (A) O cliente verá a confirmação do pagamento. <br/>
   (B) O server do vendedor recebe uma notificação com o pedido. <br/>
   (C) E confirma seu recebimento. 
8. (A) O server do vendedor consulta o estado do pedido com o ID recebido na última notificação, para saber se está encerrado ou se continua aberto, pendente de pagamento. <br/>
   (B) Mercado Pago restitui os dados correspondentes, como seu estado, informação de pagamentos, entre outros. 
9. Se o pedido estiver encerrado (**closed**), o comprovante pode ser impresso para finalizar a transação. 

> No item 5 deverá executar os passos 8A e 8B para obter o estado do pedido. 

## Caixa para el modelo desatendido

Para criar caixas de modelo desatendido, você precisa declarar a URL de um serviço do seu domínio ao qual o Mercado Pago consultará se há uma ordem disponível.

[[[
 ```curl
curl -X POST \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
https://api.mercadopago.com/pos \
-d \
{
  "name":"Caixa Principal", 
  "fixed_amount": true,
  "category": 621102,
  "external_store_id": "STORE001",
  "external_id": "CAIXA0001",
  "url": "https://www.minhaempresa.com/pay-mp?locationId=6232&positionId=1"
}
```
]]]

## Integração

Para integrar este modelo de cobrança, acesse a documentação de [Integrar QR modelo desatendido](/developers/pt/docs/qr-code/qr-unattended/qr-unattended-part-b).