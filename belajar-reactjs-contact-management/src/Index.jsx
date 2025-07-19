import { useEffectOnce, useLocalStorage } from "react-use";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [token, _] = useLocalStorage("token");
  const navigate = useNavigate();

  useEffectOnce(() => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  return null;
}
