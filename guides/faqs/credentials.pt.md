---
sites_supported:
  - mla
  - mlb
  - global
---

# Credenciais
---

## O que são minhas credenciais e onde posso encontrá-las?

As credenciais são as Chaves que proporcionamos para que você possa fazer suas integrações. 

Suas credenciais são:

| Chave | Descrição|
| --- | --- |
| Public key | Chave pública da aplicação que normalmente será usada no frontend e te permitirá, por exemplo, conhecer os meios de pagamento e criptografar os dados do cartão.|
| Access token | Chave privada da aplicação normalmente será usada no backend para gerar pagamentos. É muito importante que este dado fique protegido em seus servidores e não seja acessível por nenhum usuário do sistema ou invasor. |

Elas estão disponíveis na sua conta do Mercado Pago, na [seção "Credenciais"]([FAKER][CREDENTIALS][URL]).
Recomendamos usar primeiro suas credenciais de teste para comprovar que tudo funcione corretamente em Sandbox e logo poderá utilizar as produtivas para começar a receber pagamentos.

## Já estou integrado e fiz testes. Como implemento em produção?

Para ir a produção, você deve preencher o formulário "Quero ir a produção" que se encontra na [seção "Credenciais"]([FAKER][CREDENTIALS][URL]).

O formulário é necessário para fazer transações com dinheiro real.

Lembre-se de preencher os campos:

- Documento: referente ao tipo de documento e número, sem pontos ou barras.

- Data de nascimento: se você usa um CNPJ, preencha com a data de criação ou fundação da empresa.

- Endereço postal: insira um e-mail de contato do site.

## Quero atualizar minhas credenciais, como posso renová-las?

Você pode renovar suas credenciais pela [seção "Credenciais"]([FAKER][CREDENTIALS][URL]).

Por motivos de segurança excepcionais, pode ocorrer que as credenciais necessitem de atualização, mas não se preocupe, você pode renová-las sempre que necessário.

Lembre-se que você deve substituir as credenciais que já usava pelas novas.