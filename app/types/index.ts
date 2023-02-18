import { ColorSchemeName } from "react-native";
import { AppDispatch } from "../redux/store";

export type ColorType = 'black' | 'blue' | 'cyan' | 'green' | 'sky' | 'orange' | 'purple' | 'red' | 'violet' | 'pink' | 'teal' | 'yellow' | 'coffee' | 'deepred' | 'leaf';
export type ColorInfo = { name: ColorType; value: string; }
export type FieldError = { hasError: boolean, showError: boolean }
export type CommonProps = { border: string, color: string, theme: ColorSchemeName, dispatch: AppDispatch }
