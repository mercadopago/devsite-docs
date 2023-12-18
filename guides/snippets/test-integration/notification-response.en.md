When you receive a notification on your platform, Mercado Pago waits for a response to validate that you received it correctly. For that, you must return an `HTTP STATUS 200 (OK)` or `201 (CREATED)`. If this response is not sent, it will be understood that you have not received the notification and a further attempt to send it will be made until you submit the response.

In the table below you can find the main events, deadlines and waiting time for receiving new notification attempts.

| Event | Deadline after the first dispatch | Confirmation waiting time |
| --- | --- | --- |
| Shipping | - | 22 seconds |
| First try | 15 minutes | 5 seconds |
| Second attempt | 30 minutes | 5 seconds |
| Third attempt | 6 hours | 5 seconds |
| Fourth attempt | 48 hours | 5 seconds |
| Fifth attempt | 96 hours | 5 seconds |