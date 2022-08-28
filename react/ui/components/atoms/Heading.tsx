import { Text } from '#/components';
import { TextProps } from '#/components/atoms/Text';

type Props = Omit<TextProps, 'as'>;
const Heading = (props: Props) => <Text {...props} />;

Heading.defaultProps = {
      as: 'h1',
      variant: 'primary'
};

export { Heading };
