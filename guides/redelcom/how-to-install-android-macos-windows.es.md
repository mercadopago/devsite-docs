# Cómo instalar aplicaciones en dispositivos Redelcom con MacOS y Windows

Para poder realizar integraciones con terminales Redelcom, puedes necesitar instalar una aplicación Android, como RDCPass, o alguna propia que te permita conectarte con ella.

Si estás trabajando con MacOS o Windows como sistema operativo, `adb` (Android Debug Bridge) es la herramienta que te permitirá instalar aplicaciones a las terminales para comunicarte con RDCPass de manera adecuada.

A continuación, te presentamos el paso a paso para que puedas instalar `adb` en computadores MacOS y/o Windows e instalar tu aplicación Android.

## Cómo instalar tu app Android en MacOS

1. Comienza instalando `adb` en tu computador MacOS ejecutando el siguiente comando en la terminal:

```terminal

brew install android-platform-tools;

```

2. Una vez finalizada la instalación, prueba si `adb` detecta adecuadamente el dispositivo Redelcom. Para eso, conéctalo mediante USB al computador y ejecuta el siguiente comando:

```terminal

adb devices

```

Si `adb` detecta el dispositivo correctamente, recibirás una respuesta como la siguiente.

```terminal

List of devices attached 
1850796495     device

```

3. Por último, todavía desde la terminal del computador, dirígete a la carpeta donde se encuentra la aplicación Android a instalar y ejecuta el siguiente comando, reemplazando “prueba.apk” por el nombre del archivo y la extensión `apk`.

```terminal

adb install prueba.apk

```

Al finalizar el proceso de instalación, la respuesta será similar a la siguiente:

```terminal

Performing Streamed Installed
Success

```

¡Listo! Instalaste tu aplicación Android mediante `adb` para integrar tus pagos. Ya puedes elegir el [tipo de integración](/developers/es/docs/redelcom/types-of-integration) de tu preferencia para comenzar a operar con Redelcom. 

## Cómo instalar tu app Android en Windows

1. Descarga el SDK de Android accediendo a su [sitio oficial](https://developer.android.com/tools/releases/platform-tools?hl=es-419#downloads), y haciendo clic en “Cómo descargar las Herramientas de la plataforma del SDK para Windows”. Deberás leer y aceptar sus términos y condiciones para poder hacerlo.

2. Una vez descargado el SDK, accede a la carpeta ***platform-tools*** y ejecuta el archivo `adb.exe`, como muestra la siguiente imagen.

</center>

![imagen de la carpeta platform-tools y los archivos internos donde está adb.exe](/images/Redelcom/adb-platformtools.jpg)

</center>

3. Una vez finalizada la instalación, prueba si `adb` detecta adecuadamente el dispositivo Redelcom. Para eso, conéctalo mediante USB al computador e ingresa por medio de la terminal de tu preferencia a la ruta donde se descargó la carpeta. Luego, ejecuta el siguiente comando:

```terminal

adb.exe devices

```

Si `adb` detecta el dispositivo correctamente, recibirás una respuesta como la siguiente.

```terminal

List of devices attached 
1850796495     device
```

4. Copia y pega tu aplicación Android en la carpeta **platform-tools**.
5. Por último, todavía desde la terminal del computador y en la carpeta *platform-tools*, ejecuta el siguiente comando, reemplazando “nombre_de_archivo+extensión” por el nombre de tu aplicación seguidamente de su extensión.

```terminal

adb.exe install nombre_de_archivo + extensión

```

¡Listo! Instalaste tu aplicación Android mediante `adb` para integrar tus pagos. Ya puedes elegir el [tipo de integración](/developers/es/docs/redelcom/types-of-integration) de tu preferencia para comenzar a operar con Redelcom. 

