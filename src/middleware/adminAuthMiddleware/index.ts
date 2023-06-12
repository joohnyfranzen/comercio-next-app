import { UseAdminAuthStore } from "@/store/adminStore";

export async function checkAdminAuthentication(
  isAuthenticated: boolean
): Promise<boolean> {
  return isAuthenticated;
}
