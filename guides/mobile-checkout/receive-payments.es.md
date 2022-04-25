# Recibir pagos

Esta guía te ayudará a integrar el componente visual de pago de Mercado Pago en tu aplicación. Este componente maneja la selección del medio de pago, la recolección de datos del medio de pago del usuario y la comunicación del resultado de pago.

## La integración consta de dos etapas:

- Integración en tu servidor: en esta etapa obtendrás la información del pago.
- Integración en tu aplicación: en esta etapa configurarás el componente visual.

![Esquema de creación de pagos en plataformas móviles Mercado Pago](/images/mobile-sdk-schema.png)

1. Crea la preferencia de pago desde tu servidor en los servidores de Mercado Pago.
2. Inicia el _Checkout_ en tu aplicación, utilizando el id de la preferencia.
3. El _Checkout_ realizará el pago en los servidores de Mercado Pago.
4. Suscríbete a las notificaciones para enterarte de tus nuevos pagos y las actualizaciones de sus estados.