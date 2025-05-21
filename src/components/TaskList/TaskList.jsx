import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailTask from "./FailTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex flex-nowrap gap-10 h-[50%] w-full overflow-auto mt-15 pb-10"
    >
      {data.tasks.map((elem, k) => {
        if (elem.accept) {
          return <AcceptTask key={k} />;
        }
        if (elem.complete) {
          return <CompleteTask key={k} />;
        }
        if (elem.fail) {
          return <FailTask key={k} />;
        }
        if (elem.newTask) {
          return <NewTask key={k} />;
        }
      })}
    </div>
  );
};

export default TaskList;
