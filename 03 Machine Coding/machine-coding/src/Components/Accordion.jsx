import { useState } from "react";

const hardData = [
  { id: 1, summary: "First", data: "I am First", isOpen: false },
  { id: 2, summary: "Second", data: "I am Second", isOpen: false },
  { id: 3, summary: "Third", data: "I am Third", isOpen: false },
];

const Accordion = () => {
  // Local State
  const [accordionList, setAccordionList] = useState(hardData);

  // Methods
  const handleSummary = (itemId) => {
    console.log(itemId);
    const updatedAccordionList = accordionList.map((each) =>
      itemId === each.id
        ? { ...each, isOpen: !each.isOpen }
        : { ...each, isOpen: false }
    );
    setAccordionList(updatedAccordionList);
  };
  return (
    <div>
      {accordionList.map((each) => (
        <div
          key={each.id}
          style={{
            boxShadow: "0 0 10px black",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <h2 onClick={() => handleSummary(each.id)}>
            {each.summary} {each.isOpen ? "🔻" : "▶"}
          </h2>
          {each.isOpen && <p>{each.data}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
