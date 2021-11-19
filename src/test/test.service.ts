import { Injectable } from '@nestjs/common';
@Injectable()
export class TestService {
  getHello(): string {
    return JSON.stringify({ success: true, data: 'Hello world from TestService' });
  }
  
  getDelete(): string {
    return 'Deleted !';
  }

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
