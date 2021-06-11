export async function fetchJson<T = any>(
  url: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(url, init);

  return response.json();
}
