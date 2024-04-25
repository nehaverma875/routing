import { useState } from "react";
// import { Link } from "react-router-dom";

export default function Sales() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={toggleDropdown}>sales</div>
      {isOpen && (
        <ul className="  font-normal">
          <li className="py-1 px-8 hover:bg-gray-100 cursor-pointer">
              Leads
          </li>

          <li className="py-1 px-8 hover:bg-gray-100 cursor-pointer">
            {" "}
            data
          </li>
        </ul>
      )}
    </>
  );
}
