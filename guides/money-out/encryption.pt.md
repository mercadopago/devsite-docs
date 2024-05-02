# Criptografia ponta a ponta

Para garantir a segurança de suas transações Money Out, você deve realizar uma criptografia de ponta a ponta. Isso envolve a criação de um mecanismo de chave pública-privada, no qual um request é criptografado por meio de uma chave de segurança, e outra chave é usada para validá-lo.

Portanto, você deve enviar sua chave pública para o Mercado Pago para a validação de suas transações, e manter sua chave privada armazenada de forma segura para criptografar seus requests.


> WARNING
> 
> Importante
>
> EO envio da chave de segurança é necessário apenas em ambientes de produção.  Basta somar o cabeçalho `x-Signature` com o body do request criptografado como valor. Para ambientes de desenvolvimento ou de teste, você não é obrigatório enviá-la. Para mais informações, consulte nossa ----[mlc]---- [Referência de API](/developers/pt/reference/money-out/bank-transfer-mlc/post)------------ ----[mlb]---- [Referência de API](/developers/pt/reference/money-out/bank-transfer-mlb/post)------------.

Para **criar as chaves pública e privada no Linux ou MacOS**, execute o seguinte comando em seu terminal:

```terminal
openssl genpkey -algorithm ed25519 -out mpprivate.pem && 
openssl pkey -in mpprivate.pem -pubout -out mppublic.pem
```

CEm resposta, serão gerados dois arquivos, um com sua chave pública, que você deve enviar ao Mercado Pago, e outro com a chave privada, que deve ser armazenada de forma segura em seu sistema.

Para enviar sua chave pública, você precisará se conectar com a equipe de Integrações. Abaixo, fornecemos o seguinte exemplo de requisição, no qual o arquivo `private.key`é lido, o request é criptografado e a assinatura é adicionada ao cabeçalho.

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

Você pode ver outras implementações de criptografia de acordo com a linguagem de sua preferência: 
 * [Java](https://github.com/google/tink)
 * [Python](https://github.com/google/tink)
 * [NodeJS](https://nodejs.org/api/crypto.html#crypto_class_sign)

