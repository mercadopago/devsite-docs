# End-to-end Encryption

To ensure the security of your Money Out transactions, you will need to implement end-to-end encryption. This involves creating a public-private key mechanism, where a request is encrypted using a security key and another key is used to validate it.

Therefore, you must send your public key to Mercado Pago for transaction validation, and securely store your private key to encrypt your requests.

> WARNING
>
> Important
>
> Sending the security key is only necessary in production environments. Simply add the `x-Signature` header with the encrypted request body as the value. In development or testing environments, it is not mandatory to send it. For more information, refer to our ----[mlc]---- [API Reference](/developers/en/reference/money-out/bank-transfer-mlc/post)------------ ----[mlb]---- [API Reference](/developers/en/reference/money-out/bank-transfer-mlb/post)------------.

To **generate public and private keys in Linux or MacOS**, run the following command in your terminal:

```terminal
openssl genpkey -algorithm ed25519 -out mpprivate.pem && 
openssl pkey -in mpprivate.pem -pubout -out mppublic.pem
```

In response, two files will be generated, one with your public key, which you must send to Mercado Pago, and another with the private key, which you must securely store in your system.

To send your public key, you will need to connect with the Integrations team. Below, we provide an example request, where the `private.key` file is read, the request is encrypted, and the signature is added to the header.

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

You can see other encryption implementations according to your preferred programming language here: 
 * [Java](https://github.com/google/tink)
 * [Python](https://github.com/google/tink)
 * [NodeJS](https://nodejs.org/api/crypto.html#crypto_class_sign)
