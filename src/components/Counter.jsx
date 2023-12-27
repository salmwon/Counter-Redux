import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/countSlice'


function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counterReducer.count)
    const [amount, setAmount] = useState("")
    const handleIncrement = () => {
        if (amount === "") {
            alert('please provide the amount properly')
        } else {
            dispatch(incrementByAmount(Number(amount)))
            setAmount("")
        }
    }
    return (
        <div style={{ width: '500px' }} className='border p-5 rounded text-center'>
            <h1 style={{ fontSize: '100px' }}>{count}</h1>
            <div className='d-flex justify-content-between align-items-center mt-5'>
                <button onClick={() => dispatch(decrement())} className='btn btn-warning'>Decrement</button>
                <button onClick={() => dispatch(reset())} className='btn btn-danger'>Reset</button>
                <button onClick={() => dispatch(increment())} className='btn btn-success'>Increment</button>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <input onChange={e => setAmount(e.target.value)} type="text" className='form-control' placeholder='Input Counter Increment Amount' value={amount} />
                <button onClick={handleIncrement} className='btn btn-info ms-3'>Increment</button>
            </div>
        </div>
    )
}

export default Counter