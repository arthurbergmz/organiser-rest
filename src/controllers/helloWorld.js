import { Static, Arguments, GET } from 'organiser'

export default class HelloWorld {
  
  @Static
  @GET
  get () {
    this.response.ok('Hello, world!').send()
  }

  @GET
  @Path('{name}')
  @Arguments(['name'])
  getWithParameter ({ name }) {
    this.response.ok(`Hello, ${name}!`).send()
  }

}
