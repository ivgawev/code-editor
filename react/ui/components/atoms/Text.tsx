import { HTMLAttributes } from 'react';
import { DesignSystem } from '@shared/design-system';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLElement> {
      as?: DesignSystem.Text.Element
      variant?: keyof DesignSystem.Text.Variants
}

const Text = styled(({ as: component, children, ...rest }: Props) => {
      const Component = component ?? 'p';

      return (
            <Component {...rest}>
                  {children}
            </Component>
      );
})`
      font-family: ${({ theme, as }) => theme.text.types[as!].family};
      font-weight: ${({ theme, as }) => theme.text.types[as!].weight};
      font-size: ${({ theme, as }) => theme.text.types[as!].size}rem;
      color: ${({ theme, variant }) => theme.text.variants[variant!]};
      line-height: ${({ theme, as }) => theme.text.types[as!].lineHeight}rem;
      letter-spacing: ${({ theme, as }) => theme.text.types[as!].letterSpacing}px;
`;

Text.defaultProps = {
      as: 'p',
      variant: 'primary'
};

export { Text, Props as TextProps };
