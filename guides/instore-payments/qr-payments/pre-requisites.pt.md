---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global
---


# Requisitos previos para integrarte

## Glosario

Sabemos que algunos términos son nuevos. Antes de empezar, te los dejamos a mano. 

| Término                            | Descripción                                                  |
| -----------------------------------| ------------------------------------------------------------ | 
| Credenciales (Credentials)         | Tus credenciales son las claves que te proporcionamos para que puedas configurar tus integraciones. Para poder encontrarlas, ve a tus [credenciales](https://www.mercadopago.com/mla/account/credentials) y selecciona las **productivas** en la opción Checkout personalizado. |
| `ACCESS_TOKEN` | Es la clave privada de la aplicación para generar pagos, dentro de la sección [credenciales](https://www.mercadopago.com/mla/account/credentials). Debes usarla para identificarte en tus integraciones. Siempre usa las del “Modo Producción”. |
| `COLLECTOR_ID` | Es el id del usuario vendedor en Mercado Pago, son los últimos 9 dígitos del `access_token`, posterior al guión medio. |
| `SPONSOR_ID` | Es el id del usuario proveedor del sistema integrado con Mercado Pago, son los últimos 9 dígitos del `access_token`, posterior al guión medio. El `sponsor_ID` no puede ser igual al `collector_ID`. |
| Sucursal | Es una **tienda física** en la que tus clientes pueden adquirir tus productos o servicios. Puedes tener varias sucursales en una misma cuenta. |
| Caja | Es un **punto de venta** que existe en una sucursal o tienda física. Cada caja tendrá vinculado un código QR unívoco. |
| Orden | Es el pedido realizado por tu cliente. Contiene un listado de productos con su monto asociado.

## Requisitos previos

Para continuar, es necesario realizar el siguiente paso:

**1. Acceso a cuenta de Mercado Pago o Mercado Libre**

Para poder comenzar la integración, es necesario **contar con una cuenta de Mercado Pago o Mercado Libre**. 
Si aún no tienes una, puedes [crear una cuenta de Mercado Pago](https://www.mercadopago.com.ar) cuando quieras.

> NOTE
> 
> Nota
> 
> Si vas a operar en nombre de otros, puedes trabajar con las credenciales de ellos de una forma más fácil y segura por [Marketplace](https://www.mercadopago.com.ar/developers/es/guides/marketplace/api/introduction/).


### Próximos pasos

<div>
<a href="https://www.mercadopago.com.ar/developers/es/guides/instore-payments/qr-payments/stores-pos/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">Sucursales y Cajas<span class="card-status-tag card-status-tag-required">REQUERIDO</span></p>
 <p>Para realizar la integración, primero debes configurar tus sucursales y cajas.</p>
</blockquote>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>