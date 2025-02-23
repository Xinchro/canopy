import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { LgAlertModule } from '../alert.module';
import { LgAlertComponent } from '../alert.component';

const variantTypes = [ 'generic', 'info', 'success', 'warning', 'error' ];

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Inline message (Alert)/Examples',
  component: LgAlertComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgAlertModule ],
    }),
  ],
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  argTypes: {
    content: {
      description: 'The projected content.',
    },
    showIcon: {
      description:
        'Whether the icon should display on the warning, error or success variants.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    variant: {
      options: variantTypes,
      description: 'Applies colour treatment and ARIA role if applicable.',
      table: {
        type: {
          summary: variantTypes,
        },
        defaultValue: {
          summary: 'generic',
        },
      },
      control: {
        type: 'select',
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
<lg-alert
  [showIcon]="showIcon"
  [variant]="variant">
  {{content}} Here is some <a href="#"> link text</a>.
</lg-alert>
`;

const alertTemplate: Story<LgAlertComponent> = (args: LgAlertComponent) => ({
  props: args,
  template,
});

export const standardAlert = alertTemplate.bind({});
standardAlert.storyName = 'Inline message';

standardAlert.args = {
  content: 'This is an inline message.',
  variant: 'generic',
};

standardAlert.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
