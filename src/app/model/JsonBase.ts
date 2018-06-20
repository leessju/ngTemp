export interface JsonBase {
  response_code: string;
  response_data_count: number;
  response_data: object[];
  response_message: string;
}

export interface JsonBaseEx {
  response_code: string;
  response_data_count: number;
  response_data: object[];
  response_message: string;
  response_status: string;
  response_option: JsonBaseOption;
}

export interface JsonBaseOption {
  total_row_count: number;
  page_count: number;
  option_use_yn: string;
  paging_use_yn: string;
}
