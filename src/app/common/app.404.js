import { WFMComponent } from 'framework';

class NotFound extends WFMComponent {
    constructor(config) {
        super(config);
    }
}

export const notFound = new NotFound({
    selector: 'app-not-found',
    template: `
    <div class="row">
        <div class="col s6 offset-s3">
          <div class="card blue-grey darken-1" style="margin-top: 50px">
            <div class="card-content white-text">
              <span class="card-title">404 Page</span>
              <p>Page not found=(</p>
            </div>
            <div class="card-action">
              <a href="#">Back</a>
            </div>
          </div>
        </div>
      </div>
`
})