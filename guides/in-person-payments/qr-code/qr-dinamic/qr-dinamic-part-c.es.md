---
indexable: false  
---

# Como integrar o QR dinâmico Online

No modelo Online usamos a API responsável por gerar a string de dados no padrão EMVCo.

Neste modelo temos 2 opções de chamada, são elas: 

## 1) Método POST 

Assim que os dados são enviados para o Mercado pago, será disponibilizado uma string de dados com padrão EMVCo, uma vez pago o pedido essa string de dados não terá utilidade. 

Executar a seguinte API para gerar uma ordem e receber a string de dados para criação do QR:


```curl
curl -X POST \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/instore/orders/qr/seller/collectors/USER_ID/pos/EXTERNAL_POINT_OF_SALE_ID/qrs \
-d \
{
    "external_reference": "order-id-1234",
    "title": "Title",
    "description": "Mercado Pago",
    "notification_url": "www.yourserver.com",
    "expiration_date": "2023-08-22T16:34:56.559-04:00",
    "total_amount": 100.0,
    "items": [
        {
            "sku_number": "KS955RUR",
            "category": "FOOD",
            "title": "Item1",
            "description": "Item1 Mercado Pago",
            "unit_price": 20,
            "quantity": 5,
            "unit_measure": "unit",
            "total_amount": 100
        }
    ],
    "sponsor": {
        "id": 446566691
    }
}
```
Pode obter mais informações em [Referências do API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put/).

> NOTE
> 
> Nota
> 
> Para este modelo não temos a opcao de exclusão do QR. Programe um time out do QR com o campo *expiration_date*. 


Resposta:

```
{
   "qr_data": "00020101021243650016COM.MERCADOLIBRE02013063638f1192a-5fd1-4180-a180-8bcae3556bc35204000053039865802BR5925IZABEL AAAA DE MELO6007BARUERI62070503***63040B6D"
}
```

O retorno será uma String no padrão EMVCO, utilizando um gerador de QR  ou convertendo esses dados em QR através de sua aplicação,  será possível realizar o pagamento do pedido.

----[mlb]----
> NOTE
> 
> Nota
> 
> Se sua conta do MERCADO PAGO possui uma chave de PIX configurada, a estrutura da string de dados terá dados referente ao PIX.
>`{
   "qr_data": "00020101021226940014BR.GOV.BCB.PIX2572pix-qr.mercadopago.com/instore/o/v2/fdf9ece0-6137-4e1e-a49d-94f55ec9eee25204000053039865802BR5925FELIPE AAAAAA AAAAA 6009SAO PAULO62070503***6304B61D"
}`
------------

## 2) Método PUT 

A api será a mesma que o método POST, basta alterar o método da API para PUT, ressaltamos que o comportamento da chamada PUT é idêntico ao modelo de [QR Atendido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/qr-attended-part-b).

Neste modelo a string de dados será gerada no padrão EMVCo (conforme o primeiro exemplo) e o também é fundido ao QR fixo do seu caixa. O pedido poderá ser pago uma vez por alguma dessas opções.

## Receba notificações de suas ordens 

As [notificações IPN](https://www.mercadopago.com.br/developers/pt/guides/notifications/ipn/) (Instant Payment Notification) são a **forma automática de aviso da criação de novas ordens e as atualizações de seus estados**. Por exemplo, se foram aprovadas, recusadas ou se estiverem pendentes. 

Implementa IPN de `merchant_order` junto com uma busca do pedido por `external_reference` como método de contingência.

<a href="https://www.mercadopago.com.ar/developers/pt/guides/notifications/ipn/" target="_blank"> Receber notificações IPN </a>


---
### Próximos passos


> LEFT_BUTTON_RECOMMENDED_PT
>
> Integração avançada
>
> Conheça as opções que você tem para levar sua integração ao próximo nível.
>
> [Integrar modelo QR dinâmico](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/advanced-integration/)
