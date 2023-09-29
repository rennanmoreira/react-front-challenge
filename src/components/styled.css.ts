import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  $base?: number = 12
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

const columnSizePercent = (size: string | undefined, base: number = 12) =>
  size && (parseInt(size) / base) * 100 + '%'

export const Column = styled(Flex)<ColumnOptions>`
  --flex-span: ${(p) => columnSizePercent(p.$span, p.$base) ?? 'auto'};

  flex: 0 0 var(--flex-span);
  max-width: var(--flex-span);
  flex-grow: 1;
  padding: ${(p) => p.style?.padding ?? '0 5px'};

  @media (min-width: ${devices.mobileSmall}) {
    --flex-xs: ${(p) => columnSizePercent(p.$xs, p.$base) ?? 'var(--flex-span)'};
    flex: 0 0 var(--flex-xs);
    max-width: var(--flex-xs);
    padding: ${(p) => p.style?.padding ?? '0 15px'};
  }

  @media (min-width: ${devices.mobileMedium}) {
    --flex-sm: ${(p) => columnSizePercent(p.$sm, p.$base) ?? 'var(--flex-xs)'};
    flex: 0 0 var(--flex-sm);
    max-width: var(--flex-sm);
  }

  @media (min-width: ${devices.mobileLarge}) {
    --flex-sl: ${(p) => columnSizePercent(p.$sl, p.$base) ?? 'var(--flex-sm)'};
    flex: 0 0 var(--flex-sl);
    max-width: var(--flex-sl);
  }

  @media (min-width: ${devices.tablet}) {
    --flex-md: ${(p) => columnSizePercent(p.$md, p.$base) ?? 'var(--flex-sl)'};
    flex: 0 0 var(--flex-md);
    max-width: var(--flex-md);
  }

  @media (min-width: ${devices.laptop}) {
    --flex-lg: ${(p) => columnSizePercent(p.$lg, p.$base) ?? 'var(--flex-md)'};
    flex: 0 0 var(--flex-lg);
    max-width: var(--flex-lg);
  }

  @media (min-width: ${devices.laptopLarge}) {
    --flex-xl: ${(p) => columnSizePercent(p.$xl, p.$base) ?? 'var(--flex-lg)'};
    flex: 0 0 var(--flex-xl);
    max-width: var(--flex-xl);
  }

  @media (min-width: ${devices.desktop}) {
    --flex-xxl: ${(p) => columnSizePercent(p.$xxl, p.$base) ?? 'var(--flex-xl)'};
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

export const H1 = styled.h1`
  font-size: 50px;
  font-weight: 400;
  line-height: 140.5%;
  color: rgb(61, 61, 61);
  font-family: Spartan;

  span {
    font-family: Spartan, sans-serif;
    font-weight: 600;
  }

  @media (min-width: 900px) and (max-width: 1249px) {
    font-size: 45px;
  }
  @media (max-width: 750px) {
    font-size: 26px;
  }
`

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 400;
  color: rgb(61, 61, 61);
  margin-bottom: 40px;
  font-family: Spartan;

  span {
    font-family: Spartan, sans-serif;
    font-weight: 600;
  }

  &.bigger {
    font-size: 50px;
    color: rgb(250, 250, 250);
    margin-bottom: 62px;
  }

  @media (min-width: 900px) and (max-width: 1249px) {
    font-size: 40px;

    &.bigger {
      font-size: 40px;
      margin-bottom: 42px;
    }
  }
  @media (max-width: 750px) {
    font-size: 26px;
    &.bigger {
      font-size: 28px;
      margin-bottom: 32px;
    }
  }
`

export const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: rgb(61, 61, 61);
  font-family: Spartan;

  span {
    font-family: Spartan, sans-serif;
    font-weight: 600;
  }
`

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: rgb(61, 61, 61);

  &.bigger {
    font-size: 21px;
    font-weight: 400;
  }

  @media (max-width: 900px) {
    font-size: 15px;
    &.bigger {
      font-size: 18px;
    }
  }

  @media (max-width: 650px) {
    font-weight: 400;
    &.bigger {
      font-size: 16px;
    }
  }
`

export const PageWrapper = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const PageContent = styled.div`
  width: 100%;
  max-width: 1440px;
`

export const Section = styled.section`
  padding: 64px 48px 58px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    padding: 64px 30px 30px;
  }
`

export const TextSection = styled.div`
  max-width: 725px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const ButtonsContainer = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  text-decoration: none;
`

export const CustomLink = styled(Link)`
  transition: all 0.3s ease 0s;
  margin-top: 28px;
  font-size: 20px;
  text-align: start;
  color: rgb(69, 121, 255);

  &:hover {
    transform: scale(1.04) translateX(12px);
  }
`

export const BannerSection = styled.div`
  display: flex;
  align-items: flex-start;
`

export const BannerImage = styled.img`
  max-inline-size: 100%;
  block-size: auto;
  height: auto;
  object-fit: contain;
  min-width: min-content;
`
