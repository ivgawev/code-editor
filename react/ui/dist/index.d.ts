import * as styled_components from 'styled-components';
import { HTMLAttributes, FC, PropsWithChildren } from 'react';
import { DesignSystem } from '@shared/design-system';

declare const Button: styled_components.StyledComponent<"button", styled_components.DefaultTheme, {}, never>;

interface Props$2 extends HTMLAttributes<HTMLElement> {
    as?: DesignSystem.Text.Element;
    variant?: keyof DesignSystem.Text.Variants;
}
declare const Text: styled_components.StyledComponent<({ as, children, ...rest }: Props$2) => JSX.Element, styled_components.DefaultTheme, {}, never>;

declare type Props$1 = Omit<Props$2, 'as'>;
declare const Heading: {
    (props: Props$1): JSX.Element;
    defaultProps: {
        as: string;
        variant: string;
    };
};

declare const Input: styled_components.StyledComponent<"input", styled_components.DefaultTheme, {}, never>;

declare const Page: styled_components.StyledComponent<"main", styled_components.DefaultTheme, {}, never>;

interface Props extends PropsWithChildren {
    size: {
        left: number;
        right: number;
    };
}
declare const Split: FC<Props>;

export { Button, Heading, Input, Page, Split, Text };
