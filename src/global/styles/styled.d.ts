import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType{
    colors:{
      text: string;
      background: string;
    }
  }
}