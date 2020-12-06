import {ContainerModule } from 'inversify';
import {
  ExampleService, 
} from '../../core/domain/service';
import {
    IExampleRepository, 
} from '../../core/domain/repository';
import {
    ExampleRepository, 
} from '../../infrastructure/repository/example-repository';
import { DOMAIN_TYPES, REPOSITORY_TYPES } from '../types';


export default function createIocConfig() {
  return new ContainerModule((bind) => {      
    /**
     * Services
     */
    bind<ExampleService>(DOMAIN_TYPES.ExampleService)
      .to(ExampleService)
      .inSingletonScope();  

    /**
     * Repositories
     */
    bind<IExampleRepository>(REPOSITORY_TYPES.ExampleRepository)
    .to(ExampleRepository)
    .inSingletonScope();
  });
}
