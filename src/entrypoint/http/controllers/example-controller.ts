import { inject } from 'inversify';
import { Request, Response } from 'express';
import { CREATED } from 'http-status-codes';
import {
  controller,
  httpPost,  
  response,  
  request,
  requestBody
} from 'inversify-express-utils';
import { IExampleParams } from '../../../core/domain/model';
import { DOMAIN_TYPES } from '../../../commons/types';
import { ExampleService } from '../../../core/domain/service';


@controller('/example')
export class ContextController {
  constructor(
    @inject(DOMAIN_TYPES.ExampleService)
    private _exampleService: ExampleService,
  ) {}

  @httpPost('/')
  public async create(
    @requestBody() exampleParams: IExampleParams,
    @request() req: Request,
    @response() res: Response,
  ) {            

    this._exampleService.exampleMethod(exampleParams.foo);

    return res
      .status(CREATED)
      .json('exampleResult')
      .end();
  }  
}
