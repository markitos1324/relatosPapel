import { useEffect } from "react";
import { useNavigate } from "react-router";

const useRedirectToHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
};

export default useRedirectToHome;
