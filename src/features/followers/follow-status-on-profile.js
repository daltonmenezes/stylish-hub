import { request, config } from '../../api'
import renderFollowStatusOnProfile from '../../ui/followers/render-follow-status-on-profile'

export default async () => {
  const userLogin = document.querySelector('meta[name="user-login"]').getAttribute('content')
  const profileUsername = document.querySelector('meta[property="profile:username"]')

  if (profileUsername) {
      const endpoint = `${config.baseURL}users/${userLogin}/followers`
      const followers = await request(endpoint)

      const isFollowing =
        followers.find(user =>
          user.login === profileUsername.getAttribute('content')
        )

      isFollowing
        ? setTimeout(() => {
            const isRendered = document.querySelector('.follow-status')

            !isRendered
              ? renderFollowStatusOnProfile('Follows you')
              : ''
          }, 100)
        : ''
  }
}
