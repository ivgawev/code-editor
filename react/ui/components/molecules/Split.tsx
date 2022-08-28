import { Children, FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
      size: {
            left: number
            right: number
      }
}

const Split: FC<Props> = ({ size, children }) => {
      const [left, right] = Children.toArray(children);

      return (
            <Wrapper>
                  <Pane weight={size.left}>
                        {left}
                  </Pane>

                  <Pane weight={size.right}>
                        {right}
                  </Pane>
            </Wrapper>
      );
};

const Wrapper = styled.section`
      display: flex;
`;

const Pane = styled.div<{ weight: number }>`
      flex: ${({ weight }) => weight};
`;

export { Split };
