import { injectable, inject } from 'inversify';
import { REPOSITORY_TYPES } from '../../../commons/types';
import { ExampleRepository } from '../repository/example-repository';

@injectable()
export class ExampleService {
  constructor(
    @inject(REPOSITORY_TYPES.ExampleDbRepository)
    private _exampleRepository: ExampleRepository,
  ) {}
    exampleMethod(foo: string) {    
        console.log('method service called')
        this._exampleRepository.findById('id');
    } 
}
