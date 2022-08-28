import { Children, FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
      direction?: 'row' | 'column'
      size: {
            left: number
            right: number
      }
}

const Split: FC<Props> = ({ size, children, ...rest }) => {
      const [left, right] = Children.toArray(children);

      return (
            <Wrapper>
                  <Pane weight={size.left} {...rest}>
                        {left}
                  </Pane>

                  <Pane weight={size.right} {...rest }>
                        {right}
                  </Pane>
            </Wrapper>
      );
};

const Wrapper = styled.section`
      display: flex;
      flex-direction: column;
`;

const Pane = styled.div<{ weight: number, direction?: 'row' | 'column' }>`
      flex: ${({ weight }) => weight};
      flex-direction: ${({ direction }) => direction};
`;

Split.defaultProps = {
      direction: 'row'
};

export { Split };
