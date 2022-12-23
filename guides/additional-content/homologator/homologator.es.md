# Calidad de integración

Con esta herramienta puedes **medir la calidad de tu aplicación**, lo que permitirá identificar puntos de mejora en tu integración para adecuarla a los estándares de Mercado Pago.

----[mla, mlm, mlu, mco, mlc, mpe]---- 
> WARNING
>
> Atención
>
> Por ahora, la herramienta de medición de la calidad de integración solo está disponible para integraciones con [Checkout Pro,](/developers/es/docs/checkout-pro/landing) [Checkout API](/developers/es/docs/checkout-api/landing) y [Checkout Bricks.](/developers/es/docs/checkout-bricks/landing)

------------
----[mlb]---- 
> WARNING
>
> Atención
>
> Por ahora, la herramienta de medición de la calidad de integración solo está disponible para integraciones con [Checkout Pro,](/developers/es/docs/checkout-pro/landing) [Checkout Transparente](/developers/es/docs/checkout-api/landing) y [Checkout Bricks.](/developers/es/docs/checkout-bricks/landing)

------------

Para medir la calidad de tu aplicación, sigue los pasos a continuación.

1. En el [Devsite](/developers/es/docs), accede al menú **Tus integraciones >** [Dashboard](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel).
2. En el área [Tus aplicaciones](/developers/es/guides/additional-content/dashboard/applications) del Dashboard, **haz clic en la aplicación deseada**. Debe ser una aplicación en la que haya un producto a integrar y que este sea uno del que se disponga de la herramienta de medición.
3. Luego haz clic en **Detalles de la puntuación** para acceder a la herramienta donde puedes **medir la calidad de tu aplicación** y ver el puntaje que indica qué tan segura y alineada está la configuración de tu aplicación con las buenas prácticas de integración de Mercado Pago.
4. En la pantalla "Calidad de integración", haz clic en **Evaluar calidad** e ingresa el `payment ID` de un pago realizado con [credenciales](/developers/es/guides/additional-content/credentials/credentials) de producción de la aplicación en cuestión. Siempre que sea posible, mostraremos en el campo el último `payment ID` productivo que identificamos en la aplicación en cuestión.

¡Listo! Se ha realizado la medición de calidad y se mostrará la siguiente información.

![integration-quality](homologator/integration-quality-es.png)

* **Puntuación**: indica qué tan segura es la configuración de tu aplicación y está en línea con las buenas prácticas de integración de Mercado Pago.
* **Payment ID**: `payment ID` en el que se basa el puntaje de calidad de la aplicación.
* **Última actualización**: fecha de la última actualización del puntaje de calidad de la aplicación.
* **Mejora la experiencia de la persona que compra**: acciones necesarias o buenas prácticas que pueden mejorar la experiencia de tus compradores al utilizar Mercado Pago como solución de pago.
* **Conciliación financiera**: acciones necesarias o buenas prácticas que podrían mejorar la consistencia en la verificación de la información financiera.
* **Aumentar la aprobación de pagos**: acciones necesarias o buenas prácticas que pueden aumentar las aprobaciones de pago de la solución de pago integrada en la aplicación.
* **Escalabilidad**: acciones necesarias o buenas prácticas que pueden mejorar la escalabilidad de tu integración; es decir, satisfacer las demandas sin perder las cualidades que aportan valor.
* **Seguridad**: acciones necesarias o buenas prácticas que pueden aumentar la seguridad de tu integración.

> WARNING
>
> Importante
>
> Las acciones indicadas como **necesarias** deben completarse para sumar puntos que mejorarán la calidad de tu integración, mientras que las indicadas como **buenas prácticas** no afectarán la puntuación.

Después de finalizar las acciones indicadas, haz clic en **Actualizar la puntuación** para evaluar nuevamente la calidad y dejar tu aplicación completa para la integración.
