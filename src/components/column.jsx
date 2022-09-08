import React from "react";
import "../styles/column.css";
import { Modal } from "react-responsive-modal";
import { IoMdAdd } from "react-icons/io";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

export default class Column extends React.Component {
  state = {
    openModal: false,
  };
  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  handleSave = () => {
    this.onCloseModal();
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    return (
      <div className="Column">
        <div className="Column__header">
          <h5 className="Column__title">
            <span className="Column__item-count">
              {this.props.tasks.length}
            </span>
            <span className="Column__text">{this.props.column.title}</span>
          </h5>
          <p className="Column__btn" onClick={this.onClickButton}>
            <i>
              <IoMdAdd /> New task
            </i>
          </p>
        </div>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
          <div className="AddNewModal__content">
            <h4 className="AddNewModal__title">CREATE NEW TASK</h4>
            <div className="AddNewModal__task-status">
              <span className="AddNewModal__radio">
                <input type="radio" />
                <span>TODO</span>
              </span>
              <span className="AddNewModal__radio">
                <input type="radio" />
                <span>IN PROGRESS</span>
              </span>
              <span className="AddNewModal__radio">
                <input type="radio" />
                <span>DONE</span>
              </span>
            </div>
            <div className="AddNewModal__task">
              <input
                className="AddNewModal__input"
                type="text"
                placeholder="Enter your task..."
                value=""
              />
            </div>
            <div className="AddNewModal__action">
              <button
                className="AddNewModal__btn AddNewModal__btn--confirm"
                onClick={this.handleSave}
              >
                Save
              </button>
              <button
                className="AddNewModal__btn AddNewModal__btn--cancel"
                onClick={this.onCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
