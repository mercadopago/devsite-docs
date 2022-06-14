# Credenciais

As credenciais são senhas únicas com as quais identificamos uma integração na sua conta. Servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura. Elas podem ser encontradas no [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials) ou na sua conta Mercado Pago em [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

> WARNING 
> 
> Importante
> 
> Se você não é desenvolvedor, recomendamos que você verifique suas credenciais na sua conta Mercado Pago. E, se alguém está te ajudando a configurar as integrações da sua loja, você pode compartilhar as suas credenciais.

Existem dois tipos diferentes de credenciais:

* **Credenciais de teste**. As credenciais de teste devem ser usadas para testar suas integrações e podem ser utilizadas em conjunto com cartões de crédito de teste para simular recebimentos via cartão. Elas são recomendadas a serem usadas antes das credenciais de produção de modo a garantir o correto funcionamento das integrações.
* **Credenciais de produção**. As credenciais de produção são usadas para receber pagamentos.

Ambos os tipos de credenciais são compostas por dois pares de chaves que você deve utilizar de acordo com o produto escolhido (veja a documentação de cada produto para detalhes de quais chaves utilizar).

| Tipo | Descrição |
| :--- | :--- |
| Public key | Chave pública da aplicação que normalmente será usada no frontend e permitirá, por exemplo, conhecer os meios de pagamento e criptografar os dados do cartão. |
| Access token | Chave privada da aplicação que sempre será usada no backend para gerar pagamentos. É muito importante que este dado fique protegido em seus servidores e não seja acessível por nenhum usuário do sistema ou invasor. |

| Tipo | Descrição |
| :--- | :--- |
| Client ID | ID único que identifica sua integração. |
| Client secret | Chave privada para ser utilizada em alguns plugins para gerar pagamentos. É muito importante que este dado fique protegido em seus servidores e não seja acessível por nenhum usuário do sistema ou invasor. |

> NOTE
> 
> Observação
>
>Você tem a opção de renovar suas credenciais por motivos de segurança ou quaisquer que sejam. Para renová-las, basta clicar clicar em Mais opções > Renovar.

## Compartilhar credenciais

Compartilhe suas credenciais de forma segura com quem te ajuda a integrar ou configurar seus canais de pagamento. Na sua conta Mercado Pago em [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials), escolha a opção “Compartilhar minhas credenciais” e digite o e-mail da pessoa a quem você deseja dar acesso. Lembre-se de que o e-mail da pessoa deve estar associado ao Mercado Pago.

> WARNING 
> 
> Importante
>
>Assim que a integração estiver completa, exclua as permissões de compartilhamento de credenciais para garantir privacidade e segurança.