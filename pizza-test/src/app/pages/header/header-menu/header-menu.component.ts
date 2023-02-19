import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMenuComponent {

}
