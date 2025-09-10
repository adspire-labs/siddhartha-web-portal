import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export function useCheckAdminCredentials() {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const defaultCreds = localStorage.getItem("defaultAdminCredentials");
    const adminCreds = localStorage.getItem("adminCredentials");

    if (!defaultCreds || !adminCreds) {
      toast({
        title: "Unauthorized",
        description: "Please login first.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    const { email: defaultEmail, password: defaultPass } = JSON.parse(defaultCreds);
    const { email, password } = JSON.parse(adminCreds);

    if (email !== defaultEmail || password !== defaultPass) {
      toast({
        title: "Unauthorized",
        description: "Invalid credentials.",
        variant: "destructive",
      });
      navigate("/login");
    } else {
      toast({
        title: "Logged in",
        description: "Access granted!",
      });
    }
  }, [navigate, toast]);
}
