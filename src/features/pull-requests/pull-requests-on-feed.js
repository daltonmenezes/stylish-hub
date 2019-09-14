import { isFeedPage } from '../../utils/is'
import renderPullOnFeed from '../../ui/pull-requests/render-pull-on-feed'
import waitFor from '../../utils/wait-for'

export default () =>
  isFeedPage
    ? waitFor(
        () => document.querySelector('div[class="watch_started"]'),
        () => {
          const isRendered = document.querySelector('a[class*="pull-request-feed-icon"]')

          !isRendered
            ? renderPullOnFeed()
            : ''
        }
      )
    : ''
