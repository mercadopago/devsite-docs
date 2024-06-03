# Homologar uma integração local

O processo de homologação de uma integração local consiste em duas etapas: 
 
1. **Videochamada com equipe:** você deverá realizar uma série de transações predefinidas para verificar se os comportamentos estão conforme o esperado, além de mostrar determinadas funcionalidades que devem estar presentes em seu aplicativo. 
2. **Preenchimento do formulário:** Após a aprovação desse processo, será necessário preencher um formulário para enviar à nossa equipe, que utilizará essa informação para disponibilizar o seu aplicativo.

## 1. Realizar transações e mostrar funcionalidades

A seguir, listamos as transações que deverão ser realizadas como primeiro passo da sua homologação. É possível realizá-las com cartões reais e dados fictícios do comprador, pois o ambiente é de teste e não haverá cobranças.

> WARNING
>
> Importante
>
> Lembre-se de que esta etapa deverá ser realizada durante uma videochamada com nossa equipe, que poderá solicitar a demonstração de diferentes telas ou comportamentos do dispositivo. Além disso, é necessário armazenar os `usertransactionID` ssociados a cada transação em seu banco de dados e integrar obrigatoriamente a [Busca de pagamentos](/developers/pt/docs/redelcom/local-integration/android/payments-processing/payment-query) através deste mesmo parâmetro, pois será solicitada uma demonstração.

1. [Criar uma transação](/developers/pt/docs/redelcom/local-integration/android/payments-processing/create-payment-intent)a ser paga com **cartão de débito** cujo valor seja **superior a 20.000 CLP**.
2. [Criar uma transação](/developers/pt/docs/redelcom/local-integration/android/payments-processing/create-payment-intent) a ser paga com **cartão de crédito**, em **duas parcelas ou mais**, e cujo valor seja **superior a 30.000 CLP**.
3. [Criar uma transação](/developers/pt/docs/redelcom/local-integration/android/payments-processing/create-payment-intent) no **valor exato de 2.222 CLP**. Esta transação retornará um erro configurado no ambiente, e em seu aplicativo você deve mostrar o campo `mensaje_visor`, ue permitirá informar ao cliente o motivo do erro. O uso de *pop up* para exibir essa mensagem será necessário.
4. [Criar uma transação](/developers/pt/docs/redelcom/local-integration/android/payments-processing/create-payment-intent) a ser paga com **cartão de débito**, cujo valor seja **inferior a 50 CLP**, e que não deve ser processada se você implementou corretamente a validação que não permite transações de baixos valores. O uso de *pop up* para essa validação também será necessário.
5. **Realizar o pagamento** de uma transação de qualquer valor e **cancelá-la no dispositivo**nquanto está sendo processada. Em seu aplicativo, você deve mostrar o campo `mensaje_visor`, que permitirá gerenciar a transação no dispositivo. Será necessário permitir a exibição de *pop up* para mostrar essa mensagem.

Além disso, casos específicos podem requerer etapas adicionais:

* Se você utiliza **opções de multiserviços** (recarga de crédito, pagamento de contas ou serviços de telecomunicações), pode ser solicitado que realize novas operações.
* Se você utiliza uma **impressora externa**, será necessário mostrar como oscomprovantes são impressos.
* Se você utiliza **o infravermelho e a câmera do dispositivo**, será necessário mostrar a operação na qual eles são necessários.


## 2. Preencher o formulário

Após concluir e receber a aprovação do processo de homologação por videochamada, nossa equipe fornecerá um formulário que deverá ser preenchido considerando os dados e particularidades de sua aplicação.

Siga as descrições abaixo para preenchê-lo:

 * **App Icon:** refere-se ao ícone de seu aplicativo. Deve ter um tamanho recomendado de 512x512 pixels, no formato PNG.
 * **App Name:**  refere-se ao nome de seu aplicativo na loja PAX. Aceita o número máximo de 60 caracteres.
 * **Business Category:** refere-se à categoria do negócio integrado por meio do aplicativo. Selecionar a categoria de acordo com o quadro abaixo. É possível escolher mais de uma opção.

 ![opções de Business Category](/images/Redelcom/rdc-business-category.png)

 * **Short Description:** é uma descrição breve sobre o aplicativo, com no máximo 120 caracteres.
 * **Description:** é uma descrição mais elaborada sobre o aplicativo, na qual deve mencionar os processos do mesmo, como pagamentos ou menu. Aceita o número máximo de 5000 caracteres.
 * **Screenshots:** é necessário enviar capturas de tela do aplicativo em alguns de seus processos de pagamento ou menu. Deve haver pelo menos 3 capturas com um tamanho recomendado de 720x1280 e no formato PNG.
 * **Featured Image:** esta imagem deve ter um tamanho recomendado de 320x280 pixels no formato PNG.
 * **Package Name:** nome do pacote pelo qual o aplicativo será identificado. Deve ter relação com o aplicativo ou empresa.
 * **Send login:** refere-se a uma captura de tela do módulo de login antes de acessar o aplicativo.
 * **APK:** você deverá enviar o APK do aplicativo, exportado no modo *release*.


> WARNING
>
> Importante
>
> O aplicativo integrado com Redelcom **não deve utilizar** as permissões MAGCARD, ICC, PICC, PED, pois podem comprometer a segurança da integração. 

Após a conclusão, envie o formulário para o mesmo e-mail pelo qual o foi recebido. Se as informações estiverem corretas, a permissão para entrar em produção com a integração Redelcom será concedida em breve.