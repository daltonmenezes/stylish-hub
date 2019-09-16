export default wrapper => {
  const params = wrapper.getAttribute('value').match(/([^\/]+)/g)
  const user = params[2]
  const id = params[3]

  return `https://repl.it/${user}/${id}?lite=true`
}
