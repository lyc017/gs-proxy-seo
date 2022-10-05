import { JSEncrypt } from 'jsencrypt'

// 后台给的公钥
const prefix = 'RSA:'
const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKYFk5eyLsvtdsFHPhLeUrUzBrpXwlna1OS+Csv+VCHsnP623c19A5ghk6KABq9pGU8EkH2JeaRnm8KxcGm0n18CAwEAAQ=='
export function encrypt (text) {
  let encryptor = new JSEncrypt() // 新建JSEncrypt对象
  encryptor.setPublicKey(publicKey) // 设置公钥
  var encrypted = encodeURIComponent(encryptor.encrypt(text)) // 对密码进行加密
  return prefix + encrypted
}

// 解密
export function decrypt (text) {
  let decrypt = new JSEncrypt()
  decrypt.setPrivateKey(publicKey)
  var decryptMsg = decrypt.decrypt(text)
  return decryptMsg
}
