# Introducción

Las mini apps son una solución híbrida basada en tecnologías web integradas en un wrapper nativo que brinda las capacidades nativas y servicios de pago ofrecidos por Mercado Pago a través del [Point Smart](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/introduction).

## Compatibilidad

Para asegurar el correcto funcionamiento de las mini apps recomendamos utilizar como tecnologías:

* **React**.
* **Vanilla JS**.
* **Versões de Angular menores ou iguais à 12**.

> El navegador de los dispositivos A910 corresponde a la v**ersión 52.0.2743.100** por lo cual algunas tecnologías y versiones no son compatibles con estos dispositivos.

# Seguridad

Todas las URLs tienen que funcionar en HTTPS.

En caso de que tu mini app sea nativa, para poder subirla al ecosistema de Mercado Pago y garantizar la seguridad de la aplicación y sus posteriores actualizaciones, los integradores deben firmarla de manera digital a través de un certificado.

Este certificado debe ser el mismo tanto para el paquete inicial como para cada una de las nuevas versiones. Consulta cómo firmar la aplicación con el certificado generado por el desarrollador en la [documentación oficial de Android](https://developer.android.com/studio/publish/app-signing?hl=pt-419#generate-key).