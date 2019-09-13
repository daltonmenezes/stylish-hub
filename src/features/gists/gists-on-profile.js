import { request, config } from '../../api'
import renderGistsOnProfile from '../../ui/gists/render-gists-on-profile'
import renderNumberOfGists from '../../ui/gists/render-number-of-gists'

export default async () => {
  const nickname = document.querySelector('.p-nickname')
  const isProfile = document.body.classList.contains('page-profile')
  const isRendered = document.getElementById('gists-counter')
  const canRender = isProfile && nickname && !isRendered

  if (canRender) {
      const user = nickname.textContent

      renderGistsOnProfile(user)

      const endpoint = `${ config.baseURL }users/${ user }`
      const { public_gists } = await request(endpoint)

      renderNumberOfGists(public_gists)
  }
}
