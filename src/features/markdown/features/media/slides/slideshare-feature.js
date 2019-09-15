import { isToBeIgnored } from '../../../../../utils/is'
import renderMarkdownFeature from '../../../../../ui/renderer/render-markdown-feature'

export default () =>
  Array.from(document.querySelectorAll('p[value][alt*="type:slide"]'), wrapper => {
    if (!isToBeIgnored(wrapper)) {
        const [slideID] = wrapper
          .getAttribute('value')
          .split('/')
          .reverse()

        const endpoint = `https://www.slideshare.net/slideshow/embed_code/key/${slideID}`

        renderMarkdownFeature({
          category: 'slides',
          allow: 'autoplay; encrypted-media;',
          wrapper,
          endpoint
        })
    }
  })
