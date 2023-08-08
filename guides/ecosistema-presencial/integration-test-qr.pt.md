# Teste sua integração QR

Antes de ir para produção, recomendamos testar o funcionamento correto de sua integração e processamento de pagamentos.

O seguinte fluxo permitirá que você faça testes para sua aplicação com o Mercado Pago, incluindo diferentes fluxos e estados de pagamento.

> NOTE
>
> Nota
>
> Os testes de integração são realizados com usuários e métodos de pagamento de teste. Dados e dinheiro reais não são usados. Siga as instruções abaixo para saber como configurá-los.

### Teste de integração

1. Crie um usuário de teste para simular o vendedor (*seller*) seguindo as instruções da [documentação de Testes](/developers/pt/docs/ecosistema-presencial/additional-content/your-integrations/test/accounts).
2. Faça login no **site do Mercado Pago** com as credenciais do usuário de teste que você criou.
3. [Crie uma loja e uma caixa](/developers/pt/docs/ecosistema-presencial/integration-configuration/create-store-point-of-sale) seguindo as instruções para configurar sua integração. Lembre-se de utilizar as credenciais do usuário de teste do vendedor.

### Teste o processamento de pagamentos

1. Utilize as credenciais do usuário de teste do vendedor para [criar um intent para código QR](/developers/pt/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/qr), conforme indicado na documentação.
2. Gere um pagamento levando em consideração:
   * Se você utilizar o **campo `qr_payment_mode` = `STATIC`** ou não definir nenhum qr_payment_mode ao criar o intent, acesse o site do Mercado Pago. Lá, vá para **Seu negócio > Locais e caixas**, e selecione a loja e a caixa associadas. Em seguida, clique no símbolo do QR ao lado do nome da caixa e selecione **Imprimir QR**. Este código QR estará associado ao intent que você criou na etapa anterior.

   * Se você utilizar o **campo `qr_payment_mode` = `DYNAMIC`**, você receberá o campo `qr_data` na resposta com um padrão de QR. Você pode usar ferramentas ou bibliotecas para converter esse padrão em uma imagem de um código QR.

3. Crie um usuário de teste para simular o comprador (*buyer*) seguindo as instruções da [documentação de Testes](/developers/pt/docs/ecosistema-presencial/additional-content/your-integrations/test/accounts).
4. Baixe e instale o **app do Mercado Pago em seu dispositivo móvel**, e faça login com a conta de teste do comprador.
5. Escaneie o código QR que você gerou na etapa anterior usando o app em seu dispositivo móvel, com a conta de teste do comprador. O app mostrará o valor do intent e as opções de pagamento disponíveis.

> NOTE
>
> Nota
>
> Você pode configurar cartões de teste para simular diferentes fluxos de pagamento. Consulte a [documentação de testes](/developers/pt/docs/ecosistema-presencial/additional-content/your-integrations/test/cards) para saber como fazer isso.

### Verificar o status do intent e suas notificações

1. Siga as instruções sobre como [Verificar o status de um intent para código QR](/developers/pt/docs/ecosistema-presencial/payments-processing/create-and-manage-intent/qr) para verificar o status final e os resultados do intent. Certifique-se de que o status e os resultados estejam de acordo com o fluxo de pagamento que você utilizou na etapa anterior.
2. Se você configurou notificações Webhook, você pode verificar no seu sistema Ponto de Venda (PDV) a recepção de mensagens sobre o status do pedido.

> WARNING
>
> Importante
>
> Uma vez que você tenha finalizado e testado sua integração, e esteja pronto para ir para produção, certifique-se de ativar as [credenciais de produção](/developers/pt/docs/ecosistema-presencial/additional-content/your-integrations/credentials) e substituir as credenciais de teste, se necessário.
