# Release notes Mercado Pago 2020

Cada release note describe los cambios que aplican a una versión. Estos cambios pueden incluir:

- **Actualizaciones en APIs:** lanzamiento, modificación o eliminación de recursos, parámetros o campos en nuestras APIs.

- **Nuevos productos o funcionalidades:** Lanzamiento de herramientas que harán que puedas aceptar pagos de forma más fácil.

- **Anuncios:** Novedades relacionadas a alguno de nuestros productos o cambios a futuro.

- **Actualizaciones en la documentación:** Guías, referencias y tutoriales para ayudarte a monetizar tu negocio integrando Mercado Pago.



## 3 de abril de 2020

### Actualización de documentación - API

Renovamos la documentación para usar nuestras APIs de pagos. Agregamos un ejemplo básico del formulario en el frontend y sumamos diagramas de funcionamiento para ayudarte a la hora de integrar.

[Ir a documentación de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/api/introduction/)


## 27 de marzo de 2020

Para ayudarte a optimizar tus conciliaciones, implementamos una mejora en la generación de los rangos de fechas para reportes programados. El cambio aplica tanto para el reporte de Dinero retirado, como al reporte de Todas las transacciones. Desde el miércoles 1 de abril, para encontrar tus reportes programados, vas a tener que buscarlos por un segundo menos. 

 Filtros del `search`| Fecha actual | Nueva fecha |
--------- | ------------------------ | ------------------------------- |
begin_date  | 01/01/2020 00:00:00 | 01/01/2020 00:00:00
end_date | 02/01/2020  00:00:00 | 01/01/2020  23:59:59

Tu nuevo parámetro quedaría de la siguiente forma: 
 
```
https://api.mercadolibre.com/account/bank_report/search?access_token={{access_token}}
    &created_from=schedule
    &user_id=290477154
    &begin_date=2020-01-01T00:00:00Z
    &end_date=2020-01-01T23:59:59Z
 
```

> Para más información sobre la programación de reportes, [consulta la documentación](https://www.mercadopago.com.ar/developers/es/guides/reports/general-considerations/reconciliation-reports/).  


## 19 de marzo de 2020

### Nueva versión Prestashop 1.6 & 1.7

Lanzamos una nueva versión de Prestashop 1.6 & 1.7. Disponibilizamos el Checkout de Mercado Pago a través de modal para que tus compradores puedan realizar una compra sin salir de tu sitio.
Consulta en GitHub el detalle de los [últimos cambios productivos](https://github.com/mercadopago/cart-prestashop-7/releases).

[Ir a documentación de Prestashop 1.6 & 1.7](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/prestashop/introduction/)


## 9 de enero de 2020

Si tienes campañas de publicidad para tu negocio, es importante que puedas seguirlas y ver si te están ayudando a concretar ventas. Para poder mejorarlas y que sean cada más eficientes, sumamos la posibilidad de asociar un píxel de Facebook y una etiqueta de seguimiento de conversiones de Google Ads a los pagos de tu Checkout de Mercado Pago.

[Comienza a medir la conversión de tus anuncios](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/configurations/).