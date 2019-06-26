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
5. Rellene los datos del grupo "Específico". Para obtener el Client Id y el Client Secret, vea la sección [Credenciales](#bookmark_credenciales).
6. Haga clic en "salvar".

    ![Ez Commerce Configuration Page - Ticket](/images/ezcommerce-ticket-1.gif)

### Configurar tarjetas de crédito

Para operar con tarjetas de crédito siga estos pasos:

1. Expanda el menú "Configurações".
2. Visita "Formas de Pagamento".
3. Seleccione la pestaña "Cartão de Crédito".
4. Busque las banderas que tienen en la columna "Adquirente / Gateway" la información "mercadopago_transparente".
5. Rellene los datos del grupo "Específico". Para obtener el Client Id y el Client Secret, vea la sección [Credenciales](#bookmark_credenciales).
6. Seleccione el tipo de configuración de cuotas que desee en el campo "Tipo de parcelamento":
- Dinâmico: La plataforma utilizará las configuraciones de interés de la cuenta de Mercado Pago.
- Customizado: Deberá configurar las cuotas en la plataforma (total de cuotas, cuotas sin interés, porcentaje de interés y cuota mínima)
7. Haga clic en salvar.

    ![Ez Commerce Setup Page - Credit Card](/images/ezcommerce-credit-card-1.gif)

>Estos pasos se deben realizar para todas las banderas que desea activar.

## Credenciales

Para obtener las credenciales debe seguir estes pasos:

1. Iniciar sesión en la cuenta de Mercado Pago.
2. Acceda a este [panel](https://www.mercadopago.com/mla/account/credentials).
3. Seleccione la pestaña "Checkout básico" para ver el Client Id y el Client Secret.
4. Seleccione la pestaña "Checkout transparente" para ver la Public Key y el Access Token ("modo de produção" para procesar pagos reales / "modo Sandbox" para realizar pruebas).
5. Antes de pasar a la producción asegúrese de rellenar el formulario ‘Quiero ir a producción’ (Si ya ha realizado este paso, el vínculo no aparece).
