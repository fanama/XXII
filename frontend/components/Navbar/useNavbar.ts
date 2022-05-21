import { useRouter } from "next/router";
import { useLocalStorage } from "../../hooks/useLocalstorage";

export function useNavbar() {
  const router = useRouter();
  const { clearLocalStorage } = useLocalStorage();
  const logOut = () => {
    router.push("/");
    clearLocalStorage();
  };

  return { logOut };
}
