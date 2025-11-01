export function getBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  return url.endsWith('/') ? url.slice(0, -1) : url;
}
