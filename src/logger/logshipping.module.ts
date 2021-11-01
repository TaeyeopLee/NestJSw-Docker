import { Module } from "@nestjs/common";
import { LogShippingService } from "./logshipping.service";

@Module({
    imports: [

    ],
    providers: [LogShippingService],
    exports: [LogShippingService]
})
export class LoggerModule {}
