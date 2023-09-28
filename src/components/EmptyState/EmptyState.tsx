import { FcSearch } from "react-icons/fc";
import "../../styles/emptyState.css";

export default function EmptyState() {
  return (
    <div className="emptyState">
      <FcSearch size={150} />
      <div>No data found!</div>
    </div>
  );
}
