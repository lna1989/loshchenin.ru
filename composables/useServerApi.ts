export function useServerApi() {
  const $config = useAppConfig();
  return {
    getApiUrlPath(key: string): string {
      return `${$config.serverApiPrefix}${key}`;
    },
  };
}
