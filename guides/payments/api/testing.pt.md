# Teste a Integração

Antes de partir para a produção, é muito importante que realize testes do fluxo completo, verificando se a criação dos pagamentos é realizada corretamente e se as mensagens são eficientes na comunicação com o usuário.

Proporcionar uma boa experiência aos seus clientes no checkout ajuda a garantir a conversão.

Você conta com um par de [credenciais do sandbox](https://www.mercadopago.com.ar/account/credentials?type=custom), que permitem testar toda a integração em uma réplica exata do Modo de Produção, podendo simular transações utilizando cartões de teste:

| País       | Visa                | Mastercard          | American Express  |
| ---------- | ------------------- | ------------------- | ----------------- |
| Argentina  | 4509 9535 6623 3704 | 5031 7557 3453 0604 | 3711 803032 57522 |
| Brasil     | 4235 6477 2802 5682 | 5031 4332 1540 6351 | 3753 651535 56885 |
| Chile      | 4168 8188 4444 7115 | 5416 7526 0258 2580 | 3757 781744 61804 |
| Colômbia   | 4013 5406 8274 6260 | 5254 1336 7440 3564 | 3743 781877 55283 |
| México     | 4075 5957 1648 3764 | 5474 9254 3267 0366 | indisponível      |
| Peru       | 4009 1753 3280 6176 | indisponível        | indisponível      |
| Uruguay  	 | 4157 2381 1584 6486 | 5161 4413 1585 2061 | indisponível      |
| Venezuela  | 4966 3823 3110 9310 | 5177 0761 6430 0010 | indisponível      |



## Capture os dados do cartão

Com sua `public_key` você pode obter os dados do cartão de crédito inseridos no formulário. Certifique-se de inserir corretamente o método de pagamento disponível para o número do cartão inserido e o número de parcelas com o parcelamento correspondente.

Verifique se o `card_token` gerado ao enviar o formulário contém alguma informação, verificando, por exemplo, se o atributo first_six_digits contém algum valor.

Caso algum dado inserido esteja incorreto, exibiremos um código de erro especificando qual dado deve ser corrigido.

## Receba um pagamento

Com seu `access_token` e `card_token` obtidos, você pode fazer um teste para criar um pagamento.

Se, ao criar o pagamento, obtiver algum erro relacionado ao método de pagamento selecionado ou as contas em funcionamento, você será informado com um HTTP Status 400 Bad Request e o código detalhando o erro para que faça a correção e tente criar o pagamento novamente.

Testar todos os cenários possíveis de pagamento aprovado, pendente ou recusado. Para isso, no campo `card_holder_name` do formulário insira qualquer um dos prefixos a seguir:

    * **APRO**: Pagamento aprovado.  
    * **CONT**: Pagamento pendente.
    * **CALL**: Recusado, ligar para autorizar.  
    * **FUND**: Recusado por saldo insuficiente.  
    * **SECU**: ecusado por código de segurança.  
    * **EXPI**: Recusado por data de validade.
    * **FORM**: Recusado por erro no formulário  
    * **OTHE**: Recusado geral.

Em cada caso, deverá informar ao seu cliente o resultado do pagamento e qual o próximo passo a seguir. Para isso, você receberá um HTTP Status 201 OK informando que o pagamento foi criado corretamente e um código de resultado para que possa redirecionar o cliente para a página com a mensagem correta.

## Verifica haber recibido la notificación Webhook

Mercado Pago te enviará una notificación del evento ocurrido. Valida que la hayas recibido correctamente e impactado en forma correcta en tu sistema de gestión.

### Efectúa la anulación del pago

Realiza la devolución de un pago aprobado o la cancelación de un pago pendiente y verifica que te llegue la notificación con la novedad correspondiente al recurso.


## Prueba la creación de un cliente

Verifica que se haya creado el `customer` con la tarjeta asociada y que sus datos de tarjeta sean recuperados en forma correcta cuando cargues nuevamente el checkout.
