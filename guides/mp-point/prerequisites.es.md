# Requisitos previos

Para ofrecer pagos con Point, es importante cumplir con los requisitos que se muestran a continuación.

| Requisito | Descripción |
| --- | --- |
| Dispositivo Point Mercado Pago | Para ofrecer pagos presenciales a través de Point, es necesario adquirir la máquina. Si aún no lo has hecho, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/point) para comprar. |
| Aplicación Mercado Pago | En conjunto con la máquina, es necesario contar con la aplicación Mercado Pago para gestionar los cobros realizados. Para dispositivos Android, [haga clic aquí](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419) y descárguelo. Para dispositivos iOS, [haga clic aquí](https://apps.apple.com/ar/app/mercado-pago/id925436649) y descárguelo. |
| Credenciales | Las credenciales son claves únicas que le proporcionamos para que pueda configurar sus integraciones. Necesitará un par de credenciales de prueba para probar la integración y un par de credenciales de producción para recibir pagos reales. Consulte [Credentials](/developers/es/docs/mp-point/additional-content/credentials) para obtener más información. |
| Aplicación | Las aplicaciones son las diferentes integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de tener todo organizado y mantener un control que facilite la gestión. Ver [Dashboard](/developers/es/docs/mp-point/additional-content/ tablero/introducción) para obtener más información sobre cómo crear una aplicación. |

> WARNING
>
> Importante
>
> Para las máquinas **Point mini** y **Point blue**, se requiere la aplicación para realizar y administrar los cargos. Para **POS** y **SmartPOS**, solo se necesita la aplicación para iniciar sesión con el código QR. <br/></br>
> <br/></br>
> El modo integrado de API para PDVs solo está disponible para ser manipulado por medio de un operador de la tienda. En caso de implementarse en modo [self-service](/developers/es/docs/mp-point/integration-api/glossary), será de total responsabilidad del comercio ya que los dispositivos no están habilitados para ser usados en este tipo de modelo de negocio.

Si todos se han cumplido los requisitos, siga los pasos a continuación para integrarse con Point.
