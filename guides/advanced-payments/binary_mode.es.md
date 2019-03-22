---
  description: Mercado Pago cuenta con APIs para poder recibir pagos de forma segura en tu sitio web, aplicación móvil, o donde desees, manteniendo la experiencia de compra.
---

## Pagos binarios

Se puede definir el pago para que la respuesta sea instantánea o no.

En caso de que sea instantánea, la respuesta del pago será `approved` o `rejected` (sin estados intermedios). Por el contrario, el pago puede quedar en estado pendiente esperando por ejemplo la acreditación del pago en el caso de Medios Offline o pagos con tarjeta de crédito de montos elevados donde el Comprador debe llamar a la entidad de la tarjeta para autorizar el pago.

Esta lógica se puede manejar seteando, en la raíz del Advanced Payment, el campo `binary_mode` en `true` para que devuelva la respuesta inmediata y `false` para lo contrario.

```json
  "binary_mode": true
```