import React from "react";
import { connect } from "react-redux";
import {deleteItem, showAlert} from './../../inputReducer';



 const List = (props) => {

const onItemDelete =(id) =>{
    props.deleteItem(id)
    props.showAlert(true, "Deleting is success", "warning");
        setTimeout(() => props.showAlert(false, "", ""), 2000);
}

    let list = props.list.map(item => {

        return <li className="list-group-item text-light bg-dark" key = {item.time} style={{display: 'flex', justifyContent:'space-around', }}>
        <div style={{width: '40em', textAlign: 'left'}}>
        {`${props.list.indexOf(item)+1}. ${ item.message}`}
        <span className = {'badge badge-secondary'} style={{marginLeft: '2em'}}>{item.time}</span>
        </div> 
        <button className = 'btn btn-outline-danger btn-sm' onClick={()=>{onItemDelete(item.id)}}>Delete</button>
       </li>
     })

  return (
    <div className="container">
      <ul className="list-group">
       { list }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) =>{
    return {
        list: state.todoList.list
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
      deleteItem: (id)=>{
        dispatch(deleteItem(id))
      },
      showAlert: (boolean, message, className) => {
        dispatch(showAlert(boolean, message, className));
      }
  }
}



export const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List)
