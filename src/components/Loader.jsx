import { useLoader } from "../contexts/LoaderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loader() {
  const { isLoading } = useLoader();

  if (!isLoading) return null;

  return (
    <div className="spinner">
      <FontAwesomeIcon icon={faSpinner} spin size="3x" />
    </div>
  );
}
