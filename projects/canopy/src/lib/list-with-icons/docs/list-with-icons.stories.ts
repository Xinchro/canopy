import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';

import { LgListWithIconsModule } from '../list-with-icons.module';
import { LgIconModule, LgIconRegistry, lgIconCheckmark, lgIconClose } from '../../icon';

// probably....

const template = `
<lg-list-with-icons>
  ${getDefaultList().map(item => createListItemTemplate(item)).join('')}
</lg-list-with-icons>
`;

function createListItemTemplate(item: any): string {
  if (item.children) {
    return `
<lg-list-with-icons-item name="${item.icon}" colour="${item.colour}">
  ${item.text}
  <lg-list-with-icons>
    ${item.children.map(child => createListItemTemplate(child)).join('')}
  </lg-list-with-icons>
</lg-list-with-icons-item>`;
  }

  return `
<lg-list-with-icons-item name="${item.icon}" colour="${item.colour}">
  ${item.text}
</lg-list-with-icons-item>`;
}

@Component({
  selector: 'lg-list-with-icons-wrapper',
  template,
})
class ListWithIconsWrapperComponent {
  @Input() listItems: Array<any>;

  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([ lgIconCheckmark, lgIconClose ]);
  }
}

// This default export determines where your story goes in the story list
export default {
  title: 'Components/List with icons/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgListWithIconsModule, LgIconModule ],
      declarations: [ ListWithIconsWrapperComponent ],
    }),
  ],
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  argTypes: {

    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const listWithIconsTemplate: Story<ListWithIconsWrapperComponent> = (args: ListWithIconsWrapperComponent) => ({
  props: args,
  template: '<lg-list-with-icons-wrapper [listItems]="listItems"></lg-list-with-icons-wrapper>',
});

function getDefaultList(): Array<any> {
  return [
    {
      icon: 'checkmark',
      colour: '--colour-leafy-green',
      text: '1',
    },
    {
      icon: 'checkmark',
      colour: '--colour-leafy-green',
      text: '2',
    },
    {
      icon: 'close',
      colour: '--colour-poppy-red',
      text: '3',
    },
    {
      icon: 'close',
      colour: '--colour-poppy-red',
      text: '4',
    },
    {
      // icon: 'close',
      colour: '--colour-poppy-red',
      text: '5',
    },
    {
      icon: 'checkmark',
      colour: '--colour-leafy-green',
      text: '6',
      children: [
        {
          icon: 'checkmark',
          colour: '--colour-leafy-green',
          text: '6.1',
        },
        {
          icon: 'checkmark',
          colour: '--colour-leafy-green',
          text: '6.2',
          children: [
            {
              icon: 'checkmark',
              colour: '--colour-leafy-green',
              text: '6.2.1',
            },
            {
              icon: 'close',
              colour: '--colour-poppy-red',
              text: '6.2.2',
            },
          ],
        },
      ],
    },
  ];
}

export const standardListWithIcons = listWithIconsTemplate.bind({});
standardListWithIcons.storyName = 'List with icons';

standardListWithIcons.args = {
  listItems: getDefaultList(),
};

standardListWithIcons.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
