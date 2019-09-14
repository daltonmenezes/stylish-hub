import { SVGDPath } from './svg-d-path'
import renderOnRepoTabBoxesFooter from '../renderer/render-on-repo-tab-boxes-footer'

export default () =>
  renderOnRepoTabBoxesFooter({
    category: 'pulls',
    className: 'pull-request-profile-icon',
    svg: {
      dPath: SVGDPath,
      className: 'octicon-git-pull-request'
    }
  })
