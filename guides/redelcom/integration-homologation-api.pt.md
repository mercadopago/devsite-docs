# Homologar uma integração via API

O processo de homologação de uma integração via API consiste em realizar, durante uma videochamada com nossa equipe, uma série de transações predefinidas. Isso permitirá verificar se os comportamentos estão conforme o desejado e demonstrar determinadas funcionalidades que devem estar presentes no software. 

Se este processo for aprovado, serão fornecidas as credenciais de produção para começar a operar com Redelcom.

A seguir, estão listadas as transações que deverão ser realizadas como parte da homologação. É possível realizá-las com cartões reais e dados fictícios do comprador, pois o ambiente é de teste e não haverá cobranças.

> WARNING
>
> Importante
>
> Tenha em mente que será solicitado mostrar as diferentes telas ou comportamentos do dispositivo. Além disso, é obrigatório ter integrado a [Consulta de uma intenção de pagamento](/developers/pt/docs/redelcom/api-integration/payments-processing/query-payment-intent) através do parâmetro `{rdcTransactionID}`, e armazenar este parâmetro associado a cada transação em seu banco de dados.

1. [Criar uma transação](/developers/pt/docs/redelcom/api-integration/payments-processing/create-payment-intent) a ser paga com **cartão de débito** cujo valor seja **superior a 20.000 CLP**.
2. [Criar uma transação](/developers/pt/docs/redelcom/api-integration/payments-processing/create-payment-inten) a ser paga com **cartão de crédito**, em **duas parcelas ou mais**, e cujo valor seja **superior a 30.000 CLP**.
3. [Criar uma transação](/developers/pt/docs/redelcom/api-integration/payments-processing/create-payment-inten) no **valor exato de 2.222 CLP**. Esta transação retornará um erro configurado no ambiente e em seu aplicativo você deve mostrar o campo `mensaje_visor`, que permitirá informar ao cliente o motivo do erro. O uso de *pop up* para exibir essa mensagem será necessário.
4. [Criar uma transação](/developers/pt/docs/redelcom/api-integration/payments-processing/create-payment-inten) a ser paga com **cartão de débito**, cujo valor seja **inferior a 50 CLP**, e que não deve ser processada se você implementou corretamente a validação que não permite transações de baixos valores. O uso de *pop up* para essa validação também será necessário.
5. **Realizar o pagamento** de uma transação de qualquer valor e **cancelá-la no dispositivo** enquanto está sendo processada. Em seu aplicativo você deve mostrar o campo `mensaje_visor`, que permitirá gerenciar a transação no dispositivo. Será necessário permitir a exibição de *pop up* para mostrar essa mensagem.

Além disso, casos específicos podem requerer etapas adicionais:

* Se você integrou a [Obtenção de dispositivos](/developers/pt/docs/redelcom/api-integration/payments-processing/get-terminal), é possível que seja solicitada uma demonstração. 
* Se estiver usando o **parâmetro `responseCallback`** para receber respostas automáticas de pagamentos realizados, será necessário mostrar que essa notificação chega efetivamente à [URL de resposta](/developers/pt/docs/redelcom/api-integration/payments-processing/create-payment-intent#bookmark_implementa%C3%A7%C3%A3o_da_url_de_resposta). 
* Se estiver utilizando uma **impressora externa**, será necessário mostrar como os comprovantes são impressos. 

Após o término e aprovação do processo de homologação por videochamada, nossa equipe fornecerá suas credenciais de produção por e-mail e você poderá começar a operar com Redelcom.