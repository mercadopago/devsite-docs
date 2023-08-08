# Como começar

## Index File

O mini app deve ter um arquivo `index.html` na raiz do arquivo `.zip`.

## Importe Bridge scripts

Para interagir com a [Point Smart](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/introduction) e os recursos oferecidos pelo Mercado Pago, todo arquivo HTML deve incluir os scripts do Mercado Pago `smart_webkit.js` e `mobilewebkit.js` antes da tag `&lt;/body&gt;`, assim:

```html
<script src="share/mobilewebkit.js" type="text/javascript"></script>
<script src="share/smart_webkit.js" type="text/javascript"></script>
```

## Arquivo manifesto

Os campos do arquivo manifesto devem ser preenchidos corretamente conforme indicado na seção [Mini apps manifesto](/developers/pt/), e deve estar localizado na raiz do `.zip`, nomeado como `miniapp_manifest.json`.

## CORS

O domínio a ser utilizado no Mini App deve ser adicionado às regras CORS utilizadas pela API remota. Para esta etapa de teste, o nome de domínio fará parte do nome do arquivo `.zip` com o sufixo `.mp`.

Por exemplo:

* **Arquivo compactado**: miniapp_app123.zip.
* **Domínio do aplicativo**: app123.mp.

## Cheque se o Mini App está disponível

Depois de receber a notificação de que o mini aplicativo está disponível, vá para ”Mais opções” e selecione a aba ”Apps” no dispositivo SmartPOS.

## Instale o Mini App

Selecione seu mini aplicativo e pressione o botão de instalação. Neste exemplo abaixo, ele é chamado de "Teste de mini-aplicativo".

<center>

![miniapps-install](/mini-apps/miniapps-install-pt.png)

</center>

## Visualização

Quando o Mini App estiver instalado, ele pode ser visto como na imagem abaixo. Para acessá-lo, basta tocar no ícone.

<center>

![miniapps-visualization](/mini-apps/miniapps-visualization-pt.png)

</center>