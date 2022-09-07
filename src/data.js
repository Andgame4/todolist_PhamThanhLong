const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Escape from Arkham",
      time: "16/6/2022",
    },
    "task-2": { id: "task-2", content: "Free Harley Quinn", time: "16/6/2022" },
    "task-3": { id: "task-3", content: "Hire Poison Ivy", time: "16/6/2022" },
    "task-4": { id: "task-4", content: "Hire Bane", time: "16/6/2022" },
    "task-5": { id: "task-5", content: "Kill Batman", time: "16/6/2022" },
    "task-6": { id: "task-7", content: "Rule Gotham City", time: "16/6/2022" },
    "task-7": { id: "task-8", content: "Rule Gotham City", time: "16/6/2022" },
    "task-8": { id: "task-9", content: "Rule Gotham City", time: "16/6/2022" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TO DO",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
    },
    "column-2": {
      id: "column-2",
      title: "IN PROGRESS",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "DONE",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
