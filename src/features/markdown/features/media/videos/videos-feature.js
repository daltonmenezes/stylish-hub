import { isToBeIgnored } from '../../../../../utils/is'
import { videoEndpoints } from './video-endpoints'
import renderMarkdownFeature from '../../../../../ui/renderer/render-markdown-feature'

export default () =>
  Array.from(document.querySelectorAll('p[value][alt*="type:video"]'), wrapper => {
    const value = wrapper.getAttribute('value')
    const autoplay = wrapper.getAttribute('alt').includes('autoplay') ? 'autoplay=1' : ''
    const [videoID] = value.split(/\/|\?v=/g).reverse()
    const service = value.match(/(?:\/\/(www.|))([^.]+)/)[2]
    const canRender = videoID && service && !isToBeIgnored(wrapper)

    canRender
      ? renderMarkdownFeature({
          category: 'videos',
          allow: 'autoplay; encrypted-media;',
          endpoint: `${videoEndpoints(videoID)[service]}${autoplay}`,
          wrapper
        })
      : ''
  })
