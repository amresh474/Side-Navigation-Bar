import Sidebaritem from "./Sidebaritem";
import items from "../../data/sidebar.json";

export default function Sidebar() {
  return (
    <>
      {items &&
        items.map((item, index) => <Sidebaritem key={index} item={item} />)}
    </>
  );
}
