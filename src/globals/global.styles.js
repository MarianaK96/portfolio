import styled from "styled-components"
import { size, device } from "./breakpoints"

export const PaddingWrapper = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  @media ${device.sm} {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
`
export const PaddingTop = styled.div`
  padding-top: 8rem;
`
