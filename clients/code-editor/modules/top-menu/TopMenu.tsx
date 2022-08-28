import { Wrapper } from '#/modules/top-menu/components';
import { Text } from '@react/ui';

const TopMenu = () => {
      return (
            <Wrapper>
                  <img src="https://freesvg.org/img/claudita-Flag-of-Spain.png"/>
                  <Text variant="secondary">Code Editor</Text>
            </Wrapper>
      );
};

export { TopMenu };
