# Começar o fluxo de pagamento

Existem três formas de começar um fluxo de pagamento, dependendo do callback de resposta a ser utilizado. A função `launchPaymentFlow` permite indicar URLs como callbacks e funções _JavaScript_ nativas para receber uma notificação com o resultado do fluxo de pagamento. Você também pode usá-la para iniciar o fluxo de pagamento com um método de pagamento específico.

Confira os exemplos de cada implementação a seguir.

## Uso básico

Esta é a implementação básica, em que não se configura nenhum callback customizado para notificar o resultado. Nesse caso, é necessário ouvir os eventos globais que notificam o resultado do pagamento para validar o comportamento do aplicativo ao concluir o fluxo. Neste exemplo, o fluxo de pagamento é iniciado com o valor de R$ 20 e sem callback customizado.

```javascript
 launchPaymentFlow(20.0)
```

Neste exemplo, o fluxo é iniciado com o valor de R$ 35, com o cartão de crédito selecionado como forma de pagamento e sem callback customizado.

```javascript
launchPaymentMethod(35.0, "credit")
```

## Iniciar com URL callbacks

Permite indicar uma URL de resposta bem-sucedida quando o fluxo de pagamento foi bem-sucedido e uma URL de resposta de erro para quando ocorreu um problema ou cancelamento. 

Exemplo:

```javascript
launchPaymentFlow(15.50, null,'congrats.html','error.html')
```

No exemplo, o fluxo é lançado com valor de R$ 15,50 e é indicado com um caminho relativo em caso de sucesso (`congrats.html`), e um caminho relativo em caso de erro (`error.html`). O valor `null` indica que nenhum metadado está sendo transmitido como dado adicional.

Observe que esses arquivos de URL devem existir dentro do aplicativo da web para que o callback de resposta funcione corretamente. No caso do exemplo, eles devem estar localizados na raiz do aplicativo.

## Iniciar com funções nativas JavaScript

Permite indicar funções nativas do _JavaScript_ , como callbacks de resposta com o resultado do fluxo de pagamento. Para isso, você deve ter uma função global acessível a partir do componente janela do _JS DOM_. Essas funções devem ser prefixadas com `callback_` para que o sistema saiba que uma função _JavaScript_ está sendo passada para ele como um callback.

```javascript
launchPaymentFlow(15.50, null,
'callback_payment_success', 'callback_payment_error')
```

## Iniciar método de pagamento

Para iniciar o fluxo com um método de pagamento específico, execute a função `launchPaymentMethod`. 

Assim:

```javascript
launchPaymentMethod(amount, paymentMethod
encodeURIComponent({"attr":"123"}), 'congrats.html', 'error.html')
```

Para obter as variantes de métodos de pagamento permitidas, é necessário chamar o comando `getPaymentMethods`.

## Iniciar pagamento com config definido (novo)

Você deve criar uma instância de `PaymentConfigBuilder` a fim de definir uma configuração necessária. Em seguida, use o método `launchPayment` com esta configuração para iniciar o fluxo de pagamento. 

Desta forma:

```javascript
var config = new PaymentConfigBuilder();
config.setAmount(10.0);
config.setPaymentMethod("credit");
config.setMetadata(encodeURIComponent({"attr":"123"});
config.setCallbackSuccess("congrats.html");
config.setCallbackError("error.html");

launchPayment(config);
```

Parâmetros de configuração:

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| setAmount | number | true | 0.01 <= n <  50000 | Define o valor a ser cobrado. | 
| setPaymentMethod | string | true | crédito, débito, qr e link | Indica se o fluxo de cobrança é iniciado diretamente para um meio de pagamento sem passar pelo seletor de meio de pagamento. | 
| setMetadata | string | no | objeto Json como uma string | Informações adicionais em formato JSON com codificação de URL e que serão retornadas no callback quando o fluxo de pagamento for finalizado. | 
| setCallbackSuccess | string | no | paths | Define um callback quando o pagamento for concluído com sucesso. Esse callback pode ser um caminho relativo ou um nome de função. | 
| setCallbackError | string | no | paths | Define um callback quando o pagamento não é concluído por qualquer motivo. Esse callback pode ser um caminho relativo ou um nome de função. | 