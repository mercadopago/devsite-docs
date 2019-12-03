# Mercado Pago SDK para PHP

Esta libreria provee una set de clases y metodos para interactuar con el API de Mercado Pago.

### Versiones Soportadas:

Nuesto SDK es compatible con las versiones de PHP 5.6 o superior.

### Instalación 

#### Usando Composer

1. Descargar [Composer](https://getcomposer.org/download/) (Si este no se encuentra instalado previamente)
2. Dirigirse al directorio del proyecto y ejecutar `composer require "mercadopago/dx-php:dev-master"` en la linea de comandos.
3. Ahora el directorio deberia verse asi.

![Structure of the Mercado Pago SDK for PHP](https://user-images.githubusercontent.com/864790/34394635-44f7745a-eb39-11e7-981d-77cf759cf05f.png)

4. Esto es todo, ya tienes el SDK de Mercado Pago instalado.

### Inicio Rápido

1. Cargar el archivo autoload.php para cargar las librerias instaladas en tu proyecto.

  ```php
  require __DIR__  . '/vendor/autoload.php';
  ```

2. Configura tus credenciales
  
  Existen 2 tipos de credenciales:

  * **Para el Smart Checkout:**
    ```php
    MercadoPago\SDK::setClientId("ENV_CLIENT_ID");
    MercadoPago\SDK::setClientSecret("ENV_CLIENT_SECRET");
    ```

  * **Para el uso mediante API o checkout personalizado:**
    ```php
    MercadoPago\SDK::setAccessToken("ACCESS_TOKEN");      // On Production
    MercadoPago\SDK::setAccessToken("TEST_ACCESS_TOKEN"); // On Sandbox
    ```

3. Usando los objetos del SDK.

  Puedes interactuar con todos los recursos disponibles en el API Publico, para este fin cada recurso esta representado por clases segun el siguiente diagrama.
  
  ![SDK resource structure of Mercado Pago](https://user-images.githubusercontent.com/864790/34393059-9acad058-eb2e-11e7-9987-494eaf19d109.png)
  
  **Ejemplo**
  
```php
  <?php
  
    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

    $payment = new MercadoPago\Payment();

    $payment->transaction_amount = 141;
    $payment->token = "YOUR_CARD_TOKEN";
    $payment->description = "Ergonomic Silk Shirt";
    $payment->installments = 1;
    $payment->payment_method_id = "visa";
    $payment->payer = array(
      "email" => "larue.nienow@hotmail.com"
    );

    $payment->save();

    echo $payment->status;

  ?>
```

