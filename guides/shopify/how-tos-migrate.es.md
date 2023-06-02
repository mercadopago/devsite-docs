# Cómo migrar a la nueva versión de la app de Mercado Pago

Aprende a instalar la nueva app y desinstalar la antigua para evitar la interrupción del servicio en Shopify.

## Instala la nueva app

----[mla, mlm, mpe, mco, mlu, mlc]----
1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. Dentro del panel administrativo de la tienda, haz clic en **Configuración**.
3. Una vez allí, selecciona la opción **Pagos**. 
4. En "Formas de pago adicionales", haz clic en **Agregar formas de pago**.
5. Dirígete a la pestaña **Buscar por proveedor** y busca la nueva app con el nombre "Checkout Mercado Pago". 
6. Una vez que la hayas encontrado, selecciónala y haz clic en **Activar”** y luego **Conectar**.

<center>

![migracion a](/images/shopify/migration-a-es.gif)

</center>

7. Selecciona **Instalar aplicación** y luego **Gestionar**.
8. Coloca tus **credenciales de producción** (`public key` y `access token`) en los campos que lo solicitan y haz clic en **Guardar**. Recuerda tener a mano tus [credenciales](/developers/es/docs/shopify/additional-content/credentials).
9. Para terminar la instalación, selecciona **Activar Checkout Mercado Pago**.

> En este paso, podrás seleccionar las imágenes de los medios de pago que quieras mostrar en tu tienda a modo ilustrativo. También, en caso que lo desees, podrás habilitar el [modo de prueba.](/developers/pt/docs/shopify/sales-processing/integration-test)

<center>

![migracion b](/images/shopify/migration-b-es.gif)

</center>

------------
----[mlb]----
1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações**.
3. Uma vez lá, selecione a opção **Pagamentos**. 
4. Em "Formas de pagamento adicionais", clique em **Adicionar formas de pagamento**.
5. Acesse a aba **Pesquisar por fornecedor** e procure o novo app com o nome "Checkout Mercado Pago".
6. Após localizá-lo, selecione-o, clique em **Ativar** e, por fim, em **Conectar**.
7. Selecione **Instalar app** e, depois, clique em **Gerenciar**.
8. Insira as suas **credenciais de produção** (`public key` e `access token`) nos campos solicitados e clique em **Salvar**. Lembre-se de ter suas [credenciais](/developers/pt/docs/shopify/additional-content/credentials) à mão e, no caso de renovar suas credenciais, lembre-se de substituir as credenciais de produção e de teste em sua integração.
9. Em seguida, clique em **Validar conta** para garantir a validade das credencias inseridas e manter a sua conta segura. O processo de validação é feito totalmente pelo Mercado Pago.
10. Selecione o **modelo de negócio** para auxiliar o Mercado Pago a enviar soluções personalizadas para a loja. As opções disponíveis são: **dropshipping**, **e-commerce tracicional** e **produtos ou serviçOes digitais**.
11. Habilite os **meios de pagamento** que serão oferecidos, podendo ser:

 - **Cartões de crédito e débito**. Para saber quais cartões são aceitos, verifique a lista completa [aqui](/developers/pt/docs/sales-processing/payment-methods).
 - **Pix**. Selecione o prazo para pagamento do código Pix. Para oferecer pagamentos com Pix é preciso garantir que as chaves Pix tenham sido criadas. Caso ainda não tenha criado, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.
 - **Boleto e lotérica**. Selecione o prazo para vencimento do boleto, não incluindo sábado e domingo.

12. [Configure](https://www.mercadopago.com.br/costs-section#from-section=menu), diretamente na conta Mercado Pago associada à loja, as informações de parcelamento e juros que serão oferecidas.
13. Clique em **Salvar configurações > Entendi** para retornar ao painel administrativo da loja e finalizar a instalação.
14. Por fim, clique em **Ativar Checkout Mercado Pago**.

> WARNING
>
> Atenção
>
> Importante salientar que instalação só estará finalizada **após clique em "Ativar Checkout Mercado Pago"**.

------------

> NOTE
>
> Importante
>
> En este exacto momento, vas a tener las dos versiones instaladas en tu sitio. Esto asegurará que tu tienda no se quede sin métodos de pago mientras se realizan los pasos de migración.

## Desactiva la app antigua

Después de instalar la nueva versión, es necesario desinstalar la versión anterior siguiendo el paso a paso a continuación.

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. Dentro del panel administrativo de la tienda, haz clic en **Configuración**.
3. Una vez allí, selecciona la opción **Pagos**. 
4. Localiza la antigua app con el nombre "Mercado Pago" y selecciona **Gestionar**.
5. Para finalizar, haz clic en **Desactiva Mercado Pago**.

> WARNING
>
> Atención
>
> Ten cuidado de no desinstalar la nueva versión.

<center>

![migracion c](/images/shopify/migration-c-es.gif)

</center>