# Procesamiento de pagos
 
Después de realizar la integración y las pruebas, tu tienda está lista para entrar en producción.
 
## Activación del modo de producción
 
Para comenzar a recibir pagos, debes activar el modo de producción. Para hacer esto, sigue los procedimientos a continuación.
 
1. En el Panel Administrativo de tu tienda PrestaShop, accede al menú **Módulos y Servicios**, localiza el plugin Mercado Pago y haz clic en **configure**.
2. En la pantalla de administración del plugin, confirma que las [credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) de producción son las mismas que las de la cuenta de la cual que obtienes dinero por las ventas. Esta información se puede ver en tu [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/devpanel).
3. Luego haz clic en **sí** para activar el modo de producción.
 
> NOTE
>
> Importante
>
> Consulta los [requisitos para entrar en producción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/go-live-requirements) si tienes preguntas sobre el proceso.
 
¡Listo! El módulo Mercado Pago está listo para recibir pagos en línea.
 
## Procesamiento de ventas
 
Con todos los pasos completados, tus clientes podrán realizar compras en tu tienda. Al realizar una transacción, es común que algunos mensajes regresen con información específica sobre la compra, ya que cada venta genera un estado de pago que muestra el estado de la venta incluyendo confirmación, pendiente o rechazo de pago y otra información importante sobre la transacción.
 
Para más información accede a la sección [Actividades](https://www.mercadopago[FAKER][URL][DOMINIO]/actividades) de tu cuenta de Mercado Pago.
 
![Estado de pago](/images/prestashop/status_es.png)

## Razones por las que se rechazan los pagos

Respecto a la **aprobación de pagos** en tu tienda, hay tres razones principales que pueden afectar directamente estos resultados. 

A continuación, se detallan los factores que influyen en el rechazo de un pago:

| Motivo | Situación | Cómo evitarlo |
|---|---|---|
| Comprador | Errores en la cumplimentación de la dirección, CPF o datos de la tarjeta. | Checkout con información clara en el paso a paso de la compra. |
| Rechazos bancarios | Tarjetas con fecha de vencimiento, falta de límite, saldo insuficiente o inhabilitadas para compras online.| Ofrecer alternativas a otros medios y/o condiciones de pago.|
| Prevención del fraude | El sistema antifraude de Mercado Pago protege tu negocio contra ataques maliciosos que pueden generar pérdidas.| Este tipo de rechazo es beneficioso para tu tienda. |

Para obtener más información sobre las razones mencionadas anteriormente, visita estos artículos:

* [Rechazos de pago](https://conteudo.mercadopago.com.br/entenda-como-funcionam-as-recusas-de-aprovacao-de-pagamentos-no-mercado-pago) 
* [Manejar las denegaciones de pago](https://conteudo.mercadopago.com.br/como-lidar-com-as-recusas-de-pagamento-do-cartao-de-credito-no-seu-e-commerce)

> NEXT_STEP_CARD_ES
>
> Preguntas frecuentes
>
> Consulta las principales dudas sobre la integración.
>
> [Preguntas frecuentes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/prestashop/faq)