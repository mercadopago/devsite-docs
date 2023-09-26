# Distribución de la main app

Para la fase de distribución de tu solución, sigue estas etapas:

1. Comparte con Mercado Pago la lista de dispositivos, personas usuarias, cajas y tiendas que la app usará. Así, el equipo puede hacer la pre-configuración de los lectores.
2. Si quieres obtener información de la persona usuaria o hacer operaciones sobre la cuenta, define la validación del [flujo de OAuth](/developers/es/docs/main-apps/additional-content/security/oauth/introduction) como parte del _onboarding_.
3. Para subir tu solución al ecosistema de Mercado Pago, garantizando la seguridad de la app y de tus posteriores versiones, suscribe al certificado de manera digital. Este documento debe ser el mismo tanto para el paquete inicial, como para cada una de las actualizaciones. Android disponibiliza [un paso a paso de cómo suscribir digitalmente la app](https://developer.android.com/studio/publish/app-signing?hl=es-419#generate-key), con el certificado generado por la persona desarrolladora.
4. Comparte el paquete **.ap**` com el equipo de soporte de Mercado Pago, que hará una serie de validaciones y avisará a la empresa integradora del resultado.

> **El equipo de soporte de Mercado Pago es responsable de facilitar las siguientes operaciones:**
> <br><br>
> - Entrega de nuevas versiones. <br>
> - Pre-configuración de los dispositivos. <br>
> - Validaciones de UX y Seguridad. <br>
> - Distribución de los APKs nativos.