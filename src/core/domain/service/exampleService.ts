import { inject, injectable } from "inversify";

import { REPOSITORY_TYPES } from "../../../commons/types";
import { ExampleDbModel } from "../../domain/model";
import { ExampleRepository } from "../repository/example-repository";

@injectable()
export class ExampleService {
  constructor(
    @inject(REPOSITORY_TYPES.ExampleDbRepository)
    private _exampleRepository: ExampleRepository
  ) {}
  async exampleMethod(id: number): Promise<ExampleDbModel> {
    console.log("method service called");
    return this._exampleRepository.findById(id);
  }
}
