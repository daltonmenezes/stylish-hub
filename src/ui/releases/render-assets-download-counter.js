import config from './svg/config'
import createSVG from '../../utils/svg/create-svg'

export default (assetFromAPI, assetFromDOM) => {
  const counter = document.createElement('span')

  counter.setAttribute('id', assetFromAPI.name)
  counter.classList.add('text-gray', 'assets-download-counter')

  counter.textContent = Intl
    .NumberFormat()
    .format(assetFromAPI.download_count)

  const svg = createSVG(config.svg)

  counter.prepend(svg)

  const fileSize = assetFromDOM
    .parentElement
    .parentElement
    .querySelector('small')

  fileSize.prepend(counter)
}

