import config from './svg/config'
import renderOnRepoTabBoxesFooter from '../renderer/render-on-repo-tab-boxes-footer'

export default () =>
  renderOnRepoTabBoxesFooter({
    ...config,
    className: 'issues-profile-icon'
  })
