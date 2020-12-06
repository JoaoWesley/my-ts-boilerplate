import { injectable } from "inversify";

import { ExampleDbModel } from "../../core/domain/model";
import { ExampleRepository } from "../../core/domain/repository";

@injectable()
export class ExampleDbRepository implements ExampleRepository {
  public async findById(id: number): Promise<ExampleDbModel> {
    const result = { id, foo: "foo", bar: "bar" } as ExampleDbModel;
    return result;
  }
}
