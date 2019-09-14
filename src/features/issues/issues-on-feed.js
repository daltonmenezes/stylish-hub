import { isFeedPage } from '../../utils/is/is-feed-page'
import renderIssuesOnFeed from '../../ui/issues/render-issues-on-feed'
import waitFor from '../../utils/wait-for'

export default () =>
  isFeedPage
    ? waitFor(
        () => document.querySelector('div[class="watch_started"]'),
        () => {
          const isRendered = document.querySelector('a[class*="issues-feed-icon"]')

          !isRendered
            ? renderIssuesOnFeed()
            : ''
        }
      )
    : ''
