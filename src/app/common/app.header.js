import { WFMComponent } from 'framework';

class AppHeader extends WFMComponent {
    constructor(config) {
        super(config);
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
    <nav>
    <div class="nav-wrapper blue darken-1">
      <a href="#" class="brand-logo">Native framework</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Main</a></li>
        <li><a href="#tabs">Tabs</a></li>
      </ul>
    </div>
  </nav>
`
})