import config from './svg/config'
import renderOnFeedBoxesFooter from '../renderer/render-on-feed-boxes-footer'

export default () =>
  renderOnFeedBoxesFooter({
    ...config,
    className: 'issues-feed-icon'
  }, el => {
    const issueNeedsHelp = el.querySelector('a[href*="issues"][class="muted-link"]')

    issueNeedsHelp
      ? issueNeedsHelp
          .parentElement
          .remove()
      : ''
  })
