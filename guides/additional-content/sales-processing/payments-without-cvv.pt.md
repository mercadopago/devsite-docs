# Pagamentos com cartões sem CVV

Este guia é fornecido com o objetivo de oferecer todas as ferramentas necessárias para realizar a integração da solução. O vendedor deve cumprir as políticas de integração do Mercado Pago:

O vendedor deve comunicar de maneira clara e inequívoca à sua base de usuários ou clientes que a plataforma de pagamento em seu site é fornecida pelo Mercado Pago, e os prazos, datas e valores dos pagamentos recorrentes.
No caso de usuários ou clientes existentes do vendedor estarem sendo migrados para a plataforma de Pagamentos Recorrentes do Mercado Pago, o vendedor deve comunicar por escrito indicando que o Mercado Pago processará os pagamentos, informando que na fatura verá a cobrança como Mercado Pago/Mercado Livre” (*).

Com os pagamentos sem CVV, é possível realizar cobranças recorrentes com o Mercado Pago, tendo a liberdade de adaptar a solução da forma mais ótima para o seu negócio.

A pré-aprovação só está disponível por meio do Checkout Pro personalizado, ou seja, via utilização de nossas [APIs].

> WARNING
> 
> Atenção
>
> Esta documentação destina-se apenas ao uso interno da equipe porque foi descontinuada ou é um produto exclusivo. Para mais detalhes, entre em contato com a equipe comercial ou de integrações.
> <br><br>
> No caso de cartões de crédito Master e Amex, na fatura do cartão aparecerá como: `MERPAG*&ltbrand_name&gt`. Portanto, para esses meios de pagamento, você pode comunicar: "Na sua fatura, você verá a cobrança como `MERPAG*&ltbrand_name&gt`" onde `&ltbrand_name&gt` é configurado na conta do Mercado Pago do vendedor, acessando [Seu negócio > Configurações > Dados do seu negócio](https://www.mercadopago[FAKER][URL][DOMAIN]/business#from-section=menu).

## Pré-requisitos

| Requisito  | Descrição  |
| --- | --- |
| Aplicação  | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Para operar pagamentos sem CVV, a aplicação deve ser habilitada para esse fim. Essas permissões são atribuídas pelo Mercado Pago, então você deve nos enviar o **ID da aplicação** para realizar a configuração correspondente. <br><br> Veja [Suas integrações](/developers/pt/docs/checkout-api/additional-content/your-integrations/introduction) para mais informações sobre como criar uma aplicação. |
| Processar primeiro pagamento  | Para a primeira transação, sempre será necessário solicitar os dados do cartão e processar o pagamento com o código de segurança. Para isso, siga os passos de nossa integração de [pagamentos com cartão do Checkout Transparente](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform) ou utilizando o [Brick de Card Payment](/developers/pt/docs/checkout-bricks/card-payment-brick/payment-submission).|
| Associar cartão à cliente | Depois de processar o primeiro pagamento e garantir que o cartão é válido, crie um cliente e associe-o ao cartão utilizado no primeiro pagamento. Para isso, siga os passos indicados na seção de [Gestão de cartões e clientes do Checkout Transparente](/developers/pt/docs/checkout-api/customer-management) ou na seção [XXX do Brick de Card Payment]() |

## Cobra de forma recurrente a tus clientes

### Obtén el customer guardado

Para conocer los datos de tu cliente, podrás obtenerlo de la siguiente forma:

```php
<?php
require_once ('mercadopago.php'); $mp = new MP ("ENV_ACCESS_TOKEN"); 
$filters = array ("email" => "your.payer@email"); 
$customer = $mp->get("/v1/customers/search", $filters);
print_r ($customer);
?>
```

### Obtené la tarjeta asociada a tu cliente

Una vez hayas obtenido el id de tu cliente, puedes buscar la tarjeta de la siguiente forma:

```php
<?php
require_once ('mercadopago.php');
$mp = new MP ("ENV_ACCESS_TOKEN");
$cards = $mp->get ("/v1/customers/[CUSTOMER_ID]/cards");
print_r ($cards["response"]);
?>
```

### Tokeniza la tarjeta con el card_id

```php
<?php
require_once ('mercadopago.php');
$mp = new MP ("ENV_ACCESS_TOKEN");
$card_token = $mp->post ("/v1/card_tokens", array("json_data" => array("card_id" => "cardId" )));
print_r ($card_token);
?>
```

> NOTE
>
> Importante
>
> Sigue el paso a paso y evita pagos fraudulentos con nuestras recomendaciones para [mejorar la aprobación de tus pagos.](/developers/es/guides/additional-content/how-tos/improve-payment-approval)

### Realizá el cobro:

Al estar usando un token creado con el card_id, deberás realizar el posteo del pago indicando el id del customer asociado a la tarjeta:

```php
<?php
require_once ('mercadopago.php');
$mp = new MP('ENV_ACCESS_TOKEN');
$payment_data = array(
"transaction_amount'" => 100,
"token'" => "ff8080814c11e237014c1ff593b57b4d",
"description'" => "Título",
"installments'" => 1,
"payer'" => array (
"id" => "12345678"
)
);
$payment = $mp->post("/v1/payments", $payment_data);
?>
```

## Escucha notificaciones de los pagos

Cada que vez que se curse un pago y haya una novedad sobre el pago, Mercado Pago te enviará una notificación para que puedas actualizar tus sistemas. Podrás ver el paso a paso en nuestra sección de [notificaciones](/developers/es/docs/your-integrations/notifications/webhooks).

## Reintentos

Si el pago sin cvv es rechazado, te recomendamos que sigas una lógica de reintentos según el estado del rechazo. Por ejemplo, si el pago fue rechazado por tarjeta vencida no tiene sentido que se haga un reintento. Se le deberá solicitar al cliente que informa otra tarjeta para cursar los cobros siguientes. En caso que el rechazo sea por fondos insuficientes, tiene sentido que se haga una lógica de reintentos.

## Prueba tu integración

Es muy importante que antes de salir a producción realices pruebas del flujo completo, verificando que la creación de pagos se realice en forma correcta y que los mensajes sean efectivos a la hora de comunicar al usuario. Una buena experiencia de tus clientes en el _checkout_ ayuda a mejorar la conversión.

Cuentas con un par de [credenciales de teste](/developers/pt/docs/your-integrations/credentials), que te permitián probar toda la integración en una réplica exacta del Modo Producción pudiendo simular transacciones utilizando las tarjetas de prueba. 

Você pode localizá-las em **Detalhes da aplicação > Credenciais** dentro do [Painel do desenvolvedor](/developers/panel/app) ou em sua conta Mercado Pago, acessando [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

Para mais informações sobre o fluxo de teste, acesse a seção de **Realizar compra teste** no [Checkout Transparente](/developers/pt/docs/checkout-api/integration-test/make-test-purchase) ou no [Checkout Bricks](/developers/pt/docs/checkout-bricks/integration-test/test-payment-flow).

En cada caso, debes comunicar a tu cliente el resultado del pago y qué debe hacer como próximo paso.
Para ello te informaremos con un HTTP Status 201 OK que el pago ha sido creado correctamente y enviaremos un código de resultado para que puedas redirigir al cliente a la página con el mensaje correcto.
