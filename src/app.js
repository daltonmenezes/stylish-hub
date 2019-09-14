import { isFirefox } from './utils/is'
import observer from './observer'
import gistsOnProfile from './features/gists/gists-on-profile'
import pullRequestsOnFeed from './features/pull-requests/pull-requests-on-feed'
import pullRequestsOnProfile from './features/pull-requests/pull-requests-on-profile'

const app = () => {
  gistsOnProfile()
  pullRequestsOnFeed()
  pullRequestsOnProfile()
}

isFirefox
  ? app()
  : ''

observer(app)

export default app
