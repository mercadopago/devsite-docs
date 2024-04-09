# Configurar credenciais

Você pode gerar solicitações de pagamento em terminais da Redelcom usando [nossa API](https://api-dev.redelcom.cl:20010/v2).

</center>

![diagrama explicando a Integração com a API](Redelcom/integrate-via-API.png)

</center>

Para começar a integrar via API, você deve ter as **credenciais fornecidas a você por e-mail** quando solicitou o dispositivo. Essas credenciais ajudarão você a gerar o *token* necessário para operar com a Redelcom via API.

Suas **credenciais da Redelcom** consistem em:

| Tipo | Descrição |
|---|---|
| clientId | É um identificador numérico exclusivo do cliente no sistema da Redelcom. |
| Secret | É a senha associada ao cliente no sistema da Redelcom. |

Depois de ter suas credenciais exclusivas, você precisa realizar a criptografia, o que permitirá obter o *token* necessário para operar com nossa API. Abaixo, fornecemos um pré-script do Postman para mostrar como fazer isso:

```javascript
// get path with query params
const path = pm.request.url.getPath().replace("/redelcom","");
let queryParam;
let httpPath = path;
if (pm.request.url.query != "") {
    pm.request.url.query.all().forEach((param) => queryParam = param.key + "=" +  param.value);
    httpPath +=  "?" + queryParam;
}
console.log("httpPath: " + httpPath);
// execute algorithm
const SECRET_KEY = pm.collectionVariables.get("secret");
const body = pm.request.body
const message = httpPath + "," + body;
console.log("message: " + message);
const token = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(message, SECRET_KEY));
console.log("token: " + token);
pm.environment.set("X-Authentication", pm.collectionVariables.get("clientId") + ";" + token);
```

Depois de realizar a criptografia, você obterá seu *token*, chamado `X-Authentication`. Esse *token* deve ser usado nos cabeçalhos das solicitações da API.


> WARNING
>
> Importante
>
> Se deseja atualizar o aplicativo RDCPass em computadores MacOS ou Windows, entre em contato com nossa equipe de integradores para receber a versão mais recente, e acesse [nossa documentação](/developers/pt/docs/redelcom/how-tos/install-app-android-macos-windows) e siga as instruções disponíveis para saber como instalar um aplicativo Android em nossos dispositivos.