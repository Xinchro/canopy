import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgCardModule } from '../../card';
import { LgSeparatorModule } from '../../separator';
import { LgHideAtDirective, LgHideAtModule } from '../../hide-at';

// This default export determines where your story goes in the story list
export default {
  title: 'Helpers/Directives/Hide at/Examples',
  component: LgHideAtDirective,
  decorators: [
    moduleMetadata({
      imports: [ LgHideAtModule, LgCardModule, LgSeparatorModule ],
    }),
  ],
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  argTypes: {
    lgHideAt: {
      options: [ 'sm', 'md', 'lg', 'xl', 'xxl' ],
      description: 'The name of the breakpoint applied.',
      table: {
        type: {
          summary: [ 'sm', 'md', 'lg', 'xl', 'xxl' ],
        },
      },
      control: {
        type: 'select',
      },
    },
    responsiveUtilClass: {
      table: {
        disable: true,
      },
    },
    toggleClass: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const directiveTemplate = `
<lg-card [lgHideAt]="lgHideAt">
  <lg-card-content>
    Now you see me...
  </lg-card-content>
</lg-card>
`;

const template = `
<p><strong>Change viewport width to see the card appear at specified breakpoint</strong></p>
<pre>lgHideAt="{{lgHideAt}}"</pre>
<lg-separator></lg-separator>
${directiveTemplate}
`;

const hideAtTemplate: Story<LgHideAtDirective> = (args: LgHideAtDirective) => ({
  props: args,
  template,
});

export const hideAtStory = hideAtTemplate.bind({});
hideAtStory.storyName = 'Hide at';

hideAtStory.args = {
  lgHideAt: 'md',
};

hideAtStory.parameters = {
  docs: {
    source: {
      code: directiveTemplate,
    },
  },
};
