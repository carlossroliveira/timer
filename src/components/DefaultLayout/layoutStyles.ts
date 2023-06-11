import styled from 'styled-components'

export const ContainerSC = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);

  margin: 5rem auto;
  padding: 2.5rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme['gray-800']};
`
