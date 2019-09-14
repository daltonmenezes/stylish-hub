import { isReleasesPage } from '../../../utils/is'
import { request, config } from '../../../api'
import getAssetsInPage from './get-assets-in-page'
import renderAssetsDownloadCounter from '../../../ui/releases/render-assets-download-counter'

export default async () => {
  if (isReleasesPage) {
      const [owner, repo] = location.pathname.match(/([^\/]+)/g)
      const assetsFromDOM = getAssetsInPage()
      const endpoint = `${config.baseURL}repos/${owner}/${repo}/releases`
      const releases = await request(endpoint)

      assetsFromDOM.map(assetFromDOM =>
        releases.map(release =>
          release.assets.find(assetFromAPI => {
            const isRightAsset = assetFromDOM.textContent === assetFromAPI.name
            const isRightRelease = assetFromDOM.parentElement.href.match(/(?:\/releases\/download\/)([^\/]+)/)[1] === release.tag_name
            const canRender = isRightAsset && isRightRelease

            canRender
              ? renderAssetsDownloadCounter(assetFromAPI, assetFromDOM)
              : ''
          })
        )
      )
  }
}
