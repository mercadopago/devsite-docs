# Instalación

Para instalar los os MiniApps en su dispositivo Point SmartPOS, siga estos pasos.

1. Inserte un archivo de índice `index.html` en la raíz del archivo `.zip`.
2. Importe los scripts puente para interactuar con el dispositivo Point Smart y los recursos que ofrece MercadoPago, incluyendo en cada archivo `html` los scripts de MercadoPago `smart_webkit.js` y `mobilewebkit.js` antes de la tag `</body>`.

```html
<script source="share/mobilewebkit.js" type="text/javascript"></script>
<script source="share/smart_webkit.js" type="text/javascript"></script>
```

3. Complete los campos del archivo de manifiesto correctamente como se indica en la sección [Manifiesto de mini aplicaciones](/developers/es/docs/point/mini-apps/additional-content/manifest). El archivo debe estar ubicado en la raíz del archivo _.zip_ y debe llamarse `miniapp_manifest.json`.
4. Agregue el dominio que utilizará la MiniApp a las reglas de **CORS** utilizadas por la API remota. Para este paso de prueba, el nombre de dominio formará parte del nombre del archivo _.zip_ con el sufijo `.mp`. Ejemplo:

* **Arquivo _.zip_**: `miniapp_app123.zip`
* **Domínio do aplicativo**: `app123.mp`

5. Después de recibir la notificación de que la miniaplicación está disponible en el dispositivo SmartPOS, va a **Más opciones > Aplicaciones** y haz clic en **Instalar**. En la imagen de abajo, por ejemplo, el MiniApp se llama "Prueba de Mini-app".

[IMAGEN]

6. Finalmente, luego de ser instalada, el MiniApp se puede ver de la siguiente manera:

[IMAGEN]

7. Seleccione el elemento y vea el MiniApp.