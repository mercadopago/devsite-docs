# Credenciais

## O que são minhas credenciais e onde posso encontrá-las?

As credenciais são as Chaves que proporcionamos para que você possa fazer suas integrações.

Suas credenciais são:

| Chave | Descrição|
| --- | --- |
| Public key | Chave pública da aplicação que normalmente será usada no frontend e te permitirá, por exemplo, conhecer os meios de pagamento e criptografar os dados do cartão.|
| Access token | Chave privada da aplicação normalmente será usada no backend para gerar pagamentos. É muito importante que este dado fique protegido em seus servidores e não seja acessível por nenhum usuário do sistema ou invasor. |

Eles estão disponíveis no painel de [Credenciais]([FAKER][CREDENTIALS][URL]) ou na sua conta do Mercado Pago em [Seu negócio > Configurações > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

Recomendamos usar primeiro suas credenciais de teste, ou as de um usuário de teste,  para comprovar que tudo funcione corretamente em Sandbox e logo poderá utilizar as produtivas para começar a receber pagamentos.

## Como compartilhar minhas credenciais?

Compartilhe suas credenciais de forma segura com quem te ajuda a integrar ou configurar seus canais de pagamento.

Em [Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials), escolha a opção “Compartilhar minhas credenciais” e digite o e-mail da pessoa a quem você deseja dar acesso. Lembre-se de que o e-mail da pessoa deve estar cadastrado no Mercado Pago ou no Mercado Livre.

> De suas credenciais compartilhadas, você pode [excluir essa permissões](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials) quando sua integração é completa.

## Solicitar acesso a chaves de outras contas

Você pode solicitar acesso aos dados de outra conta para fazer uma integração com o Mercado Pago quando precisar e ter em mãos todas as informações em seu painel.

Em [Credenciais > Outras credenciais](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials/share), clique em “Solicitar credenciais” y e digite o e-mail da conta para a qual você precisa dos dados. Lembre-se de que o e-mail deve estar cadastrado no Mercado Pago ou no Mercado Livre.

No final das integrações, remova as permissões de acesso para as credenciais que foram compartilhadas para cuidar da segurança dos dados.

## Onde encontro as credenciais compartilhadas?

Encontrar as chaves que compartilharam com você em [Credenciais > Outras credenciais](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials/share).

Você pode ver a lista de contas que lhe deu acesso, aqueles que ainda estão pendentes de aprovação e a opção de excluir as permissões que você não precisa mais.

## Já estou integrado e fiz testes, como implemento em produção?

Para ir a produção, você precisa [ativar suas credenciais]([FAKER][CREDENTIALS][URL]).

> Se eles já estiverem ativos, você não precisa fazer nada.

## Quero atualizar minhas credenciais, como posso renová-las?

Você pode renovar suas chaves em [Credenciais]([FAKER][CREDENTIALS][URL]).

Por motivos de segurança excepcionais, pode ocorrer que as credenciais necessitem de atualização, mas não se preocupe, você pode renová-las sempre que necessário.

Lembre-se que você deve substituir as credenciais que já usava pelas novas em sua integração.