

# Web Payment Checkout

Con el *Web Payment Checkout* de **Mercado Pago** olvídate de la complejidad del armado de tu formulario para la selección de los medios de pago. Esta integración simple te proporciona un formulario con el diseño y el front-end listo.

Integra el *Web Payment Checkout* en tu sitio para brindarle a tus compradores una estilizada experiencia que **Mercado Pago**  mantiene en constante mejora.

Los datos sensibles de las tarjetas de crédito y débito son cifrados y almacenados por **Mercado Pago** (con su correspondiente cumplimiento [PCI](https://www.pcisecuritystandards.org/)), sin que sean transmitidos a tus servidores.

---

## Soporte de Navegadores

Para garantizar una navegación segura y cumplir con las normativas PCI, el *Web Payment Checkout* brinda una experiencia de pago solo en los navegadores que soporten el protocolo TLS 1.1 o mayor

En el caso de que el comprador tenga un navegador no soportado, se le indicará que no podrá realizar la compra hasta que lo actualice.

### Desktop web

Navegador | Soporte
--------- | --------
**Chrome** | Completo
**Firefox** | Completo
**Internet Explorer** | 11
**Edge** | Completo
**Safari** | Completo
**Opera** | Completo

### Mobile web

Navegador | Soporte
--------- | --------
**Chrome** | Completo
**Firefox** | Completo
**Windows Phone (Internet Explorer Mobile)** | _No_
**Safari Mobile** | Completo
**Opera Mini** | _Básico_
**Android Browser** | _No_

## Integración

Integrar el *Web Payment Checkout* es muy fácil:

1. [Crea una preferencia de pago](/guides/payments/web-payment-checkout/create-preference.es.md) y [obtén tu public key](https://www.mercadopago.com.ar/account/credentials).
2. Lleva a tu comprador al checkout.
3. Entérate del pago escuchando las notificaciones que te enviamos.

Para más información visita la sección [Recibir pagos](/guides/payments/web-payment-checkout/receive-payments.es.md).


## Recomendaciones adicionales

### Tarjetas de prueba

Para realizar pagos de prueba (con tus credenciales de TEST), es necesario que utilices [tarjetas de prueba](/guides/payments/api/testing.es.md).
