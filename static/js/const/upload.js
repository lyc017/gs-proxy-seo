import uri from '@/api/index' // 获取全局实例

// 上传文件类型
export const FILE_TYPE = {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  EXCEL: 'EXCEL'
}

// 上传文件类型文本
export const FILE_TYPE_TEXT = {
  IMAGE: '图片',
  VIDEO: '视频',
  EXCEL: 'excel表格'
}

// 上传地址，不同的业务上传的地址不同
export const UPLOAD_URL = {
  UPLOAD_IMG: uri.getReqBaseUrl('image_url') + '/xfy/image/upload'
}

// 接受文件类型
export const ACCEPT_TYPE = {
  IMAGE: '.jpg,.jpeg,.png,.gif',
  FILE: '',
  VIDEO: '.mp4,.avi,.rmvb,.wmv,.mkv,.vob,.3gp,.mov',
  EXCEL: '.xls,.xlsx'
}

// 图片默认大小
export const DEFAULT_SIZE = {
  width: 100,
  height: 100,
  radius: 3
}
