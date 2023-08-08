# Testar sua integração Point

Antes de ir para a produção, recomendamos testar o correto funcionamento da sua integração e do processamento de pagamentos. O seguinte fluxo permitirá que você faça testes para a sua aplicação com o Mercado Pago e a integração com os dispositivos Point.

### Configure a integração

> NOTE
> 
> Nota
>
> Para testar sua integração com dispositivos Point, você deve usar sua conta do Mercado Pago, pois pagamentos com usuários de teste não estão habilitados.

1. Faça login no **site do Mercado Pago** usando suas credenciais de usuário do Mercado Pago.
2. [Crie uma loja e um ponto de venda](/developers/pt/docs/ecosistema-presencial/integration-configuration/create-store-point-of-sale) seguindo as instruções para configurar sua integração. Lembre-se de utilizar suas credenciais do Mercado Pago.

### Configurar seu dispositivo Point

1. Baixe e instale o **aplicativo do Mercado Pago em seu dispositivo móvel**, e faça login com sua conta do Mercado Pago, conforme indicado em [Fazer login em um dispositivo Point](/developers/pt/docs/ecosistema-presencial/integration-configuration/signin-point).
2. Em seguida, [ative o modo PDV em seu dispositivo Point](/developers/pt/docs/ecosistema-presencial/integration-configuration/enable-pdv).

### Teste o processamento de pagamentos

1. Use suas credenciais do Mercado Pago para [criar um intent para o Point](/developers/pt/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/point), seguindo a documentação. Lembre-se de que você não está usando usuários ou cartões de teste, portanto, recomendamos definir o valor do intent como o mínimo disponível.

----[mla]----
2. Se estiver usando um **dispositivo Point Smart**, o dispositivo carregará automaticamente o intent na tela após a criação. Se isso não acontecer, você também pode tocar no botão "Cobrar" que aparece na tela do dispositivo.
 Se estiver usando um **dispositivo Point Plus**, pressione o botão verde para carregar o intent no dispositivo.
------------
----[mlb]----
2. Se estiver usando um **dispositivo Point Smart**, o dispositivo carregará automaticamente o intent na tela após a criação. Se isso não acontecer, você também pode tocar no botão "Cobrar" que aparece na tela do dispositivo.
 Se estiver usando um **dispositivo Point Pro 2**, pressione o botão verde para carregar o intent no dispositivo.
------------
3. Siga as instruções apresentadas pelo dispositivo para concluir o pagamento.
4. Se você usou o campo `print_on_terminal` com o valor `SELLER_TICKET` ao criar o intent, o dispositivo imprimirá o comprovante. Caso contrário, o dispositivo não imprimirá o comprovante ao finalizar o pagamento.

### Verificar o status do intent e suas notificações

1. Siga as instruções sobre como [Consultar o status de um intent para Point](/developers/pt/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/point) para verificar o status final e os resultados do intent. Certifique-se de que o status e os resultados estejam de acordo com o fluxo de pagamento que você utilizou na etapa anterior.
2. Se você configurou notificações Webhook, pode verificar no seu sistema Ponto de Venda (PDV) a recepção de mensagens sobre o status do pedido.

Lembre-se de que você também pode testar o fluxo de [reembolso de um pagamento](/developers/pt/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/point) a partir do seu dispositivo Point para fazer um reembolso, se desejar.

> AVISO
>
> Importante
>
> Uma vez que você tenha finalizado e testado sua integração, e esteja pronto para ir para produção, certifique-se de ativar as [credenciais de produção](/developers/pt/docs/ecosistema-presencial/additional-content/your-integrations/credentials) e substituir as credenciais de teste, se necessário.
