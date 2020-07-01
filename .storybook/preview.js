import { addParameter, addDecorator, addParameters } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';

import { contexts } from './context';

addParameters({
    backgrounds: [
        { name: "Default theme", value: "#FFF", default: true },
        { name: "Dark theme", value: "#050499" },
    ]
});

addDecorator(withContexts(contexts));