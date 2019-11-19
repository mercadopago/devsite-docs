
# Mercado Pago SDK para .Net

Esta librería provee a los desarrolladores un simple set de bindings con la API de Mercado Pago.

### Versiones Soportadas:

Nuesto SDK es compatible con las versiones de .NET 4.5 o superior.

## Instalación

### Utilizando nuestro package nuget

**Utilizando package manager**

`PM> Install-Package mercadopago-sdk -Version 1.2.0`

**Utilizando .Net CLI**

`> dotnet add package mercadopago-sdk --version 1.2.0`

**Utilizando Packet CLI**

`> paket add mercadopago-sdk --version 1.2.0`

## Guía de inicio rápido

1. Importa la SDK de Mercado Pago.

```csharp
 using MercadoPago;
```

2. Configura tus credenciales

-**Para Smart Checkout:**

```csharp
MercadoPago.SDK.ClientId     = "YOUR_CLIENT_ID";
MercadoPago.SDK.ClientSecret = "YOUR_CLIENT_SECRET";
```
-**Para API o custom checkout:**

```csharp
MercadoPago.SDK.AccessToken = "ENV_ACCESS_TOKEN";
```
3. Utiliza los recursos
Puedes interactuar con todos los recursos disponibles en la API pública, cada recurso está representado por las clases en este diagrama:
![SDK resource structure of Mercado Pago](https://user-images.githubusercontent.com/864790/34393059-9acad058-eb2e-11e7-9987-494eaf19d109.png)

**Ejemplo**
```csharp
 using MercadoPago;
 using MercadoPago.Resources;
 using MercadoPago.DataStructures.Payment;
 using MercadoPago.Common;

MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

 Payment payment = new Payment
 {
     TransactionAmount = (float)100.0,
     Token = "YOUR_CARD_TOKEN"
     Description = "Ergonomic Silk Shirt",
     PaymentMethodId = "visa",
     Installments = 1,
     Payer = new Payer {
         Email = "larue.nienow@hotmail.com"
     }
 };

 payment.Save();

 Console.Out.WriteLine(payment.Status);
```

### Soporte

Escríbenos a nuestro [formulario de soporte](/support).
