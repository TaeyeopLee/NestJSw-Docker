import { Injectable, Logger } from '@nestjs/common';
import os from 'os';
import fs from 'fs';
import path from 'path';
import winston from 'winston';
import WDRF from 'winston-daily-rotate-file';
import { version } from 'package.json';
import format from 'logform/format';
import { MESSAGE } from 'triple-beam';
import jsonStringify from 'fast-safe-stringify';

@Injectable()
export class LogShippingService {
  constructor() {
    
  }

  private logDir = os.platform() === 'linux' ? path.resolve('../../logs') : path.resolve(__dirname, '../logs');
  
  private fileLogger = this.createFileLogger();
  createFileLogger() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir);
    }
    return winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp({}),
        winston.format.label({ label: 'openapi' + version }),
        winston.format.json(),
        logstash(),
      ),
      transports: [
        new WDRF({
          level: 'info',
          filename: `${this.logDir}/%DATE%.log`,
          maxFiles: 7,
          zippedArchive: false,
          datePattern: 'YYYY-MM-DD',
        }),
      ],
    });
  }
  
  async ship (level, body) {
    this.fileLogger[level](body, "DefaultMeta");
  }

  error (message, trace = "") {
    if (typeof trace === "object") trace = JSON.stringify(trace);
    this.ship("error", message);
    
  }

  warn (message) {
    this.ship("warn", message);
  }

  log (message) {
    this.ship("info", message);
    
  }

  debug (message) {
    this.ship("debug", message);
    
  }

  verbose (message) {
    this.ship("verbose", message);
  }
}

const logstash = format(info => {
  const logstash = {};
  const fields = {};
  if (info.message && typeof info.message === "string") {
    logstash["@message"] = info.message;
    delete info.message;
  }

  if (info.message && typeof info.message === "object") {
    for (const [key, value] of Object.entries(info.message)) {
      fields[key] = value;
    }
  }

  if (info.timestamp) {
    logstash["@timestamp"] = info.timestamp;
    delete info.timestamp;
  }

  if (info.level) {
    logstash["@level"] = info.level;
    delete info.level;
  }

  if (info.label) {
    logstash["@label"] = info.label;
    delete info.label;
  }

  logstash["@fields"] = fields;
  info[MESSAGE] = jsonStringify(logstash);
  return info;
});
