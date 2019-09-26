---
sites_supported:
  - mla
  - mco
  - global
---

# Mercado Pago Gateway: Configuración

## Introducción

Desde el backoffice de Mercado Pago podrás configurar tanto tus números de comercio como tus acuerdos comerciales con adquirentes y/o emisores en caso de tener promociones.

Para hacerlo, ingresá en la sección _Configuración:_

![Configuración](/images/gateway/configuration.png)

## Números de comercio

En la sección _Configuración &rarr; Nº de comercio_ podrás ver el listado de los números de comercio que cargaste. Desde esta vista podrás crear nuevos o gestionar los ya creados.

![Números de comercio](/images/gateway/merchant_accounts.png)

### Creando un número de comercio

Al presionar el botón _Agregar Nº comercio_ verás la siguiente vista:

![Números de comercio](/images/gateway/merchant_accounts_new.png)

Completá la información necesaria y presiona el botón _Continuar_

![Número de comercio cargado](/images/gateway/merchant_accounts_congrats.png)

¡Listo! Tu número de comercio ya estará creado

> Por defecto cada número de comercio creado estará desactivado. Es necesario activarlo posteriormente cuando ya esté todo listo para utilizarlo.

**¿Qué es el ID externo y para qué se utiliza?**

Su uso está vinculado con la parte técnica y es para identificar un número de comercio fácilmente a la hora de realizar la integración.

> Si no sabés que completar en este campo simplemente dejalo vacío. Tu integrador o equipo de desarrollo sabrá si necesita utilizarlo o no.

### Editando un número de comercio

Al presionar sobre un item del listado de números de comercio, se puede ir a la vista de edición:

![Edición de número de comercio](/images/gateway/merchant_accounts_edit.png)

Aqui podrás editar los datos que necesites.

### Eliminando un número de comercio

No es posible eliminar un número de comercio. Sólo desactivarlo.

## Acuerdos comerciales (medios de pago)

Los acuerdos comerciales pueden ser gestionados desde la sección _Configuración &rarr; Medios de pago_. Verás que hay una pestaña de Gateway y otra de Agregador.

### Propios (Modelo Gateway)

Desde aquí podrás gestionar tus propios acuerdos y medios de pago.

![Medios de pago gateway](/images/gateway/payment_methods_gateway.png)

#### Creando un medio de pago

Al presionar el botón _Agregar medio de pago_ verás la siguiente vista:

![Nuevo medio de pago gateway](/images/gateway/payment_methods_gateway_new.png)

Al presionar el botón _Continuar_ verás la siguiente vista:

![Nuevo medio de pago gateway](/images/gateway/payment_methods_gateway_new_2.png)

Aquí deberás seleccionar los números de comercio válidos para el medio de pago que cargaste previamente.

![Nuevo medio de pago gateway](/images/gateway/payment_methods_gateway_new_3.png)

¡Listo! Tu medio de pago ya estará creado

> Por defecto cada medio de pago creado estará disponible en el ambiente de pruebas (Sandbox). Es necesario activarlo posteriormente cuando ya esté todo listo para utilizarlo en producción.

#### Editando un medio de pago

Al presionar sobre un item del listado de medios de pago, se puede ir a la vista de edición. Allí podrás editar los datos que necesites.

#### Eliminando un medio de pago

No es posible eliminar un medio de pago. Sólo desactivarlo.

### De Mercado Pago (Modelo Agregador)

Desde aquí podrás gestionar los medios de pago de Mercado pago

![Medios de pago agregador](/images/gateway/payment_methods_aggregator.png)

### Desactivando un medio de pago

Al presionar sobre un item del listado de medios de pago se puede ir a la vista de edición:

![Edición Medios de pago agregador](/images/gateway/payment_methods_aggregator_edit.png)

Desactivá los acuerdos que no te interesen ofrecer.

> Si querés desactivar un medio de pago entero deseleccioná la lista entera

### ¿Necesitás ayuda?

Comunicate con tu ejecutivo de cuenta.

### Próximos pasos

* [Integrá el Smart Checkout](https://www.mercadopago.com.ar/developers/es/guides/gateway/web-checkout/receiving-payments) en Modelo Gateway
* [Integrá la API](https://www.mercadopago.com.ar/developers/es/guides/gateway/api/receiving-payments) en Modelo Gateway
