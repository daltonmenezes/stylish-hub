import config from './svg/config'
import renderOnFeedBoxesFooter from '../renderer/render-on-feed-boxes-footer'

export default () =>
  renderOnFeedBoxesFooter({
    ...config,
    className: 'pull-request-feed-icon'
  })
