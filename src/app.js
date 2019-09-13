import { isFirefox } from './utils/is'
import observer from './observer'
import gistsOnProfile from './features/gists/gists-on-profile'

const app = () =>
  gistsOnProfile()

isFirefox
  ? app()
  : ''

observer(app)

export default app
