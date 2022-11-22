# Callback
Após a autorização do pagamento na outra instituição, o usuário será redirecionado para uma **página web do Mercado Pago**, sendo regulatória para este fluxo de pagamento, e logo em seguida direcionado para a url inserida no atributo `callback_url` no momento da criação do pagamento. 

Neste momento, se quiser obter o status atual do pagamento, é necessário realizar uma consulta na API de pagamentos, através do método [Obter Pagamento](/developers/pt/reference/payments/_payments_search/get), usando o  id do pagamento retornado na url.

> NOTE
> 
> Nota
> 
> A url de callback virá com o parâmetro `paymentId` contendo o id do pagamento criado. 

Caso necessite abrir uma aplicação móvel, recomendamos a criação de um [Android App Link](https://developer.android.com/training/app-links) e/ou [Universal Link](https://developer.android.com/training/app-links). Vale lembrar que em Androids com versões anteriores a 12 o usuário tem a possibilidade de escolher onde abrir o App Link como mostra a imagem abaixo:

![Exemplo de Android solicitando onde abrir](/images/api/open-finance(advanced)/callback.png)

Por isso, mesmo se o fluxo for encerrar em um aplicativo móvel, **recomendamos que também crie uma tela web de handover** para ser usada quando o usuário desejar abrir o link no navegador.