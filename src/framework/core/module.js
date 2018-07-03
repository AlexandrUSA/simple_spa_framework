import { router } from '../tools/router';

export class Module {
	constructor(config) {
        this.components = config.components;
        this.bootstrap = config.bootstrap;
        this.routes = config.routes;
    };
	// В методе старт модуль должен инициализировать полученный через параметры компонент
    start() {
        this.initComponents();
        if (this.routes) {
            this.initRoutes();
        }
    };
    initComponents() {
        this.bootstrap.render();    // Сперва рендерим корневой компонент
		this.components.forEach( this.componentRender.bind(this));  // Затем все остальные
    };

    initRoutes() {
        window.addEventListener('hashchange', this.routeRender.bind(this));
        this.routeRender(); // Сразу запускаем, что-бы при перезагрузке загружался компонент, соответствующий роуту
    };

    routeRender() {
        let url = router.getUrl(),  // Получаем хеш урл
            route = this.routes.find(route => route.path === url);  // Находим в списках роутов, соответствующий урл
        if (!route) {
            route = this.routes.find(route => route.path === '**');
        }

        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`
        this.componentRender(route.component);
    };

    componentRender( component ) {
        if(component.created) component.created();
        component.render()
        if(component.mounted) component.mounted();
    };
}