# Fluxo de Pagamento

Para **iniciar o fluxo de  pagamento com configuração definida** você deve criar uma instância de `PaymentConfigBuilder` para definir uma configuração necessária. Em seguida, utilize o método `launchPayment` com essa configuração para iniciar o fluxo de pagamento.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| setAmount | number | true | 0.01 <= n <  50000 | Define o valor a ser cobrado. | 
| setPaymentMethod | string | true | crédito, débito, qr e link | Indica se o fluxo de cobrança é iniciado diretamente para um meio de pagamento sem passar pelo seletor de meio de pagamento. | 
| setMetadata | string | no | objeto Json como uma string | Informações adicionais em formato JSON com codificação de URL e que serão retornadas no callback quando o fluxo de pagamento for finalizado. | 
| setCallbackSuccess | string | no | paths | Define um callback quando o pagamento for concluído com sucesso. Esse callback pode ser um caminho relativo ou um nome de função. | 
| setCallbackError | string | no | paths | Define um callback quando o pagamento não é concluído por qualquer motivo. Esse callback pode ser um caminho relativo ou um nome de função. | 

Exemplo de requisição:

```javascript
var config = new PaymentConfigBuilder();
config.setAmount(10.0);
config.setPaymentMethod("credit");
config.setMetadata(encodeURIComponent({"attr":"123"});
config.setCallbackSuccess("congrats.html");
config.setCallbackError("error.html");

launchPayment(config);
```

## Tratamento de callbacks com resultados de pagamento

Existem três tipos de callbacks que podem ser configurados para capturar o resultado do fluxo de pagamento, dois deles são configurados quando o fluxo de pagamento é lançado, que são **por URL e por funções nativas do _JavaScript_**, e o outro é através de **eventos globais**.

| Parâmetro  | Tipo  | Valores possíveis | Descrição |
| --- | --- | --- | --- |
| payment_type | string | crédito, débito, voucher, qr e link | Indica o tipo de pagamento efetuado. | 
| payment_reference | string | paymentId ou um link de pagamento | Indica uma referência do tipo de pagamento. | 
| payment_creation_date | number | yyyy-MM-dd'T'HH:mm:ss'Z' | Indica a data e hora do pagamento usando o formato ISO INSTANT. | 
| payment_sn_device | number |  - | Indica o número de série do dispositivo. | 
| payment_amount | number | 0.01 <= n <  50000 | Indica o valor total do pagamento. | 
| payment_installments | number | - | Indica o número de parcelas (crédito, débito e voucher), quando aplicado. | 
| payment_brand_name  | string | - | Indica a bandeira do cartão (crédito, débito e voucher), quando aplicado. | 
| error_status | string | canceled e unknown | Indica o tipo de falha que ocorreu durante o processo, podendo ser que o fluxo de caixa foi cancelado ou de que ocorreu um erro desconhecido no fluxo de coleta que não pôde ser determinado. | 
| metadata | string | objeto Json como uma string | As informações adicionais fornecidas pelo MiniApp ao iniciar o fluxo de pagamento.| 

Veja abaixo um exemplo de cada tipo de retorno de chamada personalizado.

### URL de callback

Com uma URL de callback configurada para quando o fluxo de pagamento for bem-sucedido, é possível obter os dados de pagamento da seguinte forma:

```javascript
launchPaymentFlow(15.50, null,'congrats.html','error.html')

let urlQueryString = window.location.search;
let urlParams = new URLSearchParams(urlQueryString);
// Getting payment data successful from url params
let paymentType = urlParams.get('payment_type');
let paymentReference = urlParams.get('payment_reference');
let metadata = urlParams.get('metadata');
	
/**  
* Escreva o código aqui...
**/ 	
```

Com uma URL de callback configurada para quando o fluxo de pagamento falhar, é possível obter os dados de pagamento da seguinte forma:

```javascript
let urlQueryString = window.location.search;
let urlParams = new URLSearchParams(urlQueryString);
// Getting payment data successful from url params
let errorStatus = urlParams.get('error_status');
let metadata = urlParams.get('metadata');
	
/**  
* Escreva o código aqui...
**/ 	
```

### Callbacks de funções nativas do JS

Tendo configurado uma função de callback *JavaScript* ao iniciar o fluxo de checkout, os dados de pagamento podem ser obtidos da seguinte forma.

Exemplo de callback de sucesso:

```javascript
function callback_payment_success(data) {
	let paymentType = data["payment_type"]; 
	let paymentReference = data["payment_reference"]; 
	
	// Seu código aqui...
}
```

Exemplo de callback de erro:

```javascript
function callback_payment_error(data) {
	let errorStatus = data["error_status"]; 
	let metadata = data["metadata"]; 
	
	// Seu código aqui...
}
```

### Eventos globais

Independente do tipo de callback que for configurado ao lançar o fluxo de pagamento, o sistema enviará um evento global em JavaScript quando o fluxo for concluído com sucesso ou quando o fluxo de pagamento falhar. Esses eventos são nomeados `PointPayment.Success` para quando for bem sucedido e `PointPayment.Error` para quando falhou.

Exemplo de implementação com tratamento do evento de pagamento bem-sucedido:

```javascript
window.addEventListener("PointPayment.Success", (event) => {

   let data=event.detail;
   // Getting payment data successful from event data
   let paymentType = data["payment_type"];
   let paymentReference = data["payment_reference"];
   let paymentCreationDate = data["payment_creation_date"];
   let paymentAmount = data["payment_amount"];
   let serialNumberDevice = data["payment_sn_device"];

   let metadata = data['metadata'];

   if(paymentType == "credit" || paymentType == "debit" || paymentType == "voucher"){
       let installments = data["payment_installments"];
       let brandName = data["payment_brand_name"];
   }

   // Seu código aqui...
});
```

Exemplo de implementação com tratamento do evento de falha de pagamento:

```javascript
window.addEventListener("PointPayment.Error", (event) => {
  
	let data=event.detail;
	// Getting payment data error from event data
	let errorStatus = data["error_status"]; 
	let metadata = data['metadata'];
	
	// Seu código aqui...
});
```