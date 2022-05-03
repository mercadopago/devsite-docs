# Manual de migração: atualizamos as notificações IPN

> Se você está usando as notificações IPN desde 31 de julho, não se preocupe, esta mudança não se aplica a você.  

A versão antiga de notificações IPN não estará mais disponível. Por isso, recomendamos que você confirme se está atualizado para que possa ficar informado e não tenha problemas com seus pagamentos.

#### Sobre a nova versão

Agora, você vai poder se inscrever nos tópicos de pagamentos que te interessam, além de receber os novos eventos em uma URL HTTPS em formato JSON.  

## Quais são os benefícios?

- **Resiliência em novas tentativas.**
- **Melhores auditorias.** Isso nos permite entender o que aconteceu com as notificações.
- **Mais estabilidade.** Oferece uma arquitetura mais moderna e segura. 
- **Somos mais rápidos.** Reduzimos o tempo de notificação para menos de dois segundos.

## O que muda?

Você receberá um objeto no formato JSON com informações básicas sobre o pagamento.
Até agora você recebia "x-www-form-urlencoded", portanto, é necessário adaptar a lógica do seu servidor para processar formato JSON. 

> É importante que, após receber a notificação você responda imediatamente a 200 para evitar o reenvio da notificação antes de 10 segundos

O JSON terá as informações básicas de pagamento. Caso você precise de mais informações, [faça um GET para o ID de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get).  

> É necessário que seu servidor tenha certificados HTTPS.

## Como ativar as notificações IPN?

Da sua conta do Mercado Pago, você pode adicionar notificações IPN.

> Você deve usar a conta em que recebe os pagamentos dos quais deseja ser notificado.

Ao ativá-las, lembre-se: 

- É necessário colocar o endpoint que você preparou para que te enviemos novidades.
- Os tópicos que você verá identificam sobre o que é a notificação. Eles podem ser payment, chargebacks ou merchant_order.

## Quais parâmetros vou receber

Se você configurou o URL da seguite forma: `“https://www.yoursite.com/notifications”`, vai receber:  


```query
"topic=payment&id=1234567"
```

E finalmente ficará assim:

`https://www.yoursite.com/notifications?topic=payment&id=1234567`

Você também receberá um JSON desta forma:

```json
{
	"resource":"https://api.mercadolibre.com/collections/notifications/1234567",

	"topic":"payment"
}
```

> Você pode encontrar mais informações sobre como integrar as notificações na seção Notificações IPN.

## Se eu não quiser notificações IPN, o que posso fazer?

Caso você não queira ou precise de outro tipo de notificação, pode [usar webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications)

> Para usar webhooks, é importante que você selecione a aplicação sobre a qual deseja receber notificações e escolha os tópicos correspondentes.