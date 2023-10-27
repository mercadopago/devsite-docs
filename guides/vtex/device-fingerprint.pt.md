# Configurar o Device Fingerprint

O Mercado Pago possui suas próprias ferramentas de prevenção de fraudes, e o Device Fingerprint é uma delas. Trata-se de um identificador único para o dispositivo utilizado pelo comprador ao fazer uma compra. O Device Fingerprint atua no processamento de pagamentos com o objetivo de aprimorar a análise de risco de fraude em cada transação. 

Sempre que possível, recomendamos que você envie informações sobre o comportamento do cliente para detectar movimentos incomuns e evitar transações fraudulentas. Não se preocupe, cuidamos dos dados dos seus clientes e não os compartilhamos com ninguém. 


Para configurar o **Device Fingerprint**, siga os passos abaixo.

1. Acesse o painel de administração da sua loja e selecione **Checkout > Configurações da Loja**.
2. Clique no ícone **editar**, referente à configuração de seu site.
3. No módulo **Arquivos**, acesse a aba **Código** e clique em **checkout6-custom.js**.
4. Em seguida, copie e cole o seguinte código, substituindo o aviso:

```javascript
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
```

5. Clique em **Salvar**.


![Configuração de fingerprint](/images/vtex/devicefingerprint-imagenv2-pt.gif)

Agora você tem o Device Fingerprint configurado para melhorar a avaliação de risco de fraude. 

> NOTE
>
> Nota
>
>  Se você quiser saber mais informações sobre como utilizar o Device Fingerprint para otimizar a aprovação dos seus pagamentos, consulte o documento [Como melhorar a aprovação de pagamentos](/developers/pt/docs/vtex/how-tos/payment-approval) ou verifique a [documentação de suporte da VTEX](https://help.vtex.com/tutorial/configuring-mercado-pagos-device-fingerprint--m2knP9z69HGHHBIiFq0Ga).


