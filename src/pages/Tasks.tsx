import TaskCard from "@/module/TaskCard";
import AddTaskModal from "@/redux/features/task/AddTaskModal";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return (
    <div className="container mx-auto px-5 py-10 mt-10">
      <div className="flex justify-between items-center">
        <h1>All Tasks is Here</h1>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
