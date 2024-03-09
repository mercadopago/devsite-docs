# Realizar compra teste

A etapa de testes permite analisar se a integração foi feita de maneira correta e se os pagamentos estão sendo processados sem erros, evitando que erros apareçam ao disponibilizar o checkout para os compradores finais.

Para realizar uma compra teste é preciso utilizar as **credenciais de teste** do seu **usuário de produção**. Para obtê-las, acesse **Detalhes da aplicação > Credenciais** dentro do [Painel do desenvolvedor](/developers/panel/app) ou em sua conta Mercado Pago, acessando [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

Com as credenciais em mãos, siga os passos abaixo para realizar a compra teste.

1. Inicie a integração configurada com as **credenciais de teste**.
2. Insira qualquer e-mail como usuário pagador (lembrando que deve ser diferente do e-mail que você utiliza no Mercado Pago).
4. Insira os dados de um dos nossos [cartões de teste](/developers/pt/guides/additional-content/your-integrations/test-cards).
3. Confirme a compra.

Pronto! Finalizadas essas etapas a integração terá sido concluída e você já poderá utilizar suas credenciais de produção para utilizar o Checkout Bricks.

> WARNING
>
> Atenção
>
> Não utilize e-mail de usuário de teste no campo de e-mail do Brick (se aplicável).