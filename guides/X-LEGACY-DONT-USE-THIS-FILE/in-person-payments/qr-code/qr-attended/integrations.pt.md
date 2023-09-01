# Integrar o modelo QR atendido

Para receber por meio de um código QR modelo atendido, deverá criar um pedido e associá-lo ao caixa onde quiser receber. 

## Fluxo do modelo

Explicamos como funciona o modelo atendido:

![Fluxo de pagamento no ponto de venda QR Mercado Pago](/images/mobile/qr-user-flow.pt.png)

<span></span>

1. O ponto de venda registra um pedido (1a) e cria um pedido atribuído a uma caixa (1b). Neste momento, o pedido está disponível para leitura (2).
2. Quando o cliente escaneia o QR (3) com o pedido e faz o pagamento (5), uma notificação IPN (4a e 6b) é recebida no servidor do vendedor. Com estes dados obtém-se o estado da encomenda (7a), para validar se está encerrada ou ainda em aberto, com pagamento pendente.

## Criar um pedido

```curl
curl -X PUT \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/instore/qr/seller/collectors/USER_ID/stores/EXTERNAL_STORE_ID/pos/EXTERNAL_POS_ID/orders \
-d \
{
    "external_reference": "order-id-1234",
    "title": "Title",
    "description": "Mercado Pago",
    "notification_url": "https://www.yourserver.com",
    "expiration_date": "2023-08-22T16:34:56.559-04:00",
    "total_amount": 1190,
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
            }----[mco]----,
    "taxes": [
        {
            "value": 190,
            "type": "IVA"
        }
    ]------------
}
```

Pode obter mais informações em [Referências do API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put).

----[mco]----
> Se você precisa pagar o IVA para os produtos do seu pedido, visite a [seção de Considerações IVA Colômbia](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/iva-colombia).
------------

Assim que o pedido for criado, ele estará disponível para ser **digitalizado e pago**.

> NOTE
>
> Nota
>
> Leve em consideração que se não fez previamente o carregamento do nome de seu negócio ou a logomarca em [sua conta de Mercado Pago](https://www.mercadopago.com.br/settings/account), o título e a imagem do pedido que o cliente veja no app serão as do item carregado. 

## Remover um pedido

Para remover o pedido associado a um QR antes de que expire por validade ou seja encerrado, poderá fazê-lo por meio do método a seguir: 

```curl
curl -X DELETE \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/instore/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/orders
```
A resposta será um `HTTP 204 No Content`.

## Receba notificações de suas ordens 

As [notificações IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/introduction) (Instant Payment Notification) são a **forma automática de aviso da criação de novas ordens e as atualizações de seus estados**. Por exemplo, se foram aprovadas, recusadas ou se estiverem pendentes. 

Implementa IPN de `merchant_order` junto com uma busca do pedido por `external_reference` como método de contingência.

[Receber notificações IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/introduction)

---

### Próximos passos


> LEFT_BUTTON_REQUIRED_PT
>
> Integração avançada
>
> Conheça as opções disponibilizadas para chegar à integração para o seguinte nível.
>
> [Integração avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/advanced-integration)


> RIGHT_BUTTON_RECOMMENDED_PT
>
> Teste sua integração
>
> Realiza os casos de uso mais frequentes para validar sua integração.
>
> [Teste sua integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/integration-test)
