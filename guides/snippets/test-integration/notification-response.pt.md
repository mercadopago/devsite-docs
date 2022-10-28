Quando você recebe uma notificação na sua plataforma, o Mercado Pago aguarda uma resposta para validar se você a recebeu corretamente. Para isso, você deve retornar um `HTTP STATUS 200 (OK)` ou `201 (CREATED)`. Caso essa resposta não seja enviada, será entendido que você não recebeu a notificação e uma nova tentativa de envio será realizada até que você envie a resposta.

Na tabela abaixo você encontra os principais eventos, prazos e tempo de espera para o recebimento de novas tentativas de notificação. 

| Evento | Prazo após o primeiro envio | Tempo de espera de confirmação |
| --- | --- | --- |
| Envio | - | 22 segundos |
| Primeira tentativa | 15 minutos | 5 segundos |
| Segunda tentativa | 30 minutos | 5 segundos |
| Terceira tentativa | 6 horas | 5 segundos |
| Quarta tentativa | 48 horas | 5 segundos |
| Quinta tentativa | 96 horas | 5 segundos |