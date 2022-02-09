export interface WidgetField {
  [key: string]: Fields;
}

export interface Fields {
  [key: string]: Field;
}

export interface Field {
  field: string;
  label: string;
  readonly: boolean;
  required: boolean;
}

export interface NewRegisteration {
  fullName: string;
  email: string;
  password: string;
}

export interface Status {
  status: string;
  statusCode: number;
  message: string;
}