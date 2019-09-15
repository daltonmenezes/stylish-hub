export default feature => {
  const {
    category,
    endpoint,
    allow,
    wrapper
  } = feature

  const iframe = document.createElement('iframe')

  iframe.classList.add(category)
  iframe.src = endpoint
  iframe.frameBorder = 0,
  iframe.scrolling = 'no'
  iframe.allow  =  allow
  iframe.allowFullscreen = 'allowfullscreen'

  wrapper.appendChild(iframe)
  wrapper.classList.add(`${category.slice(0, -1)}-wrapper`)
}
