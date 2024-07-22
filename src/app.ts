import { Application } from "express";

export class App {
    private readonly app: Application;

    constructor(private readonly port: (string | number))
}