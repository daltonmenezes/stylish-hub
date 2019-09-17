import { isFirefox } from './utils/is'
import observer from './observer'
import gistsOnProfile from './features/gists/gists-on-profile'
import pullRequestsOnFeed from './features/pull-requests/pull-requests-on-feed'
import pullRequestsOnProfile from './features/pull-requests/pull-requests-on-profile'
import issuesOnFeed from './features/issues/issues-on-feed'
import issuesOnProfile from './features/issues/issues-on-profile'
import assetsDownloadCounter from './features/releases/assets/assets-download-counter'
import releasesOnRepoNav from './features/releases/releases-on-repo-nav'
import markdownFeatures from './features/markdown/markdown-features'
import followStatusOnProfile from './features/followers/follow-status-on-profile'

const app = () => {
  gistsOnProfile()
  pullRequestsOnFeed()
  pullRequestsOnProfile()
  issuesOnFeed()
  issuesOnProfile()
  releasesOnRepoNav()
  followStatusOnProfile()
}

isFirefox
  ? app()
  : ''

observer(app)
assetsDownloadCounter()
markdownFeatures()

export default app
