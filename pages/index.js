import AppLayout from "../components/AppLayout"
import wrapper from '../store/configureStore'


const index = (props) => {

  console.log(props)

  return (
    <AppLayout>
      <div>
        index
      </div>
    </AppLayout>
    
  )
}

//SSR
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//     let SSR = 'SSR'
//     return {
//       props : {
//         SSR
//       }
//     }
//   }
// )

//SSG
// export const getStaticProps = wrapper.getStaticProps(
//   (store) => async (context) => {
//     let SSG = 'SSG'
//     return {
//       props : {
//         SSG
//       }
//     }
//   }
// )



export default index