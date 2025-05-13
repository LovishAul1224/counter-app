import { useState } from 'react'
import './Counter.css'

    export function Counter(){
// Define state using useState hook
        const [count, setCount] = useState(0);

        return(
          <div className='counter'>
              <h1>Counter App</h1>
              <p>Count: {count}</p>
              <CustomIncrementButton count={count} setCount={setCount}></CustomIncrementButton><br />
              <CustomDecrementComponent count={count} setCount={setCount}></CustomDecrementComponent><br />
          </div>
        );
    }
       // increment component
        function CustomIncrementButton(props){
           // function to handle state changes
            const increment = () =>{
            props.setCount(props.count+1);
            }

            return <div>
                <button onClick={increment}>increment</button>
                </div>
        }

          // decrement component

        function CustomDecrementComponent(props){
    
              const decrement = () =>{
              props.setCount(props.count-1);
              }

            return <div>
                <button onClick={decrement}>decrement</button>
                </div>
        }



    export default Counter;