# Creando una suscripción

Crea planes de suscripción y suscribe a tus clientes para recibir pagos de forma periódica y automatizada.

## Crea un plan de suscripción

Realiza un POST a la API indicando cuánto será el monto del plan y cada cuánto tiempo debe cobrarse a los customers que suscribas. En el siguiente ejemplo, cobraremos $200 cada mes:

```curl
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/plans?access_token=ACCESS_TOKEN' \
        -d '{
                "description": "Monthly premium package",
                "auto_recurring": {
                        "frequency": 1,
                        "frequency_type": "months",
                        "transaction_amount": 200
                }
        }'
```

> Estos son los datos mínimos e indispensables para crear un plan, pero tienes más opciones que puedes encontrar en [Añade características especiales a tu plan]().

**Respuesta:**

HTTP status code: 201 Created

```curl
{
  "id": "PLAN_ID",
  ...
  "status": "active",
  "description": "Monthly premium package",
  ...
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "months",
    "transaction_amount": 200,
    "currency_id": "ARS",
    ...
  },
  ...
}
```

**Importante:** los cobros se realizan por adelantado. En este caso el primer cobro se realizará tan pronto suscribas a un customer, y no a mes vencido.

## Suscribe un customer a un plan

Realiza un POST especificando el identificador del plan y del customer a asociar:

```curl
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/subscriptions?access_token=ACCESS_TOKEN' \
        -d '{
                "plan_id": "PLAN_ID",
                "payer": {
                        "id": "CUSTOMER_ID"
                }
        }'
```
> El customer debe tener cargada una `default_card` a la cual se le cobrará, apta para pagos de suscripciones. [Revisa la documentación de clientes y tarjetas]() para conocer cómo hacerlo.

**Respuesta:**

HTTP status code: 201 Created

```curl
{
  "id": "SUBSCRIPTION_ID",
  "plan_id": "PLAN_ID",
  ...
  "status": "authorized",
  "description": "Monthly premium package",
  "payer": {
    "id": "CUSTOMER_ID",
    ...
  },
  "charges_detail": {
    "invoices": [...],
    ...
  },
  ...
}
```

Se generarán `invoices` en cada período de pago, para que recibas tus cobros de forma automática.


## Añade características especiales a tu plan

Revisa el [API Doc de plans]() para conocer todas las configuraciones que puedes realizar. Así podrás adecuar el cobro de suscripción a tu modelo de negocio. A continuación te mostramos las características más relevantes que puedes especificar al momento de crear un plan. Ten presente que son combinables entre sí para poder sacar el máximo provecho.

### Limita la cantidad de cuotas de la suscripción

Puedes indicar que las suscripciones sólo durarán un período determinado de tiempo (por ejemplo que recibirán hasta 24 cobros):

```curl
{
  ...
  "auto_recurring": {
    ...
    "repetitions": 24,
    ...
  },
  ...
}
```

### Agenda los cobros para un día determinado del mes

Si tu plan de suscripción es en base a meses, puedes especificar exactamente qué día del mes quieres que se realicen los cobros:

```curl
{
  ...
  "auto_recurring": {
    ...
    "debit_date": 1,
    ...
  },
  ...
}
```

Si no especificas este atributo, los cobros se agendarán para el mismo día en que se realizó el alta de la suscripción.

### Ofrece un período gratuito de prueba

¿Quieres ofrecer un mes gratis de tu producto, antes de comenzar a cobrarle a tu usuario? Agrega lo siguiente:

```curl
{
  ...
  "auto_recurring": {
    ...
    "free_trial": {
        "frequency": 1,
        "frequency_type": "months",
    }
    ...
  },
  ...
}
```

### Cobra un cargo adicional al suscribir usuarios

En muchos casos es útil realizar un cobro extra al momento de suscribir a tu usuario, que no debe repetirse en cada período de pago, sólo durante la suscripción (por ejemplo, el costo de instalación de un servicio). Es tan simple como agregar lo siguiente, y se realizará un pago inmediatamente al suscribir (este pago no cancela ni forma parte del primer invoice de la suscripción):

```curl
{
  ...
  "setup_fee": 120.99,
  ...
}
```

### Cobra una comisión por transacción

Si implementas MercadoPago Connect y operas con las credenciales de tus usuarios conectados; puedes cobrar una comisión por cada cobro que procesa tu aplicación en nombre de tu usuario. Para esto sólo debes agregar dicho monto en el parámetro application_fee al crear el plan:

```curl
{
  ...
  "application_fee": 3.99,
  ...
}
```

## Consideraciones y sugerencias

Es recomendable seguir una serie de buenas prácticas para que los índices de aprobación sean los mejores posibles durante el tiempo de vida de la suscripción. Ten en cuenta que es posible que sólo dispongas de la atención de tu usuario al momento de darse de alta en tu servicio, y toda comunicación futura puede resultar complicada de llevarse a cabo. Por esto es que debes asegurarte de lograr la mejor condición posible de suscripción, durante el alta.

Mercado Pago realizará su mejor esfuerzo posible para lograr que tus `invoices` resulten pagos, sin requerir acción alguna de tu parte. En caso de no conseguir una aprobación de pago para la fecha de cobro estipulada, reintentaremos hasta cuatro veces más durante diez días, antes de que el `invoice` quede marcado como impago y se prosiga a agendar el próximo.

Aún así, hay algunas cosas que puedes hacer para lograr la mejor experiencia posible.

### Sólo suscribe customers con tarjetas verificadas

No esperes a que se procese el primer pago para recién verificar si los datos de la tarjeta ingresados eran correctos. Intenta anticiparlo y sólo suscribe customers con tarjetas a las cuales ya les hayas realizado un pago regular con éxito. 

Algunas opciones son:

1. Realizar una autorización por un monto bajo a la tarjeta y cancelarla luego, para confirmar que la tarjeta es válida.

2. Utilizar el atributo `setup_fee`, que realizará un cobro extra al intentar suscribir a tu usuario; y sólo si dicho cobro es exitoso, se procede con el alta de la suscripción.

### Acciona ante rechazos de pago

Cada pago rechazado te será notificado mediante [Webhooks](). Analiza el motivo del rechazo, y comunícate con tu usuario para que, por ejemplo, actualice los datos de su tarjeta de crédito o la cambie por otra, antes de que se realice el próximo reintento de cobro.
