import { WFMComponent, router } from 'framework';

class HomePageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }

    events() {
      return {
        'click .js-link': 'goToTabs'
      }
    }

    goToTabs(event) {
      event.preventDefault();
      router.navigate('tabs');
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
    <div class="row">
        <div class="col s6 offset-s3">
          <div class="card blue-grey darken-1" style="margin-top: 50px">
            <div class="card-content white-text">
              <span class="card-title">Main page</span>
              <p>Welcome</p>
            </div>
            <div class="card-action">
              <a href="#" class="js-link">To tabs</a>
            </div>
          </div>
        </div>
      </div>
    `
})