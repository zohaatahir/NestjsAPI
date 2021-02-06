import { AppService } from './app.service';
import {
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
 import {diskStorage} from 'multer';
 import {Helper} from './shared/helper';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("file-upload")
  @UseInterceptors(FileInterceptor("picture", { 
    //dest: "./images/",
  storage: diskStorage({
    destination: Helper.destinationPath,
    filename:Helper.customFileName
  })
}))

  uploadfile(@UploadedFiles() files): string {
    return "success";
  }
}






/*import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
*/

