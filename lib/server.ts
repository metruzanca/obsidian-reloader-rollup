import { Server } from 'ws';
import { Commands } from './commands';

export class SocketServer {
  wss:Server

  constructor(port: number = 8080) {
    this.wss = new Server({ port })
    this.wss.on('connection', this.handleConnection)
  }

  private handleConnection(ws: WebSocket) {
    console.log('Obsidian instance connected')
  }

  broadcast() {
    console.log('Reloading Obsidian')
    this.wss.clients.forEach(client => {
      client.send(Commands.RELOAD)
    });
  }
}