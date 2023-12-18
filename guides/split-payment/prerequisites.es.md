# Requisitos previos

> WARNING
>
> Importante
>
> En caso de que sea necesario realizar configuraciones de comisión (marketplace fee or application fee), contactá a tu **ejecutivo comercial de cartera asesorada**.

| Requisito                        | Descripción                                                                                                                                                                                                                                      |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cuenta de vendedor Mercado Pago   | Para integrar la API de Split de Pagos, necesitas una cuenta de vendedor en Mercado Pago con un nivel de identificación KYC 6. Esto asegura una base sólida de confianza y seguridad en las transacciones. Si no tienes una, puedes [crearla](https://www.mercadopago.com.ar/hub/registration/landing) de manera gratuita. |
| Aplicación Mercado Pago           | Es necesario contar con la aplicación Mercado Pago para gestionar los cobros realizados. Puedes descargar [su versión para dispositivos Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419), o bien para [dispositivos iOS](https://apps.apple.com/ar/app/mercado-pago/id925436649).                                                                       |
| OAuth                            | Los revendedores en el Marketplace deben pasar por el proceso de autorización OAuth para establecer una conexión segura y autenticada. Este procedimiento garantiza la legitimidad de las transacciones comerciales y protege la integridad de las operaciones. Consulta la documentación de OAuth para obtener más información. |
| Integración con Mercado Pago      | El Marketplace debe integrarse a Mercado Pago utilizando los Checkouts (modelo 1:1) o a través de la API de advanced_payments (modelo 1:n).                                                                                                           |
| Credenciales                     | Contraseñas exclusivas utilizadas para identificar una integración en tu cuenta y que permiten la navegación segura y la protección de datos de los usuarios. Consulta la [documentación de Credenciales](https://www.mercadopago.com.ar/developers/es/docs/mp-point/additional-content/your-integrations/credentials) para obtener más información.                     |
| Cuentas de prueba                 | Las cuentas de prueba te permiten realizar testeos en la aplicación para corroborar que todo está funcionando correctamente. Las puedes crear en [Tus Integraciones](https://www.mercadopago.com.ar/developers/panel/app).                                                                              |
