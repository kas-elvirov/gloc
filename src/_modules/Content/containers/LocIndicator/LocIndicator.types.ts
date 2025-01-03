export interface LocIndicatorProps {
  /**
   * Author of the repo (GitHub login)
  */
  author: string;

  /**
   * Repository name
  */
  repository: string;

  /**
   * Access token (in order to use GitHub api in unlimited mode)
  */
  token?: string;
}
