# Personaliza tu preferencia de pago

De ser necesario, al momento de crear la preferencia de pago en tu servidor puedes especificar restricciones como exclusiones de medios o tipos de pago específicos y establecer la cantidad de cuotas máximas o por _default_.

## Excluir Medios de Pago

Puedes especificar los tipos de medio de pago que no quieras soportar (Efectivo, Tarjetas de Crédito o Débito) excluyéndolos en la creación de la _Checkout Preference_.

En el contenido de la preferencia de pago puedes agregar los medios de pago o tipos de medio que no quieras soportar.

*Excluir un tipo de medio de pago específico:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_types":[
        {"id":"ticket"}
    ]
  },
  ...
}
```

*Excluir más de un tipo de medio de pago:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_types":[
        {"id":"ticket"},
        {"id":"atm"},
        {"id":"debit_card"}
    ]
  },
  ...
}
```

O incluso puedes determinar qué medios de pago específicos (Visa, Mastercard, etc) quieres excluir del _checkout_:

*Excluir un medio de pago específico:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_methods":[
        {"id":"visa"}
    ]
  },
  ...
}
```

*Excluir más de un medio de pago:*

```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_methods":[
        {"id":"visa"},
        {"id":"master"}
    ]
  },
  ...
}
```

## Personalizar Cuotas

Puedes precisar la cantidad máxima de cuotas que quieres soportar para tus medios de pago:

```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
  	 "excluded_payment_methods": [
  	   ...
  	 ],
  	 "excluded_payment_types": [
  	   ...
  	 ],
    "installments": 1
  },
  ...
}
```

O también establecer una cantidad de cuotas por _default_ que se seleccionará automáticamente, si es que existe para el medio de pago seleccionado por el usuario. De lo contrario, se le mostrará la pantalla de cuotas para que él elija:

```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
  	 "excluded_payment_methods": [
  	   ...
  	 ],
  	 "excluded_payment_types": [
  	   ...
  	 ],
    "default_installments": 3
  },
  ...
}
```