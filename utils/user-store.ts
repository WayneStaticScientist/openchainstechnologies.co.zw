import { useUserStore } from "@/stores/user-store";
import { User } from "@/types";

export const storeUser = (user: User) => {
  localStorage.setItem("ppxs!3", JSON.stringify(user));
};
export const storeToken = (token: string) => {
  localStorage.setItem("sfsrer", JSON.stringify(token));
};
export const storeBothUserAndToken = (user: User, token: string) => {
  storeUser(user);
  storeToken(token);
};
export const getUserFromStore = (): User | null => {
  try {
    const triedUser = JSON.parse(
      localStorage.getItem("ppxs!3") as string
    ) as User;
    if (triedUser && triedUser.email && triedUser.email.trim().length > 0) {
      useUserStore.setState(triedUser);
      return triedUser;
    }
    clearUser();
  } catch {}
  return null;
};

export const clearUser = () => {
  localStorage.removeItem("ppxs!3");
  localStorage.removeItem("sfsrer");
};
