import { Console } from './../index'

const con = new Console()

con.on('log', msg => {
    console.log(msg)
})

con.log('Hello', null, { context: '[Teste]' })
