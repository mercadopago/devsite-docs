---
sites_supported:
  - mla
---

# Integra el Web Checkout

## ¿Cómo es el flujo de integración? 

![Integration](/images/web-payment-checkout/integration.png)

1. Agrega un botón ”Pagar” de Mercado Pago a tu sitio web.
1. Importa el SDK a utilizar.
1. Configura tus credenciales.
1. Crea una preferencia.
1. Redirigí al comprador al checkout.

## Paso a paso

**1) // TODO**

**2) Importa el SDK**

En tu proyecto importa el SDK de Mercado Pago:

**<?php
require __DIR__  ‘/vendor/autoload.php;
?>**

**3) Configura tus credenciales**

Configura las credenciales necesarias que habilitan el uso de la SDK de Mercado Pago, para esto reemplaza las mismas, obtenidas desde siguiente [link](https://www.mercadopago.com/mla/account/credentials?type=basic).

**<?php
require __DIR__  ‘/vendor/autoload.php;
MercadoPago\SDK::setClientId(“ENV_CLIENT_ID”);
MercadoPago\SDK:setClientSecret(“ENV_CLIENT_SECRET”);
?>**

**4) Creá una preferencia**
 // TODO
