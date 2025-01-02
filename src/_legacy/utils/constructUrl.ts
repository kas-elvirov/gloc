export const constructTokenizedUrl = (repoName: string, token: string) =>
  tokenizeUrl(getApiUrl(repoName), token);

/**
 * @param {string} repo - /user/repo
 * @return {string}
 */
export const getApiUrl = (repoName: string) =>
  `https://api.github.com/repos${repoName}/stats/code_frequency`;

const tokenizeUrl = (url: string, token: string): string => {
  if (typeof token === 'string') {
    return `${url}?access_token=${token}`;
  }

  console.error('Error by tokenizing URL');

  return url;
};
