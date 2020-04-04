export interface Response<T> {
  data: T,
  success: boolean,
  msg: string
}

export interface ListResponse<T> {
  data: T[],
  success: boolean,
  msg: string
}

export interface PagedListResponse<T> extends ListResponse<T>{
  total: number;
}
