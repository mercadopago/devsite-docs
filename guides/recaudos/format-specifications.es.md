# Especificaciones de formato CSV y ejemplos

Esta documentación proporciona aclaraciones importantes sobre el formato CSV de los archivos utilizados, con detalles específicos presentados en las secciones siguientes.

## Formato de los campos

El formato de los campos se detalla de la siguiente manera: T(Lmin - Lmax), donde Lmin es la longitud mínima y Lmax es la longitud máxima, y T es el tipo de datos que se detallan a continuación:

## Formato de los campos

El formato de los campos se detalla de la siguiente manera: T(Lmin - Lmax), donde Lmin es la longitud mínima y Lmax es la longitud máxima, y T es el tipo de datos que se detallan a continuación:

| Tipo | Descripción | Regexp |
|------|-------------|--------|
| **A** | Campo alfabético. No se aceptan tildes. | `[a-zA-Z]` |
| **N(,2)** | Campo numérico con decimales. | `[0-9]+.[0-9]{2}` |
| **N** | Campo numérico con números enteros. | `[0-9]+` |
| **AN** | Campo alfanumérico. | `[a-zA-Z0-9]` |
| **ANS** | Campo que soporta caracteres alfanuméricos y especiales. | `[a-zA-Z-0-9 _@.-()+]` |
| **AS** | Campo que soporta caracteres alfabéticos y caracteres especiales. | `[a-zA-Z- _@.-()+]` |

Para todos los formatos, se deberán utilizar espacios para completar el largo fijo.

Por ejemplo:
- AN(1-11) indica que es un campo alfanumérico de largo 11.
- AN(1-20) indica que el campo puede tener una largo de 1 a 20 caracteres.

## Archivo de entrada

Este archivo contendrá las deudas y enlaces.

El nombre del archivo debe seguir el siguiente modelo de nomenclatura:

`debt_{sellerId}_{sequential}_{date}.csv`

Dónde:
- `sellerId`: Identificador de la empresa en nuestro sistema.
- `sequential`: Número secuencial generado por la empresa.
date: Fecha de generación del archivo en el formato AAAAMMDD.

> WARNING
>
> Importante
>
> Archivos cuyo nombre no siga esta nomenclatura no serán procesados.

### Layout de entrada

Consulta los campos que puedes configurar en la entrada. En la columna "Categoría", M representa Obligatorio, C Condicional y O Opcional - para estos casos, los campos deben quedar vacíos.


> WARNING
>
> Importante
>
> En el caso de Deudas, al menos uno de estos campos debe ser completado, de acuerdo a la configuración del vendedor.

| Column/index | Atributo                  | Formato  | Detalle                                                                                                                                           | Categoria                             |
|--------------|---------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| 1            | Referencia                | AN(1-50) | Identificador único de la deuda que pagará el cliente, gestionado por la empresa. Ten en cuenta que este identificador será utilizado para conciliación. | M                                     |
| 4            | DNI/CUIL/CUIT             | N(011)   | DNI, CUIL o CUIT del cliente.                                                                                                                     | O*                                    |
| 2            | Código del cliente        | AN(020)  | Identificador utilizado por la empresa para identificar a sus clientes. Recuerda que debes respetar el formato indicado durante el proceso de incorporación. | O                                     |
| 7            | Fecha Primer Vencimiento  | N(008)   | Fecha del primer vencimiento en formato AAAAMMDD.                                                                                                 | M                                     |
| 8            | Importe Primer Vencimiento| N(,2)    | Importe del primer vencimiento. Es un número entero donde los dos últimos dígitos representan los decimales.                                       | M                                     |
| 9            | Fecha Segundo Vencimiento | N(008)   | Fecha del segundo vencimiento, en formato AAAAMMDD.                                                                                                | O                                     |
| 10           | Importe Segundo Vencimiento | N(,2)  | Importe del segundo vencimiento. Se trata de un número entero en el cual los dos últimos dígitos representan los decimales.                         | O                                     |
| 11           | Fecha Tercer Vencimiento  | N(008)   | Fecha del tercer vencimiento, en formato AAAAMMDD.                                                                                                | O                                     |
| 12           | Importe Tercer Vencimiento | N(,2)   | Importe del tercer vencimiento. Es un número entero donde los dos últimos dígitos son decimales.                                                   | O                                     |
| 3            | Nombre Completo           | AS(100)  | Nombre completo del cliente e sin caracteres especiales.                                                                                          | O - Links Masivos <br>M - Carga en Wallet |
| 5            | Teléfono Cliente          | ANS(20)  | Teléfono del cliente.                                                                                                                             | O                                     |
| 6            | Dirección correo electrónico | ANS(64) | Correo electrónico del cliente donde recibirá las notificaciones sobre la existencia de una nueva deuda para la empresa.                          | O                                     |
| 13           | Motivo                    | ANS(030) | Descripción que el usuario verá al pagar una deuda o un enlace. Si no se carga, el valor por defecto será "Otros".                                 | O                                     |
| 14           | Comentario                | ANS      | Concepto o comentario.                                                                                                                            | O                                     |
| 15           | Tax                       | N        | Impuesto. Puede ser 0, 5 o 19.                                                                                                                    | O - Solo para casos de enlaces masivos en Colombia. |

> NOTE
>
> Nota
>
> Las segundas y terceras fechas de vencimiento, junto con sus montos asociados, son opcionales. El sistema actualizará automáticamente los montos en cada fecha especificada, garantizando que el monto a pagar sea el correcto en todo momento.

## Layout exitoso para Links de pagos

| Column/index | Atributo      | Formato | Detalle                                                              |
|--------------|---------------|---------|----------------------------------------------------------------------|
| 1            | Referencia    | AN(020) | Identificador único de la deuda que el cliente pagará, gestionado por la empresa. |
| 2            | Link de pagos | ANS     | Descripción de los errores encontrados en la línea.                 |

## Layout exitoso para Deudas

| Column/index | Atributo   | Formato | Detalle                                                                                   |
|--------------|------------|---------|-------------------------------------------------------------------------------------------|
| 1            | Referencia | AN(020) | Identificador único de la deuda que pagará el cliente, gestionado por la empresa.        |
| 2            | Resultado  | ANS     | Valor fijo SUCCESS para las filas procesadas correctamente.                                |

## Layout de error

| Column/index | Atributo                         | Formato | Detalle                                                                    |
|--------------|----------------------------------|---------|----------------------------------------------------------------------------|
| 1            | Número de línea del archivo de deudas. | AN(008) | Identificador del cliente. Debe respetar el formato indicado durante el onboarding. |
| 2            | Referencia                       | AN(020) | Identificador único de la deuda que el cliente pagará, gestionado por la empresa. |
| 3            | Errores                          | ANS     | Descripción de los errores encontrados en la línea.                       |

A continuación, tienes un ejemplo de archivo de entrada para Links masivos y Deudas:

```terminal
15897,ext1600,prueba uno,1122334455,,,20231124,500.00,,,,,Cuota,,
15898,ext1601,prueba dos,1122334455,,,20231124,1000.00,20231125,1100.00,,,Cuota,,
15899,ext1602,prueba tres,1122334455,,,20231125,1200.00,20231126,1300.00,20231127,1500.00,Cuota,,
```

A continuación, tienes un ejemplo de success para Links Masivos:

```terminal
ext1602, https://mpago.la/2W66EvG
ext1600, https://mpago.la/2LdGavR
ext1601, https://mpago.la/1FVqpCV
```

A continuación, tienes un ejemplo de archivo de success para Deudas:

```terminal
ext1602, SUCCESS
ext1600, SUCCESS
ext1601, SUCCESS
```