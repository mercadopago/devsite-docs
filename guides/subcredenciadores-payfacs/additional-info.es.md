# Información adicional para la integración

A continuación, encontrarás algunas observaciones y buenas prácticas para la integración de un Facilitador de Pagos.

## Atribución del Merchant Code Category (MCC)

Para garantizar la correcta atribución del MCC (Merchant Category Codes), es necesario que, en cada transacción, el Facilitador de Pagos atribuya el MCC que mejor describa la actividad final de su subcomerciante.

De acuerdo con las regulaciones de las marcas y de la Abecs (Asociación Brasileña de Empresas de Tarjetas de Crédito y Servicios), la atribución del MCC debe seguir la siguiente regla:

1. **Debe ser determinado por el Comité del MCC de la Abecs;**
1. **Debe estar incluido en el CNAE Primario conforme a la Tabla "de/para" (disponible en el Registro Unificado de MCC).**

La Abecs está alojando una base de datos que contiene información de los CNPJ que, según la regla mencionada anteriormente, están correctamente vinculados al MCC.

Todos los participantes del Sistema Brasileño de Pagos pueden acceder a esta información a través de las siguientes formas:

* **Portal - Nuevo Sistema de Registro Unificado de MCC:** El portal de Abecs para la consulta en línea de MCC, permitiendo acceso con inicio de sesión a la lista de CNAE-MCC y consulta individual del CNPJ para verificar cuál es el MCC correcto para el comercio. Para acceder a este nuevo sistema, será necesario realizar un registro con la creación de usuario y contraseña.
* **Integración a través de API:** Con el objetivo de aumentar la seguridad de la información disponible en el sistema, Abecs ha creado APIs del Sistema Unificado de MCC que permiten a los acreditadores y subacreditadores acceder a la información de forma masiva y automatizada. Puede solicitar más información en el correo electrónico monitor@abecs.org.br.

> WARNING
>
> Importante
>
> La atribución incorrecta de MCC por parte del Facilitador de Pagos puede resultar en la aplicación de multas y la restitución del intercambio adeudado por parte de las marcas. Estas multas pueden ser trasladadas al Facilitador de Pagos por Mercado Pago.<br><br>Para obtener más detalles y acceder al Registro Unificado de MCC, consulta el sitio web oficial de [Abecs](https://www.abecs.org.br/consulta-mcc-individual).

