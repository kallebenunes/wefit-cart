import 'styled-components';
import theme from './themes/default';

export type ITheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}