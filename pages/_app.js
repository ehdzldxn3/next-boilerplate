import Head from 'next/head' 
import PropTypes from "prop-types";
import wrapper from '../store/configureStore';
import '../styles/globals.css'
import 'antd/dist/antd.css';
//모든 화면애서 공통적으로 임포트할 곳


const App = ({ Component, pageProps  }) => {
    return (
        <>
        <Head>
            <meta charSet='utf-8'></meta>
            <title>Boilerplate</title>
        </Head>
        <Component {...pageProps }/>
        </>
    )
}
App.propTypes = {
    Component: PropTypes.elementType.isRequired
}
export default wrapper.withRedux(App)