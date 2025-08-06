import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../feactures/counterSlice';

function Counter() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()


  return (
    <div className='main'>
      <h1>Counter App</h1>
     <button onClick={()=>dispatch(increment())}>+</button>
     <span>{count}</span>
     <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
