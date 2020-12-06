import { IExampleDbModel } from '../../core/domain/model';
import { IExampleRepository } from '../../core/domain/repository';
import { injectable } from 'inversify';

@injectable()
export class ExampleRepository implements IExampleRepository {
  public async findById(id: string): Promise<IExampleDbModel> {
    const result = { id: 1, foo: 'foo', bar: 'bar' } as IExampleDbModel;
    return result
  }  
}
