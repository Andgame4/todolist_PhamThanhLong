import React from "react";
import "../styles/task.css";
import { FaCalendarTimes } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Draggable } from "react-beautiful-dnd";

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="task__container"
          >
            <div className="Task__time">
              <i className="">
                <FaCalendarTimes /> {this.props.task.time}
              </i>
            </div>
            <div className="Task__main">
              <div className="Task__content">{this.props.task.content}</div>
              <div className="Task__action">
                <div className="Task__btn">
                  <i>
                    <FaRegEdit />
                  </i>
                </div>
                <div className="Task__btn2">
                  <i>
                    <RiDeleteBinLine />
                  </i>
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}
