import { usePathsContext } from '#/hooks';
import { Wrapper } from '#/modules/editor/components';
import { Button, Input } from '@react/ui';
import { useEffect, useRef } from 'react';
import { sanitizePath } from '@shared/helpers';

const Editor = () => {
      const { addPath } = usePathsContext();
      const inputRef = useRef<HTMLInputElement>(null);

      const handleOnClick = () => {
            const input = inputRef.current;
            if (input !== null) {
                  const value = input.value ?? '';
                  const path = sanitizePath(value);
                  if (!path.includes(' ') && path !== '') addPath(path);
                  input.value = '';
            }
      };

      const handleOnEnterKey = ({ key }: KeyboardEvent) => {
            if (key === 'Enter') {
                  handleOnClick();
            }
      };

      useEffect(() => {
            document.addEventListener('keyup', handleOnEnterKey);
            return () => document.removeEventListener('keyup', handleOnEnterKey);
      });

      return (
            <Wrapper>
                  <Input placeholder="Create a folder or a file with an extension" ref={inputRef} />
                  <Button onClick={handleOnClick}>Add</Button>
            </Wrapper>
      );
};

export { Editor };
