export type IRepo = {
  name: string;
  description: string;
  stargazers_count: string;
};

export type ResponseGenerator = {
  config?: any;
  data: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  error?: any;
};
