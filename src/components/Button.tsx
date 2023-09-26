import styled from 'styled-components'

type ButtonRootProps = {
  variant: string
}

export const Root = styled.button<ButtonRootProps>`
  gap: 0.5rem;
  padding: 1rem;
  transition: all 0.3s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 48px;
  border-radius: 5px;
  width: 252px;
  background: rgb(17, 88, 80);
  border: 1px solid rgb(17, 88, 80);
  background-color: rgb(61, 61, 61);

  &:hover {
    transform: scale(1.04);
  }

  p {
    font-weight: 500;
    font-size: 17px;
    color: white;
  }

  ${({ variant }) =>
    variant === 'secondary' &&
    `
    background: white;
    border: 2px solid rgb(33, 151, 110);

    p {
      color: rgb(61, 61, 61);
    }
  `}

  ${({ variant }) =>
    variant === 'tertiary' &&
    `
      background: transparent;
      border: 2px solid rgb(217, 217, 217);
      width: 222px;
      height: 45px;
      margin-top: 35px;
      color: rgb(250, 250, 250);

      p {
        font-family: Spartan;
        font-weight: 400;
        font-size: 19px;
      }
    `}

  ${({ variant }) =>
    variant === 'quaternary' &&
    `
      border: none;
      background: rgb(240, 120, 10);

      p {
        font-size: 19px;
        font-weight: 600;
      }
    `}
`

interface ButtonProps {
  title: string
  variant?: string
  className?: string
  style?: React.CSSProperties
}
const Button = ({ title = 'Button', variant = 'primary', className, style }: ButtonProps) => {
  return (
    <>
      <Root variant={variant} className={className} style={style}>
        <p>{title}</p>
      </Root>
    </>
  )
}

export default Button
