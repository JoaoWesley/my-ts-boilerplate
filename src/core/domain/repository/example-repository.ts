import { ExampleDbModel } from "../model";

export interface ExampleRepository {
  findById(id: number): Promise<ExampleDbModel>;
}
