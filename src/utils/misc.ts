export const buildFromAppURL = (path?: string | null) => {
  const appUrl = `${process.env.NEXT_PUBLIC_APP_URL}/storage/`;
  if (!path) return appUrl;
  const url = new URL(path, appUrl);
  return url.toString();
};
