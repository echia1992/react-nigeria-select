interface NigeriaSelectProps {
  onChange?: (values: SelectionValue) => void;
  onStateChange?: (state: string) => void;
  onLGAChange?: (lga: string) => void;
  defaultState?: string;
  defaultLGA?: string;
  className?: string;
  selectClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  showLabels?: boolean;
  labels?: {
    state?: string;
    lga?: string;
  };
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
  placeholder?: {
    state?: string;
    lga?: string;
  };
}

interface SelectionValue {
  state: string;
  lga: string;
}

export type { NigeriaSelectProps, SelectionValue };