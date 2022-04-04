import styled from 'styled-components'
import { Close as CloseSvg, Spinner as SpinnerSvg, Success as SuccessSvg } from '../svgs'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(22, 22, 42, 0.5);
`

export const Modal = styled.div`
  width: 500px;
  height: 500px;
  background-color: #f3f3f3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  border-radius: 8px;
`

export const Message = styled.p`
  color: black;
`

export const Close = styled(CloseSvg)`
  position: absolute;
  top: 20px;
  right: 20px;

  fill: black;

  cursor: pointer;
`

export const Spinner = styled(SpinnerSvg)`
  animation: rotator 1.4s linear infinite;
  margin-bottom: 40px;

  circle {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
  }

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  @keyframes colors {
    0% {
      stroke: #4285f4;
    }
    25% {
      stroke: #de3e35;
    }
    50% {
      stroke: #f7c223;
    }
    75% {
      stroke: #1b9a59;
    }
    100% {
      stroke: #4285f4;
    }
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 187;
    }
    50% {
      stroke-dashoffset: 46.75;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      transform: rotate(450deg);
    }
  }
`

export const Success = styled(SuccessSvg)`
  margin-bottom: 40px;
`
