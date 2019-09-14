import renderIssuesOnPinnedCards from '../../ui/issues/render-issues-on-pinned-cards'
import renderIssuesOnRepoTab from '../../ui/issues/render-issues-on-repo-tab'

export default () => {
  const isRendered = document.querySelector('a[class*="issues-profile-icon"]')

  if (!isRendered) {
      renderIssuesOnPinnedCards()
      renderIssuesOnRepoTab()
  }
}
