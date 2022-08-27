import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { TODO_INCOMPLETE } from "./Actions";
import Button from "./Button";
import Card from "./Card";

type createTodoType = { onCreate: (todo: any) => void; onClose: () => void };

const CreateToDo: FC<createTodoType> = (props) => {
  const [inputValue, updateInputValue] = React.useState("");
  const onInputChange = (event: any) => {
    updateInputValue(event.target.value);
  };

  const saveToDo = () => {
    props.onCreate(inputValue);
    updateInputValue("");
    props.onClose();
    updateIncompTodo();
  };
  const dispatch2 = useDispatch();
  const updateIncompTodo = () => {
    dispatch2({ type: TODO_INCOMPLETE });
  };
  return (
    <Card>
      <div className="m-3 border space-y-4 rounded-md shadow-sm p-2">
        <h1 className="font-medium text-xl">Create a Todo</h1>
        <input
          value={inputValue}
          onChange={onInputChange}
          className=" border border-1 border-gray-400 rounded-md px-5 py-2 "
          placeholder="Enter Task"
        />
        <div className="space-x-2">
          <Button disabled={!inputValue} onClick={saveToDo}>
            Save
          </Button>
          <Button theme="secondary" onClick={props.onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default CreateToDo;
