
export const checkAuth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/api/v1/auth/check`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    const authenticated: boolean = data['authenticated'];
    return authenticated;
  } catch (e) {
    console.error('error', e);
  }
}
