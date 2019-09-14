import { isFirefox } from './utils/is'
import observer from './observer'
import gistsOnProfile from './features/gists/gists-on-profile'
import pullRequestsOnFeed from './features/pull-requests/pull-requests-on-feed'
import pullRequestsOnProfile from './features/pull-requests/pull-requests-on-profile'
import issuesOnFeed from './features/issues/issues-on-feed'

const app = () => {
  gistsOnProfile()
  pullRequestsOnFeed()
  pullRequestsOnProfile()
  issuesOnFeed()
}

isFirefox
  ? app()
  : ''

observer(app)

export default app
