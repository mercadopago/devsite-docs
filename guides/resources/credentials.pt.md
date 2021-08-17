# Credenciais

As credenciais são senhas únicas com as quais identificamos uma integração na sua conta. Servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura. Elas podem ser encontradas no [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/devpanel) ou na sua conta Mercado Pago em [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

> WARNING 
> 
> Importante
> 
> Se você não é desenvolvedor, recomendamos que você verifique suas credenciais na sua conta Mercado Pago. E, se alguém está te ajudando a configurar as integrações da sua loja, você pode compartilhar as suas credenciais.

Existem dois tipos diferentes de credenciais:

* **Credenciais de teste**. As credenciais de teste devem ser usadas para testar suas integrações e podem ser utilizadas em conjunto com cartões de crédito de teste para simular recebimentos via cartão. Elas são recomendadas a serem usadas antes das credenciais de produção de modo a garantir o correto funcionamento das integrações.
* **Credenciais de produção**. As credenciais de produção são usadas para receber pagamentos. Antes de entrar em produção, verifique os [requisitos para entrar em produção](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/go-live-requirements).

Ambos os tipos de credenciais são compostas por dois pares de chaves que você deve utilizar de acordo com o produto escolhido (veja a documentação de cada produto para detalhes de quais chaves utilizar).

<table>
  <tr>
   <td>Public key
   </td>
   <td>Chave pública da aplicação que normalmente será usada no frontend e permitirá, por exemplo, conhecer os meios de pagamento e criptografar os dados do cartão.
   </td>
  </tr>
  <tr>
   <td>Access token
   </td>
   <td>Chave privada da aplicação que sempre será usada no backend para gerar pagamentos. É muito importante que este dado fique protegido em seus servidores e não seja acessível por nenhum usuário do sistema ou invasor.
   </td>
  </tr>
</table>

<table>
  <tr>
   <td>Client ID
   </td>
   <td>ID único que identifica sua integração.
   </td>
  </tr>
  <tr>
   <td>Client secret
   </td>
   <td>Chave privada para ser utilizada em alguns plugins para gerar pagamentos. É muito importante que este dado fique protegido em seus servidores e não seja acessível por nenhum usuário do sistema ou invasor.
   </td>
  </tr>
</table>

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