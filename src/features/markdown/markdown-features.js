import markdownHideElements from './markdown-hide-elements'
import slideshareFeature from './features/media/slides/slideshare-feature'
import videosFeature from './features/media/videos/videos-feature'
import codeEditorsFeature from './features/code-editors/code-editors-feature'

export default () => {
  markdownHideElements()
  slideshareFeature()
  videosFeature()
  codeEditorsFeature()
}
