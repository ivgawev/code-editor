import { DesignSystem } from '@shared/design-system';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import { capitalize } from '@shared/helpers';

function getFontsUrls (fonts: DesignSystem.Theme['fonts']) {
      const urls: FlattenSimpleInterpolation[] = [];

      for (const [font, weights] of Object.entries(fonts)) {
            const capitalizedFont = capitalize(font);
            const url = css`@import url('https://fonts.googleapis.com/css2?family=${capitalizedFont}:wght@${weights.join(';')}&display=swap')`;
            urls.push(url);
      }

      return urls;
}

export { getFontsUrls };
