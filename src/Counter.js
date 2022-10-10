/* import { connect } from "react-redux"; */
import {inc, dec, rnd} from './actionCreator';
import { useSelector, useDispatch } from "react-redux";
/* import { bindActionCreators } from "redux"; */
const Counter = () =>{
  const value = useSelector(state => state.value);
  const dispatch = useDispatch();

return(
  <div className="wrap">
    <button onClick={() => dispatch(inc())} className="inc">inc</button>
    <div className="res">{value}</div>
    <button onClick={() => dispatch(rnd())} className="rnd">rnd</button>
    <button onClick={() => dispatch(dec())} className="dec">dec</button>
  </div>
)

}

/* const mapStateToProps = (state) =>{
  return {
    counter: state.value
  }
} */

/* const bindActionCreator = (creator, dispatch) => (...arg)=>{
  dispatch(creator(arg))
} */
/* const mapDispatchToProps = (dispatch) => {
const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
return {
  inc,
  dec,
  rnd
}
} */

export default Counter;/* connect(mapStateToProps, actions)(Counter); */