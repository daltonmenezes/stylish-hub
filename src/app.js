import { isFirefox } from './utils/is'
import observer from './observer'
import gistsOnProfile from './features/gists/gists-on-profile'
import pullRequestsOnFeed from './features/pull-requests/pull-requests-on-feed'
import pullRequestsOnProfile from './features/pull-requests/pull-requests-on-profile'
import issuesOnFeed from './features/issues/issues-on-feed'
import issuesOnProfile from './features/issues/issues-on-profile'
import assetsDownloadCounter from './features/releases/assets/assets-download-counter'
import releasesOnRepoNav from './features/releases/releases-on-repo-nav'
import markdownHideElements from './features/markdown/markdown-hide-elements'

const app = () => {
  gistsOnProfile()
  pullRequestsOnFeed()
  pullRequestsOnProfile()
  issuesOnFeed()
  issuesOnProfile()
  releasesOnRepoNav()
}

isFirefox
  ? app()
  : ''

observer(app)
assetsDownloadCounter()
markdownHideElements()

export default app
