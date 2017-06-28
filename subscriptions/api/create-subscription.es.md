# Creando una subscripción

Subscribe a tus clientes para recibir de forma periódica y automatizada.

> WARNING
> 
> Pre-requisitos
> 
> * Tener implementada la [captura de datos de tarjeta](../../payments/receiving-payment-by-card.es.md).
> * Almacenar [clientes y tarjetas](../../payments/customers-and-cards.es.md).


## 1. Crea un plan de subscripción

El plan contiene la información de periodicidad de cobro y monto a cobrar.

Para crearlo debes realizar un request POST:

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

> Estos son los datos mínimos e indispensables para crear un plan, pero tienes más opciones que puedes encontrar en [Añade características especiales a tu plan](#añade-características-especiales-a-tu-plan).

**Respuesta:**

HTTP status code: 201 Created

```json
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

## 2. Crea un cliente y adhierele una tarjeta

Para poder crear una subscripción, debes tener un `Customer` con una tarjeta adherida.

Revisa el artículo de [Clientes y Tarjetas](../../payments/api/customers-and-cards.es.md) para saber como hacerlo.

Sólo suscribe `customers` con tarjetas verificadas

Algunas opciones para realizarlo son:

1. [Realizar una autorización](../../payments/api/authorization-and-capture.es.md) por un monto bajo a la tarjeta y cancelarla luego, para confirmar que la tarjeta es válida.

2. Utilizar el atributo `setup_fee`, que realizará un cobro extra al intentar suscribir a tu usuario; y sólo si dicho cobro es exitoso, se procede con el alta de la subscripción.


## 3. Subscribe un customer a un plan

Una subscripción es un objeto que relaciona un `Plan` y un `Customer`.

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

> NOTE
> 
> Nota
>
> El customer debe tener cargada una `default_card` a la cual se le cobrará, apta para pagos de subscripciones.


**Respuesta:**

HTTP status code: 201 Created

```json
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

**Importante:** los cobros se realizan por adelantado. En este caso el primer cobro se realizará tan pronto suscribas a un customer, y no a mes vencido.

Llegada la fecha de cobro, se creará un objeto `invoice`, el cual contendra el estado del cobro de la subscripción para ese periodo. Podrás ver los intentos de cobro en el objeto `payments` y la próxima fecha a cobrar en `next_payment_attempt`.

## 4. Recibe información de los pagos de tus subscripciones

Recibirás notificaciones ante creación o modificación de un plan, subscripción, invoice o pago.

Mercado Pago realizará su mejor esfuerzo para lograr que tus `invoices` resulten pagos, sin requerir acción alguna de tu parte. 

Solo deberías entregar tu producto o servicio, cuando el `invoice` para ese periodo tenga estado `paid`.

En caso de no conseguir una aprobación de pago para la fecha de cobro estipulada, reintentaremos hasta cuatro veces durante diez días, antes de que el `invoice` quede marcado como `unpaid`. Frente a este estado puedes pausar o cancelar la subscripción.

Independientemente del estado del invoice actual, si la subscripción se encuentra activa se creará un invoice para el próximo periodo.

Cada pago rechazado te será notificado mediante [Webhooks](#). Analiza el motivo del rechazo, y comunícate con tu usuario para que, por ejemplo, [actualice los datos de su tarjeta de crédito]() o la cambie por otra, antes de que se realice el próximo reintento de cobro.

Visita la sección [Webhooks](#) para más información.


## Añade características especiales a tu plan

Revisa el [API Doc de plans](#) para conocer todas las configuraciones que puedes realizar. Así podrás adecuar el cobro de subscripción a tu modelo de negocio. A continuación te mostramos las características más relevantes que puedes especificar al momento de crear un plan. Ten presente que son combinables entre sí para poder sacar el máximo provecho.

### Limita la cantidad de cuotas de la subscripción

Puedes indicar que las subscripciones sólo durarán un período determinado de tiempo (por ejemplo que recibirán hasta 24 cobros):

```json
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

Si tu plan de subscripción es en base a meses, puedes especificar exactamente qué día del mes quieres que se realicen los cobros:

```json
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

Si no especificas este atributo, los cobros se agendarán para el mismo día en que realizaste el alta de la subscripción.

### Ofrece un período gratuito de prueba

Puedes ofrecer un periodo de prueba a tus clientes por una frecuencia determinada:

```json
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

En muchos casos es útil realizar un cobro extra al momento de suscribir a tu usuario, por ejemplo para el costo de instalación de un servicio.

Debes especificar el monto a cobrar al crear el plan:

```json
{
  ...
  "setup_fee": 120.99,
  ...
}
```

Este pago no cancela ni forma parte del primer invoice de la subscripción.

En caso de que no podamos realizar este cobro, la subscripción no se creará.

### Cobra una comisión por transacción

Si implementas [Marketplace](#) y operas con las credenciales de tus usuarios conectados puedes cobrar una comisión por cada pago que creas. Para esto sólo debes agregar dicho monto en el parámetro `application_fee` al crear el plan:

```curl
{
  ...
  "application_fee": 3.99,
  ...
}
```


## Próximos pasos

### Gestiona tu subscripción

En el artículo de [gestión de subscripciones](manage-subscription.es.md) encontrarás información sobre cómo pausar, reactivar o eliminar una subscripción, y también actualizar el monto de un plan.

### Prueba tu integración

Puedes probar tu integración antes de salir a producción, a fin de realizar los ajustes que necesites. Para ello utiliza tus credenciales de Modo Sandbox y las tarjetas de prueba. Visita la sección [Probando](#).
