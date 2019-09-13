export default user => {
  const wrapper = document.createElement('a')

  wrapper.classList.add('UnderlineNav-item', 'mr-0', 'mr-md-1', 'mr-lg-3')
  wrapper.id = 'gists-counter'
  wrapper.href = `https://gist.github.com/${ user }`
  wrapper.textContent = 'Gists'

  document
    .querySelector('.UnderlineNav-body a + a')
    .insertAdjacentElement('afterend', wrapper)
}
