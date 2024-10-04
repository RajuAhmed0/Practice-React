
import './App.css';
import Count from './Components/Counter/Count';
import Person from './Components/Person/Person';
import StudentsInfo from './Components/StudentsInfo/StudentInfo';


function App() {


  return (
    <>
      <h1>Vite + React</h1>
      <p style={{ fontSize: '30px' }}>Practice On React</p>

      {/* <div className='mb-6'>
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
      </div> */}
     {/*  <div className='mb-6'>
        <Person name='Akash' age='29' gender='male'></Person>
      </div>
      <div className='mb-6'>
        <Person name='Sima' age='20' gender='female'></Person>
      </div>
      <div className='mb-6'>
        <Person name='Billu' age='27' gender='male'></Person>
      </div>
      <div className='mb-6'>
        <Person name='Abida' age='19' gender='female'></Person>
      </div> */}
  <Count></Count>

    </>
  )
}

export default App
