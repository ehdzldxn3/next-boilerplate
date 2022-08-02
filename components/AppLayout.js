import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
// import '../styles/globals.css'


const AppLayout = ({ children}) => {
    const login = useSelector(state => state.user.loginCheck)
    return (
        <div 
            // style={{minHeight:'100vh'}}
        >
            {children}
        </div>
    )
}

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,
}

export default AppLayout