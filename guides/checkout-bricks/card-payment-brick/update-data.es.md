# Actualizar datos

Para actualizar datos en Card Payment Brick, proporcionamos el método de actualización a través del _Controlado_r. Al ser llamado, el método update actualizará los datos proporcionados preservando la instancia actual del Brick.

Datos disponibles para la actualización:

| Campo | Tipo | Descripción | Validación |
| --- | --- | --- | --- |
| amount | number | Monto del pago. |

```javascript
let amount = 95;
cardPaymentBrickController.update({ amount });
```