import { useEffectOnce, useLocalStorage } from "react-use";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [token] = useLocalStorage("token");
  const navigate = useNavigate();

  useEffectOnce(() => {
    if (token) {
      navigate("/dashboard/contacts");
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  return null;
}
