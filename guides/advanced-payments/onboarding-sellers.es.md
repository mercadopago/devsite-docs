# Onboarding de Vendedores

Este proceso se encarga de preparar a los Vendedores de tu Marketplace para que puedas realizar cobros en su nombre y reciban el dinero que les corresponda.

El flujo de Onboarding consiste en los siguientes puntos:

* El Marketplace realiza la llamada de invite a la API de Onboarding pasando los datos del Vendedor que desea invitar, como así también el tipo de comunicación deseada.
* La API puede realizar la invitación a través de un email o puede retornar el link a la página de registración de Mercado Pago, para que el Marketplace sea quien arme la invitación por email.
* Los Vendedores recibirán una invitación vía email con un botón que los lleve a la página de registración (dependiendo si el usuario es nuevo o no para que cree una cuenta nueva) y luego a la página de `MP Connect` para darle los permisos adecuados al Marketplace.
* Por último, los Vendedores verán un cartel de bienvenida la próxima vez que ingresen en su cuenta de Mercado Pago.

### Invitando a un Vendedor

#### Request

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/json' \
     'https://api.mercadopago.com/marketplaces/seller/invite?access_token=MKT_ACCESS_TOKEN' \
     -d '{...}'
```

#### Body

```json
{
  "email": "seller1@test.com",
  "name": "Seller 1",
  "communication": "mercadopago"
}
```

#### Invitación con envío de email por parte de Mercado Pago

`"communication": "mercadopago"`

#### Response

```json
{
  "email": "seller1@test.com",
  "name": "Seller 1",
  "message": "Invitation sent to seller1@test.com"
}
```

#### Invitación sin envío de email

`"communication": "marketplace_owner"`

#### Response

```json
{
  "email": "seller1@test.com",
  "name": "Seller 1",
  "link": "https://www.mercadopago.com.br/registration-mp?confirmation_url=https%3A%2F%2Fwww.mercadopago.com.br%2F"
}
```