---
content_section_with_media: 
 - title: MercadoPago.js V2
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
 - message: Esta versão possui uma funcionalidade que, com base na análise comportamental do comprador, identifica se uma transação é fraudulenta ou suspeita. Essa análise tem como objetivo melhorar a aprovação dos pagamentos. Você pode desabilitar esta funcionalidade caso queira. Veja nossa referência técnica: https://github.com/mercadopago/sdk-js#api
 - image: /sdk/mpjsv2-3.png
---

--- mini_landing_separator ---

>>>> Instalação <<<<

Para instalar o SDK de frontend, você deve incluir o MercadoPago.js no HTML da sua aplicação conforme o código abaixo ou instalar a biblioteca da SDK JS pelo npm.

[[[

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>

```
```bash

npm install @mercadopago/sdk-js;

```
]]]

Em seguida, você deve adicionar a Public key da conta que você está integrando para que ela possa ser identificada ao conectar com o Mercado Pago.

[[[
```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```
]]]

Caso esteja utilizando o **pacote do npm** use o código abaixo.

[[[
```javascript
import { loadMercadoPago } from '@mercadopago/sdk-js';

await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

> Saiba mais sobre a public key em [Credenciais](/developers/pt/docs/credentials).
