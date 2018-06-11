# Requisitos para ir a producción

Cuando tengas la aplicación lista y funcionando en modalidad sandbox, y quieras empezar a procesar pagos reales, deberás [completar un proceso de homologación de tu integración](https://www.mercadopago.com/mla/account/credentials) desde la sección de credenciales. Más tarde MercadoPago podrá auditar tu sitio o app, verificando que se cumplan las reglas que se detallan a continuación. Caso contrario, un asesor entrará en contacto contigo para discutir si hay cosas que debes corregir en tu integración.

## ¿Por qué es necesario este proceso?

Porque así, tanto MercadoPago como tú, podemos garantizar entre otras cosas la seguridad de los datos de tus clientes y el adecuamiento a las normas o disposiciones legales de cada país. Además, siguiendo estos consejos, podrás lograr una buena experiencia de compra, que ayude a maximizar la conversión de los pagos que recibas.

El incumplimiento de estas normas puede implicar desde el no procesamiento de pagos, hasta acciones legales de acuerdo a lo establecido en los [términos y condiciones](https://www.mercadopago.com.ar/ayuda/terminos-y-condiciones_299).

## Uso del JavaScript SDK mercadopago.js

Debes importar la librería mercadopago.js en tu sitio, tal como es provista por MercadoPago. No puedes modificarla ni alojarla en tus servidores. Al asegurar esto, podemos realizar todos los controles pertinentes al usuario para mejorar la conversión de los pagos y evitar el fraude.

## Los datos de tarjeta no deben llegar a tus servidores

Al crear un formulario de datos de tarjeta, asegúrate de no incluir el atributo name en los tags input. Esto previene que esos datos lleguen a tu servidor cuando el usuario envíe el formulario. No te preocupes, el SDK mercadopago.js identificará correctamente dichos parámetros mediante el atributo data-checkout y los enviará a los servidores de MercadoPago.
Al no lidiar con datos de tarjetas te ahorras muchos dolores de cabeza y no necesitarás cumplir con las normas PCI-DSS para prevenir la posible vulnerabilidad de los datos. MercadoPago se encarga del cumplimiento de estas normas por tí.

## Certificado SSL

Tratamos de asegurar la mayor fiabilidad y seguridad posibles en las transacciones que tus clientes realicen, como así también, que sus datos no sean robados por terceros. Para esto, es requisito que cuentes con un certificado SSL, y que el formulario de pagos sea servido bajo una página HTTPS.
Durante las pruebas en modo sandbox, puedes operar en HTTP, pero para homologarte, deberás adquirir el certificado en caso de que no lo poseas.

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