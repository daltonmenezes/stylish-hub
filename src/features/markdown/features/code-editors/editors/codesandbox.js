export default wrapper => {
  const id = wrapper.getAttribute('value').match(/([^\/]+)/g)[3]

  return `https://codesandbox.io/embed/${id}`
}
