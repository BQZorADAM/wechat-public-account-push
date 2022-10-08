/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
# 公众号配置
# 公众号appId
"app_id": "wx4251463dafa6e4b3",
# 公众号appSecret
"app_secret": "33c9475f57a103b2a36a8eee61c935a7",
# 模板消息id
"template_id": "lsi51fzNDRZPBAiHKvRdG_na6b5JT05JqDd0KWj8QAI",
# 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
"user": ["oLWaC6pkSXDaQ6IzpkIkv4YudDgg"],
 
# 信息配置
# 和风天气apikey
"weather_key": "1d7a287bad764c90a66f44186fb3018e",
# 所在地区，可为省，城市，区，县，同时支持国外城市，例如伦敦
"region": "咸阳市",
# 生日1，修改名字为对应需要显示的名字，如果生日为农历，在最前面加上r即可
"birthday1": {"name": "傅欣同学", "birthday": "2004-02-23"},
# 生日2
"birthday2": {"name": "白沁卓同学", "birthday": "2004-04-07"},
# 在一起的日子，格式同上，暂不不支持农历
"love_date": "2022-07-26",
# 金句中文，如果设置了，则会显示这里的，如果为空，默认会读取金山的每日金句
"note_ch": "",
# 金句英文
"note_en": ""
}

module.exports = USER_CONFIG

