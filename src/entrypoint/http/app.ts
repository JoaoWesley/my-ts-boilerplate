// Controllers
import "./controllers";

import * as bodyParser from "body-parser";
import * as express from "express";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import { createIocConfig } from "../../commons/config/";

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

  public async boot(): Promise<void> {
    this.env = "DEV";
    this.port = 3000;
    this.serverInversify.setConfig((app: express.Application) => {
      app.use(bodyParser.json());
    });

    // build the express application
    this.express = this.serverInversify.build();
    await this.start();
  }

  start(): void {
    this.express.listen(this.port, () => {
      console.log("listening on port " + this.port);
    });
  }
}
