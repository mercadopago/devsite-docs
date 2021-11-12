# Configuração de fingerprint

O **Mercado Pago** possui suas próprias ferramentas de prevenção de fraudes. **Device Fingerprint** é um identificador que atua no processamento de um pagamento, tendo como objetivo melhorar a análise do risco de fraude em cada transação. 

Sempre que possível, recomendamos que envie informações sobre o comportamento do cliente para detectar movimentos incomuns e evitar transações fraudulentas. Não se preocupe, cuidamos dos dados de seus clientes e não os compartilhamos com ninguém.

**Para configurar o device fingerprint**, siga os passos abaixo:

1. No painel de administração de sua loja, acesse **Checkout** del módulo **Configurações da Loja**.
2. Clique no ícone **editar**, referente a configuração de seu site.
3. Acessar a aba **Código** e clique em **checkout6-custom.js** no módulo **Arquivos**.
4. Copiar e colar o seguinte código e clique em **Salvar**.

```javascript
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
```

![Configuração de fingerprint](/images/vtex/devicefingerprint-pt.gif)

> LEFT_BUTTON_RECOMMENDED_PT
>
> Tipos e Métodos de Pagamentos
>
> Conheça os tipos e meios de pagamento.
>
> [Tipos e Métodos de Pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/payment-methods)