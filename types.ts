
export interface Option {
  label: string;
  premium: number;
}

export interface Question {
  id: string;
  label: string;
  description?: string;
  options: Option[];
}

export interface CalculatorState {
  [key: string]: number;
}
