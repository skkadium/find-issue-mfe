import { configureAxios } from '../api/configureAxios'
import PersonView from '../components/person/PersonView'

// Configure Axios with a callback function to handle unauthorized requests.
// If a request is unauthorized, the function will remove the onbeforeunload event handler and reload the page.
configureAxios({
  onBffUnauthorized: () => {
    window.onbeforeunload = null
    window.location.reload()
  }
})

/**
 * AppRoot Component
 *
 * @description
 * The root component of the application. It renders different components based on the secure state.
 *
 * @returns {JSX.Element}
 * A React Element representing the root of the application UI.
 */
const AppRoot = () => {
  return <PersonView />
}

export default AppRoot
