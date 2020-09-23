---
  indexable: false
---

# Configurar Aplicación para procesar pagos Wallet Connect

Para poder procesar pagos en modalidad Wallet Connect se deben cumplir los siguientes pasos.

### Crear una cuenta de Mercado Pago

La cuenta debe crearse desde el sitio de Mercado Pago del país donde se desean recibir pagos.

* Argentina: www.mercadopago.com.ar
* Brasil: www.mercadopago.com.br
* Mexico: www.mercadopago.com.mx

### Crear una aplicación

La aplicación será utilizada para solicitar los permisos de acceso a los payers. La aplicación debe crearse accediendo a `https://www.mercadopago.com/developers/panel/applications` y completando la información solicitada. En el campo `Redirect URI`, se debe ingresar la dirección a la cual los usuarios serán redirigidos cuando se complete el paso de autorización de uso de billetera. Una vez creada la aplicación se obtendrá el valor de `APP_ID`, que será necesario para los siguientes pasos.

### Habilitar su aplicación para que reciba pagos en modalidad Wallet Connect 

Contactar a su ejecutivo de cuenta e informar el `APP_ID` de la aplicación para requerir la habilitación de la modalidad Wallet Connect.