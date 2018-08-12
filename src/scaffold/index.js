import { Scaffold } from 'organiser'
import HelloWorldController from '../controllers/helloWorld'

export default function () {
  const scaffold = new Scaffold('HelloWorld #{id}')
  scaffold.routes.add(HelloWorldController)
  return scaffold
}
