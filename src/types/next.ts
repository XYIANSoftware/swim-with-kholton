/**
 * Next.js 15+ App Router: `params` and `searchParams` are Promises.
 * - In Server Components: await them (e.g. `const { id } = await params`).
 * - In Client Components: unwrap with `React.use()` (e.g. `const { id } = use(params)`).
 * @see https://nextjs.org/docs/messages/sync-dynamic-apis
 */

export type SearchParamsPromise = Promise<{ [key: string]: string | string[] | undefined }>;

/** Stable empty Promise for client pages when params/searchParams are not passed. */
export const EMPTY_PARAMS_PROMISE = Promise.resolve({}) as Promise<Record<string, string | string[]>>;
export const EMPTY_SEARCH_PARAMS_PROMISE = Promise.resolve({}) as SearchParamsPromise;

/** Use for page/layout props when the route has dynamic segments (e.g. [id]). */
export type PageParams<T extends Record<string, string> = Record<string, string>> = {
  params: Promise<T>;
  searchParams?: SearchParamsPromise;
};
