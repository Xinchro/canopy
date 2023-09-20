import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'lg-list-with-icons',
  templateUrl: './list-with-icons.component.html',
  styleUrls: [ './list-with-icons.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgListWithIconsComponent {
  @HostBinding('class.lg-list-with-icons') class = true;
  @HostBinding('attr.role') role = 'list';
}
