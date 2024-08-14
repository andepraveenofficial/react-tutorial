import { createContext, useContext } from "react";

const MyContext = createContext({ name: "Default" });

const Parent = () => {
  return (
    <div>
      <Child />
    </div>
  );
};

const Child = () => {
  const context = useContext(MyContext);
  const { name } = context;

  return (
    <div>
      <p>Child</p>
      <p>{name}</p>
    </div>
  );
};

const ReactContext = () => {
  const contextObject = { name: "React" };
  return (
    <MyContext.Provider value={contextObject}>
      <div>
        <Parent />
      </div>
    </MyContext.Provider>
  );
};

export default ReactContext;
