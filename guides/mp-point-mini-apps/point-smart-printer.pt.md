# Impressora Point Smart (impressora térmica)

## Configure o recibo HTML para impressão

Para processar corretamente o recibo _HTML_ e imprimir todas as informações, deve-se incluir os seguintes scripts do Mercado Pago antes da tag `</body>`:

* `mobilewebkit.js`
* `smart_render.js `

Exemplo:

```html
<script src="share/mobilewebkit.js" type="text/javascript"></script>
<script src="share/smart_webkit.js" type="text/javascript"></script>
```

Além disso, o recibo _HTML_ deve chamar a `notifyHtmlReadyToPrint` quando o recibo estiver pronto para impressão (por exemplo, imprimir recibo após carregar uma imagem de um serviço).

Veja abaixo um exemplo de código que notifica o _HTML_ pronto para imprimir após consumir um serviço e carregar uma imagem.

```html
<img onload="notifyHtmlReadyToPrint()" 
src="https://mp.mp/code.aspx?tpcodigo=qrcode&vcodigo=abcd">
```

## Inicie a impressora HTML

Configurado o processamento do recibo _HTML_ corretamente, para iniciar a impressora _HTML_ a função `launchPrint` deve ser chamada enviando os parâmetros abaixo.

| Parâmetro  | Tipo  | Obrigatório | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| data | string | Não | path ou texto _HTML_ simples | Opcional: <br><br> O caminho do arquivo _HTML_ com/sem parâmetros, armazenado em um MiniApp <br><br> Texto _HTML_ simples como string |
| callback | function | Não | function callbackResult(result, error) | Retorno do resultado da impressão. |

Exemplo de requisição com URL:

```javascript
launchPrint("receipt/index.html?product_value=300&taxes=45&total=345",      
    callbackResult);

function callbackResult(result, error) {
   if (result == 'success') {
       // Escreva o código com sucesso aqui
   } else {
       //'error' tem informações detalhadas de erro, como "outOfPaper"
   }
}
```

Exemplo de requisição com texto _HTML_ simples:

```javascript
launchPrint("<html><head>...</head><body>...</body></html>",      
    callbackResult);

function callbackResult(result, error) {
   if (result == 'success') {
       // Escreva o código com sucesso aqui
   } else {
       //'error' tem informações detalhadas de erro, como "outOfPaper"
   }
}
```