import { css } from 'styled-components';
import { rgba } from 'polished';

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
};

export const color = {
  // Brand Colours
  OxfordColorPrimary: '#002147',
  OxfordColorSecondary: '#a79d96',
  OxfordColorTertiary: '#f3f1ee',
  OxfordColorLightPrimary: '#122f53',
  
  // General/secondary colours
  OxfordColorDarkBlue: '#001c3d',
  OxfordColorWashedOutBlue: '#193658',
  OxfordColorCopyrightGrey: '#c7c2bc',
  OxfordColorBeigeGrey: '#f3f1ec',
  OxfordColorBrownGrey: '#001c3d',
  OxfordColorFilterFormGreen: '#043946',
  OxfordColorIconBlueGrey: '#a1c4d0',
  OxfordColorTeal: '#003947',
  OxfordColorVeryLightBlue: '#f0f5f8',
  OxfordColorCookieBar: '#00152e',
  OxfordColorBlueGrey: '#353c47',

  // Link colours
  OxfordColorLink: '#3277ae',
  OxfordColorLinkHover: '#44687d',
  OxfordColorAltLinkHover: '#be0f34',
  OxfordColorLinkHeader: '#70a9d6',
  OxfordColorLinkOverlay: '#98c1e1',

  // Shades
  OxfordColorBlack: '#000000',
  OxfordColorOffBlack: '#333333',
  OxfordColorMidGrey: '#7a736e',
  OxfordColorDarkGrey: '#a6a6a6',
  OxfordColorLightGrey: '#e0ded9',
  OxfordColourVLightGrey: '#f9f8f5',
  OxfordColorWhite: '#ffffff',

  // Custom blog colours
  OxfordColorScienceBlog: '#0f7361',
  OxfordColorScienceBlogButton: '#09332b',
  OxfordColorArtsBlog: '#721627',
  OxfordColorArtsBlogButton: '#330d14',
  OxfordColorBooksBlog: '#cf7a30',
  OxfordColorBooksBlogButton: '#9c4700',

  // Graduate country page colours
  OxfordColorGraduateLightBlue: '#9eceeb',
  OxfordColorGraduateBlue: '#5f9baf',
  OxfordColorGraduateNavyBlue: '#44687d',
  OxfordColorGraduateGreyBlue: '#a1c4d0',
  OxfordColorGraduateDarkGreen: '#69913b',
  OxfordColorGraduateLightGreen: '#aab300',
  OxfordColorGraduateOrange: '#cf7a30',
  OxfordColorGraduateYellow: '#f5cf47',
  OxfordColorGraduateDarkRed: '#872434',
  OxfordColorGraduateRed: '#be0f34',
  OxfordColorGraduatePink: '#ebc4cb',
  OxfordColorGraduateGrey: '#a79d96',

  // Error colours
  OxfordColorStatus: '#7dbc23',
  OxfordColorWarning: '#bc9a23',
  OxfordColorError: '#be0f34',
  OxfordColorErrorLight: '#fff0f3',

  // Social media colours
  OxfordColorCherry: '#be0f34',
  OxfordColorPurple: '#ac48bf',
  OxfordColorRed: '#c7302b',
  OxfordColorLightBlue: '#1daced',
  OxfordColorDeepBlue: '#001c3d',
  OxfordColorLagoonBlue: '#006599',
  OxfordColorWeibo: '#d62a2a',
  OxfordColorGreen: '#177770',
  OxfordColorOrange: '#fb8113',
  OxfordColorGooglePlus: '#d34836',
  OxfordColorInstagram: '#517fa4',


  border: 'rgba(0,0,0,.1)',

};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
} as const;

export const breakpoint = 600;
export const pageMargin = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

export const hoverEffect = css`
  border: 1px solid ${color.border};
  border-radius: ${spacing.borderRadius.small}px;
  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;

  &:hover,
  &.__hover {
    border-color: ${rgba(color.OxfordColorTertiary, 0.5)};
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  &:active,
  &.__active {
    border-color: ${rgba(color.OxfordColorTertiary, 1)};
    transform: translate3d(0, 0, 0);
  }
`;
