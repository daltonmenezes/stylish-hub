export default wrapper => {
  const options = wrapper.getAttribute('alt')
  const params = wrapper.getAttribute('value').match(/([^\/]+)/g)
  const hasDefaultTab = options.match(/(?:default-tab:)([^\s]+)/) || ''
  const hasTheme = options.match(/(?:theme:)([^\s]+)/) || ''
  const user = params[2]
  const penID = params[4]

  const defaultTab =
    hasDefaultTab.length >= 2
      ? `&default-tab=${hasDefaultTab[1]}`
      : ''

  const theme =
    hasTheme.length >= 2
      ? hasTheme[1]
      : 'light'

  return `https://codepen.io/${user}/embed/${penID}?theme-id=${theme}${defaultTab},result`
}
