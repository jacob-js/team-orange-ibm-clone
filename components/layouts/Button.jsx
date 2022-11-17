import React from "react";

function Button({ className, Children }) {
  return (
    <div className={`${className} text-sm text-white outline-none`}>
      <button className="pl-4 pr-16  bg-[#0f62fe] border py-4 w-max">
        {Children}
      </button>
    </div>
  );
}

export default Button;
