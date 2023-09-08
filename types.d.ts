declare module 'http' {
  import { Server as WSServer } from 'ws';

  export interface Server {
    ws?: WSServer;
  }

  export interface IncomingMessage {
    socket: Socket;
  }

  export interface Socket {
    server: Server;
  }
}
