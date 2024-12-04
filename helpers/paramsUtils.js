/* eslint-disable */
const path = require('path');

const ParamsUtils = function ParamsUtils() {};

/**
 * 根据文件的全路径获取这个文件的基本信息
 * @param req
 * @return {{fileName: string, filePath: *, fileExt: string, formFilePath: string}}
 */
ParamsUtils.prototype.getFileParamsByFilePath = (req)=>{
  return {
      fileName:path.basename(req.query.filePath),
      fileExt : path.extname(path.basename(req.query.filePath)).replace('.',''),
      filePath : req.query.filePath,            // 文件全路径
      formFilePath: req.query.filePath.replace(/^[a-zA-Z]:/, '') // 清除盘符后的文件全路径
    }
}

module.exports = ParamsUtils;
