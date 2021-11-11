# Procesamiento de pagos
 
Después de realizar la integración y las pruebas, su tienda está lista para entrar en producción.
 
## Activación del modo de producción
 
Para comenzar a recibir pagos, debe activar el modo de producción. Para hacer esto, siga los procedimientos abajo.
 
1. En el Panel Administrativo de su tienda, acceda al menú **Módulos y Servicios**, localiza el plugin Mercado Pago y haga clic en **configure**.
2. En la pantalla de administración del complemento, confirme que las [credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) de producción son las mismas que las de la cuenta que obtienes dinero de las ventas. Esta información se puede ver en su [Dashboard](https://www.mercadopago.com.br/developers/panel).
3. Luego haga clic en **sí** para activar el modo de producción.
 
> NOTA
>
> Importante
>
> Consulte los [requisitos para entrar en producción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/go-live-requirements) si tiene preguntas con el proceso.
 
¡Listo! El módulo Mercado Pago está listo para recibir pagos en línea.
 
## Procesamiento de ventas
 
Con todos los pasos completados, sus clientes podrán realizar compras en su tienda. Al realizar una transacción, es común que algunos mensajes regresen con información específica sobre la compra, ya que cada venta genera un estado de pago que muestra el estado de la venta incluyendo confirmación, pendiente o denegación de pago y otra información importante sobre la transacción.
 
Para más información acceda a la sección [Actividades](https://www.mercadopago[FAKER][URL][DOMINIO]/actividades) de su cuenta de Mercado Pago.
 
![Estado de pago](/images/prestashop/status_es.png)

## Motivos de los rechazos

En cuanto a la **aprobación de pagos** en su tienda, hay tres razones principales que pueden afectar directamente estos resultados. 

A continuación, detallamos los factores que influyen en lo rechazo de un pago:

| Motivo | Situación | Cómo evitarlo |
|---|---|---|
| Comprador | Errores en la cumplimentación de la dirección, CPF o datos de la tarjeta. | Checkout con información clara en el paso a paso de la compra. |
| Rechazos bancarios | Tarjetas con fecha de vencimiento, falta de límite, saldo insuficiente o inhabilitadas para compras online.| Ofrecer alternativas a otros medios y/o condiciones de pago.|
| Prevención del fraude | El sistema antifraude de Mercado Pago protege tu negocio contra ataques maliciosos que pueden generar pérdidas.| Este tipo de rechazo es beneficioso para tu tienda. |

Para obtener más información sobre las razones mencionadas anteriormente, visita estos artículos:

* [Rechazos de pago](https://conteudo.mercadopago.com.br/entenda-como-funcionam-as-recusas-de-aprovacao-de-pagamentos-no-mercado-pago) 
* [Manejar las denegaciones de pago](https://conteudo.mercadopago.com.br/como-lidar-com-as-recusas-de-pagamento-do-cartao-de-credito-no-seu-e-commerce)

> LEFT_BUTTON_RECOMMENDED_ES
>
> Preguntas frecuentes
>
> Consulta las principales dudas sobre la integración.
>
> [Preguntas frecuentes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/prestashop/faq)