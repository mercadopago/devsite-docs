# Mercado Pago SDK para PHP

Esta biblioteca fornece um conjunto de classes e métodos para interagir com a API do Mercado Pago.

### Versões do PHP suportadas:

O SDK suporta PHP 5 ou maior

### Instalação 

#### Usando Composer

1. Baixe o [Composer](https://getcomposer.org/download/), se não estiver instalado
2. Vá para o diretório do seu projeto e execute `composer require "mercadopago/dx-php:dev-master"` na linha de comando.
3. Isso é como a sua estrutura de diretório se parece.

![screen shot 2017-12-27 at 7 07 47 pm](https://user-images.githubusercontent.com/864790/34394635-44f7745a-eb39-11e7-981d-77cf759cf05f.png)

4. Isso é tudo, você tem o SDK do Mercado Pago instalado.

### Começo rápido

1. Você precisa importar a biblioteca da sua pasta do fornecedor Composer.

  ```php
  require __DIR__  . '/vendor/autoload.php';
  ```

2. Configure suas credenciais

  Você tem dois tipos de credenciais:

  * **Para Web-checkout:**
    ```php
    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");      // On Production
    MercadoPago\SDK::setAccessToken("ENV_TEST_ACCESS_TOKEN"); // On Sandbox
    ```

  * **Para API o custom checkout:**
    ```php
    MercadoPago\SDK::setClientId("ENV_CLIENT_ID");
    MercadoPago\SDK::setClientSecret("ENV_CLIENT_SECRET");
    ```

3. Usando objetos de recursos.

  Você pode interagir com todos os recursos disponíveis na API pública, para isso cada recurso é representado por classes de acordo com o seguinte diagrama:
  
  ![sdk resource structure](https://user-images.githubusercontent.com/864790/34393059-9acad058-eb2e-11e7-9987-494eaf19d109.png)
  
  **Exemplo**
  
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

