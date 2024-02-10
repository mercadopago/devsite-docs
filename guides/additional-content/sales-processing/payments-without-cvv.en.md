# Card payments without CVV

Esta documentação tem o objetivo de oferecer todas as ferramentas necessárias para realizar a integração da solução de pagamentos sem a necessidade de utilizar CVV (_Card Verification Value_) do cartão para pagamentos recorrentes.

> WARNING
> 
> Atenção
>
> Esta documentação destina-se apenas ao uso interno da equipe porque foi descontinuada ou é um produto exclusivo. Para mais detalhes, entre em contato com a equipe comercial ou de integrações.

Com os pagamentos sem CVV, é possível realizar cobranças recorrentes com o Mercado Pago, tendo a liberdade de adaptar a solução da forma mais ótima para o seu negócio. A pré-aprovação só está disponível por meio do checkout personalizado, ou seja, via utilização do [Checkout Transparente](/developers/pt/docs/checkout-api/landing) ou [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing).

Além disso, o vendedor deve cumprir as seguintes políticas de integração do Mercado Pago:

- O vendedor deve comunicar de maneira clara e inequívoca à sua base de usuários ou clientes que a plataforma de pagamento em seu site é fornecida pelo Mercado Pago, indicando também e os prazos, datas e valores dos pagamentos recorrentes.

- No caso de usuários ou clientes existentes do vendedor estarem sendo migrados para a plataforma de pagamentos recorrentes do Mercado Pago, o vendedor deve comunicar por escrito indicando que o Mercado Pago processará os pagamentos, informando que na fatura verá a cobrança como Mercado Pago ou Mercado Livre.

> No caso de cartões de crédito **Master e Amex**, na fatura do cartão aparecerá como: `MERPAG*&ltbrand_name&gt`. Portanto, para esses meios de pagamento, você pode comunicar: "Na sua fatura, você verá a cobrança como `MERPAG*&ltbrand_name&gt`" onde `&ltbrand_name&gt` é configurado na conta do Mercado Pago do vendedor, acessando [Seu negócio > Configurações > Dados do seu negócio](https://www.mercadopago[FAKER][URL][DOMAIN]/business#from-section=menu).

## Pré-requisitos

| Requisito  | Descrição  |
| --- | --- |
| Aplicação  | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Para operar pagamentos sem CVV, a aplicação deve ser habilitada para esse fim. Essas permissões são atribuídas pelo Mercado Pago, então você deve nos enviar o **ID da aplicação** para realizar a configuração correspondente. <br><br> Veja [Suas integrações](/developers/pt/docs/checkout-api/additional-content/your-integrations/introduction) para mais informações sobre como criar uma aplicação. |
| Processar primeiro pagamento  | Para a primeira transação, sempre será necessário solicitar os dados do cartão e processar o pagamento com o código de segurança. Para isso, siga os passos de nossa integração de [pagamentos com cartão do Checkout Transparente](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform) ou utilizando o [Brick de Card Payment](/developers/pt/docs/checkout-bricks/card-payment-brick/payment-submission).|
| Associar cartão ao cliente | Depois de processar o primeiro pagamento e garantir que o cartão é válido, crie um cliente e associe-o ao cartão utilizado no primeiro pagamento. Para isso, siga os passos indicados na seção de [Gestão de cartões e clientes do Checkout Transparente](/developers/pt/docs/checkout-api/customer-management) ou na seção de [renderização padrão do Brick de Card Payment](/developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering) |

## Cobre os seus clientes de forma recorrente

### Obtenha os dados do cliente

Obtenha os dados do cliente da seguinte forma:

```php
<?php
require_once ('mercadopago.php'); $mp = new MP ("ENV_ACCESS_TOKEN"); 
$filters = array ("email" => "your.payer@email"); 
$customer = $mp->get("/v1/customers/search", $filters);
print_r ($customer);
?>
```

### Obtenha o cartão associado ao cliente

Tendo obtido o ID do cliente, utilize-o para localizar o cartão associado.

```php
<?php
require_once ('mercadopago.php');
$mp = new MP ("ENV_ACCESS_TOKEN");
$cards = $mp->get ("/v1/customers/[CUSTOMER_ID]/cards");
print_r ($cards["response"]);
?>
```

### Gere um token do cartão

Após localizar os dados do cartão associado ao cliente, utilize o snippet abaixo para tokenizar o cartão utilizando o seu ID.

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
> Siga o passo a passo e evite pagamentos fraudulentos com nossas recomendações para [melhorar a aprovação de seus pagamentos.](/developers/pt/docs/checkout-api/how-tos/improve-payment-approval)

### Realize a cobrança

Utilize o token gerado anteriormente para registrar o pagamento, indicando o ID do cliente associado ao cartão.

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

## Visualize notificações sobre os pagamentos

Sempre que um pagamento for processado e houver alguma novidade sobre o processo, o Mercado Pago enviará uma notificação para que você possa atualizar seus sistemas. Acesse a documentação de [notificações Webhooks](/developers/pt/docs/your-integrations/notifications/webhooks) para saber como configurar o recebimento destas notificações.

## Tentativas de pagamento

Se um pagamento sem CVV for rejeitado, recomendamos que você siga uma lógica de tentativas com base no estado da rejeição. Por exemplo, se o pagamento foi rejeitado devido a um cartão vencido, não faz sentido tentar novamente com o mesmo cartão e deverá ser solicitado ao cliente que forneça outro cartão para processar cobranças futuras. 

Caso haja uma rejeição por fundos insuficientes, uma nova tentativa com o mesmo cartão poderá ser feita desde que se resolva a questão do limite para o cartão utilizado.

Em cada caso, é importante comunicar ao seu cliente o resultado do pagamento e fornecer instruções para a próxima etapa. Informaremos um `HTTP Status 201 OK` de que o pagamento foi criado corretamente e enviaremos um código de resultado para que você possa redirecionar o cliente para a página com a mensagem correta.

## Teste a integração

É crucial realizar testes do fluxo completo antes de ir para a produção, verificando se a criação de pagamentos é feita corretamente e se as mensagens são eficazes na comunicação com o usuário. Uma boa experiência para seus clientes no checkout ajuda a melhorar a conversão.

Para mais informações sobre o fluxo de teste, acesse a seção de **Realizar compra teste** no [Checkout Transparente](/developers/pt/docs/checkout-api/integration-test/make-test-purchase) ou no [Checkout Bricks](/developers/pt/docs/checkout-bricks/integration-test/test-payment-flow).