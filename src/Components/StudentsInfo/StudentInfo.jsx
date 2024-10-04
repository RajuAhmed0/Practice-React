/* function StudentsInfo(props) {
    const cardStyle = {
        border: '2px solid tomato',
        borderRadius: '20px',
         padding: "20px"
    }
   return(
    <div style={cardStyle}>
        <h3>Student Information</h3>
        <p style={{fontSize: '20px'}}>name: {props.name}</p>
        <p style={{fontSize: '20px'}}>age: {props.age}</p>
        <p style={{fontSize: '20px'}}>isMale: {props.isMale}</p>
    </div>
   ) 
} */

   function StudentsInfo({name, age, isMale}) {
    const cardStyle = {
        border: '2px solid tomato',
        borderRadius: '20px',
         padding: "20px"
    }
   return(
    <div style={cardStyle}>
        <h3>Student Information</h3>
        <p style={{fontSize: '20px'}}>name: {name}</p>
        <p style={{fontSize: '20px'}}>age: {age}</p>
       {
        isMale === true ?  <div>Boy</div> : <div>Girl</div>
       }
    </div>
   ) 
}

export default StudentsInfo