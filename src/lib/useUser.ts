import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api";
import { IUser } from "../types";

export default function useUser() {
  const { isLoading, data, isError } = useQuery<IUser>({
    queryKey: [`me`],
    queryFn: getMe,
  });
  return {
    isLoading,
    user: data,
    isLoggedIn: !isError,
  };
}
