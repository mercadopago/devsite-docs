# Shopify  

* [Funcionalidades](#bookmark_Funcionalidades)
* [Configuración](#bookmark_Configuración)

## Funcionalidades

O módulo do Mercado Pago para Shopify esta integrado com as funcionalidades a seguir:

| Funcionalidades                                           | Web Checkout	    | 
|---------------------------------------------------------- |-------------------|
| Pago con tarjeta de crédito                               | ✔                 |
| Otros medios de pago                                      | ✔                 |
| Pago con dos medios de Pago 		                        	| ✔               	|
| Interfaz provista por Mercado Pago                        | ✔                 |
| Calculadora de cuotas                                     | ✔                 |
| IPN y webhooks                                            | ✔                 |
| Descuentos con cupones de Mercado Pago                    | ✔                 |

### Web Checkout

Excelente para los vendedores que quieren empezar a vender rápido y fácil.

* Fácil integración - ninguna línea de código necesaria.
* Control limitado de la experiencia de compra.
* Pago con un click.
* Acepta pagos con ticket, dinero en cuenta de Mercado Pago, tarjeta de crédito y débito.
* Acepta cupones de descuento

## Configuración

<center>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ZLINrH8WB0A" frameborder="0" allowfullscreen=""></iframe>
</center>

1) En su panel de administración de Shopify, vaya al menú **Settings > Payments**.

![Configurar Mercado Pago Shopify](/images/shopify/shopify-config-1.gif)

2) En **Accept credit cards**, seleccione **Mercado Pago**.

3) Llene el **CLIENT ID** e **CLIENT SECRET**. [Obtén tus credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic)

  ![Configurar client id y client secret Mercado Pago Shopify](/images/shopify/shopify-config-2.gif)

4) Haga clic en el botón **Activate** para guardar.

  ![Guardando toda la configuración Mercado Pago Shopify](/images/shopify/shopify-config-3.gif)

5) ¡Listo! **Mercado Pago** fue instalado y configurado.

### Mapeo de estados de pago

El siguiente esquema representa la correlación entre los estados de un pago en Mercado Pago y el estado de la orden en Shopify.

| Mercado Pago status | Shopify order status |
|---------------------|----------------------|
| Approved            | Completed            |
| Pending             | Pending              |
| In process          | Pending              |
| Rejected            | Pending              |
| Cancelled           | Failed               |