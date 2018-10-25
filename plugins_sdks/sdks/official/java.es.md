# MercadoPago SDK para Java

Esta libreria provee una set de clases y metodos para interactuar con el API de Mercado Pago.

## Instalación 

### Usando Maven
1. Agregar la dependencia al archivo pom.xml

  ```xml
    ...
    <dependencies>
        <dependency>
            <groupId> com.mercadopago </groupId>
            <artifactId> dx-java </artifactId>
            <version> [VERSION-dx-java] </version>
        </dependency>
    </dependencies>
    ...
  ```

2. Ejecutar `mvn install` y es todo, ahora tienes el SDK de Mercado Pago instalado.

## Inicio Rápido

1. Importar las clases basicas del SDK `import import com.mercadopago.*;`
2. Configura tus credenciales.
  - **Para Web-checkout:**
    ```java
      MercadoPago.SDK.setClientSecret("CLIENT_SECRET_OK");
      MercadoPago.SDK.setClientId("CLIENT_ID_OK");
    ```
  - **Para el uso via API o Checkout Personalizado:**
    ```java
      MercadoPago.SDK.setAccessToken("ACCESS_TOKEN"); 
    ```
3. Usando las clases del SDK.

![sdk resource structure](https://user-images.githubusercontent.com/864790/34393059-9acad058-eb2e-11e7-9987-494eaf19d109.png)

**Ejemplo**

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
 