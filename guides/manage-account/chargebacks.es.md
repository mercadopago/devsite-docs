# Gestión de Contracargos

> NOTE
>
> Nota
>
> **¿Qué es?** Cuando un comprador se comunica con la entidad que emitió su tarjeta (un banco, por ejemplo) y desconoce un pago realizado a través de ese medio, se genera un _contracargo_. [Más información &raquo;](https://www.mercadopago.com.ar/ayuda/recib%C3%AD-un-contracargo_4249)

El contracargo, en principio, signfica que Mercado Pago retendrá el dinero de la venta hasta que el problema sea solucionado.

Los contracargos pueden ser gestionados vía API.
Es importante en este proceso mencionar cuáles son las instancias clave:

1. Aparición del contracargo
2. Consulta del contracargo
3. Entendimiento de la cobertura
4. Disputa del contracargo
5. Revisión por parte de Mercado Pago
6. Resolución

Ahora entraremos en detalle en cada una de ellas

## Aparición del contracargo

Vía [IPN](/guides/notifications/ipn.es.md) te notificaremos instantáneamente cada vez que recibas un contracargo. Para que esto suceda, debes estar subscripto al tema `chargebacks` dentro de la [configuración](https://www.mercadopago.com.ar/herramientas/notificaciones).

## Consulta del contracargo

La notificación IPN va a contener el `ID` del contracargo.
Con dicho `ID` podrás hacer un **GET** a `https://api.mercadopago.com/v1/chargebacks/ID` para consultar su información:

```json
{
  "id": "43589345903450",
  "payments": [
    345345345
  ],
  "currency": "ARS",
  "amount": 100.20,
  "coverage_applied": false,
  "coverage_elegible": true,
  "documentation_required": true,
  "documentation_status": "valid",
  "documentation": [
    {
      "type": "image/png",
      "url": "https://api.mercadopago.com/v1/chargebacks/documentation/op/op-4ccf4f39-b6f7-4c7b-a5ce-e8941a2a2b5f?access_token=TEST-7330838325999170-111309-c5e69fb44fb5dc008668f64e27653767-345521533",
      "description": "File: img.png, Size: 3324"
    }
  ],
  "date_documentation_deadline": "2018-12-08T09:50:37.000-04:00",
  "date_created": "2018-09-14T16:20:54.000-04:00",
  "date_last_updated": "2018-11-28T10:48:48.000-04:00",
  "live_mode": true
}
```

## Entendimiento de cobertura

Según la operatoria del vendedor, su acuerdo comercial - o ambos - puede variar la política de cobertura de cada contracargo por parte de Mercado Pago. El campo `coverage_elegible` define si el contracargo es posible de ser disputado o no.

| Campo         | Valor           | Descripción
| ----      | ----                |
| `coverage_elegible` | **false** | Indica que el contracargo no puede ser disputado
| `coverage_elegible` | **true**  |Indica que el contracargo sí puede ser disputado

Además se cuenta con el campo `documentation_required` que indica si se requiere que se suba la documentación para ser cubierto. 

| Campo         | Valor           | Descripción
| ----      | ----                |
| `documentation_required` | **false** | Indica que no se requiere documentación para el contracargo
| `documentation_required` | **true**  |Indica que se requiere documentación para el contracargo


----[mla,mlc,mlm,mpe,mco,global]----
En caso de que se requiera proveer documentación, se cuenta con un plazo de 7 días desde la creación del contracargo para subirla. En la respuesta de la consulta del contracargo se puede ver cuando expira este plazo en el campo `date_documentation_deadline`.
------------
----[mlb]----
En caso de que se requiera proveer documentación, se cuenta con un plazo de 10 días desde la creación del contracargo para subirla. En la respuesta de la consulta del contracargo se puede ver cuando expira este plazo en el campo `date_documentation_deadline`
------------

> WARNING		 
> 
> Requisitos
>
>Sólo es posible continuar con el resto de los pasos si el contracargo **puede ser disputado**, **se requiere que se suba documentación** y **el plazo no ha expirado.** 

## Disputa del contracargo

Si el contracargo sigue los criterios anteriormente mencionados, se puede enviar via API la información respaldatoria que valida que la venta ocurrió. [Más información &raquo;](https://www.mercadopago.com.ar/ayuda/recib%C3%AD-un-contracargo_4249) 

Para hacer esto, se debe hacer un **POST** a `https://api.mercadopago.com/v1/chargebacks/ID/documentation` con la siguiente forma:
```
curl -XPOST -F 'files[]=@/path/to/file/file1.png' -F 'files[]=@/path/to/file/file2.pdf' https://api.mercadopago.com/v1/chargebacks/ID/documentation?access_token=
```

La api responderá con status `200 OK` si se ha subido la documentación exitosamente. La respuesta cambiará el estado del atributo `documentation_status` a **review_pending**.

> NOTE
>
> Nota
>
> Los archivos podrán ser .jpg, .png, .pdf y en su conjunto no podrán exceder los 10mb.

## Revisión por parte de Mercado Pago

Una vez enviada la documentación, un representante de Mercado Pago la revisará.

## Resolución

Eventualmente el contracargo podrá tener dos tipos de resoluciones posibles:

| Campo         | Valor           | Descripción
| ----      | ----                |
| `coverage_applied` | **false** | Indica que Mercado Pago falló _en contra_ del vendedor (se le devuelve el dinero al comprador)
| `coverage_applied` | **true**  | Indica que Mercado Pago falló _a favor_ del vendedor (se le devuelve el dinero al vendedor)

Cuando la resolución suceda, independientemente del resultado, se enviará una nueva notificación vía **IPN** para que se pueda verificar que sucedió.
