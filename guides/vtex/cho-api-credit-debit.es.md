# Tarjetas de crédito y débito

Al configurar ----[mla, mlu, mlc, mlm, mpe, mco]----Checkout API------------ ----[mlb]----Checkout Transparente------------ en tiendas VTEX, puedes ofrecer pagos con tarjeta de débito y/o crédito. 

Para configurar estos medios de pago, dirígete al panel de administración de tu plataforma VTEX, y accede a **Pagos> Configuración > Planes de pago**. Luego, sigue los pasos a continuación:

1. Haz clic en el botón "+ (Agregar nuevo plan de pago para ...)”.
2. Dentro de las categorías **Tarjeta de débito** o **Tarjeta de crédito**, encontrarás las distintas marcas de tarjeta que puedes ofrecer. Debes hacer clic en ellas y configurar cada una de manera particular para poder habilitarlas. Puedes consultar más información sobre esta configuración en la [sección de tutoriales de VTEX](https://help.vtex.com/es/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros). 
3. Una vez hayas seleccionado la marca de la tarjeta que deseas ofrecer, completa los campos que te mostrará la pantalla siguiente: 
    1. Escribe el **Nombre de la Regla**, que te permitirá identificar este medio de pago.
    2. En **Proceso con la afiliación**, selecciona **MercadoPagoV2**. 
    3. En el campo **Status**, activa la condición de pago utilizando el botón slider. 
    4. Para activar el pago financiado, selecciona la opción **Automático**. Se ofrecerá la financiación previamente configurada en la cuenta de vendedor de Mercado Pago. Dirígete al subtítulo “Plazos e intereses” para saber más. 

> NOTE
>
> Nota
>
> También puedes configurar condiciones especiales de pago. Haz clic [aqui](https://help.vtex.com/es/tutorial/condicoes-especiais--tutorials_456?&utm_source=admin) para obtener más información.

4. Haz clic en **Guardar** para activar la configuración de esa tarjeta y, si lo deseas, repite el proceso para configurar otras marcas.

![Configurar condiciones de pago con tarjeta de crédito](/images/vtex/paymentconditions-cc-imagenv2-es.gif)

## Plazos e intereses

Actualmente, Mercado Pago sólo ofrece la opción de **cuotas sin interés** dentro de la plataforma VTEX. 

Igualmente, tienes la opción de configurar la financiación y los intereses directamente desde la cuenta de vendedor de Mercado Pago. Sigue los pasos a continuación para saber cómo:

1. Haz clic en el botón **Set up installments and interest** e inicia sesión en tu cuenta de vendedor de Mercado Pago.
2. Selecciona la opción **QR y pagos online**, habilita el pago en veces y selecciona la cantidad que deseas ofrecer en el checkout. Las opciones van desde 1 hasta 12 veces.


![Installment and interest](/images/adobe-commerce/parcelamento.gif)

Finalizadas estas etapas, la financiación en el checkout estará configurada y lista para procesar ventas.


> NOTE
>
> Nota
>
> Los cambios en las condiciones de pago pueden demorar hasta 10 minutos en aplicarse.