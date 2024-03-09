"use client";
import { useState } from "react";
import Container from "./Container";
import Title from "./Title";

const Testing = () => {
  const [test, setTest] = useState(false);
  return (
    <Container>
      <Title title="Try it" />
      <p className="text-sm my-5">
        Run this code here, in a console or from any site:
      </p>
      <div className="bg-[#263E52] p-10 w-full rounded-lg">
        <p className="text-yellow-100 tracking-wider mb-.5 flex flex-wrap">
          <span className="text-sky-300">fetch</span>
          {`('https://jsonplaceholder.typicode.com/todos/1')`}
        </p>
        <p className="text-gray-100 tracking-wider ml-10 mb-.5">
          <span className="text-sky-300">.then</span>
          {`(response => response.`}
          <span className="text-sky-300">json</span>
          {`())`}
        </p>
        <p className="text-gray-100 tracking-wider ml-10">
          <span className="text-sky-300">.then</span>
          {`(json => console.`}
          <span className="text-sky-300">log</span>
          {`(json))
`}
        </p>
      </div>
      <button
        onClick={() => setTest(true)}
        className="my-5 bg-black text-gray-200 text-sm font-semibold py-2 px-4 rounded-md hover:bg-black/80 hover:text-white duration-200"
      >
        Run script
      </button>
      <div className="bg-[#263E52] p-10 w-full rounded-lg tracking-wider text-gray-200">
        {test ? (
          <div>
            <p>{`{`}</p>
            <p className="ml-5">
              <span className="text-red-500 font-semibold">{`"userId"`}</span>:{" "}
              <span className="text-purple-500 font-semibold">1</span>,
            </p>
            <p className="ml-5">
              <span className="text-red-500 font-semibold">{`"id"`}</span>:{" "}
              <span className="text-purple-500 font-semibold">1</span>,
            </p>
            <p className="ml-5">
              <span className="text-red-500 font-semibold">{`"title"`}</span>:{" "}
              <span className="text-yellow-100 font-medium">
                "delectus aut autem"
              </span>
              ,
            </p>
            <p className="ml-5">
              <span className="text-red-500 font-semibold">{`"completed"`}</span>
              : <span className="text-purple-500 font-semibold">false</span>,
            </p>
            <p>{`}`}</p>
          </div>
        ) : (
          <p className="tracking-wider">{`{}`}</p>
        )}
      </div>
      {test && (
        <p className="text-sm font-medium mt-5">
          Congrats! You've made your first call to JSONPlaceholder. 😃 🎉
        </p>
      )}
    </Container>
  );
};

export default Testing;
