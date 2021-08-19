import { Commands } from "./commands"
import { SocketServer } from "./server"


// Rollup Plugin API
export default ({port = 8080}) => {
  const server = new SocketServer(port)
  return {
    name: 'obsidian-reloader',
    writeBundle: async () => {
      server.broadcast()
    }
  }
}

// Command types for obsidian-reloader
export const COMMANDS = Commands