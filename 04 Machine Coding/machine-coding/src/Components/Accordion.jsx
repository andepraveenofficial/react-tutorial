import { useState } from 'react'

const hardData = [
    { id: 1, summary: "First", data: "I am First", isOpen: false },
    { id: 2, summary: "Second", data: "I am Second", isOpen: false },
    { id: 3, summary: "Third", data: "I am Third", isOpen: false },
    { id: 4, summary: "Fourth", data: "I am Fourth", isOpen: false },
]

const Accordion = () => {
    // Local State
    const [accordionList, setAccordionList] = useState(hardData)
    return (
        <div>
            {accordionList.map((each) => (<div key={each.id}>
                <h2 onClick={() => setAccordionList(() => accordionList.map((child) => each.id === child.id ? { ...child, isOpen: !child.isOpen } : { ...child, isOpen: false }))}>{each.summary} {each.isOpen ? "🔻" : "▶"}</h2>
                {each.isOpen && <p>{each.data}</p>}
            </div>))}
        </div>
    )
}

export default Accordion