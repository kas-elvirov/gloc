import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getRepoStat: builder.query<RepoStat, { author: string, repoName: string }>({
      query: (queryArg) => ({
        url: `repos/${queryArg.author}/${queryArg.repoName}`,
        method: 'GET',
        keepUnusedDataFor: 0,
      }),
    }),
    getRepoCodeFrequency: builder.query<CodeFrequency, { author: string, repoName: string, token?: string }>({
      query: (queryArg) => ({
        url: typeof queryArg.token === 'string'
          ? `repos/${queryArg.author}/${queryArg.repoName}/stats/code_frequency?access_token=${queryArg.token}`
          : `repos/${queryArg.author}/${queryArg.repoName}/stats/code_frequency`,
        method: 'GET',
        keepUnusedDataFor: 0,
        headers: {
          'Authorization': `token ${queryArg.token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }),
    }),
    getAllUserRepos: builder.query<RepoStat[] | {
      message: string;
      documentation_url: string;
      status: string;
    }, { token: string }>({
      query: (queryArg) => ({
        url: 'user/repos',
        method: 'GET',
        keepUnusedDataFor: 0,
        headers: {
          'Authorization': `token ${queryArg.token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }),
    }),
  }),
});

type Total = number;
type Additions = number;
type Deletions = number;

export type CodeFrequency = WeeklyAggregate[];

export type WeeklyAggregate = [Total, Additions, Deletions];

export interface RepoStat {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  temp_clone_token: null;
  network_count: number;
  subscribers_count: number;
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

export const { useGetRepoStatQuery, useGetRepoCodeFrequencyQuery, useGetAllUserReposQuery } = githubApi;
