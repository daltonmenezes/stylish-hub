import { isToBeIgnored } from '../../../../utils/is'
import { editorsEndpoints } from './editors'
import renderMarkdownFeature from '../../../../ui/renderer/render-markdown-feature'

export default () =>
  Array.from(document.querySelectorAll('p[value][alt*="type:code"]'), wrapper => {
    const service = wrapper.getAttribute('value').match(/(?:\/\/(www.|))([^.]+)/)[2]
    const canRender = service && !isToBeIgnored(wrapper)

    canRender
      ? renderMarkdownFeature({
          category: 'code-editors',
          endpoint: editorsEndpoints(wrapper)[service],
          wrapper
        })
      : ''
  })
