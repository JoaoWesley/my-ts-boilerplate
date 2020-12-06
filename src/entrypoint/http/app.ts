import * as bodyParser from 'body-parser';
import * as express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import { createIocConfig } from '../../commons/config/'

// Controllers
import './controllers';

export default class HttpApplication {
  private serverInversify: InversifyExpressServer;
  private express: express.Application;
  private env: string;
  private port: number;
  private container: Container;

  constructor() {    
    this.container = new Container();
    this.container.load(createIocConfig());
    this.serverInversify = new InversifyExpressServer(this.container);
  }

  public async boot() {    
    this.env = 'DEV';
    this.port = 3000
    this.serverInversify.setConfig((app: express.Application) => {
      app.use(bodyParser.json());
    });
   
    // build the express application
    this.express = this.serverInversify.build();
    await this.start();
  }

  async start() {
    this.express.listen(this.port, () => {
      console.log('listening on port ' + this.port)      
    });
  }
}
