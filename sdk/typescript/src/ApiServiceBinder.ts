import {interfaces} from 'inversify';

import { DefaultService } from './api/default.service';
import { DefaultServiceInterface }  from './api/default.serviceInterface';

export class ApiServiceBinder {
    public static with(container: interfaces.Container) {
        container.bind<DefaultServiceInterface>('DefaultService').to(DefaultService).inSingletonScope();
    }
}
