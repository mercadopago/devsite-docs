# MercadoPago SDK for Java

This library provides developers with a simple set of bindings to the Mercado Pago API.

### Supported Java Versions:

This SDK supports Java version 8 or newer.

## Installation

### Using Maven
1. Append MercadoPago dependencies to pom.xml

  ```xml
    ...
    <dependencies>
        <dependency>
            <groupId> com.mercadopago </groupId>
            <artifactId> dx-java </artifactId>
            <version> 1.2.1 </version>
        </dependency>
    </dependencies>
    ...
  ```
  
2. Run `mvn install` and thats all, you have Mercado Pago SDK installed.

### Compatibility

Our SDK is compatible with Java 6 or grater. Our development team recomends to use Java 8 or newer versions.

## Quick Start

1. Import Mercado Pago basic clases. `import import com.mercadopago.*;`

2. Setup your credentials.
 
    ```java
      MercadoPago.SDK.setAccessToken("ACCESS_TOKEN");
    ```
> NOTE
>
> Note
>
> Encuentra toda la información sobre tus credenciales en nuestras [preguntas frecuentes](https://www.mercadopago.com.ar/developers/es/guides/faqs/credentials/).

3. Using Resource objects.

![SDK resource structure of Mercado Pago](https://user-images.githubusercontent.com/864790/34393059-9acad058-eb2e-11e7-9987-494eaf19d109.png)

**Sample**

```java
  import com.mercadopago.*;
  import com.mercadopago.exceptions.MPConfException;
  import com.mercadopago.exceptions.MPException;
  import com.mercadopago.resources.Payment;
  import com.mercadopago.resources.datastructures.payment.Payer;

  public class Main {

      public static void main(String[] args)throws MPException, MPConfException {

          MercadoPago.SDK.setClientSecret(System.getenv("CLIENT_SECRET_OK"));
          MercadoPago.SDK.setClientId(System.getenv("CLIENT_ID_OK"));

          Payment payment = new Payment()
                  .setTransactionAmount(100f)
                  .setToken("your_cardtoken")
                  .setDescription("description")
                  .setInstallments(1)
                  .setPaymentMethodId("visa")
                  .setPayer(new Payer()
                          .setEmail("dummy_email"));

          payment.save();

          System.out.println(payment.getStatus());

      }
  }
```
