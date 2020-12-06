import { IExampleDbModel } from '../model';

export interface IExampleRepository {  
  findById(id: string): Promise<IExampleDbModel>;  
}
