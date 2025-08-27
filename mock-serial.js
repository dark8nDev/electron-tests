import { SerialPortStream } from '@serialport/stream'
import { MockBinding } from '@serialport/binding-mock'

MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })
const port = new SerialPortStream({ binding: MockBinding, path: '/dev/ROBOT', baudRate: 14400 })

port.on('open', () => {
  console.log("OPEN")
})

port.on("error", (err) => {
  console.err("Erro de puerto")
})

export function serialPort() {
  return port
}
