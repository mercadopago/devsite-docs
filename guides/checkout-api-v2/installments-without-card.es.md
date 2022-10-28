----[mla]---- 
# Pagos en cuotas sin tarjeta
------------
----[mlm]----
# Pagos en meses sin tarjeta
------------

Mercado Crédito es el método de financiación de Mercado Pago que permite pagar en cuotas sin tarjeta.

Al ofrecer esta opción en tu tienda, tus clientes podrán comprar un producto hoy y pagarlo después en cuotas. Para tu negocio, la aprobación de la compra es inmediata y está garantizada, se te acredita la totalidad por adelantado y tus clientes nos pagan después.

En esta guía encontrarás los pasos necesarios para ofrecer cuotas sin tarjeta en tu tienda.


Al ofrecer esta opción en tu tienda, tus clientes podrán comprar un producto hoy y pagarlo después a meses. Para tu negocio, la aprobación de la compra es inmediata y está garantizada, se te acredita la totalidad por adelantado y tus clientes nos pagan después.

Nuestro objetivo es que aumentes tus ventas y alcances nuevos usuarios.

Sigue estos pasos para ofrecer Meses sin tarjeta como medio de pago en tu tienda:


## Requisitos previos

Para realizar la integración es importante cumplir con los requisitos que se muestran a continuación.

| Requisitos | Descripción | 
|---|---|
| Aplicación  | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta [Dashboard](/developers/es/docs/checkout-bricks/additional-content/dashboard/introduction) para obtener más información sobre cómo crear una aplicación. |
| Cuenta de vendedor de Mercado Pago o Mercado Libre | Para integrar Card Payment Brick necesitas una cuenta de vendedor en Mercado Pago o Mercado Libre. Si no, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crear. | 
| Instalar el SDK de Mercado Pago | Instale los SDK oficiales para simplificar su integración con nuestras [APIs](/developers/es/reference/payments/_payments/post). Para obtener más información, [haz clic aquí](/developers/es/docs/sdks-library/landing). |

Si se cumplen todos los requisitos previos, podrás realizar la integración de pagos en cuotas sin tarjeta.

## Configuración de integración

> SERVER_SIDE
>
> h3
>
> Crear preferencia 

Las preferencias son conjuntos de información sobre un producto y/o servicio que te permiten definir el nombre, el método de pago y otros atributos necesarios para obtener la URL para iniciar el flujo de pago al finalizar la compra.

La primera etapa para configurar los pagos con Mercado Crédito es la creación de la preferencia. Para esto, envía un POST con el parámetro `purpose` y el valor `onboarding_credits` al **endpoint** [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de los SDKs indicados a continuación.

```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "items": [
        {
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 75
        }
    ],
    "purpose": "onboarding_credits"
}'
```

> CLIENT_SIDE
>
> h3
>
> Añadir botón al checkout

Con la preferencia creada, se debe exhibir el botón de pago que permitirá al comprador utilizar Mercado Crédito para pagar. Para exhibir el botón de pago, inserte el siguiente código directamente en su proyecto.

```html
<div class="cho-container"></div>
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
  const mp = new MercadoPago('PUBLIC_KEY');

  mp.checkout({
    preference: {
      id: 'YOUR_PREFERENCE_ID'
    },
    render: {
      container: '.cho-container',
      label: 'Em até 12x sem cartão com Mercado Pago',
      type: 'credits',
    }
  });
</script>
```

Al ingresar este código, debería ver un botón similar al ejemplo ilustrado a continuación.

----[mla]---- 
![cuotas sin tarjeta](api/button-installments-w-card-mla-es.png)

------------
----[mlm]---- 
![meses sin tarjeta](api/button-installments-w-card-mlm-es.png)

------------

### Ejemplo del flujo de pago

![ejemplo flujo](api/flow-installments-w-card-es.png)

### Sugerencias y buenas prácticas

Para ofrecer la mejor experiencia a tus compradores usando Mercado Crédito, te sugerimos:

* Usar mayúsculas en las iniciales de la marca: Mercado Crédito

----[mla]----
![iniciales](api/suggestions1-installments-w-card-mla-es.png)

------------
----[mlm]----
![iniciales](api/suggestions1-installments-w-card-mlm-es.png)

------------

* Mantener el logo de Mercado Pago

![logo](api/suggestions2-installments-w-card-es.png)

----[mla]----
* Mantener la propuesta de valor de cuotas sin tarjeta

![propuesta](api/suggestions3-installments-w-card-mla-es.png)

------------
----[mlm]----
* Mantener la propuesta de valor de cuotas sin meses

![propuesta](api/suggestions3-installments-w-card-mlm-es.png)

------------

* Mantener la alineación y los espacios entre los elementos del botón

----[mla]----
![alineación](api/suggestions4-installments-w-card-mla-es.png)

------------
----[mlm]----
![alineación](api/suggestions4-installments-w-card-mlm-es.png)

------------

Para explicar mejor a tus clientes cómo funciona Mercado Crédito, puedes compartirles estos pasos a continuación.

1. Crea una cuenta o ingresa en Mercado Pago. Si usas **Mercado Libre**, ¡ya tienes cuenta!

----[mla]----
2. Elige **Mercado Crédito** y la cantidad de cuotas en las que quieres pagar.

3. ¡Listo! Después paga mes a mes tus cuotas desde la **app de Mercado Pago**.
------------

----[mlm]----
2. Elige Mercado Crédito y la cantidad de mensualidades en las que quieras pagar.

3. ¡Listo! Después paga tus mensualidades desde la app de Mercado Pago.
------------