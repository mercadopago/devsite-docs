# Como integrar QR modelo dinâmico

Para cobrar através de um código QR modelo dinâmico, você deverá criar uma ordem e, a partir da resposta obtida, criar um código com algum serviço externo.


## Fluxo do modelo

Veja o passo a passo do modelo dinâmico:

1. Crie uma ordem com todas as informações necessárias para o pagamento.
2. Na resposta, você vai encontrar uma string de dados sob o atributo `qr_data`.
3. Gere um código QR com o atributo recebido. 
4. Por último, disponibilize o código QR para o cliente como você preferir para ele realizar o pagamento.

## Crie a ordem

Primeiro, gera a publicação de ordem. Assim que os dados sejam enviados para o Mercado Pago, ficará disponível uma cadeia de dados com padrão [EMVCo](https://www.emvco.com/emv-technologies/qrcodes).

Execute a seguinte chamada para a API a fim de gerar uma ordem. Na resposta, você vai receber o dado necessário para criar o código QR.

```curl
curl -X POST \
 https://api.mercadopago.com/instore/orders/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/qrs \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
 -d '{
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
}'
```

----[mco]----
> Se você precisa pagar o IVA para os produtos do seu pedido, visite a [seção de Considerações IVA Colômbia](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/iva-colombia).
------------

Você pode obter mais informações nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put).

> NOTE
> 
> Nota
> 
> O modelo não tem a opção de deletar a ordem. Por isso, recomendamos configurar uma data de expiração com o atributo `expiration_date`.

Resposta

```json
{
   "qr_data": "00020101021243650016COM.MERCADOLIBRE02013063638f1192a-5fd1-4180-a180-8bcae3556bc35204000053039865802BR5925IZABEL AAAA DE MELO6007BARUERI62070503***63040B6D"
}
```
A resposta será uma string com o padrão EMVCo. Use o `qr_data` para disponibilizar o código QR com um gerador ou por seu aplicativo.

----[mlb]----

Se você tiver configurada uma **chave Pix em sua conta do Mercado Pago**, a estrutura da string de dados conterá dados referidos a Pix. 
Por exemplo: 

```json
{
   "qr_data": "00020101021226940014BR.GOV.BCB.PIX2572pix-qr.mercadopago.com/instore/o/v2/fdf9ece0-6137-4e1e-a49d-94f55ec9eee25204000053039865802BR5925FELIPE AAAAAA AAAAA 6009SAO PAULO62070503***6304B61D"
}
```

------------


## Associa a ordem a uma caixa

Além da geração do código QR, você também tem a opção de criar e atribuir a mesma ordem ao código QR fixo da caixa.

Execute a seguinte chamada para a API a fim de gerar uma ordem e a atribuição à caixa. Na resposta, você vai receber o dado necessário para criar o código QR.

```curl
curl -X PUT \
 https://api.mercadopago.com/instore/orders/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/qrs \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
 -d '{
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
}'
```

## Receba notificações de suas ordens 

As notificações IPN (Instant Payment Notification) são a **forma automática de aviso da criação de novas ordens e as atualizações de seus estados**. Por exemplo, se foram aprovadas, recusadas ou se estiverem pendentes. 

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
> [Integración avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/advanced-integration)


> RIGHT_BUTTON_RECOMMENDED_PT
>
> Teste sua integração
>
> Realiza os casos de uso mais frequentes para validar sua integração.
>
> [Teste sua integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/integration-test)
