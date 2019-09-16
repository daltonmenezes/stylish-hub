import codepen from './codepen'
import repl from './repl'
import codesandbox from './codesandbox'

export const editorsEndpoints = wrapper => ({
  codepen: codepen(wrapper),
  repl: repl(wrapper),
  codesandbox: codesandbox(wrapper)
})
