import { AxiosError } from "axios";


export interface BackendHttpErrorResponseData {
  error: string;
  message: string;
  path: string;
  status: number;
  timestamp: Date;
  trace: string;
}

export default interface BackendHttpError extends AxiosError<BackendHttpErrorResponseData> {

  // After backend api interception
  toAlertDialog: () => { title: string; message: string };
};