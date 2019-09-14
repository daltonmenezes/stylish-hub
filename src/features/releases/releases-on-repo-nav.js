import renderReleasesOnRepoNav from '../../ui/releases/render-releases-on-repo-nav'

export default () => {
  const isRenderer = document.querySelector('.releases-repo-nav-item')

  !isRenderer
    ? renderReleasesOnRepoNav()
    : ''
}
