# Especificaciones de formato CSV y ejemplos

Esta documentación proporciona aclaraciones importantes sobre el formato CSV de los archivos utilizados, con detalles específicos presentados en las secciones siguientes.

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

### Layout de entrada

Consulta los campos que puedes configurar en la entrada. En la columna "Categoría", M representa Obligatorio, C Condicional y O Opcional - para estos casos, los campos deben quedar vacíos.


> WARNING
>
> Importante
>
> En el caso de deudas con 'C' en la columna Categoría, al menos uno de estos campos debe ser completado, de acuerdo a la configuración del vendedor.

| Column/index | Atributo                  | Formato  | Detalle                                                                                                                                           | Categoria                             |
|--------------|---------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| 1            | Referencia                | AN(1-50) | Identificador único de la deuda que pagará el cliente, gestionado por la empresa. Ten en cuenta que este identificador será utilizado para conciliación. | M                                     |
| 2            | DNI/CUIL/CUIT             | N(011)   | DNI, CUIL o CUIT del cliente.                                                                                                                     | C*                                    |
| 3            | Código del cliente        | AN(020)  | Identificador utilizado por la empresa para identificar a sus clientes. Recuerda que debes respetar el formato indicado durante el proceso de incorporación. | C                                     |
| 4            | Fecha Primer Vencimiento  | N(008)   | Fecha del primer vencimiento en formato AAAAMMDD.                                                                                                 | M                                     |
| 5            | Importe Primer Vencimiento| N(,2)    | Importe del primer vencimiento. Es un número entero donde los dos últimos dígitos representan los decimales.                                       | M                                     |
| 6            | Fecha Segundo Vencimiento | N(008)   | Fecha del segundo vencimiento, en formato AAAAMMDD.                                                                                                | O                                     |
| 7           | Importe Segundo Vencimiento | N(,2)  | Importe del segundo vencimiento. Se trata de un número entero en el cual los dos últimos dígitos representan los decimales.                         | O                                     |
| 8           | Fecha Tercer Vencimiento  | N(008)   | Fecha del tercer vencimiento, en formato AAAAMMDD.                                                                                                | O                                     |
| 9           | Importe Tercer Vencimiento | N(,2)   | Importe del tercer vencimiento. Es un número entero donde los dos últimos dígitos son decimales.                                                   | O                                     |
| 10            | Nombre Completo           | AS(100)  | Nombre completo del cliente e sin caracteres especiales.                                                                                          | O - Links Masivos <br>M - Carga en Wallet |
| 11            | Teléfono Cliente          | ANS(20)  | Teléfono del cliente.                                                                                                                             | O                                     |
| 12            | Dirección correo electrónico | ANS(64) | Correo electrónico del cliente donde recibirá las notificaciones sobre la existencia de una nueva deuda para la empresa.                          | O                                     |
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
| 2            | Link de pagos | ANS     | URL del Link de Pago generado.                 |

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
reflinks11,33334444,,20240531,33.33,,,,,,,,Cuota Demo en Vivo 1,,
reflinks22,22228888,,20240531,44.44,20240601,22.22,20240602,122.11,Richie 
Jenkins,1113101138,test_user_1196837045@testuser.com,Cuota Demo en Vivo 2,,
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