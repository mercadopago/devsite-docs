# OWASP

At Mercado Pago, we protect the payments of our clients and users so that they are processed safely on all web and mobile platforms. To do this, we implement security controls that maintain the confidentiality, integrity, and availability of the information we process through integrations.
    
Open Web Application Security Project (OWASP) is an open community that provides tools and standards for developing and maintaining secure web applications. It seeks to promote application security research and development. 

OWASP Top 10 is a classification of the most common vulnerabilities in conjunction with their mitigation to protect applications from these types of attacks. We recommend that you visit the [official Owasp Top 10 site](https://owasp.org/www-project-top-ten/) for more information.

Due to the integration you are doing with Mercado Pago, to protect us against the most common vulnerabilities, we suggest you follow the guidelines on Input Validation and Server-Side Request Forgery Prevention. [See OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/index.html)for more information.

>NOTE
>
>Note
>
>It is important to follow good coding practices at all stages of the software's development life cycle to maintain security in all transactions. 


## Input validation

The [input validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) guarantees that all data is syntactically and semantically correct before entering our system's workflow, allowing us to detect unauthorized inputs before they are processed by the application.

In this way, we prevent incorrect data from persisting in our databases and consequently causing a malfunction in our system. All data from unreliable sources should be subject to this validation. 

For its implementation, any programming technique that allows the efficient application of input-data correction is used, namely:

* Validators of data types available natively in web application frameworks.
* Validation against the JSON schema and XML schema for input in these formats.
* Data type conversion with strict exception handling.
* Minimum and maximum value range verification for numeric parameters and dates, minimum and maximum length verification for character strings.

It is critical to ensure that any input validation performed on the client-side also should be performed on the server-side since they could be bypassed on the client-side by an attacker. 


## Server-Side Request Forgery (SSRF)

[Server-Side Request Forgery](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html) (SSRF) is an attack vector that abuses an application to interact with the internal and/or external network, or with our application machine itself. Depending on the functionality and requirements of the application, there are two use cases in which SSRF can occur:


1. **The application can send a request only to identified and trusted applications**

     This case occurs when an application needs to request another one, which is usually localized on another network, to perform a specific task. In this case, it is possible to use an app-allowed-list approach. We can protect ourselves through the Application and Network layers. 

     - **Application Layer**: Through input validation, we can apply the approach of the allowed-applications list. The format of the information expected from the user is already known. In this context, validations can also be added to ensure that the input string respects the expected format. 
     - **Network Layer:** the goal is to prevent arbitrary calls from applications. A firewall can be used to limit application access and, in turn, limit the impact of an application vulnerable to SSRF. 
     <br>


2. **The application can send requests to any external IP address or domain name**

This case occurs when a user can control a URL to an external resource, and the application requests this URL. When we say **external resource**, we mean any IP that does not belong to the internal network and must be reached through the Internet in a public way. 

In this case, it is not possible to use lists of allowed applications as they are initially unknown and change dynamically. 