##  Configurar monto máximo y mínimo de cuotas

| Brick | Card Payment Brick |
| --- | --- |
| Momento de personalización | Al renderizar Brick |
| Propiedad | customization.paymentMethods.minInstallments && customization.paymentMethods.maxInstallments |
| Tipo | number |
| Observaciones | Cuando se pasa un valor para min o maxInstallments, la cantidad de cuotas estará limitada por los valores pasados. |
