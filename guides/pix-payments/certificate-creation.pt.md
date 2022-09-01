# Criar e cadastrar certificado de transação

O Certificado de transação garante a identidade de ambas as partes (vendedor e comprador) de uma transação, sendo necessário para efetuar as requisições à API.

Para gerar o certiﬁcado, é preciso criar dois arquivos: **uma chave** e um **arquivo CSR**. Para isso, utilize o seguinte script, informando o CUST_ID  (**último bloco de dígitos do ACCESS_TOKEN)**, e o **APP_ID**:

[[[
```script
openssl genrsa -out "$key_file" 2048 2>/dev/null


openssl req -new \
-key "$key_file" \ # Nome do Arquivo para cadastro no Postman (*.pem) csr_subject="/CN=urn:users:$user_id" # Fixo
-out "$csr_file" # Nome do Arquivo para cadastro no Postman (*.pem)

```
]]]

O retorno da solicitação, conterá as seguintes informações:

* certiﬁcado mTLS
* client_id
* client_secret

Feito isso, entre em contato com seu ponto focal comercial para que seja possível gerar o certiﬁcado com base no **APP_ID**, **CUST_ID** e **arquivo CSR**. 


> WARNING
>
> Importante
>
> Armazene essas informações em um local seguro pois as mesmas serão necessárias para fazer as requisições à API.


Para cada requisição, será necessário enviar o arquivo do certiﬁcado e a chave utilizada ao gerar o certiﬁcado.

[[[
```curl

curl --location --request GET "API_ENDPOINT" \
--header "Authorization: Bearer TOKEN" --cert PATH_TO_mTLS --key PATH_TO_KEY

```
]]]


## Cadastrar certificado no Postman

Também é possível cadastrar o certiﬁcado no Postman. Para isso, siga as etapas abaixo.


1. Acesse o Postman e clique em **Settings > Certiﬁcates**. 
2. Na seção **Client Certiﬁcates**, clique em **Add Certiﬁcate**. 
3. Preencha o campo **host** com o valor do host do ambiente utilizado.
4. Adicione o certiﬁcado **mTLS** em **CRT ﬁle** e a chave gerada pelo script em **KEY ﬁle**
5. Clique em **Add** conforme indicado na imagem abaixo.

![Postman Panel](/images/pix/postman.png)
