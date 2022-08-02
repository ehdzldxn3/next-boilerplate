import AppLayout from "../components/AppLayout"
import wrapper from '../store/configureStore'


const index = () => {



  return (
    <AppLayout>
      <div>
        index
      </div>
    </AppLayout>
    
  )
}

//화면을 그리기 전에 실행됨
export const getServerSideProps = wrapper.getServerSideProps((context) => {

  
  //화면 그리기전에 서버에서 데이터 받아올떄 사용 한다
  // console.log(context)

  

})



export default index