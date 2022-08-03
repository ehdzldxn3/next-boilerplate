import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
// import '../styles/globals.css'


const AppLayout = ({children}) => {
    
    const login = useSelector(state => state.user.loginCheck)
    return (
        <div>
            {children}
        </div>
    )
}

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,
}

export default AppLayout