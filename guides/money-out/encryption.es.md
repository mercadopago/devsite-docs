# Cifrado punta a punta

Para asegurar la seguridad de tus transacciones Money Out, deberás realizar un cifrado punta a punta. El mismo consiste en la creación de un mecanismo de clave pública-privada, en el que se envía un _request_ cifrado por medio de una clave de seguridad, y se utiliza otra clave para validarlo.

Así, deberás enviar tu clave pública a Mercado Pago para la validación de tus transacciones, y conservar tu clave privada almacenada de forma segura para cifrar tus *requests*.

> WARNING
> 
> Importante
>
> El envío de la clave de seguridad es necesario sólo en ambientes productivos. Basta con sumar el *header* `x-Signature` con el cuerpo de la solicitud encriptado como valor. En ambientes de desarrollo o de prueba, no es obligatorio enviarla. Para más información, consulta nuestra ----[mlc]---- [Referencia de API](/developers/es/reference/money-out/bank-transfer-mlc/post)------------ ----[mlb]---- [Referencia de API](/developers/es/reference/money-out/bank-transfer-mlb/post)------------.

Para poder **crear las llaves pública y privada en Linux o MacOS**,  ejecuta el siguiente comando en tu terminal:

```terminal
openssl genpkey -algorithm ed25519 -out mpprivate.pem && 
openssl pkey -in mpprivate.pem -pubout -out mppublic.pem
```

Como respuesta, se generarán dos archivos, uno con tu clave pública, que debes enviar a Mercado Pago, y otro con la clave privada, que debes almacenar de forma segura en tu sistema. 

Para enviar tu clave pública, deberás conectarte con el equipo de Integraciones.  A continuación, te facilitamos el siguiente *request* a modo de ejemplo, en el que se realiza la lectura del archivo `private.key`, se realiza el cifrado del *request* y se agrega la firma al *header*.

```Go
package main

import (
    "bytes"
    "crypto/ed25519"
    "encoding/base64"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    // Path to the file storing the private key
    privateKeyFile := "private.key"

    // Read the private key from the file
    privateKeyBytes, err := ioutil.ReadFile(privateKeyFile)
    if err != nil {
        fmt.Println("Error reading private key:", err)
        return
    }

    // Convert the private key bytes to a PrivateKey
    privateKey := ed25519.PrivateKey(privateKeyBytes)

    // Define your request body
    requestBody := []byte(`{"key": "value"}`)

    // Sign the request body with the private key
    signature := ed25519.Sign(privateKey, requestBody)

    // Encode the signature to base64
    signatureBase64 := base64.StdEncoding.EncodeToString(signature)

    // Create a new HTTP request
    req, err := http.NewRequest("POST", "https://example.com/api/endpoint", bytes.NewBuffer(requestBody))
    if err != nil {
        fmt.Println("Error creating request:", err)
        return
    }

    // Add the x-signature header with the base64 encoded signature
    req.Header.Set("x-signature", signatureBase64)

    // Send the request
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println("Error sending request:", err)
        return
    }
    defer resp.Body.Close()

    // Read the response body
    responseBody, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Println("Error reading response body:", err)
        return
    }

    // Print the response body
    fmt.Println("Response:", string(responseBody))
}
```

Puedes ver otras implementaciones del cifrado según el lenguaje de tu preferencia: 
 * [Java](https://github.com/google/tink)
 * [Python](https://github.com/google/tink)
 * [NodeJS](https://nodejs.org/api/crypto.html#crypto_class_sign)






