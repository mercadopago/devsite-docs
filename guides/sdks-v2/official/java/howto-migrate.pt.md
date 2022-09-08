# Como migrar do SDK Java V1 para SDK Java V2 com Secure Fields

Nesse artigo explicaremos as configurações necessárias para a migração da **utilização de SDK de JavaScript na versão 1** para a **utilização da SDK de JavaScript na Versão 2 com Secure Fields**.

A migração é bastante simples e a ordem de acontecimentos é exatamente a mesma, as diferenças são: 

* Alteramos a forma de instanciar o Mercado Pago; 
* Não utilizaremos mais as funções de callback de cada método, mas sim o retorno deles para trabalhar com os dados;
* Os nomes de alguns métodos também sofreram algumas pequenas alterações e estas ficaram mais claras nos snippets comparativos.

> WARNING
>
> Atenção
>
> A migração não afetará em nada o seu backend, as modificações são inteiramente no frontend da aplicação.

Veja abaixo um comparativo dos diagramas. 

* **Diagrama de sequência V1**

![java-v1](/images/sdk/sdk-java-v1-pt.png)

* **Diagrama de sequência V2**

![java-v2](/images/sdk/sdk-java-v2-pt.png)

## Alteração do import do script

O nome do arquivo JS no CDN foi alterado e será necessário modificar no HTML a importação do script.

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

Como mencionado anteriormente, a instanciação do Mercado Pago também foi alterada.

* **V1**

```javascript
 
   window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
````

* **V2** 

```javascript
 
   const mp = new MercadoPago("YOUR_PUBLIC_KEY"); 
````

## Criando campos PCI

Com o Secure Fields, mudou um pouco a forma de implementação dos campos de `card number`, `expiration date` e `security code`. Com essa nova proposta bem mais segura, não é necessário criar tags inputs em seu HTML desses campos, agora devemos criar apenas as divs onde esses inputs serão renderizados, e deixar que o mercado pago envie iframes para esses campos, segue exemplos:

* **A data de vencimento na V1**

```html
<div>
  <input type="text" placeholder="MM" id="cardExpirationMonth" data-checkout="cardExpirationMonth">
  <span class="date-separator">/</span>
  <input type="text" placeholder="YY" id="cardExpirationYear" data-checkout="cardExpirationYear">
</div>
`````

* **Card number na V1**

```html
<input type="text" id="cardNumber" data-checkout="cardNumber" />
`````

* **Código de segurança na V1**

```html
<input id="securityCode" data-checkout="securityCode" type="text" />
`````

Agora, apenas com as `divs` e os `IDs` correspondentes, ficará da seguinte maneira:

* **A data de vencimento na V2**

```html
<div id="expirationDate"></div>
`````

* **Card number na V2**

```html
<div id="cardNumber"></div>
`````

* **Código de segurança na V2**

```html
<div id="securityCode"> </div>
`````

E além das `divs`, no caso do Secure Fields precisaremos informar aos MP onde ele deverá montar os inputs. Utilizando como exemplo as `divs` indicadas acima, o script ficará assim:

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

Com isso, agora temos os nossos campos PCI seguros dentro do formulário.