import config from './svg/config'
import renderOnPinnedCardsFooter from '../renderer/render-on-pinned-cards-footer'

export default () =>
  renderOnPinnedCardsFooter({
    ...config,
    className: 'pull-request-profile-icon'
  })
