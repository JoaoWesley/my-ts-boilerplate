import { injectable } from "inversify";

import { Example } from "../../core/domain/model";
import { ExampleRepository } from "../../core/domain/repository";

@injectable()
export class ExampleDbRepository implements ExampleRepository {
  public async findById(id: number): Promise<Example> {
    const result = { id, foo: "foo", bar: "bar" } as Example;
    return result;
  }
}
