import { injectable, inject } from 'inversify';
import { REPOSITORY_TYPES } from '../../../commons/types';
import { IExampleRepository } from '../repository/example-repository';

@injectable()
export class ExampleService {
  constructor(
    @inject(REPOSITORY_TYPES.ExampleRepository)
    private _exampleRepository: IExampleRepository,
  ) {}
    exampleMethod(foo: string) {    
        console.log('method service called')
        this._exampleRepository.findById('id');
    } 
}
