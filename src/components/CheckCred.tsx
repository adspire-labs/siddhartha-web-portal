import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export function useCheckAdminCredentials() {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const adminCreds = localStorage.getItem("adminCredentials");

    if (!adminCreds) {
      toast({
        title: "Unauthorized",
        description: "Please login first.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    try {
      const { email, password } = JSON.parse(adminCreds);

      if (!email || !password) {
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
    } catch {
      toast({
        title: "Error",
        description: "Corrupted credentials. Please login again.",
        variant: "destructive",
      });
      localStorage.removeItem("adminCredentials");
      navigate("/login");
    }
  }, [navigate, toast]);
}
