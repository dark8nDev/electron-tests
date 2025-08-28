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

const ports: Map<string,any> = new Map();

export async function getAllPorts() {
  return await SerialPort.list()
}

export function createPort(path: string): void {
  if(ports.has(path)) {
    return console.log(`Port ${path} already exists`)
  }

  ports.set(path, new SerialPort({
    path: path,
    baudRate: 9600
  }))
  
  console.log(`Port ${path} created`)
}

export function getConections(): number {
  console.log(ports)
  return ports.size;
}
