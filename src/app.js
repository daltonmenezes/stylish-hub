import { isFirefox } from './utils/is'
import observer from './observer'
import gistsOnProfile from './features/gists/gists-on-profile'
import pullRequestsOnFeed from './features/pull-requests/pull-requests-on-feed'

const app = () => {
  gistsOnProfile()
  pullRequestsOnFeed()
}

isFirefox
  ? app()
  : ''

observer(app)

export default app
