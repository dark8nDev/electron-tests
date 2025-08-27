import { SerialPort, ReadlineParser } from "serialport";

const port = new SerialPort({
  path: "COM3",
  baudRate: 9600 
})

const parser = port.pipe(new ReadlineParser({ delimiter: '\n', encoding: 'utf8' }));
// const parser = port.pipe(new ReadlineParser())

export function getPort() {
  return parser
}
