---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Advanced Payments
## Introducción

Advanced Payments es una API que permite procesar pagos con funcionalidades adicionales a la [API de Payments](https://www.mercadopago.com.ar/developers/es/guides/payments/api/introduction/) regular.

#### Pagos de Marketplace con split

La **funcionalidad de Split de Pagos** brinda una solución para los pagos de Marketplace donde el modelo de negocio requiere dividir el dinero entre múltiples Vendedores.

> NOTE
>
> Nota
>
> Para más información dirigirse a la documentación de [Marketplaces](https://www.mercadopago.com.ar/developers/es/guides/marketplace/api/introduction/).

#### División de pagos

* Un pago efectuado por un comprador que corresponde a un Marketplace se divide entre múltiples vendedores.
* La división se realiza al momento de la aprobación del pago.
* No hay un límite de vendedores para dividir el dinero y el Marketplace obtiene una comisión por cada venta efectuada.
* Se puede configurar quién paga la comisión de Mercado Pago.

#### Flexibilidad para aplicar comisión

* El Marketplace retiene una parte del monto de la venta en concepto de comisión.
* La comisión que cobra el Marketplace se aplica pago a pago.
* Esto permite tener distintas comisiones para distintos vendedores y a su vez distintas comisiones según el tipo o categoría del producto que ofrezca un vendedor.

#### Liberación de dinero de tus vendedores 

* El dinero de tus vendedores se liberará en 30 días por defecto.

[Comenzar a usar split de pagos en Marketplace](https://www.mercadopago.com.ar/developers/es/guides/marketplace/advanced-payments/receive-split-payments/).
