import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewChild, ViewEncapsulation } from '@angular/core';

import { LgIconComponent } from '../../icon';
import { IconName } from '../../icon/icons.interface';

type Name = IconName;

@Component({
  selector: 'lg-list-with-icons-item',
  templateUrl: './list-with-icons-item.component.html',
  styleUrls: [ './list-with-icons-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgListWithIconsItemComponent implements AfterViewInit {
  @HostBinding('class.lg-list-with-icons-item') class = true;
  @HostBinding('attr.role') role = 'listitem';

  @ViewChild(LgIconComponent, { static: true }) iconRef: ElementRef;

  @Input() name: Name;

  @Input() colour: string;

  ngAfterViewInit() {
    if (!this.iconRef) {
      return;
    }

    const ref = this.iconRef?.nativeElement;
    // const host = ref.hostElement;

    console.log('ref', ref);

    // Some icons don't have colour so don't need the fill to be set
    if (ref) {
      ref.style.color = `var(${this.colour})`;
    }
  }

}
