import renderPullOnFeed from '../../ui/pull-requests/render-pull-on-feed'
import waitFor from '../../utils/wait-for'

export default () => {
  const isFeedPage = location.pathname === '/'

  if (isFeedPage) {
      waitFor(
        () => document.querySelector('div[class="watch_started"]'),
        () => {
          const isRendered = document.querySelector('a[class*="pull-request-feed-icon"]')

          !isRendered
            ? renderPullOnFeed()
            : ''
        }
      )
  }
}
