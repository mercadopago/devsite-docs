# Obtenha aprovação mais rápida enviando o device fingerprint

O Mercado Pago possui suas próprias ferramentas de prevenção de fraudes. Sempre que possível, recomendamos que envie informações sobre o comportamento do cliente para detectar movimentos incomuns e evitar transações fraudulentas. Não se preocupe, cuidamos dos dados de seus clientes e não os compartilhamos com ninguém.

**Para configurar o device fingerprint**, siga os passos abaixo:

1. No painel de **administração** de sua loja, acesse Checkout do módulo **Configurações da Loja**.
2. Clique no ícone **editar**, referente a configuração de seu site.
3. Acessar a aba **Código** e clique em **checkout5-custom.js** no módulo arquivos.
4. Copiar e colar o seguinte código e clique em **Salvar**.

```javascript
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
```

IMG