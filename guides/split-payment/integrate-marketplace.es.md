# Integrar el checkout en Split de Pagos (marketplace)

Si eliges vender a través de un _marketplace_, es posible integrar **dos tipos de checkout de Mercado Pago** para procesar los pagos realizados.

* [Checkout Pro](/developers/es/guides/checkout-pro/landing): en este modelo de checkout, el comprador es dirigido a una página de Mercado Pago para completar el pago.
* ----[mla, mlu, mpe, mco, mlc, mlm]----[Checkout API](/developers/es/guides/checkout-api/introduction)----------------[mlb]----[Checkout Transparente](/developers/es/guides/checkout-api/introduction)------------: este modelo de pago permite al comprador realizar el pago dentro del entorno del _marketplace_.

Ambos checkouts reparten automáticamente los importes entre el vendedor y el _marketplace_ a través del _split del pago_ sin necesidad de ninguna acción por parte del vendedor.

> NOTE
>
> Importante
>
> La comisión de Mercado Pago se descuenta de los fondos recibidos por el vendedor. Es decir, primero se descuenta la comisión de Mercado Pago y la comisión del marketplace se descuenta del saldo restante.

Para realizar la integración deberás seguir el flujo de integración habitual del _checkout_ elegido, utilizando necesariamente un token de acceso para cada vendedor, obtenido a través de OAuth. A continuación, enumeramos los pasos necesarios para integrar una caja con el _marketplace_.

1. Sigue los pasos descritos en la [documentación de OAuth](/developers/es/guides/additional-content/security/oauth/introduction) para obtener cada `access_token`. Esta información será necesaria durante el proceso de integración de pago en el _marketplace_.
2. Elige el tipo de pago que desea ([Checkout Pro](/developers/es/guides/checkout-pro/landing) o ----[mla, mlu, mpe, mco, mlc, mlm]----[Checkout API](/developers/es/guides/checkout-api/introduction)------------ ----[mlb]----[Checkout Transparente](/developers/es/guides/checkout-api/introduction)------------) y sigue todo el flujo de integración.
3. En la integración del _checkout_, usa la `public_key` de tu cuenta de integrador en el _frontend_ e inserta el `access_token` del vendedor (obtenido en el paso 1) en el _backend_ o en el _header_ de la solicitud.
4. Para determinar el porcentaje de comisión del mercado:

  - Si el checkout es Pro, completa el parámetro `marketplace_fee` con el monto que se cobrará por cada preferencia de pago creada en la API **/checkout/preferences**.

<br>

#### Ejemplo

```json
    {
    "items": [
        {
            "id": "item-ID-1234",
            "title": "Meu produto",
            "currency_id": "BRL",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
    "marketplace_fee": 10
    }
```

  - Si el checkout es ----[mla, mlu, mpe, mco, mlc, mlm]----API------------ ----[mlb]----Transparente------------, completa el parámetro `application_fee` con el monto que se cobrará por cada pago creado en la API **/payments**.

<br>

#### Ejemplo

```json
    {
    "description": "API TRANSPARENTE MARKETPLACE",
    "installments": 1,
    "token": "{{card_token}}",
    "payer": {
        "id": "{{payer_id}}"
    },
    "marketplace": "{{marketplace_id}}",
    "payment_method_id": "master",
    "application_fee": 2,
    "transaction_amount": 10
    }
```

Al completar estos pasos, el pago se habrá integrado en el _marketplace_ y estará listo para procesar pagos.