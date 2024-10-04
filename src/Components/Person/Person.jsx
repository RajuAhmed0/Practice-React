function Person(props) {
    return (
        <div style={{
            border: '2px solid green',
            borderRadius:'20px'
        }}>
            <p style={{fontSize: '25px'}}>name: {props.name}</p>
            <p style={{fontSize: '20px'}}>age: {props.age}</p>
            <p style={{fontSize: '22px'}}>gender: {props.gender}</p>
        </div>
    )
}
export default Person