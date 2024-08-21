# Requisitos previos

Antes de empezar a desarrollar tu solución, consulta las condiciones que debes cumplir.

| Requisitos | Descripción |
|---|---|
| Aplicación  | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta tu [Tus integraciones](/developers/es/docs/main-apps/additional-content/your-integrations/introduction) para obtener más información sobre cómo crear una aplicación. |
|Credenciales | Contraseñas únicas con las que identificamos una integración en tu cuenta. Para realizar las integraciones, necesitará del **Client ID**. [Haz clic aquí](/developers/es/docs/main-apps/additional-content/your-integrations/credentials) para obtener más información. |
| Point Smart de Mercado Pago | [Mercado Pago Point](/developers/es/docs/mp-point/landing) es la máquina de tarjetas de Mercado Pago que permite a los compradores realizar pagos presenciales de forma rápida y segura mediante tarjetas de crédito o débito.|
| Pre-configuración de dispositivos | Para que los lectores operen de **Modo integrado** y se haga la  pre-configuración, comparte con Mercado Pago la cuenta que se usará para la integración, así como la configuración de cajas, tiendas y números de serie de dispositivos. |
|Kit de Desarrollo | Para empezar el desarrollo, descarga el [Kit de Desarrollo](https://github.com/mercadolibre/point-mainapp-demo-android) que ofrece Mercado Pago. |
|Android Studio | Instala el [ambiente de desarrollo Android](https://developer.android.com/studio) para construir y depurar las main apps. |
|OAuth | OAuth es un protocolo de autorización que permite que las aplicaciones tengan acceso limitado a la información privada de las cuentas de Mercado Pago. Para obtener información de la cuenta de quienes venden, haz el [flujo de OAuth](/developers/es/docs/main-apps/additional-content/security/oauth/introduction). |

## Especificaciones técnicas de Point Smart

Para garantizar que la integración sea exitosa, considera las características del lector [Point Smart](/developers/es/docs/mp-point/landing) y cómo la app se adaptará a ellas.

![prerequisites](/main-apps/prerequisites-all.png)

| Especificación | Descripción |
|---|---|
|Modelo|A910|
|Pantalla| 5'' IPS WXGA 720 x 1280 Pixels <br> Multi-Point Capacitive HD Touch Screen |
|Sistema operativo|Android 6|
|Impresora|Sí <br> 40 Lines/Sec <br> Paper roll outer diameter: 40mm |
|Memoria RAM|1GB|
|Almacenamiento interno|6GB|
|Medios de pago procesados|Chip & PIN <br> NFC Contactless <br> Magnetic Stripe|
|Arquitectura|ARMv7|
|Android System Web View|Paquete: com.android.webview <br> Versión: 52.0.2743.100 <br> Uso: Renderizar las WebViews en apps Android.|