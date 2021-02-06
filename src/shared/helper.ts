export class Helper {
    static customFileName(req, file, cb) {
      let fileExtension = "";
      if(file.mimetype.indexOf("jpeg") > -1){
          fileExtension = "jpeg"
      }else if(file.mimetype.indexOf("png") > -1){
          fileExtension = "png";
      }
      else if(file.mimetype.indexOf("jpg") > -1){
        fileExtension = "jpg";
    }
      const originalName = file.originalname.split(".")[0];
      cb(null, originalName + "." +fileExtension);
    }
   
    static destinationPath(req, file, cb) {
      cb(null, './images/')
    }
  }