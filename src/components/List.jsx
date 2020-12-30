import { list } from "./List.module.scss";

const List = ({ children }) => {
  return <div className={list}>{children}</div>;
};

export default List;
