import { prefix } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const theme = {
  light: 'white',
  dark: 'black',
}

const sizes = {
  xs: 320, // extra small
  sm: 375, // small medium
  sl: 425, // small longer
  md: 768, // medium
  lg: 1024, // large
  xl: 1440, // extra large
  xxl: 2560, // extra extra large
}

const devices = {
  mobileSmall: `${sizes.xs}px`, // 320px
  mobileMedium: `${sizes.sm}px`, // 375px
  mobileLarge: `${sizes.sl}px`, // 425px
  tablet: `${sizes.md}px`, // 768px
  laptop: `${sizes.lg}px`, // 1024px
  laptopLarge: `${sizes.xl}px`, // 1440px
  desktop: `${sizes.xxl}px`, // 2560px
}

class BaseOptions {
  $backgroundColor?: string = 'initial'
  $border?: string = 'initial'
  $borderRadius?: string = 'initial'
  $bottom?: string = 'initial'
  $boxShadow?: string = 'initial'
  $color?: string = 'initial'
  $cursor?: string = 'initial'
  $display?: string = 'initial'
  $fontSize?: string = 'initial'
  $fontWeight?: string = 'initial'
  $height?: string = 'initial'
  $left?: string = 'initial'
  $lineHeight?: string = 'initial'
  $margin?: string = 'initial'
  $maxHeight?: string = 'initial'
  $maxWidth?: string = 'initial'
  $minHeight?: string = 'initial'
  $minWidth?: string = 'initial'
  $overflow?: string = 'initial'
  $padding?: string = 'initial'
  $position?: string = 'initial'
  $right?: string = 'initial'
  $textAlign?: string = 'initial'
  $textDecoration?: string = 'initial'
  $textTransform?: string = 'initial'
  $top?: string = 'initial'
  $width?: string = 'initial'
  $zIndex?: string = 'initial'
}

class FlexOptions extends BaseOptions {
  $alignContent?: string = 'initial'
  $alignItems?: string = 'initial'
  $alignSelf?: string = 'initial'
  $flex?: string = 'initial'
  $flexBasis?: string = 'initial'
  $flexDirection?: string = 'initial'
  $flexFlow?: string = 'initial'
  $flexGrow?: string = 'initial'
  $flexShrink?: string = 'initial'
  $flexWrap?: string = 'initial'
  $justifyContent?: string = 'initial'
  $justifyItems?: string = 'initial'
  $justifySelf?: string = 'initial'
  $order?: string = 'initial'
  $placeItems?: string = 'initial'
}

class ColOptions extends FlexOptions {
  $col?: string
  $xs?: string
  $sm?: string
  $sl?: string
  $md?: string
  $lg?: string
  $xl?: string
  $xxl?: string
}

class GridOptions extends BaseOptions {
  $grid?: string = 'initial'
  $gridArea?: string = 'initial'
  $gridAutoColumns?: string = 'initial'
  $gridAutoFlow?: string = 'initial'
  $gridAutoRows?: string = 'initial'
  $gridColumn?: string = 'initial'
  $gridColumnGap?: string = 'initial'
  $gridGap?: string = 'initial'
  $gridRow?: string = 'initial'
  $gridRowGap?: string = 'initial'
  $gridTemplate?: string = 'initial'
  $gridTemplateAreas?: string = 'initial'
  $gridTemplateColumns?: string = 'initial'
  $gridTemplateRows?: string = 'initial'
  $placeItems?: string = 'initial'
}

export const Div = styled.div<BaseOptions>`
  background-color: ${(p) => p.$backgroundColor};
  border-radius: ${(p) => p.$borderRadius};
  border: ${(p) => p.$border};
  bottom: ${(p) => p.$bottom};
  box-shadow: ${(p) => p.$boxShadow};
  color: ${(p) => p.$color};
  cursor: ${(p) => p.$cursor};
  display: ${(p) => p.$display};
  font-size: ${(p) => p.$fontSize};
  font-weight: ${(p) => p.$fontWeight};
  height: ${(p) => p.$height};
  left: ${(p) => p.$left};
  line-height: ${(p) => p.$lineHeight};
  margin: ${(p) => p.$margin};
  max-height: ${(p) => p.$maxHeight};
  max-width: ${(p) => p.$maxWidth};
  min-height: ${(p) => p.$minHeight};
  min-width: ${(p) => p.$minWidth};
  overflow: ${(p) => p.$overflow};
  padding: ${(p) => p.$padding};
  position: ${(p) => p.$position};
  right: ${(p) => p.$right};
  text-align: ${(p) => p.$textAlign};
  text-decoration: ${(p) => p.$textDecoration};
  text-transform: ${(p) => p.$textTransform};
  top: ${(p) => p.$top};
  width: ${(p) => p.$width};
  z-index: ${(p) => p.$zIndex};
`

export const Flex = styled(Div).attrs({ className: 'flex' })<FlexOptions>`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: ${(p) => p.$alignItems};
  justify-content: ${(p) => p.$justifyContent};
  place-items: ${(p) => p.$placeItems};
`

