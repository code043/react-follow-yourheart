const items = [
  {
    title: "4.9",
    content: "Lorem ipsum dolor amet",
  },
  {
    title: "876K",
    content: "Lorem ipsum dolor amet",
  },
  {
    title: "No.l",
    content: "Lorem ipsum dolor amet",
  },
];
const List = () => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li className="square">
            <h2>{item.title}</h2>
            <div className="underline"></div>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
