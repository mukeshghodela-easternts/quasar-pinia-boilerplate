import { QTableProps } from 'quasar';

export interface IObject {
  [key: string]: string | number | boolean | string[] | number[] | IObject;
}
export interface ResponseResult<T> {
  errors?: IObject;
  success?: boolean;
  message?: string;
  code?: number;
  current_page?: number;
  data?: T;
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  next_page_url?: null | string;
  path?: string;
  per_page?: string | number;
  prev_page_url?: string;
  to?: number;
  total?: number;
}

export interface IBreadcrumbs {
  label: string;
  url: string;
}

export interface IServerTableReqParams {
  pagination?: QTableProps['pagination'];
  filterModel?: IFilterModel;
  apiUrl?: string;
}

export interface IFilterModel {
  search: string;
  from: string;
  to: string;
  reportType?: string;
}

export interface ISuccessMessage {
  message: string;
}

export interface IErrorDetails {
  key: string;
  message: string;
}

export interface ISubMenus {
  label: string;
  url?: string;
  id?: string;
  isClick?: boolean;
  urlslug?: string;
  name?: string;
}

export interface IMenu {
  label: string;
  name: string;
  url: string;
  subMenus: ISubMenus[];
  isMobile: boolean;
  isDesktop: boolean;
  expanded: boolean;
  separator: boolean;
  loading?: boolean;
  type: number;
}

export interface IDeleteProps {
  id: string;
  store: string;
  msg?: string;
}

export interface IPagination {
  q?: string;
  take?: string;
  offset?: string;
  page?: string;
  limit?: string;
}
