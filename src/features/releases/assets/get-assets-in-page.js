export default () =>
  Array.from(
    document.querySelectorAll('a[href*="releases/download"] > span')
  )
