import { ExampleDbModel } from '../model';

export interface ExampleRepository {  
  findById(id: string): Promise<ExampleDbModel>;  
}
