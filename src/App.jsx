
import './App.css';
import StudentsInfo from './Components/StudentsInfo/StudentInfo';


function App() {


  return (
    <>
      <h1>Vite + React</h1>
      <p style={{ fontSize: '30px' }}>Practice On React</p>

      <div className='mb-6'>
        <StudentsInfo name='Raju' age='22' isMale={true} ></StudentsInfo>
      </div>
      <div className='mb-6'>
        <StudentsInfo name='Sajib' age='24' isMale={true} ></StudentsInfo>
      </div>
      <div className='mb-6'>
        <StudentsInfo name='Asif' age='26' isMale={true} ></StudentsInfo>
      </div>
      <div className='mb-6'>
        <StudentsInfo name='Tumpa' age='19' isMale={false} ></StudentsInfo>
      </div>


    </>
  )
}

export default App
