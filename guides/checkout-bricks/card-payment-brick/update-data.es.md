# Actualizar datos

Para actualizar datos en Card Payment Brick, proporcionamos el método de actualización a través del _Controlado_r. Al ser llamado, el método update actualizará los datos proporcionados preservando la instancia actual del Brick.

Datos disponibles para la actualización:

| Campo | Tipo | Descripción | Validación |
| --- | --- | --- | --- |
| amount | number | Monto del pago. | Antes de actualizar el `amount`, el Brick verifica si el nuevo valor es mayor o igual al valor mínimo permitido por el método de pago seleccionado por el usuario. Si la validación es exitosa, el método de actualización devolverá `true`. De lo contrario, devolverá `false`. |

```javascript
let amount = 95;
cardPaymentBrickController.update({ amount });
```