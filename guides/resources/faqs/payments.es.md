# Medios de pago
---

## Cómo recibir pagos en distintas monedas

----[mlb]----
Por el momento, Mercado Pago permite pagos solamente en moneda local. Es decir, la cuenta creada en Brasil solo acepta pagos en reales (BRL) y de clientes que tengan una cuenta del mismo país.
------------

----[mlm]----
Por el momento, Mercado Pago permite pagos solamente en moneda local. Es decir, la cuenta creada en México solo acepta pagos en pesos mexicanos (MXN) y de clientes que tengan una cuenta del mismo país.
------------

----[mlc]----
Por el momento, Mercado Pago permite pagos solamente en moneda local. Es decir, la cuenta creada en Chile solo acepta pagos en pesos chilenos (CLP) y de clientes que tengan una cuenta del mismo país.
------------

----[mpe]----
Por el momento, Mercado Pago permite pagos solamente en moneda local. Es decir, la cuenta creada en Perú solo acepta pagos en soles (PEN) y de clientes que tengan una cuenta del mismo país.
------------

----[mlu]----
Por el momento, Mercado Pago permite pagos solamente en moneda local. Es decir, la cuenta creada en Uruguay solo acepta pagos en pesos uruguayos (UYU) y de clientes que tengan una cuenta del mismo país.
------------

----[mco]----
Por el momento, Mercado Pago permite pagos solamente en moneda local. Es decir, la cuenta creada en Colombia solo acepta pagos en pesos colombianos (COP) y de clientes que tengan una cuenta del mismo país.
------------

----[mla]----
Por el momento, Mercado Pago permite pagos solamente en moneda local. Es decir, la cuenta creada en Argentina solo acepta pagos en pesos argentinos (ARS) y de clientes que tengan una cuenta del mismo país.
------------

----[mla, mco, mlu, mpe, mlc, mlm]----
## Los medios de pago no aparecen en mi checkout

Mercado Pago cuenta con una validación de montos al momento de ofrecer los medios de pago disponibles.

En el caso de que el monto no cumpla con las condiciones de [montos mínimos y máximos](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/_620) del medio de pago, nuestro checkout solicitará el inicio sesión a la cuenta de Mercado Pago, ya que la única opción disponible para usar será dinero en cuenta. Por esto, tus clientes no podrán pagar como invitados.

Esto genera que, según el monto elegido, puedas visualizar algunos medios de pagos y otros no debido a que no cumple con los requisitos necesarios. Es decir, en base al valor del producto y del mínimo o máximo permitido, se mostrarán los medios de pagos disponibles.
------------

----[mlb]----
## Los medios de pago no aparecen en mi checkout

Mercado Pago cuenta con una validación de montos al momento de ofrecer los medios de pago disponibles.

En el caso de que el monto no cumpla con las condiciones de [montos mínimos y máximos](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/_324) del medio de pago, nuestro checkout solicitará el inicio sesión a la cuenta de Mercado Pago, ya que la única opción disponible para usar será dinero en cuenta. Por esto, tus clientes no podrán pagar como invitados.

Esto genera que, según el monto elegido, puedas visualizar algunos medios de pagos y otros no debido a que no cumple con los requisitos necesarios. Es decir, en base al valor del producto y del mínimo o máximo permitido, se mostrarán los medios de pagos disponibles.

## Cómo generar el mismo ticket nuevamente

Para generar un duplicado del boleto es necesario que uses el [método GET de la API de Payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) enviando el ID del pago y el Access Token del vendedor.

La consulta sería de la siguiente forma:

`https://api.mercadopago.com/v1/payments/PAYMENT_ID`

El retorno de la llamada va a devolver el parámetro `transaction_details` que contendrá el `external_resource_url` con el link del boleto duplicado.

## Quitar boleto como medio de pago

En base al tipo de checkout e integración que estés realizando, el proceso puede ser diferente.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checkout Pro

Es posible remover la opción de boleto a través de la preferencia de pago. Puedes encontrar más detalle en nuestra [documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/configurations#bookmark_atributos_para_la_preferencia).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checkout Transparente

Puedes removerlo directamente desde tu frontend. Obtén los medios de pago y excluye a boleto en la llamada con el parámetro `"payment_type_id" = credit_card` como filtro, por ejemplo.

> Puedes encontrar más detalle en la [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payment_methods/_payment_methods/get).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plugins y soluciones de e-commerce listas para usar

En el caso de que vendas a través de nuestros plugins o soluciones de e-commerces listas para usar, y esa configuración fue disponibilizada por el plugin o plataforma, será necesario verificar la documentación o las configuraciones de medios de pago del panel de la respectiva solución.

## Definir fecha de vencimiento para boleto

Por defecto, la fecha de vencimiento es de 3 días corridos pero puedes [definir la fecha de vencimiento del boleto vía API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways) a través del campo `date_of_expiration`.
------------

## Mejora la aprobación de tus pagos

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Verifica tu integración
Revisa la documentación de la integración que estés implementando y prueba todos los pasos necesarios.
Ten en cuenta el paso de crear los dos usuarios de prueba, vendedor y comprador, para evitar pagos rechazados, ya que no puedes pagar y comprar con la misma cuenta.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valida tu cuenta
Verifica si la identidad de la cuenta vendedor está validada en el panel de Mercado Pago. Ingresa en Mi cuenta > Mis datos > Verificar identidad.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suma nuestro código de seguridad en tu sitio
Es importante que sumes en tu integración toda la información necesaria para [mejorar la aprobación de tus pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/payment-rejections/#bookmark_recomendaciones_para_mejorar_tu_aprobación).

----[mla, mco, mlu, mpe, mlc, mlm]----
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Me rechazaron un pago
Si tienes problemas con un pago, puedes contactarte a través de Ayuda > Cobros > Tengo un problema con un cobro > [Resolver un problema con un cobro](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/charges).
------------

----[mlb]----
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Me rechazaron un pago
Si tienes problemas con un pago, puedes contactarte a través de Ayuda > Cobros > Tengo un problema con un cobro > [Resolver un problema con un cobro](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/charges).
------------

----[mla, mco, mlu, mpe, mlc, mlm]----
> Si sigues necesitando ayuda, te recomendamos que nos contactes a través de [Ayuda](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda).
------------

----[mlb]----
> Si sigues necesitando ayuda, te recomendamos que nos contactes a través de [Ayuda](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda).
------------

