# Cómo empezar

## Index File

La mini app debe tener un archivo `index.html` en la raíz del archivo `.zip`.

## Importe Bridge scripts

Para interactuar con el [Point Smart](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/introduction) y los recursos ofrecidos por Mercado Pago, todo archivo HTML debe incluir los scripts de Mercado Pago `smart_webkit.js` y `mobilewebkit.js` antes del tag `&lt;/body&gt;`, así:

```html
<script src="share/mobilewebkit.js" type="text/javascript"></script>
<script src="share/smart_webkit.js" type="text/javascript"></script>
```

## Archivo manifesto

Los campos del archivo manifesto deben ser completados correctamente conforme lo indicado en la sección [Mini apps manifesto](/developers/es/), y el archivo debe estar localizado en la raíz del `.zip`, nombrado como `miniapp_manifest.json`.

## CORS

El dominio a ser utilizado en la mini app tiene que estar añadido a las reglas CORS utilizadas por la API remota. Para esta etapa de test, el nombre del dominio formará parte del nombre del arquivo `.zip` com el sufijo `.mp`.

Por ejemplo:

* **Archivo compactado**: miniapp_app123.zip
* **Dominio de la aplicación**: app123.mp

## Chequea que la Mini App este disponible

Después de recibir la notificación de que la mini aplicación está disponible, dirígete a ”Más opciones” y selecciona la guía ”Apps” en el dispositivo SmartPOS.

## Instala la Mini App

Selecciona tu mini app y presiona el botón de instalación. En el ejemplo de abajo, la mini aplicación se llama "Test de miniaplicación".

<center>

![miniapps-install](/mini-apps/miniapps-install-es.png)

</center>

## Visualización

Cuando la mini app esté instalada, se verá como en la imagen de abajo. Para ingresar, solo debes tocar el ícono.

<center>

![miniapps-visualization](/mini-apps/miniapps-visualization-es.png)

</center>