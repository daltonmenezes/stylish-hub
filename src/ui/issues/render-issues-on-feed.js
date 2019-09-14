import { SVGDPath } from './svg-d-path'
import renderOnFeedBoxesFooter from '../renderer/render-on-feed-boxes-footer'

export default () =>
  renderOnFeedBoxesFooter({
    category: 'issues',
    className: 'issues-feed-icon',
    svg: {
      className: 'octicon-git-issue-opened',
      dPath: SVGDPath,
      viewBox: '0 0 14 16',
      width: '14',
      height: '16',
    }
  })
