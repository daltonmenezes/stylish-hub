import { isToBeIgnored } from '../../../../../utils/is'
import { videoEndpoints } from './video-endpoints'
import renderMarkdownFeature from '../../../../../ui/renderer/render-markdown-feature'

export default () =>
  Array.from(document.querySelectorAll('p[value][alt*="type:video"]'), wrapper => {
    const [videoID] = wrapper.getAttribute('value').split(/\/|\?v=/g).reverse()
    const service = wrapper.getAttribute('value').match(/(?:\/\/(www.|))([^.]+)/)[2]
    const canRender = videoID && service && !isToBeIgnored(wrapper)

    canRender
      ? renderMarkdownFeature({
          category: 'videos',
          allow: 'autoplay; encrypted-media;',
          endpoint: videoEndpoints(videoID)[service],
          wrapper
        })
      : ''
  })
