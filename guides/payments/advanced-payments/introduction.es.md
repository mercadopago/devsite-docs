---
sites_supported:
    - mla
    - mlb
    - mlm
    - mlc
    - mpe
---

# Advanced Payments

> WARNING
>
> Importante
>
> Antes de utilizar esta API, es importante contactar a tu ejecutivo de cuenta de Mercado Pago. 

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

#### Liberación flexible de dinero de Vendedores

* Al momento de la integración se configura un rango de días en el cual se podrá liberar el dinero de los vendedores.
* La liberación se setea en cada pago y puede modificarse posteriormente.

[Comenzar a usar split de pagos en Marketplace](https://www.mercadopago.com.ar/developers/es/guides/payments/advanced-payments/receive-split-payments/).

