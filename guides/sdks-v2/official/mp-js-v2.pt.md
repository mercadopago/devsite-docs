---
content_section_with_media: 
 - title: SDK JS - ES Module
 - message: A versão 2 do SDK client-side tem funções baseadas em Promises e traz uma interface com o desenvolvedor renovada e apresenta melhor tratamento de erros.
 - media_image: /sdk/mpjsv1.png
---

--- mini_landing_separator ---

>>>> Navegadores compatíveis <<<<

![Compatible navigators](sdk/mp-jsv2.png)

---
bullet_section_with_media: 
 - title: Prevenção de fraudes
 - type: normal
 - message: Esta versão possui uma funcionalidade que, com base na análise comportamental do comprador, identifica se uma transação é fraudulenta ou suspeita. Essa análise tem como objetivo melhorar a aprovação dos pagamentos. Você pode desabilitar esta funcionalidade caso queira. Veja nossa [referência técnica](https://github.com/mercadopago/sdk-js#api).
 - image: /sdk/mpjsv2-3.png
---

--- mini_landing_separator ---

>>>> Instalação <<<<

Para instalar o SDK de frontend, inclua o MercadoPago.js no HTML da sua aplicação ou instale o pacote no npm conforme o código abaixo.

[[[
```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
```bash
npm install @mercadopago/sdk-js

```
]]]

Em seguida, adicione a _Public key_ da conta que está sendo integrada para que seja possível identificá-la ao conectar com o Mercado Pago. Saiba mais sobre a _Public key_ em [Credenciais](/developers/pt/docs/checkout-api/additional-content/credentials).

[[[
```html
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>
```
```javascript
import { loadMercadoPago } from "@mercadopago/sdk-js";


await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]
