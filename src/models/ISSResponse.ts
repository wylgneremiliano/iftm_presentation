export interface IssPosition {
  latitude: string;
  longitude: string;
}

export interface ISSResponse {
  timestamp: number;
  message: string;
  iss_position: IssPosition;
}
