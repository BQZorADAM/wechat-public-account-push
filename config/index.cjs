/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
// 使用微信测试号：公众号APP_ID
  APP_ID: 'wx4251463dafa6e4b3',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '33c9475f57a103b2a36a8eee61c935a7',

 
  USERS: [
    {
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oLWaC6pkSXDaQ6IzpkIkv4YudDgg',
     
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'lsi51fzNDRZPBAiHKvRdG_na6b5JT05JqDd0KWj8QAI',
     
      // 和风天气apikey
    weather_key: '1d7a287bad764c90a66f44186fb3018e',
      
      //所在地区，可为省，城市，区，县，同时支持国外城市，例如伦敦
    region: '咸阳市',
// 生日1
birthday1: {name: '傅欣同学', birthday: '2004-02-23'},
// 生日2
birthday2: {name: '白沁卓同学', birthday: '2004-04-07'},

//在一起的日子，格式同上，暂不不支持农历
love_date: '2022-07-26',
//金句中文，如果设置了，则会显示这里的，如果为空，默认会读取金山的每日金句
note_ch: '',
//金句英文
note_en: ''  
    },
  ],

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oLWaC6sWZC5ofo2ZfPOGVEs9ahmA',
}

module.exports = USER_CONFIG

