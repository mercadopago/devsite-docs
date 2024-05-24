# Información adicional para la integración

A continuación, encontrará algunas observaciones y buenas prácticas para la integración de un Facilitador de Pagos.

## Asignación del Merchant Code Category (MCC)

El Facilitador de Pagos debe asignar para cada transacción el MCC que describa de forma más precisa la actividad final de su subcomercio.

Según la orientación de las marcas de tarjetas y la Normativa nº 28 de Abecs (Asociación Brasilera de Empresas de Tarjetas de Crédito y Servicios), la asignación del MCC debe seguir obligatoriamente las siguientes reglas descritas a continuación:

1. **MCC determinado por el Comité de Bandas de Abecs;**
2. **MCC considerando el CNAE Primario listado en la Tabla "de/para" (disponible en el Registro Unificado de MCC de Abecs).**

ABecs está alojando una base de datos que contiene información sobre los CNPJs que, según la regla anterior, están vinculados correctamente al MCC, ya sea por deliberación o vinculados al CNAE Primario.

Todos los participantes del Sistema Brasileño de Pagos pueden acceder a esta información a través de las siguientes formas.

* **Portal - Nuevo Sistema de Registro Unificado de MCC:** El portal de Abecs para la consulta en línea de MCC, permitiendo acceso con inicio de sesión a la lista de CNAE-MCC y consulta individual del CNPJ para verificar cuál es el MCC correcto para el comercio. Para acceder a este nuevo sistema, será necesario realizar un registro con la creación de usuario y contraseña.
* **Integración a través de API:** Con el objetivo de aumentar la seguridad de la información disponible en el sistema, Abecs ha creado APIs del Sistema Unificado de MCC que permiten a los acreditadores y subacreditadores acceder a la información de forma masiva y automatizada. Puede solicitar más información en el correo electrónico monitor@abecs.org.br.

> WARNING
>
> Importante
>
> La atribución incorrecta de MCC por parte del Facilitador de Pagos puede resultar en la aplicación de multas y la restitución del intercambio adeudado por parte de las marcas. Estas multas pueden ser trasladadas al Facilitador de Pagos por Mercado Pago.<br><br>Para obtener más detalles y acceder al Registro Unificado de MCC, consulta el sitio web oficial de [Abecs](https://www.abecs.org.br/consulta-mcc-individual).

