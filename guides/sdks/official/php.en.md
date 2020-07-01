# Mercado Pago SDK for PHP

This library provides developers with a simple set of bindings to the Mercado Pago API.

### Supported PHP Versions:

This SDK supports PHP version 5.6 or newer.

### Installation

#### Using Composer

1) Download [Composer](https://getcomposer.org/download/) if not already installed.

2) Go to your project directory and run `php composer.phar require "mercadopago/dx-php"` on the command line.

3) This how your directory structure would look like.

![Structure of the Mercado Pago SDK for PHP](https://user-images.githubusercontent.com/864790/34394635-44f7745a-eb39-11e7-981d-77cf759cf05f.png)

4) Thats all, you have Mercado Pago SDK installed.

### Quick Start

1) You have to require the library from your Composer vendor folder.

  ```php
  require __DIR__  . '/vendor/autoload.php';
  ```

2) Setup your credentials

    ```php
    MercadoPago\SDK::setAccessToken("ACCESS_TOKEN");      // On Production
    MercadoPago\SDK::setAccessToken("TEST_ACCESS_TOKEN"); // On Sandbox
    ```

> Find all the information about your credentials in our [FAQs](https://www.mercadopago.com.ar/developers/en/guides/faqs/credentials/). 

3) Using resource objects.

  You can interact with all the resources available in the public API, to this each resource is represented by classes according to the following diagram:

  ![SDK resource structure of Mercado Pago](https://user-images.githubusercontent.com/864790/34393059-9acad058-eb2e-11e7-9987-494eaf19d109.png)

  **Sample**

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
