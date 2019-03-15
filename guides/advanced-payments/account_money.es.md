# WIP
# Discutiendo dónde va el access_token del payer y ver si armamos nosotros el nodo payer
# Pagos con dinero en cuenta

> INFO
>
> Consejo 
>
> Antes de seguir es conveniente entender cómo [Crear tu Aplicación y Vincular tus usuarios](https://www.mercadopago.com.ar/developers/es/guides/marketplace/api/create-marketplace).

Para realizar pagos con dinero en cuenta, debes tener configurado tu Marketplace con los scopes `wallet-payments` y `offline_access` y vincular la cuenta de tu Comprador mediante **MP Connect** pasando en la URL el parámetro `scopes=wallet-payments`.

`https://auth.mercadopago.com.ar/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=iframe&display=popup&interactive=1&scopes=wallet-payments,offline_access&redirect_uri=http%3A%2F%2Fwww.URL_de_retorno.com`

Una vez obtenido el `PAYER_ACCESS_TOKEN` siguiendo los pasos de MP Connect, podrás utilizarlo en la URL para crear el Advanced Payment.

#### Request
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=PAYER_ACCESS_TOKEN' \
    -d '{...}'
```

En el body simplemente debes definir el ID de la cuenta de Mercado Pago del Comprador y el tipo `registered` en el nodo `payer`. El método y tipo de pago deben ser ambos `account_money`.

#### Body
```json
{
  "payer": {
    "id": 123456,
    "type": "registered"
  },  
  "payments": [
    {
      "payment_method_id": "account_money",
      "payment_type_id": "account_money",
      ...
    }
  ],
  ...
}
```