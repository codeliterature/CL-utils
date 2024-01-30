import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div className="flex flex-col space-y-2 w-[300px] border rounded p-4 m-auto">
        <h1 className="font-bold tracking-wide text-light dark:text-dark text-lg">
          {props.title}
        </h1>
        <p className="border-b-2 dark:border-dark border-light pb-2">
          {props.description}
        </p>
        <div>
          <Link
            to={props.link}

            className="hover:underline underline-offset-1 dark:decoration-dark decoration-light"
          >
            Check Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
