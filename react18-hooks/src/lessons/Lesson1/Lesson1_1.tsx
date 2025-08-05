import { ChangeEvent, useState } from "react";

const Lesson1_1 = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const handleClick = () => {
    setAge((prevAge) => prevAge+1);
    console.log(name);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        className="border-b-4"
      />
      <button
        className="border p-2 rounded-md bg-red-100"
        onClick={handleClick}
      >
        Add Age
      </button>
      <p>your age{age}</p>
    </div>
  );
};

export default Lesson1_1;
