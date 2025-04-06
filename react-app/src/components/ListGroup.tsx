import { Fragment } from "react";

function ListGroup() {
  // ✅ Declare items as const if not reassigning
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
    'Berlin'
  ];

  // ✅ Optional: to test empty state
  // const items: string[] = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

