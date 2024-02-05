import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api";

export default function useUser() {
  const { isLoading, data, isError } = useQuery({
    queryKey: [`me`],
    queryFn: getMe,
  });
  return {
    isLoading,
    user: data,
    isLoggedIn: !isError,
  };
}
