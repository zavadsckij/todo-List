import React from "react";
import { Field, reduxForm } from "redux-form";

const Form = (props) => {

    return (
      <div className='container' style={{marginBottom: '1em'}}>
         <form onSubmit = {props.handleSubmit} style={{display: 'flex',  justifyContent:'space-around', width: '60%', marginLeft: '20%'}}>
       
      <Field component = {'input'} name = 'input' type='text' placeholder = 'write something' className = 'form-control' style={{width: '60%'}}/>
            <button className = 'btn btn-outline-primary' style={{width: '10%'}}>ADD</button>
    </form>
    </div>
     
    );
  };

  export  const ReduxForm = reduxForm({form: 'input'})(Form);

 