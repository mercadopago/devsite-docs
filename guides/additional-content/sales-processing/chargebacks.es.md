# Gestión de contracargos

Encuentra toda la información sobre los contracargos, cómo prevenirlos y gestionarlos por API.

## ¿Qué es un contracargo?

Se crea un contracargo cuando **el cliente disputa un cobro de su tarjeta de crédito o débito ante el banco emisor de su tarjeta y pide un reembolso del dinero.**

----[mla, mlm, mpe, mco, mlu, mlb]----

Cuando esto ocurre, podemos retener el dinero del cobro hasta que el problema sea solucionado y gestionamos el caso con la entidad emisora de la tarjeta. Tenemos 10 días para presentar los comprobantes de la operación y el proceso de validación puede demorar hasta 140 días.

------------

----[mlc]----
Cuando esto ocurre, podemos retener el dinero del cobro hasta que el problema sea solucionado y gestionamos el caso con la entidad emisora de la tarjeta. Tenemos 7 días para presentar los comprobantes de la operación y el proceso de validación puede demorar hasta 150 días.

------------

En caso de que el reclamo sea aceptado por la entidad emisora, se le devolverá el dinero al comprador. Pero no te preocupes, si cumples con los [requisitos del Programa de Protección al Vendedor](https://www.mercadopago.com.ar/ayuda/requisitos-programa-proteccion-vendedor_294) te cubriremos el contracargo y no te descontaremos el dinero de la venta.

> NOTE
>
> Nota
>
> Si recibiste un contracargo y no sabes qué hacer, consulta nuestras [preguntas frecuentes](https://www.mercadopago.com.ar/ayuda/recib%C3%AD-un-contracargo_4249).

## Recomendaciones para prevenir contracargos

No es posible evitar todos los contracargos pero puedes reducir la probabilidad de que un pago se convierta en uno.

### Completa los datos de tu negocio

Si el comprador no reconoce el cargo en el resumen de su tarjeta puede realizar un contracargo. Para evitar estos casos, completa la [información de tu negocio](https://www.mercadopago.com.uy/settings/account) para definir cómo quieres aparecer en los resúmenes de tarjetas y en los SMS de confirmación de pago.

### Suma el código de seguridad en tu sitio

Te ayudamos a detectar comportamientos inusuales de los clientes con nuestro código de seguridad para prevenir el fraude. Y no te preocupes, cuidamos los datos de tus clientes y no los compartiremos con nadie.

Es muy simple. Agrega el script, configura la sección de tu sitio en la que se encuentra ¡y listo! Solo debes reemplazar el valor de `view` por el nombre de la página en la que quieras sumarlo.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

#### Posibles valores para `view`

| Tipo | Descripción |
| --- | --- |
| *home* | Página principal de tu sitio. |
| *search* | Página de búsqueda o listado de productos. |
| *item* | Página de un producto específico. |

> NOTE
>
> Nota
>
> En caso de no tener un valor disponible para la sección, puedes dejarlo vacío.

### Envía el comprobante de compra

Es importante que mandes el comprobante del pago por e-mail o por mensaje de texto para ayudar a que tu cliente recuerde a qué se debe el pago que hizo.

### Detalla toda la información sobre el pago

Para optimizar la validación de seguridad de los pagos, envíanos la mayor cantidad de datos posibles al momento de crear el pago. Por ejemplo, si nos envías datos del comprador, podemos detectar si realizó pagos sospechosos en otro momento y prevenirlo.
Puedes obtener más información sobre cada atributo en las [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments/post).

### Devuelve los pagos sospechosos

Te avisaremos vía notificaciones IPN cuando detectemos un comportamiento irregular o recibamos una notificación de que la tarjeta usada fue robada. Además,  nos contactaremos  vía e-mail para avisarte. Ante esta situación, debes cancelar la compra y devolver el dinero al comprador para evitar el contracargo.

### Revisa los datos al cobrar con Point

Pide el documento de tus compradores a la hora de hacer el pago y comprueba que los datos y la firma coinciden con los de la tarjeta.

## Gestiona tus contracargos por API

### Aparición del contracargo

Te avisaremos vía [notificaciones IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction) cada vez que recibas un contracargo. Para [comenzar a recibir notificaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn/introduction), debes completar tus datos y elegir la opción Chargebacks.

### Consulta del contracargo

La notificación IPN va a contener el ID del contracargo. Usa el ID para obtener información del pago.

```
curl -X GET \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
https://api.mercadopago.com/v1/chargebacks/ID
```

Vas a obtener la siguiente información:

```json
{
  "id": "43589345903450",
  "payments": [
    345345345
  ],
  "currency": "[FAKER][CURRENCY][ACRONYM]",
  "amount": 100.20,
  "reason": "fraud",
  "coverage_applied": false,
  "coverage_elegible": true,
  "documentation_required": true,
  "documentation_status": "valid",
  "documentation": [
    {
      "type": "image/png",
      "url": "https://api.mercadopago.com/v1/chargebacks/documentation/op/op-4ccf4f39-b6f7-4c7b-a5ce-e8941a2a2b5f",
      "description": "File: img.png, Size: 3324"
    }
  ],
  "date_documentation_deadline": "2018-12-08T09:50:37.000-04:00",
  "date_created": "2018-09-14T16:20:54.000-04:00",
  "date_last_updated": "2018-11-28T10:48:48.000-04:00",
  "live_mode": true
}
```

> NOTE
>
> Nota
>
> Puedes obtener más información en la [referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_chargebacks_id/get).

### Entendimiento de cobertura

Según el caso puede variar la política de cobertura por parte de Mercado Pago.
El campo `coverage_elegible` define si el contracargo puede ser cubierto y `documentation_required` indica si requiere documentación.
Para más información, puedes ver el [Programa de Protección al Vendedor](https://www.mercadopago.com.ar/ayuda/requisitos-programa-proteccion-vendedor_294).

> WARNING
>
> Importante
>
>Solo es posible continuar con el resto de los pasos si el contracargo puede ser cubierto, se requiere que se suba documentación y el plazo no ha expirado.

### Disputa del contracargo

Puedes enviar la información respaldatoria que valida la venta por API. 

```
curl -X POST  \
-F 'files[]=@/path/to/file/file1.png' \
-F 'files[]=@/path/to/file/file2.pdf' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
https://api.mercadopago.com/v1/chargebacks/ID/documentation
```

Si se ha subido la documentación exitosamente, la API responderá con estado `200 OK` y cambiará el valor de `documentation_status` a `review_pending`.

> NOTE
>
> Nota
>
> Los archivos podrán ser .jpg, .png, .pdf y en su conjunto no podrán exceder los 10mb.

### Resolución

Una vez enviada la documentación, un representante de Mercado Pago la revisará.
Eventualmente el contracargo podrá tener dos tipos de resoluciones posibles en el campo `coverage_applied`:

| Valor           | Descripción
| ----            | ----
| **true**  | Indica que se falló a favor del vendedor y se le devuelve el dinero.
| **false** | Indica que se falló en contra del vendedor y se le descuenta el dinero.

Al resolverse, se enviará una nueva notificación IPN para que puedas verificar el caso.
