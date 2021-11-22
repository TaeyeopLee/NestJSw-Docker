import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { Library } from 'src/library/library';
@Injectable()
export class TestService {
  getHello(): string {
    return JSON.stringify({ success: true, data: 'Hello world from TestService' });
  }
  
  getDelete(): string {
    return 'Deleted !';
  }

  testDateYYYYMMDD(date) {
    console.log(date);

    return JSON.stringify({
      "moment": moment(date).format('YYYYMMDD'),
      "Library": Library.makeYYYYMMDD(date)
    });
  }

  testDateLong(date) {
    console.log(date);

    return JSON.stringify({
      "moment": moment(date).format('YYYYMMDDHHmmss'),
      "Library": Library.makeYYYYMMDDHHMMSS(date),
    });
  }

  testDateLongOracle(date) {
    console.log(date);
    console.time('moment calculatingTime');
    let momentProc = moment(date).format('YY/MM/DD HH:mm:ss.SSS');
    console.timeEnd('moment calculatingTime');
    console.time('Library calculatingTime');
    let lib = Library.makeYYYYMMDDHHMMSSOracle(date);
    console.timeEnd('Library calculatingTime');

    return JSON.stringify({
      "moment": { "result": momentProc },
      "Library": { "result": lib }
    });
  };
  // public async makeKoreaBankUrl(koreabank) {

  // }

  // public async getKoreabank(koreabank) {
  //   let url = await this.makeKoreaBankUrl(koreabank);
  //   let
  //   let result
  //   await fetch(req).then(res => result = res).catch(e => {
  //     console.error(e);
  //   })
  // }
}
