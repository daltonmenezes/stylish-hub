import renderPullOnPinnedCards from '../../ui/pull-requests/render-pull-on-pinned-cards'
import renderPullOnRepoTab from '../../ui/pull-requests/render-pull-on-repo-tab'

export default () => {
  const isRendered = document.querySelector('a[class*="pull-request-profile-icon"]')

  if (!isRendered) {
      renderPullOnPinnedCards()
      renderPullOnRepoTab()
  }
}
