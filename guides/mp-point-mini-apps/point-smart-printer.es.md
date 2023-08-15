# Impresora Point Smart (impresora térmica)

## Configura el recibo HTML para una impresión

Para procesar correctamente el recibo _HTML_ e imprimir toda la información, debes incluir los siguientes scripts de Mercado Pago antes de la etiqueta `</body>`:

* `mobilewebkit.js`
* `smart_render.js `

Ejemplo:

```html
<script src="share/mobilewebkit.js" type="text/javascript"></script>
<script src="share/smart_webkit.js" type="text/javascript"></script>
```

Además, el recibo _HTML_ debe llamar a `notifyHtmlReadyToPrint` cuando el recibo esté listo para imprimirse (por ejemplo, imprimir el recibo después de cargar una imagen de un servicio).

Ve a continuación un ejemplo de código, que notifica el _HTML_ listo para imprimir, después de consumir un servicio y cargar una imagen.

```html
<img onload="notifyHtmlReadyToPrint()" 
src="https://mp.mp/code.aspx?tpcodigo=qrcode&vcodigo=abcd">
```

# Inicia la impresora HTML

Una vez configurado correctamente el procesamiento del recibo _HTML_, para iniciar la impresora _HTML_ se debe llamar a la función `launchPrint` enviando los siguientes parámetros.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| data | string | No | path o texto _HTML_ simple | Opcional: <br><br> Ruta del archivo _HTML_ con/sin parámetros, almacenado en un MiniApp <br><br> Texto _HTML_ sin formato como string. |
| callback | function | No | function callbackResult(result, error) | Devuelve el resultado de la impresión. |

Ejemplo de solicitud con URL:

```javascript
launchPrint("receipt/index.html?product_value=300&taxes=45&total=345",      
    callbackResult);

function callbackResult(result, error) {
   if (result == 'success') {
       // Escribe el código con éxito aquí
   } else {
       //'error' tiene información de error detallada, como "outOfPaper"
   }
}
```

Ejemplo de solicitud con texto _HTML_ simple:

```javascript
launchPrint("<html><head>...</head><body>...</body></html>",      
    callbackResult);

function callbackResult(result, error) {
   if (result == 'success') {
       // Escribe el código con éxito aquí
   } else {
       //'error' tiene información de error detallada, como "outOfPaper"
   }
}
```