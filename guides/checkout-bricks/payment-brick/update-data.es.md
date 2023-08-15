# Actualizar datos

Para actualizar datos en Payment Brick, proporcionamos el método de actualización a través del _Controlado_r. Al ser llamado, el método update actualizará los datos proporcionados preservando la instancia actual del Brick.

Datos disponibles para la actualización:

----[mlm]----
| Campo | Tipo | Descripción | Validación |
| --- | --- | --- | --- |
| amount | number | Monto del pago. <br><br> La actualización del `amount` no afecta los pagos a través de [Cuenta de Mercado Pago y Financiamiento sin tarjeta](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits) ya que sus valores se establecen en el backend. | Antes de actualizar el `amount`, el Brick verifica si el nuevo valor es mayor o igual al valor mínimo permitido por el método de pago seleccionado por el usuario. Si la validación es exitosa, el método de actualización devolverá `true`. De lo contrario, devolverá `false`. |

------------
----[mlb, mla]----
| Campo | Tipo | Descripción | Validación |
| --- | --- | --- | --- |
| amount | number | Monto del pago. <br><br> La actualización del `amount` no afecta los pagos a través de [Cuenta de Mercado Pago y Financiación sin tarjeta](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits) ya que sus valores se establecen en el backend. | Antes de actualizar el `amount`, el Brick verifica si el nuevo valor es mayor o igual al valor mínimo permitido por el método de pago seleccionado por el usuario. Si la validación es exitosa, el método de actualización devolverá `true`. De lo contrario, devolverá `false`. |

------------
----[mpe, mco, mlu, mlc]----
| Campo | Tipo | Descripción | Validación |
| --- | --- | --- | --- |
| amount | number | Monto del pago. <br><br> La actualización del `amount` no afecta los pagos a través de [Cuenta de Mercado Pago](/developers/es/docs/checkout-bricks/payment-brick/payment-submission/wallet) ya que sus valores se establecen en el backend. | Antes de actualizar el `amount`, el Brick verifica si el nuevo valor es mayor o igual al valor mínimo permitido por el método de pago seleccionado por el usuario. Si la validación es exitosa, el método de actualización devolverá `true`. De lo contrario, devolverá `false`. |

------------

```javascript
let amount = 95;
paymentBrickController.update({ amount });
```