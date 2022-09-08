# Como migrar do SDK Java V1 para SDK Java V2 com Secure Fields

Esse documento foi criado para servir de base para realizar a migração da utilização da SDK de JavaScript na Versão 1, para a utilização da SDK de JavaScript na Versão 2 com Secure Fields.

Principais diferenças

Tenha em mente que a migração é bastante simples, a ordem de acontecimentos é exatamente a mesma, as únicas diferenças é a forma de instanciar o mercadopago, e agora não usaremos mais as funções de callback de cada método, e sim o retorno deles para trabalhar com os dados.

O nome de alguns métodos também sofreram algumas pequenas alterações, que ficaram mais claras nos snippets comparativos, ainda neste documento. 

Segue comparativo dos diagramas. 

> WARNING
>
> Atenção
>
> A migração não afetará em nada o seu backend, as modificações são inteiramente no frontend da aplicação.

Diagrama de sequência V1

![java-v1](/images/sdk/sdk-java-v1-pt.png)

Diagrama de sequência V2

![java-v2](/images/sdk/sdk-java-v2-pt.png)

## Alteração do `import` do script

O nome do arquivo JS no CDN houve alteração devemos modificar no HTML, a importação do script

* **V1**

```html
<script 
   src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
`````

* **V2** 

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
`````

## Instância do Mercado Pago

Como mencionado anteriormente, agora a instanciação do Mercado Pago teve alteração.

* **V1**

```javascript
 
   window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
````

* **V2** 

```javascript
 
   const mp = new MercadoPago("YOUR_PUBLIC_KEY"); 
````

## Criando campos PCI

Com o Secure Fields, mudou um pouco a forma de implementação dos campos de card number, expiration date e security code. 
Com essa nova proposta bem mais segura, não é necessário criar tags inputs em seu HTML desses campos, agora devemos criar apenas as divs onde esses inputs serão renderizados, e deixar que o mercado pago envie iframes para esses campos, segue exemplos:

* A data de vencimento na V1

```html
<div>
  <input type="text" placeholder="MM" id="cardExpirationMonth" data-checkout="cardExpirationMonth">
  <span class="date-separator">/</span>
  <input type="text" placeholder="YY" id="cardExpirationYear" data-checkout="cardExpirationYear">
</div>
`````

* Card number na V1

```html
<input type="text" id="cardNumber" data-checkout="cardNumber" />
`````

* Código de segurança na V1

```html
<input id="securityCode" data-checkout="securityCode" type="text" />
`````

Agora, apenas com as `divs` e os `IDs` correspondentes, ficará da seguinte maneira:

* A data de vencimento na V2

```html
<div id="expirationDate"></div>
`````

* Card number na V2

```html
<div id="cardNumber"></div>
`````

* Código de segurança na V2

```html
<div id="securityCode"> </div>
`````

E além das divs, nesse caso do Secure Fields, precisamos informar aos MP onde ele deve montar os inputs, no caso nas divs exemplificadas acima, com isso, o script ficará assim:

```javascript

  const cardNumberElement = mp.fields.create('cardNumber', {
  placeholder: "Número do cartão"
}).mount('cardNumber');

const expirationDateElement = mp.fields.create('expirationDate', {
  placeholder: "MM/YY",
}).mount('expirationDate');

const securityCodeElement = mp.fields.create('securityCode', {
  placeholder: "Código de segurança"
}).mount('securityCode');
````

Com isso agora temos os nossos campos PCI e seguros dentro do formulário.
