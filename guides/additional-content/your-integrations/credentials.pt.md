# Credenciais

As credenciais são senhas exclusivas usadas para identificar uma integração em sua conta. Elas desempenham um papel fundamental na captura segura de pagamentos em lojas virtuais e outras aplicações. Você pode localizá-las em **Detalhes da aplicação > Credenciais** dentro do [Painel do desenvolvedor](/developers/panel/app) ou em sua conta Mercado Pago, acessando [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

> WARNING
>
> Importante
>
> Se você não possui conhecimentos técnicos ou não é um desenvolvedor, recomendamos que você verifique suas credenciais diretamente em sua conta Mercado Pago. E se você estiver recebendo assistência de alguém para configurar as integrações em sua loja, poderá compartilhar suas credenciais com essa pessoa.

Existem dois tipos diferentes de credenciais:

* **Credenciais de teste**: Utilize as credenciais de teste para testar suas integrações. Elas podem ser combinadas com cartões de crédito de teste para simular transações e verificar o funcionamento correto das integrações. Recomenda-se o uso dessas credenciais antes de passar para as credenciais de produção.
* **Credenciais de produção**: Utilize as credenciais de produção para receber pagamentos.

Ambos os tipos de credenciais são compostos por dois pares de chaves que você deve utilizar de acordo com o produto escolhido. Consulte a documentação específica de cada produto para obter detalhes sobre as chaves a serem utilizadas.

| Tipo | Descrição |
| :--- | :--- |
| Public key | A chave pública da aplicação é geralmente usada no frontend. Ela permite, por exemplo, acessar informações sobre os meios de pagamento e criptografar os dados do cartão. |
| Access token | Chave privada da aplicação que sempre deve ser usada no backend para gerar pagamentos. É essencial que essa informação seja mantida segura em seus servidores. |

| Tipo | Descrição |
| :--- | :--- |
| Client ID | O ID de cliente é um identificador único que representa sua integração. |
| Client secret | Chave privada usada em alguns plugins para gerar pagamentos. É extremamente importante manter essa informação segura em seus servidores e não permitir acesso a nenhum usuário do sistema ou invasor. |

> NOTE
>
> Observação
>
>Se necessário, você pode renovar suas credenciais por motivos de segurança ou qualquer outro motivo relevante. Para renová-las, basta clicar em **Mais opções** (três pontos ao final do card) > **Renovar**.

## Compartilhar credenciais

Quando receber assistência na integração ou configuração dos seus canais de pagamento, é possível compartilhar suas credenciais com segurança. Para fazer isso, siga as etapas abaixo:

1. Acesse a sua conta Mercado Pago.
2. Navegue até [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).
3. Dentro dessa página, selecione a opção "Compartilhar minhas credenciais".
4. Insira o e-mail da pessoa para a qual deseja conceder acesso.
5. Certifique-se de que o e-mail esteja associado à conta do Mercado Pago da pessoa em questão.

> WARNING
>
> Importante
>
>É importante lembrar que, assim que a integração estiver concluída, é recomendável remover as permissões de compartilhamento de credenciais para garantir a privacidade e a segurança dos seus dados.
