import { isReleasesPage, isTagsPage } from '../../utils/is'
import config from './svg/octicon-tag/config'
import createSVG from '../../utils/svg/create-svg'

export default () => {
  const pathname = location.pathname.split('/')
  const owner = pathname[1]
  const repo = pathname[2]
  const codeItemOnNav = document.querySelector('.hx_reponav.reponav span:first-child a')
  const repoNav = document.querySelector('.hx_reponav.reponav span')
  const releasesURL = `https://${location.hostname}/${owner}/${repo}/releases`

  if (repoNav) {
      const wrapper = document.createElement('span')

      wrapper.setAttribute('itemscope', 'itemscope')
      wrapper.setAttribute('itemtype', 'http://schema.org/ListItem')
      wrapper.setAttribute('itemprop', 'itemListElement')
      wrapper.classList.add(config.className)

      const link = document.createElement('a')

      link.setAttribute('itemprop', 'url')
      link.setAttribute('data-hotkey', 'g r')
      link.setAttribute('aria-current', 'page')
      link.setAttribute('data-selected-links', 'repo_releases repo_tags')
      link.classList.add('js-selected-navigation-item', 'reponav-item')
      link.href = releasesURL

      if (isReleasesPage || isTagsPage) {
          link.classList.add('selected')
          codeItemOnNav.classList.remove('selected')
      }

      const svg = createSVG(config.svg)

      svg.classList.add('octicon', config.svg.className)

      link.appendChild(svg)

      const name = document.createElement('span')

      name.setAttribute('itemprop', 'name')
      name.textContent = ' Releases '

      link.appendChild(name)

      wrapper.appendChild(link)

      repoNav.insertAdjacentElement('afterend', wrapper)
  }
}
