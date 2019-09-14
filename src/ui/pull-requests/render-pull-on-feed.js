import { SVGDPath } from './svg-d-path'
import renderOnFeedBoxesFooter from '../renderer/render-on-feed-boxes-footer'

export default () =>
  renderOnFeedBoxesFooter({
    category: 'pulls',
    className: 'pull-request-feed-icon',
    svg: {
      dPath: SVGDPath,
      className: 'octicon-git-pull-request'
    }
  })
