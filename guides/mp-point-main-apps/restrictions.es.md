# Restricciones

Para garantizar la seguridad y estabilidad del ecosistema de integración, considera las restricciones de uso de funcionalidades del dispositivo y del sistema Android.

## Flujo de OAuth

Para obtener información de los pagos, de la persona usuaria o ejecutar una operación sobre la cuenta de quien vende, como cobros o devoluciones, genera un token por medio de [flujo de OAuth](/developers/pt/docs/main-apps/additional-content/security/oauth/introduction)y usa la [API pública de Mercado Pago](/developers/pt/reference).

## Versión del Ecosistema

Na configuração do aplicativo, verifique a versão do sistema operacional do dispositivo. A Point Smart usa o Android 6, o que implica em um API Level mínimo de 23.

Os dispositivos SmartPOS têm um sistema operacional AOSP, e por esta razão, não contam com diversos serviços do Google e Firebase. Consulte quais estão disponíveis na [página oficial do Firebase](https://firebase.google.com/docs/android/android-play-services?hl=es-419).

## Permisos y configuraciones de Android Manifest

Durante el desarrollo, algunos [permisos](https://developer.android.com/guide/topics/permissions/overview?hl=es-419) se deben especificar en [Android Manifest](https://developer.android.com/guide/topics/manifest/manifest-intro?hl=es-419), para acceder a información confidencial o a determinadas funciones del sistema. Las que se pueden declarar son las esenciales para la comunicación en red, como el permiso de internet (`android.permission.INTERNET`).

Si necesitas alguna funcionalidad extra, contacta el equipo de soporte de Mercado Pago. 

## Seguridad y uso de biblioteca de terceros

Al construir la app, no uses bibliotecas obsoletas o con vulnerabilidades de seguridad.

Las que interactuan directo con el hardware del dispositivo, como las de los fabricantes, son de uso exclusivo del equipo de Mercado Pago. Contáctanos si necesitas alguna funcionalidad de este tipo.

## Problema con Build Tools

Luego, ejecuta este comando en la terminal:

> Si el mensaje **"El Build Tools instalado revisión 32.0.0 está dañado"** aparece, elimina el programa y vuelve a instalarlo usando el SDK manager.

```shell command
cd ~/Library/Android/sdk/build-tools/32.0.0 \
  && mv d8 dx \
  && cd lib  \
  && mv d8.jar dx.jar
```