
# Mercado Pago SDK para .Net


Esta biblioteca fornece aos desenvolvedores um conjunto simples de ligações para a API do Mercado Pago.

### Versões do .net suportadas:
3.5 .Net Framework ou maior

## Instalação

### Usando nosso pacote nuget

**Usando Package Manager**

`PM> Install-Package mercadopago-sdk -Version [VERSION-dx-dotnet]`

**Usando .Net CLI**

`> dotnet add package mercadopago-sdk --version [VERSION-dx-dotnet]`

**Usando Packet CLI**

`> paket add mercadopago-sdk --version [VERSION-dx-dotnet]`

## Início Rápido

1. Você deve importar o Mercado Pago SDK.

```csharp
 using MercadoPago;
```

2. Configure suas crecenciais.
-**Para Web-checkout:**

```csharp
 MercadoPago.SDK.ClientId = "YOUR_CLIENT_ID";
 MercadoPago.SDK.ClientSecret = "YOUR_CLIENT_SECRET";
```

-**Para API ou custom checkout:**

```csharp
 MercadoPago.SDK.AccessToken = "YOUR_ACCESS_TOKEN";
```

3. Usando resource objects
Você pode interagir com todos os recursos disponíveis na API pública para que cada recurso seja representado por classes de acordo com o seguinte diagrama:
![sdk resource structure](https://user-images.githubusercontent.com/864790/34393059-9acad058-eb2e-11e7-9987-494eaf19d109.png)

**Exemplo**

```csharp
 using MercadoPago;
 using MercadoPago.Resources;
 using MercadoPago.DataStructures.Payment;
 using MercadoPago.Common;

 MercadoPago.SDK.SetAccessToken = "YOUR_ACCESS_TOKEN";

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

### Suporte

Escreva-nos:[Formulário de suporte](/support)
