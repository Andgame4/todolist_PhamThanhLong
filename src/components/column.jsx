import React from "react";
import "../styles/column.css";
import { IoMdAdd } from "react-icons/io";
import Task from "./task";
import { Droppable } from "react-beautiful-dnd";

export default class Column extends React.Component {
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
          <p className="Column__btn">
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
      </div>
    );
  }
}
