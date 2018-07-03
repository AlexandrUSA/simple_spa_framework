import { WFMModule } from '../framework/index';	// Импортировали абстрактный первичный модуль
import { appRoutes } from './app.routes';	// Импортировали роуты

/*Импорт всех компонентов*/
import { appComponent } from './app.component';
import { appHeader } from './common/app.header';

/*Создаем модуль нашего прилажения, наследующий от корнегого*/
class AppModule extends WFMModule{
	constructor(config) {
		super(config);
	}
};

/*Экспортируем экземпляр нашего модуля передав в него конфиг*/
export const appModule = new AppModule({
	components: [	// Список всех компонентов
        appHeader
    ],
    bootstrap: appComponent, // Корневой компонент, который пойдет рендериться первым
    routes: appRoutes	// Список роутов
})