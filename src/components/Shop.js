import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
import {action} from '../state/index'
import { bindActionCreators } from 'redux';
// import { depositMoney, withdrawMoney } from '../state/action';
import { useSelector } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const actions = bindActionCreators(action, dispatch)

  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(action.withdrawMoney(100))}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(action.depositMoney(100))}}>+</button> */}
      <button className="btn btn-primary mx-2" onClick={()=>{actions.withdrawMoney(100)}}>-</button>
      Update Balance ({balance})
      <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(100)}}>+</button>

    </div>
  )
}

export default Shop
