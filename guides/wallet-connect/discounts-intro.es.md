# Descuentos

Los descuentos son reducciones aplicadas al precio original de un producto o servicio, generalmente para incentivar una compra u ofrecer alguna condición especial. Este tipo de estrategia puede ser utilizada para pagos realizados a través de Wallet Connect, y en esta documentación encontrarás los pasos necesarios para realizar su integración.

> WARNING
>
> Importante
>
> Previo a ofrecer pagos con descuentos con Wallet Connect, recuerda alinear la campaña de beneficios con tu gerente de cuentas.

La implementación de descuentos a través de Wallet Connect se realiza a partir de la creación de una promesa de descuento, que debe hacerse tras completar la [vinculación de cuentas](/developers/pt/docs/wallet-connect/account-linking-flow/create-agreement) y antes de iniciar el [flujo de pagos](/developers/pt/docs/wallet-connect/payment-flow). Este proceso implica:

## Crear una promesa de descuento

Existen dos opciones para crear una promesa de descuento, adecuadas para diferentes situaciones:

* **Opción 1: [Con cupón pre-añadido](/developers/es/docs/wallet-connect/discounts/create-discount-promise-preadd-coupon)**
    * Esta opción implica realizar una solicitud con un cupón que el usuario ya ha introducido previamente, lo que permite la aplicación de descuentos de forma personalizada y dirigida. Para implementarla, es necesario seguir dos etapas.
        * **[Validar el cupón antes de realizar el pago](/developers/es/docs/wallet-connect/discounts/create-discount-promise-preadd-coupon#bookmark_validar_cupón_antes_de_realizar_el_pago.)** - en esta etapa, deberás verificar la validez del cupón ya introducido por el usuario. Esto incluye comprobar si el cupón está dentro del plazo de validez, si cumple con criterios específicos, como valor mínimo de compra, y si es aplicable a los artículos en el carrito, además de confirmar si existe o no una campaña para él.
        * **[Añadir cupón antes de proceder al pago](/developers/es/docs/wallet-connect/discounts/create-discount-promise-preadd-coupon#bookmark_añadir_cupón_antes_de_proceder_al_pago)** - implica insertar el cupón en el sistema antes de iniciar el proceso de pago. Este paso es responsable de asegurar que el descuento sea considerado sólo en la transacción final. <br><br>

* **Opción 2: [Sin cupón pre-añadido](/developers/es/docs/wallet-connect/discounts/create-discount-promise-without-preadd-coupon)**
    * En este caso, la solicitud se realiza sin la adición de un cupón. En cambio, el descuento se solicita en base a una campaña ya existente. Esto es útil cuando los descuentos se ofrecen como parte de una promoción general, sin la necesidad de un código de cupón específico.

## Procesar pago con descuento

Tras la creación de la promesa de descuento, es necesario procesar el pago. Esto asegura que el descuento se lleve adelante correctamente durante la transacción.

Para comenzar a implementar descuentos a través de Wallet Connect, define el tipo que más se adecúe a tu estrategia de negocio y sigue los pasos descritos en la respectiva sección.