import { useEffectOnce, useLocalStorage } from "react-use";
import { userDetail } from "./lib/api/UserApi";
import { useNavigate } from "react-router-dom";
import { alertError } from "./lib/alert";

export default function Index() {
  const [token, _] = useLocalStorage("token", "");
  const navigate = useNavigate();

  async function authorization() {
    try {
      const response = await userDetail(token);
      const responseBody = await response.json();
      if (response.status !== 200) {
        throw new Error(responseBody);
      }
      return responseBody;
    } catch {
      await alertError("Anda belum login!");
      navigate({
        pathname: "/login",
      });
    }
  }

  useEffectOnce(() => {
    authorization();
  });

  return <></>;
}
