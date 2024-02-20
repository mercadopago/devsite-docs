# Mantenha suas credenciais seguras 

Ao integrar as soluções do Mercado Pago, você lidará com dados confidenciais que deve proteger de possíveis perdas ou vulnerabilidades. Esses dados podem ser suas credenciais, as de suas integrações e as de seus clientes.

Credenciais são senhas exclusivas com as quais identificamos uma integração em sua conta. Elas são usadas ​​para capturar pagamentos em lojas online e outras aplicações de forma segura. Para obter informações detalhadas sobre as credenciais, acesse [Credenciais](/developers/pt/guides/additional-content/your-integrations/credentials).

Mostraremos como você pode otimizar a segurança de suas integrações de forma simples e rápida.

## Envie o access token por header

Sempre que você fizer chamadas de API, **envie o Access Token via header** em vez de via query param. Isso permitirá que você proteja seu Access Token de ser exposto a qualquer pessoa fora de sua integração.

Por exemplo, se você fizer um GET para o endpoint _/users/me_, ficaria assim:

```curl
curl -H 'Authorization: Bearer APP_USR-12345678-031820-X-12345678' \
https://api.mercadolibre.com/users/me
```
> WARNING 
> 
> Importante
> 
> Sempre mantenha suas credenciais ocultas. Nunca exponha seu Access Token em nenhum parâmetro ou no lado público de sua integração.

## Use a Public Key no front-end

A Public Key é uma chave pública da aplicação que normalmente é utilizada no frontend e permite, por exemplo, conhecer os métodos de pagamento e encriptar os dados do cartão. Lembre-se de usar apenas esse tipo de chave no lado público de sua integração. Para saber mais, acesse [Credenciais](/developers/pt/guides/additional-content/your-integrations/credentials).

# Renove suas credenciais periodicamente

Recomendamos que você renove suas credenciais com frequência para evitar possíveis vulnerabilidades.

Renove suas credenciais de maneira simples seguindo estas etapas:

1. Acesse [Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).
2. Acesse a aplicação cujas credenciais você deseja renovar.
3. Selecione as credenciais de produção.
4. Uma vez lá, você pode renovar o Access Token e o Client Secret. Para fazer isso, clique em **Mais opções > Renovar**.

> WARNING 
> 
> Importante
> 
> Ao renovar suas credenciais de produção, você terá 12 horas durante as quais as credenciais antigas permanecerão ativas. É importante que você renove as credenciais em sua integração dentro desse prazo.

## Compartilhe suas credenciais pelo Painel do desenvolvedor

Se você precisar compartilhar as credenciais da sua aplicação com outras contas do Mercado Pago, faça isso de forma segura por meio de Suas Aplicações.
Ao compartilhar suas credenciais, você permite que outra conta do Mercado Pago as veja e use. Para fazer isso, siga estas etapas:

1. Acesse [Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).
2. Acesse a aplicação cujas credenciais você deseja compartilhar.
3. Clique em **Credenciais de produção** > **Compartilhar minhas credenciais**.
4. Insira os e-mails das contas do Mercado Pago com as quais deseja compartilhar suas credenciais. Tanto as de teste quanto as de produção serão compartilhadas.
5. Por fim, clique em **Compartilhar credenciais**.

Você pode remover essas permissões a qualquer momento no painel de credenciais.

> Assim que a integração for concluída, remova quaisquer permissões de compartilhamento de credenciais que não sejam mais necessárias para garantir privacidade e segurança.
## Utilize o OAuth para gerenciar credenciais de terceiros

OAuth é um protocolo de autorização que permite que aplicativos tenham acesso limitado às informações privadas das contas do Mercado Pago, por meio do protocolo HTTP que introduz uma camada de autenticação e autorização na qual você solicita acesso aos recursos protegidos dos vendedores, por meio de um token de acesso limitado a um determinado aplicativo, sem a necessidade das credenciais dos vendedores através dos fluxos de acesso.

Para saber mais sobre o OAuth, acesse [esta documentação](/developers/pt/guides/additional-content/security/oauth/introduction).