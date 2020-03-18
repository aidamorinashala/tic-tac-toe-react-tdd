import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
theme;

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  @font-face {
    font-family: 'neontubes';
    src: url("https://bitbucket.org/kennethjensen/webfonts/raw/fc13c1cb430a0e9462da56fe3f421ff7af72db71/neontubes/neontubes-webfont.eot");
    src: url("https://bitbucket.org/kennethjensen/webfonts/raw/fc13c1cb430a0e9462da56fe3f421ff7af72db71/neontubes/neontubes-webfont.eot?#iefix") format("embedded-opentype"), url("https://bitbucket.org/kennethjensen/webfonts/raw/fc13c1cb430a0e9462da56fe3f421ff7af72db71/neontubes/neontubes-webfont.woff2") format("woff2"), url("https://bitbucket.org/kennethjensen/webfonts/raw/fc13c1cb430a0e9462da56fe3f421ff7af72db71/neontubes/neontubes-webfont.woff") format("woff"), url("https://bitbucket.org/kennethjensen/webfonts/raw/fc13c1cb430a0e9462da56fe3f421ff7af72db71/neontubes/neontubes-webfont.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: fallback; /* <- this can be added to each @font-face definition */
  }
  html {
    min-height: 100vh;
    font-size: 16px;
    
  }
  body {
    background: black;
    width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    color: white;
    font-family: neontubes;
  }
  h1 {
    font-weight: normal;
    font-size: 6vw;
    color: ${theme.colors.main};
    text-shadow: 0 0 0 transparent,
    0 0 10px ${theme.colors.accent}, 
    0 0 20px ${theme.colors.accent},
    0 0 40px ${theme.colors.accent},
    0 0 100px ${theme.colors.accent}, 
    0 0 200px ${theme.colors.accent}, 
    0 0 300px ${theme.colors.accent}, 
    0 0 500px ${theme.colors.accent}, 
    0 0 1000px ${theme.colors.accent};
  }
`;
