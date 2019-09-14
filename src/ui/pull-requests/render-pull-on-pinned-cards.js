import { SVGDPath } from './svg-d-path'
import renderOnPinnedCardsFooter from '../renderer/render-on-pinned-cards-footer'

export default () =>
  renderOnPinnedCardsFooter({
    category: 'pulls',
    className: 'pull-request-profile-icon',
    svg: {
      dPath: SVGDPath,
      className: 'octicon-git-pull-request'
    }
  })
