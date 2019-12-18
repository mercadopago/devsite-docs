---
sites_supported:
- mla
- mpe
- mco
- mlu
- mlm
- mlc
- mlb
---

# QR attended model 

## What is this model?

After taking a client’s order, this **model allows an operator to connect the order with a Point of Sale** to complete the transaction. 
This system is recommended for retail and restaurants, among others.

## Main characteristics

Las características principales son: 

- Operator always works from its Point of Sale system, that was previously set up with a Mercado Pago charge function. From that option, the order is sent to the associated POS.
- For a client to make a payment, an order needs to be linked to a POS. 
- Operator can see the completed payment on its system.


## Model flow

Here's an explanation of how this model works:

>![Flujo de pago en punto de venta QR Mercado Pago](/images/qr-user-flow.en.png)

---

> NOTE
> 
> Nota
> 
> `pos_id`  is an unique identifier of a POS inside Mercado Pago. You’ll get it at the same moment you create a POS and it’ll have an associated QR.

1. (A) Point of Sale (POS) logs the order and sends the data to merchant server.<br/>
(B) Merchant server sends order to Mercado Pago server with a `pos_id`. 
2. Order is linked to a QR code and ready for the client to scan. 
3. Client scans QR and Mercado Pago looks for the order through `pos_id`. If the client scans before the start of the order registration, flow is not affected.
4. (A) Then, merchant server gets a notification for the order. <br/>
(B) Reception is confirmed.<br/>
(C) The client will see the order to complete payment inside the app. <br/>
5. Finally, the client pays the order. 
6. (A) Client will see a payment confirmation. <br/>
(B) merchant server will receive a notification for the order. <br/>
(C) And seller will confirm reception.
7. (A) merchant server asks for order status with ID received in the last notification to know if it’s closed or still remains open.<br/>
(B) Mercado Pago returns respective data like status and payment information, among others. 
8. Once order is **closed**, receipt can be printed.


> NOTE
> 
> Note
> 
> On point 4 you’ll have to follow steps 7A and 7B to get order status.

### Next steps

<div>
<a href="https://www.mercadopago.com.ar/developers/en/guides/qr-code/qr-attended/qr-attended-part-b/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">How to Integrate attended model<span class="card-status-tag card-status-tag-required">REQUIRED</span></p>
<p>Learn to integrate this model step by step.</p>
</blockquote>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
