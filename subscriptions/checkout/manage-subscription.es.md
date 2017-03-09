# Gestionando una suscripción

Índice de contenido:

1. [Actualizar el monto de una suscripción]()
2. [Pausar y reactivar una suscripción]()
3. [Cancelar una suscripción]()


## Actualizar el monto de una suscripción

Puedes cambiar el monto de las suscripciones en cualquier momento. A partir del momento en que realices la actualización, se cobrará el nuevo monto a los próximos débitos de tus customers.

Para cambiar el monto de una suscripción debes hacerlo de la siguiente manera:

```curl
curl -X PUT \
        -H "Content-Type: application/json" \
        'https://api.mercadopago.com/preapproval/PREAPPROVAL_ID?access_token=ACCESS_TOKEN' \
        -d '{
              "auto_recurring": {
                  "transaction_amount": NEW_AMOUNT
              }
        }'
```

**Respuesta:**


HTTP status code: 200 OK

```curl
{
  "id": "PREAPPROVAL_ID",
  ...
  "auto_recurring": {
      ...
      "transaction_amount": NEW_AMOUNT,
      ...
  }
  ...
}
```

Además, puedes hacerlo directamente desde el sitio de Mercado Pago. Accede a la sección Suscripciones, selecciona los usuarios necesarios y confirma la acción.

## Pausar y reactivar una suscripción

Puedes pausar las suscripciones en cualquier momento. De este modo, no se les cobrará a tus usuarios hasta que las reactives.

> Tus suscriptores recibirán un e-mail informándoles de la pausa o reactivación de la suscripción.

Para pausar una suscripción debes hacerlo de la siguiente manera:

```curl
curl -X PUT \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/preapproval/PREAPPROVAL_ID?access_token=ACCESS_TOKEN' \
        -d '{
                "status": "paused"
        }'
```

**Respuesta:**

HTTP status code: 200 OK

```curl
{
  "id": "PREAPPROVAL_ID",
  ...
  "status": "paused",
  ...
}
```

Para reactivar una suscripción debes hacerlo de la siguiente manera:

```curl
curl -X PUT \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/preapproval/PREAPPROVAL_ID?access_token=ACCESS_TOKEN' \
        -d '{
                "status": "authorized"
        }'
```

**Respuesta:**

HTTP status code: 200 OK

```curl
{
  "id": "PREAPPROVAL_ID",
  ...
  "status": "authorized",
  ...
}
```

**Importante:** los períodos que transcurran durante la pausa de la suscripción no serán cobrados, aunque la suscripción seguirá ejecutando su agenda. 

## Cancelar un plan o una suscripción

Puedes cancelar las suscripciones en cualquier momento. De este modo, se dejará de cobrar a tus clientes.

Para cancelar una suscripción debes hacerlo de la siguiente manera:

```curl
curl -X PUT \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/preapproval/PREAPPROVAL_ID?access_token=ACCESS_TOKEN' \
        -d '{
                "status": "cancelled"
        }'
```

**Respuesta:** 

HTTP status code: 200 OK

```curl
{
  "id": "PREAPPROVAL_ID",
  ...
  "status": "cancelled",
  ...
}
```
