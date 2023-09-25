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
}

class FlexOptions extends BaseOptions {
  $flex?: string = 'initial'
}

class ColumnOptions extends FlexOptions {
  $span?: string
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
}

export const Div = styled.div<BaseOptions>`
  background-color: ${(p) => p.style?.backgroundColor};
`

export const Flex = styled(Div)<FlexOptions>`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`

export const Container = styled(Flex)<FlexOptions>`
  width: ${(p) => p.style?.width ?? '100%'};
  max-width: ${(p) => p.style?.maxWidth ?? '100%'};
  padding: ${(p) => p.style?.padding ?? '0 5px'};
  margin: ${(p) => p.style?.margin ?? '0 auto'};
  place-items: ${(p) => p.style?.placeItems ?? 'center'};

  @media (min-width: ${devices.mobileLarge}) {
    padding: ${(p) => p.style?.padding ?? '0 15px'};
    max-width: ${(p) => p.style?.maxWidth ?? '400px'};
  }

  @media (min-width: ${devices.tablet}) {
    // TODO: use calc to automate max-width (sizes.tablet - 60px)
    max-width: ${(p) => p.style?.maxWidth ?? '700px'};
  }

  @media (min-width: ${devices.laptop}) {
    max-width: ${(p) => p.style?.maxWidth ?? '940px'};
  }

  @media (min-width: ${devices.laptopLarge}) {
    max-width: ${(p) => p.style?.maxWidth ?? '1340px'};
  }
`

export const Row = styled(Flex)<FlexOptions>`
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  padding: 10px;
`

const columnSizePercent = (size: string | undefined) => size && parseInt(size) / 0.12 + '%'

export const Column = styled(Flex)<ColumnOptions>`
  --flex-span: ${(p) => columnSizePercent(p.$span) ?? 'auto'};

  flex: 0 0 var(--flex-span);
  max-width: var(--flex-span);
  flex-grow: 1;
  padding: ${(p) => p.style?.padding ?? '0 5px'};

  @media (min-width: ${devices.mobileSmall}) {
    --flex-xs: ${(p) => columnSizePercent(p.$xs) ?? 'var(--flex-span)'};
    flex: 0 0 var(--flex-xs);
    max-width: var(--flex-xs);
    padding: ${(p) => p.style?.padding ?? '0 15px'};
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

export const Grid = styled(Div)<GridOptions>`
  display: grid;
  grid-area: ${(p) => p.style?.gridArea ?? 'initial'};
`

export const Button = (styled.button<BaseOptions>`
  background-color: ${(p) => p.style?.backgroundColor ?? p.theme.main};
`.defaultProps = {
  theme: {
    light: 'green',
    dark: 'red',
  },
})
