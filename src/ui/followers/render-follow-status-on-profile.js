export default status => {
  const span = document.createElement('span')

  span.classList.add('follow-status', 'd-block')
  span.textContent = status

  const wrapper = document.querySelector('h1[class="vcard-names"]')

  wrapper.appendChild(span)
}
