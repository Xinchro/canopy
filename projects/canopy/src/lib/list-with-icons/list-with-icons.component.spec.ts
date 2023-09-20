import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { LgIconComponent } from '../icon';

import { LgListWithIconsComponent } from './list-with-icon.component';

describe('LgListWithIconsComponent', () => {
  let component: LgListWithIconsComponent;
  let fixture: ComponentFixture<LgListWithIconsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgListWithIconsComponent, MockComponents(LgIconComponent) ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgListWithIconsComponent);
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
