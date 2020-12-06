import { ExampleDbModel } from '../../core/domain/model';
import { ExampleRepository } from '../../core/domain/repository';
import { injectable } from 'inversify';

@injectable()
export class ExampleDbRepository implements ExampleRepository {
  public async findById(id: string): Promise<ExampleDbModel> {
    const result = { id: 1, foo: 'foo', bar: 'bar' } as ExampleDbModel;
    return result
  }  
}
