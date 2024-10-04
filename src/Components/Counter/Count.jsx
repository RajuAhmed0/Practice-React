import { useState } from "react"

const Count = () =>{
    const [counting, setCounting] = useState(0) 

    // const clickAlert = () =>{
    //     alert('Practice on React')
    // }

    // const alertClick = () =>{
    //     alert('Please Click Down Button')
    // }
    // const alertClick2 = () =>{
    //     alert('Please Click Down Up')
    // }
 
    // const handClick = (num) =>{
    //     alert(num + 10)
    // }
    // const handClick = (num) =>{
    //     alert(20 + 10)
    // }
    // const handClick = (num1, num2) =>{
    //     alert(num1 + num2)
    // }

    const Up = ()=>{
        const countingUp = counting + 1
        setCounting(countingUp)
    }

    
    
return (
    <div>
        {/* <button onClick={handClick} style={{marginBottom: '20px', backgroundColor:'gray'  }}>Click Now</button> */}
        {/* <button onClick={handClick} style={{marginBottom: '20px', backgroundColor:'gray'  }}>Click Now</button> */}
        {/* <button onClick={() => handClick(10, 1)} style={{marginBottom: '20px', backgroundColor:'gray'  }}>Click Now</button> */}
        {/* <button onClick={() => alert('Dont touch me')} style={{marginBottom: '20px', backgroundColor:'gray'  }}>Click Now</button> */}
        {/* <button onClick={() => alert(100 * 5)} style={{marginBottom: '20px', backgroundColor:'gray'  }}>Click Now</button> */}

        <div style={{border: '2px solid tomato', padding:'30px', borderRadius: '50px', marginBottom: '80px'}}>
            <h1>Count: {counting}</h1>
            <button onClick={Up}  style={{marginRight: '20px', backgroundColor:'yellow'  }}>Up</button>
            <button onClick={() => {setCounting(counting-1)}} style={{ backgroundColor:'pink'  }}>Down</button>
        </div>
    </div>
)
}
export default Count