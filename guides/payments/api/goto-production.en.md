# Requirements for production environment

When you have your application ready and working in sandbox mode, and you want to start processing real payments, you shall [complete your integration's homologation from the credentials section](https://www.mercadopago.com/mla/account/credentials). Later, MercadoPago may audit your site or app, verifying that the rules listed below are met. Otherwise, a consultant will contact you to discuss if you need to correct something in your integration.

## Why is this process needed?

PBecause in that way, both MercadoPago and you can guarantee, besides other things, your customers' data security and the accomplishment of standards or legal dispositions in each country. Also, following these advices, you can get a good purchasing experience, which helps to maximize your received payments conversion.

Non-compliance of these rules may involve from no payment processing to legal actions according to the established on the [terms and conditions](https://www.mercadopago.com.ar/ayuda/terminos-y-condiciones_299).

## Use of the SDK provided by MercadoPago

You've to use the official MercadoPago SDK in your site or application. You cannot modify it or host it in your servers. With this ensured, we can do all controls related to the user in order to improve payments conversion and avoid fraud.

## Credit card data cannot reach your servers

When creating a credit card data form, be sure that you don't include the name attribute in input tags. This prevents this data from reaching your server when the user submits the form. Don't worry, the SDK will identify the required parameters through the data-checkout attribute and will send them to MercadoPago servers.
By not dealing with card data you may save yourself a lot of headaches and don't need to accomplish the PCI-DSS standards to prevent possible data vulnerability. MercadoPago deals with the accomplishment of these rules for you.

## SSL certificate

We try to ensure your customers the highest flexibility and security in their transactions, as well as keep their data protected from being stolen by third parties. That's why it is a requirement that you have a SSL certificate, and the payment form to be provided under an HTTPS page.
During the sandbox mode tests, you can operate over HTTP, but for homologation you'll need to acquire the certificate in case you don't have it.

## Promociones y financiación

Si ofreces pagos con tarjeta de crédito en múltiples cuotas, debes aclarar que las promociones son ofrecidas por MercadoPago. [Puedes incluir uno de nuestros banners de medios de pago](https://www.mercadopago.com/mla/com.mercadopago.web.landing.LandingController?id=banners), o bien [linkear a la sección de promociones](https://www.mercadopago.com/mla/credit_card_promos.htm).
También debes informar los intereses que afrontarán tus usuarios, linkeando a la [sección de costos de financiación de MercadoPago](https://www.mercadopago.com.ar/ayuda/costos-financiacion_621).

> NOTE
>
> Nota
>
> Debido a la Resolución [E 51/2017](https://www.boletinoficial.gob.ar/#!DetalleNormaBusquedaRapida/158269/20170125/resolucion%2051) de la Secretaría de Comercio Argentina, sobre precios transparentes, es necesario que cumplas con ciertas [exigencias adicionales](https://www.mercadopago.com.ar/developers/es/related/resolucion-e-512017/).

## Comunicación de estados

Debes ofrecer la mejor comunicación posible al usuario respecto de los estados que puede tomar el pago, como así también los posibles errores en el ingreso de datos de tarjeta. Esto te permitirá mejorar la conversión de tu checkout, a la vez que le ofreces a tu cliente información clara y precisa acerca de qué hace falta o qué debe corregir para finalizar el proceso de pago.

Para esto, [consulta los posibles códigos de error de la API](https://www.mercadopago.com.ar/developers/es/guides/payments/api/handling-responses/), junto con la comunicación que sugerimos que implementes en cada caso.

Además, cuando un pago con tarjeta de crédito resulte aprobado, deberás mostrar en pantalla, como así también en un posible e-mail de pago acreditado, cómo podrá identificar el usuario el cargo en su resumen de tarjeta. Simplemente muestra el valor del atributo statement_descriptor de la respuesta del pago. Así, habrá muchas menos chances de que se inicien contracargos, por el desconocimiento del cargo del usuario al ver su resumen.

Si permites hacer devoluciones de pagos, aclara que sólo pueden ser hechas hasta 90 días luego de su acreditación.

## Términos y condiciones

Debes disponer de una política de términos y condiciones, en la cual especifiques que te responsabilizas por todos los datos que sean ingresados en tu sitio.