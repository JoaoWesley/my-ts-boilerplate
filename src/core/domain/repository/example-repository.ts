import { Example } from "../model";

export interface ExampleRepository {
  findById(id: number): Promise<Example>;
}
