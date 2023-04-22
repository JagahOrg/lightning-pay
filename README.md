# lightning-pay
Lightning-pay allows for payment of several kinds of bills (including airtime, data bundles, Internet, electricity and cable TV) in Nigeria and across multiple African countries with Bitcoin

# figma link
https://www.figma.com/file/9eTiQVaYwctk0MDFldAqpv/Lightning-pay?node-id=1-2&t=QAnn8Dw4hBUbbRIr-0

# Resources
Voltage: Lightning Node and BTC Pay Server

Payment Button Example Code from Voltage

```
<form method="POST" action="https://btcpay0.voltageapp.io/apps/5wMxeDQ3YSs1ws6yU8CDY8HGif3/pos">
        <input type="hidden" name="email" value="customer@example.com" />
        <input type="hidden" name="orderId" value="CustomOrderId" />
        <input type="hidden" name="notificationUrl" value="https://example.com/callbacks" />
        <input type="hidden" name="redirectUrl" value="https://example.com/thanksyou" />
        <button type="submit" name="choiceKey" value="lightning-pay">Buy now</button>
      </form>
```
