export default numberOfGists => {
  const badge = document.createElement('span')

  badge.classList.add('Counter', 'hide-lg', 'hide-md', 'hide-sm', 'gists-counter-badge')
  badge.textContent = numberOfGists

  document
    .getElementById('gists-counter')
    .appendChild(badge)
}
