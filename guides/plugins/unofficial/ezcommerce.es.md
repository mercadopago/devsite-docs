# EZ Commerce

## ¿Qué es EZ Commerce?

[EZ Commerce](https://www.ezcommerce.com.br/) es un ecosistema completo de soluciones para su tienda virtual que permite procesar pagos a través de Mercado Pago.
Para obtener más información sobre las posibilidades que ofrece EZ Commerce visita [su página de recursos](https://www.ezcommerce.com.br/plataforma/recursos-de-ecommerce/).

## Configurar EZ Commerce para operar con Mercado Pago

Los pasos para empezar a operar con Mercado Pago son los siguientes:

1. Configurar boleto.
2. Configurar tarjetas de crédito.

### Configurar boleto

Para operar con boleto, siga estos pasos:

1. Expanda el menú "Configurações".
2. Visita "Formas de Pagamento".
3. Seleccione la pestaña "Boleto bancário".
4. Haga clic en la opción "Boleto Bancário" que tenga en la columna "Adquirente / Gateway" la información "mercadopago_transparente".
5. Rellene los datos del grupo "Específico". Para obtener el Client id y el Client secret, ve a la sección de [Credenciales]([FAKER][CREDENTIALS][URL_BASIC]).
6. Haga clic en "salvar".

    ![Mercado Pago Ez Commerce Configuration Page - Ticket](/images/ezcommerce-ticket-1.gif)

### Configurar tarjetas de crédito

Para operar con tarjetas de crédito siga estos pasos:

1. Expanda el menú "Configurações".
2. Visita "Formas de Pagamento".
3. Seleccione la pestaña "Cartão de Crédito".
4. Busque las banderas que tienen en la columna "Adquirente / Gateway" la información "mercadopago_transparente".
5. Rellene los datos del grupo "Específico". Para obtener el Client id, el Client secretla y la Public key, vea la sección [Credenciales]([FAKER][CREDENTIALS][URL]).
6. Seleccione el tipo de configuración de cuotas que desee en el campo "Tipo de parcelamento":
- Dinâmico: La plataforma utilizará las configuraciones de interés de la cuenta de Mercado Pago.
- Customizado: Deberá configurar las cuotas en la plataforma (total de cuotas, cuotas sin interés, porcentaje de interés y cuota mínima)
7. Haga clic en salvar.

    ![Mercado Pago Ez Commerce Setup Page - Credit Card](/images/ezcommerce-credit-card-1.gif)
