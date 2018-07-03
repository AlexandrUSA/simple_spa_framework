import { bootstrap } from './framework/core/bootstrap';	// Импорт точки входа в приложение
import { appModule } from './app/app.module';	// Импорт корневого модуля
import { wfm } from './framework/index';    // Импорт тулсов (пока один для имитации загрузки)



wfm.delay(1000).then(() => {
    bootstrap(appModule); // Точка входа в приложение
})


