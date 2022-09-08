import React from "react";
import initialData from "./data";
import "./index.css";
import "react-responsive-modal/styles.css";
import Column from "./components/Column";
import "modern-css-reset";
import { DragDropContext } from "react-beautiful-dnd";

class App extends React.Component {
  state = initialData;

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">TO DO LIST</h1>
        <div className="App__content">
          <DragDropContext onDragEnd={this.onDragEnd}>
            {this.state.columnOrder.map((columnId) => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId) => this.state.tasks[taskId]
              );

              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
          </DragDropContext>
        </div>
      </div>
    );
  }
}

export default App;
