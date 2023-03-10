# Instalação

Para instalar os MiniApps em seu dispositivo Point SmartPOS, siga os seguintes passos.

1. Insira um arquivo de índice `index.html` na raiz do arquivo `.zip`.
2. Importe scripts de ponte para interagir com o dispositivo Point Smart e os recursos oferecidos pelo MercadoPago, incluindo em todo arquivo `html`os scripts do MercadoPago `smart_webkit.js` e `mobilewebkit.js` antes da tag `</body>`.

```html
<fonte do script="share/mobilewebkit.js" tipo="texto/javascript"></roteiro>
<fonte do script="share/smart_webkit.js" tipo="texto/javascript"></roteiro>
```

3.  Preencha os campos do arquivo manifesto corretamente conforme indicado na seção [Manifesto dos Mini Apps](). O arquivo deve estar localizado na raiz do arquivo _.zip_ e nomeado como `miniapp_manifest.json`.
4. Adicione o domínio a ser utilizado pelo MiniApp às regras **CORS** utilizadas pela API remota. Para esta etapa de teste, o nome de domínio fará parte do nome do arquivo _.zip_ com o sufixo `.mp`. Exemplo:

* **Arquivo _.zip_**: `miniapp_app123.zip`
* **Domínio do aplicativo**: `app123.mp`

5. Após receber a notificação de que o Mini App está disponível no dispositivo SmartPOS, vá para **Mais opções > Apps** e clique em **Instalar**. Na imagem abaixo, por exemplo, o MiniApp está denominado como "Mini-app test".

[IMAGEM]

6. Por fim, após ser instalado, o MiniApp poderá ser visto da seguinte forma:

[IMAGEM]

7. Selecione o item e visualize o MiniApp.