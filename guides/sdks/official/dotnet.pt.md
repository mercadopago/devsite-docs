
# Mercado Pago SDK para .Net


Esta biblioteca fornece aos desenvolvedores um conjunto simples de ligações para a API do Mercado Pago.

### Versões do .net suportadas:
Nosso SDK é compatível com .NET versão 3.5 ou maior.

## Instalação

### Usando nosso pacote nuget

**Usando Package Manager**

`PM> Install-Package mercadopago-sdk -Version 1.2.0`

**Usando .Net CLI**

`> dotnet add package mercadopago-sdk --version 1.2.0`

**Usando Packet CLI**

`> paket add mercadopago-sdk --version 1.2.0`

## Início Rápido

1) Você deve importar o Mercado Pago SDK.

```csharp
 using MercadoPago;
```

2) Configure suas crecenciais.
-**Para Checkout Mercado Pago:**

```csharp
 MercadoPago.SDK.ClientId = "YOUR_CLIENT_ID";
 MercadoPago.SDK.ClientSecret = "YOUR_CLIENT_SECRET";
```

-**Para o uso com API:**

```csharp
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";
```

> Encontre toda a informação sobre suas credenciais em nossas [perguntas frequentes](https://www.mercadopago.com.br/developers/pt/guides/faqs/credentials/).

3) Usando resource objects
Você pode interagir com todos os recursos disponíveis na API pública para que cada recurso seja representado por classes de acordo com o seguinte diagrama:
![SDK resource structure of Mercado Pago](https://user-images.githubusercontent.com/864790/34393059-9acad058-eb2e-11e7-9987-494eaf19d109.png)

**Exemplo**

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

### Suporte

Escreva-nos:[Formulário de suporte](/support)
