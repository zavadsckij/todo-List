import React from "react";
import { ReduxForm } from "./../Form/Form";
import { ListContainer } from "./../list/List";
import { connect } from "react-redux";
import { addtodo, showAlert } from "./../../inputReducer";

export const HomePage = props => {
  const add = values => {
    try {
      if (values.input.trim()) {
        props.addtodo(values.input);
        props.showAlert(true, "success", "success");
        setTimeout(() => props.showAlert(false, "", ""), 2000);
      } else{
        props.showAlert(true, "write something", "danger");
        setTimeout(() => props.showAlert(false, "", ""), 2000);
      }
    } catch (e) {
      props.showAlert(true, e.message, "danger");
      setTimeout(() => props.showAlert(false, "", ""), 2000);
    }
  };
  console.log(props.success);

  return (
    <div className="jumbotron jumbotron-fluid bg-dark ">
      <ReduxForm onSubmit={add} />
      {props.success && (
        <div className={`alert alert-${props.success.className} container`} role="alert">
          {props.success.message}
        </div>
      )}
      <ListContainer />
    </div>
  );
};

let mapStateToProps = state => ({
  success: state.todoList.success
});

let mapDispatchToProps = dispatch => {
  return {
    addtodo: message => {
      dispatch(addtodo(message));
    },
    showAlert: (boolean, message, className) => {
      dispatch(showAlert(boolean, message, className));
    }
  };
};

export const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
