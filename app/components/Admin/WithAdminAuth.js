import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withAdminAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const isAdmin = localStorage.getItem("isAdmin");
      if (!isAdmin) {
        router.push("/"); // Redirect to login if not authenticated
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;
