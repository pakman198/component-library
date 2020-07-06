import { addParameter, addDecorator, addParameters } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import { contexts } from './context';

addParameters({
    backgrounds: [
        { name: "Default theme", value: "#FFF", default: true },
        { name: "Dark theme", value: "#050499" },
    ]
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);