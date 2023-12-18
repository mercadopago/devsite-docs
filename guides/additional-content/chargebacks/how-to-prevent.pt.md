# Como prevenir que um pagamento seja contestado?

Não é possível evitar todas as contestações, porém, você pode diminuir a probabilidade de que um pagamento vire uma contestação seguindo as recomendações a seguir:

1. **Mantenha todos os dados atualizados na sua conta** para que seus compradores te reconheçam.
   
2. Adicione o código de segurança do Mercado Pago na sua página, substituindo o valor de `view` pelo nome da seção na qual deseja adicioná-lo (Ex.: home, search, item).
```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

> WARNING
>
> Atenção
>
> Caso não tenha um valor disponível para seção, você pode deixá-lo vazio.

3. Certifique-se de acrescentar o máximo de detalhes do pagamento e do cliente, como nome, endereço e meio de pagamento na requisição de [criação de pagamento](/developers/pt/reference/payments/_payments/post)
   
4. [Envie o comprovante de compra](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/16170) para o seu cliente via email ou mensagem de texto.

## Alerta de Fraudes

Vamos avisar via notificações IPN ou Webhook toda vez que percebermos atividades irregulares ou houver um alerta de fraude em sua conta. Nessa situação, você deve [cancelar a compra](/developers/pt/guides/additional-content/sales-processing/cancellations-and-refunds) e devolver o dinheiro ao comprador para evitar a contestação.

Configure e ative as notificações [IPN](/developers/panel/ipn) ou [Webhook](/developers/panel/webhooks) no painel para receber alertas de comportamentos irregulares, ativando a opção Alerta de Fraudes (`delivery_cancellation`).

> NOTE
>
> Importante
> 
> Ao cobrar com Point, revise os dados do comprador e solicite algum documento de identificação