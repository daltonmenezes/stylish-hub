import codepen from './codepen'
import repl from './repl'

export const editorsEndpoints = wrapper => ({
  codepen: codepen(wrapper),
  repl: repl(wrapper)
})
