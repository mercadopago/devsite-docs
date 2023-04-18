# Retirada de dinheiro (CashOut)

Esta funcionalidade permite que o operador possa fornecer dinheiro ao cliente, descontando o valor diretamente do saldo em conta do comprador que realizou uma transação. 

As características principais são:
* Os saques podem ser vinculadas a uma compra ou não e esse processo dependerá da necessidade do vendedor.
* O recurso é compatível com os modelos de **QR Comprador**, **QR Atendido**, **QR Dinâmico** e **QR Desatendido**.
* Pode ser adicionado a uma integração, desde que seja compatível.

> NOTE
>
> Importante
>
> Você só pode integrar este produto se o seu contato comercial compartilhar todas as informações necessárias.

## Incluir retirada

Para incluir a retirada de dinheiro em sua integração, envie um PUT para o endpoint de criação de ordem [/instore/qr/seller/collectors/{user_id}/stores/{external_store_id}/pos/{external_pos_id}/orders](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put) incluindo no `body` o valor total a retirar da conta do cliente. 

Ao incluir o objeto dentro da ordem de pagamento, teremos um corpo conforme o exemplo abaixo:

[[[
```json
​​{
    "external_reference": "order-id-1234",
    "title": "Title",
    "description": "Mercado Pago",
    "notification_url": "https://www.yourserver.com",
    "expiration_date": "2023-08-22T16:34:56.559-04:00",
    "total_amount": 1390,
    "items": [
        {
            "sku_number": "KS955RUR",
            "category": "FOOD",
            "title": "Item1",
            "description": "Item1 Mercado Pago",
            "unit_price": 238,
            "quantity": 5,
            "unit_measure": "unit",
            "total_amount": 1190
        }
    ],
    "sponsor": {
    
            "id": 820480089
            },
    "cash_out": {
                "amount": 200
            }
}
```
]]]

| Atributo | Tipo (type) | Descrição |
|---|---|--- |
| Amount | Double | Valor total para retirar da conta do cliente (obrigatório).|

## Confirmar retirada 

Para confirmar o status da retirada de dinheiro do saldo do Mercado Pago, envie um POST com uma combinação de informações e atributos (“status” y “status _detail”) configurada pelo vendedor para o endpoint [/instore/orders/{merchant_order_id}/confirmation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/cashout-qr/_instore_orders_merchant_order_id_confirmation/post).
 
Quando realizamos a retirada de dinheiro, o fluxo correto para finalizar depende de vários fatores como, por exemplo, o dinheiro disponível na conta que não está visível até que a transação seja realizada. Veja abaixo as opções de combinações possíveis e os retornos da API: 
 
| Status | Status_detail | Retorno |
| --- | --- |--- |
| Confirm | confirmed | Confirma a retirada.|
| Cancelled | manually_cancelled <br/> confirmation_not_received <br/> other | Retirada cancelada. |
| Fail | internal_comunication_error <br/> other | Erro ao realizar a retirada. É realizada uma devolução ao cliente referente ao valor de retirada, seja da compra ou da retirada pura.|