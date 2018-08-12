import defaultScaffold from './scaffold'
import errorHandler from './errorHandling'

const server = async (hostname, port) => {
  const scaffold = defaultScaffold(hostname, port)
  while (scaffold.canSpawn()) {
    scaffold.spawn()
      .then((info) => console.log(`${info.name} is listening at ${info.address}.`))
  }
}
server('localhost', 'port')
  .catch(errorHandler)
