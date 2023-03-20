# Configuração de fingerprint

O **Mercado Pago** possui suas próprias ferramentas de prevenção de fraudes. **Device Fingerprint** é um identificador que atua no processamento de um pagamento, tendo como objetivo melhorar a análise do risco de fraude em cada transação. 

Sempre que possível, recomendamos que envie informações sobre o comportamento do cliente para detectar movimentos incomuns e evitar transações fraudulentas. Os dados recebidos são analisados de forma segura e não os compartilhamos com ninguém.

Para configurar o **Device Fingerprint**, siga os passos abaixo.

1. No painel de administração de sua loja, acesse **Checkout > Configurações da Loja**.
2. Clique no ícone **editar**, referente a configuração de seu site.
3. No módulo **Arquivos**, acesse a aba **Código** e clique em **checkout6-custom.js**.
4. Copie e cole o seguinte código e clique em **Salvar**.

```javascript
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
```

![Configuração de fingerprint](/images/vtex/devicefingerprint-imagenv2-pt.gif)