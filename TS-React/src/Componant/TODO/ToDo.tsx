import React, { useEffect, useState } from "react";

interface ToDoItem {
  id: number;
  text: string;
  completed: boolean;
}

export const ToDo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputArr, setInputArr] = useState<ToDoItem[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  useEffect(() => {
    const jsonData = localStorage.getItem("todo");
    if (jsonData) {
      const normalData: ToDoItem[] = JSON.parse(jsonData);
      setInputArr(normalData);
      // Calculate nextId based on existing items
      setNextId(normalData.length + 1);
    }
  }, []);

  const submitHandeler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newItem: ToDoItem = {
      id: nextId,
      text: inputValue,
      completed: false,
    };

    setInputArr([...inputArr, newItem]);
    localStorage.setItem("todo", JSON.stringify([...inputArr, newItem]));
    setInputValue("");
    setNextId(nextId + 1);
  };

  const handleToggleComplete = (id: number) => {
    const updatedItems = inputArr.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setInputArr(updatedItems);
    localStorage.setItem("todo", JSON.stringify(updatedItems));
  };

  const handleDelete = (id: number) => {
    const updatedItems = inputArr.filter((item) => item.id !== id);
    setInputArr(updatedItems);
    localStorage.setItem("todo", JSON.stringify(updatedItems));
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg">
      <h3 className="text-center mb-6 text-2xl font-bold">To-Do List</h3>
      <form onSubmit={submitHandeler} className="mb-4 flex items-center">
        <input
          className="border border-gray-300 rounded-md py-2 px-3 mr-2 w-3/4 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter Your Item..."
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
        >
          Add
        </button>
      </form>
      <table className="w-full bg-white shadow-md rounded-lg divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">SR</th>
            <th className="px-4 py-2 text-left">List</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inputArr.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleToggleComplete(item.id)}
                    className="h-4 w-4 text-blue-500 focus:ring-blue-400 focus:outline-none mr-2"
                  />
                  <span
                    className={`cursor-pointer ${
                      item.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md focus:outline-none"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
