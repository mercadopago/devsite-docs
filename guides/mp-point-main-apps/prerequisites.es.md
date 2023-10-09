# Requisitos previos

Antes de empezar a desarrollar tu solución, consulta las condiciones que debes cumplir.

| Requisitos | Descripción |
|---|---|
| Pre-configuración de dispositivos | Para que los lectores operen de **Modo integrado** y se haga la  pre-configuración, comparte con Mercado Pago la cuenta que se usará para la integración, así como la configuración de cajas, tiendas y números de serie de dispositivos. |
|Kit de Desarrollo | Para empezar el desarrollo, descarga el [Kit de Desarrollo](https://drive.google.com/drive/folders/1Mglpa2c3FmYs4L9iskczagBMPGjHCMbY?usp=share_link) que ofrece Mercado Pago. |
|Android Studio | Instala el [ambiente de desarrollo Android](https://developer.android.com/studio) para construir y depurar las main apps. |
|App en Panel de Desarrolladores | Crea una app en el [panel de desarrolladores](/developers/panel/app) con la cuenta de integrador. Luego, genera el `ClientId` que servirá como identificador de la integración. Consulte más información sobre cómo crear una aplicación en [Detalles de la aplicación](/developers/es/docs/main-apps/additional-content/your-integrations/application-details). |
|Flujo de OAuth | Para obtener información de la cuenta de quienes venden, haz el [flujo de OAuth](/developers/es/docs/main-apps/additional-content/security/oauth/introduction). |

## Especificaciones técnicas de Point Smart

Para garantizar que la integración sea exitosa, considera las características del lector y cómo la app se adaptará a ellas.

<center>

![prerequisites](/main-apps/prerequisites-all.png)

</center>

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