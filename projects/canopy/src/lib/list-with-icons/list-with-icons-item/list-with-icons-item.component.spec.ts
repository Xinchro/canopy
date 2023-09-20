import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { LgIconComponent } from '../../icon';

import { LgListWithIconsItemComponent } from './list-with-icons-item.component';

describe('LgListWithIconsItemComponent', () => {
  let component: LgListWithIconsItemComponent;
  let fixture: ComponentFixture<LgListWithIconsItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgListWithIconsItemComponent, MockComponents(LgIconComponent) ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgListWithIconsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-list');
  });
});
