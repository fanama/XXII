import { useStyle } from "../../hooks/useStyle";
import { useNavbar } from "./useNavbar";

export function Navbar() {
  const { titleTail } = useStyle();
  const { logOut } = useNavbar();

  return (
    <div className="relative flex items-center justify-between h-16 bg-gray-200 p-3 ">
      <h1 className={titleTail}>video streamer</h1>
      <button className="bg-blue-700 text-white p-2 " onClick={logOut}>
        Log out
      </button>
    </div>
  );
}
