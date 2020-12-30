import { listItem } from "./ListItem.module.scss";

const ListItem = ({ children, ...props }) => {
  return (
    <a className={listItem} {...props}>
      {children}
    </a>
  );
};

export default ListItem;