export const Container = styled(Flex).attrs({ className: 'container' })<FlexOptions>`
  width: ${(p) => p.$width ?? '100%'};
  max-width: ${(p) => p.$maxWidth ?? '100%'};
  padding: ${(p) => p.$padding ?? '0 5px'};
  margin: ${(p) => p.$margin ?? '0 auto'};
  place-items: ${(p) => p.$placeItems ?? 'center'};

  @media (min-width: ${devices.mobileLarge}) {
    padding: ${(p) => p.$padding ?? '0 15px'};
    max-width: ${(p) => p.$maxWidth ?? '400px'};
  }

  @media (min-width: ${devices.tablet}) {
    // TODO: use calc to automate max-width (sizes.tablet - 60px)
    max-width: ${(p) => p.$maxWidth ?? '700px'};
  }

  @media (min-width: ${devices.laptop}) {
    max-width: ${(p) => p.$maxWidth ?? '940px'};
  }

  @media (min-width: ${devices.laptopLarge}) {
    max-width: ${(p) => p.$maxWidth ?? '1340px'};
  }
`

export const Row = styled(Flex).attrs({ className: 'row' })<FlexOptions>`
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  padding: 10px;
`

const columnSizePercent = (col: string | undefined) => col && parseInt(col) / 0.12 + '%'

export const Col = styled(Flex).attrs({ className: 'col' })<ColOptions>`
  --flex-col: ${(p) => columnSizePercent(p.$col) ?? 'auto'};

  flex: 0 0 var(--flex-col);
  max-width: var(--flex-col);
  flex-grow: 1;
  flex-basis: 0;
  padding: ${(p) => p.$padding ?? '0 5px'};

  @media (min-width: ${devices.mobileSmall}) {
    --flex-xs: ${(p) => columnSizePercent(p.$xs) ?? 'var(--flex-col)'};
    flex: 0 0 var(--flex-xs);
    max-width: var(--flex-xs);
    padding: ${(p) => p.$padding ?? '0 15px'};
  }

  @media (min-width: ${devices.mobileMedium}) {
    --flex-sm: ${(p) => columnSizePercent(p.$sm) ?? 'var(--flex-xs)'};
    flex: 0 0 var(--flex-sm);
    max-width: var(--flex-sm);
  }

  @media (min-width: ${devices.mobileLarge}) {
    --flex-sl: ${(p) => columnSizePercent(p.$sl) ?? 'var(--flex-sm)'};
    flex: 0 0 var(--flex-sl);
    max-width: var(--flex-sl);
  }

  @media (min-width: ${devices.tablet}) {
    --flex-md: ${(p) => columnSizePercent(p.$md) ?? 'var(--flex-sl)'};
    flex: 0 0 var(--flex-md);
    max-width: var(--flex-md);
  }

  @media (min-width: ${devices.laptop}) {
    --flex-lg: ${(p) => columnSizePercent(p.$lg) ?? 'var(--flex-md)'};
    flex: 0 0 var(--flex-lg);
    max-width: var(--flex-lg);
  }

  @media (min-width: ${devices.laptopLarge}) {
    --flex-xl: ${(p) => columnSizePercent(p.$xl) ?? 'var(--flex-lg)'};
    flex: 0 0 var(--flex-xl);
    max-width: var(--flex-xl);
  }

  @media (min-width: ${devices.desktop}) {
    --flex-xxl: ${(p) => columnSizePercent(p.$xxl) ?? 'var(--flex-xl)'};
    flex: 0 0 var(--flex-xxl);
    max-width: var(--flex-xxl);
  }
`

export const Grid = styled(Div).attrs({ className: 'grid' })<GridOptions>`
  display: grid;
  grid-area: ${(p) => p.$gridArea};
  grid-auto-columns: ${(p) => p.$gridAutoColumns};
  grid-auto-flow: ${(p) => p.$gridAutoFlow};
  grid-auto-rows: ${(p) => p.$gridAutoRows};
  grid-column-gap: ${(p) => p.$gridColumnGap};
  grid-column: ${(p) => p.$gridColumn};
  grid-gap: ${(p) => p.$gridGap};
  grid-row-gap: ${(p) => p.$gridRowGap};
  grid-row: ${(p) => p.$gridRow};
  grid-template-areas: ${(p) => p.$gridTemplateAreas};
  grid-template-areas: ${(p) => p.$gridTemplateAreas};
  grid-template-columns: ${(p) => p.$gridTemplateColumns};
  grid-template-columns: ${(p) => p.$gridTemplateColumns};
  grid-template-rows: ${(p) => p.$gridTemplateRows};
  grid-template-rows: ${(p) => p.$gridTemplateRows};
  grid-template: ${(p) => p.$gridTemplate};
  grid: ${(p) => p.$grid};
  place-items: ${(p) => p.$placeItems};
`

export const Button = (styled.button<BaseOptions>`
  background-color: ${(p) => p.$backgroundColor ?? p.theme.main};
`.defaultProps = {
  theme: {
    light: 'green',
    dark: 'red',
  },
})
