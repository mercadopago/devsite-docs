# Configuración de integración
 
Para integrarte con Mercado Pago, sigue los procedimientos a continuación.
 
1. En el Dashboard de tu tienda Yampi, accede al menú **Checkout**  y haz clic en **Pagamento**
2. En la pantalla de **administración de gateway de pago**, haz clic en el botón **+ Nova afiliação** y selecciona el gateway de Mercado Pago.
3. Luego, indica el **nombre del método de pago** que le aparecerá al comprador, por ejemplo, "Mercado Pago - Pix".
4. Ingrese el texto que **identificará el pago en el extracto de la tarjeta**. Este campo no puede contener espacios ni caracteres especiales.
5. Seleccione **Sim** para indicar que las transacciones se autorizarán y capturarán automáticamente o **Não** para que las transacciones solo se autorizan y capturan más tarde dentro de los 5 días.
6. En la misma página, encontrará los campos `Public key` y `Access token`, que deben completarse con las [credenciales](/developers/es/guides/additional-content/your-integrations/credentials) de **producción** indicada en [Detalles de la aplicación](/developers/es/guides/additional-content/your-integrations/application-details). Si tu cuenta es nueva y las credenciales no han sido activadas previamente, Mercado Pago te pedirá que [crees una nueva aplicación](/developers/es/guides/additional-content/your-integrations/dashboard).
7. Haz clic en **Salvar** para confirmar la información de integración. Para cambiar la información ingresada, en la pantalla de **administración de gateway de pago**, haz clic en **editar** junto a el gateway de Mercado Pago.
8. Una vez realizada la configuración de integración, seleccione los métodos de pago que estarán disponibles para usar con Mercado Pago. Podrá seleccionar todos los que desee y luego editarlos o configurarlos manualmente después de la configuración del complemento. Para obtener más información, consulte la sección [Configuración de pago](/developers/es/docs/yampi/payment-configuration-cho-api).

Una vez realizada la configuración comercial, configura la experiencia de pago de tu tienda con el Checkout Transparente de Mercado Pago.