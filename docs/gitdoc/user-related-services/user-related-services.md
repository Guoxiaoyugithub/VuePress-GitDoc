## 1.1 登录

<d-log title="15.0.0 - 2020-07-20">
<d-log-item type="Fixed">
<d-log-item-li>spelling and grammer</d-log-item-li>
<d-log-item-li>fix typo in element test</d-log-item-li>
<d-log-item-li>fix svg logos</d-log-item-li>
</d-log-item>
<d-log-item type="Change">
<d-log-item-li>update sponsors</d-log-item-li>
</d-log-item>
<d-log-item type="Add">
<d-log-item-li>add issue template config.yml</d-log-item-li>
</d-log-item>
<d-log-item type="Remove">
<d-log-item-li>Removes duplicate values from the attr list</d-log-item-li>
</d-log-item>
</d-log>


### 功能描述
<d-tips type="succ">用户通过多种方式进行系统的登录，包括通过微信小程序登录，手机号登录，邮箱及密码登录</d-tips>
<d-tips type="warn">在Markdown文件中使用组件嵌套时请勿将代码进行缩进，否则VuePress会当做普通文本或者代码片段进行在解析。</d-tips>
<d-tips type="point">一个 VuePress 主题应该负责整个网站的布局和交互细节。在 VuePress 中，目前自带了一个默认的主题（正是你现在所看到的），它是为技术文档而设计的。</d-tips>
<d-tips type="attention">用户通过多种方式进行系统的登录，包括通过微信小程序登录，手机号登录，邮箱及密码登录</d-tips>
<d-req-title title="获取token" http_methods="POST" url="https://localhost:3000/v1/token"></d-req-title>

<d-req>
<d-req-parm title="Request Parameters">
<d-req-parm-item name="type" necess="required" type="Integer" desc="用户的登录类型"></d-req-parm-item>
<d-req-parm-item name="account" necess="required" type="String" desc="用户账户"></d-req-parm-item>
<d-req-parm-item name="secret" necess="optional" type="String" desc="用户密码"></d-req-parm-item>
</d-req-parm>
</d-req>

登录用户的类型：

| 用户类型       | 对应编号 | 是否支持 |
| :------------- | :------- | :------- |
| 微信小程序用户 | 100      | √        |
| 邮箱密码登录   | 101      | √        |
| 手机号登录     | 102      | ×        |
| 管理员登录     | 200      | ×        |

### 返回结果


<d-rep>
<d-rep-title title="请求成功，返回token">
<d-rep-status status_code="200" status_des="OK"/> 
</d-rep-title>
<d-rep-code show_linenum="false">

```json
{ "token": "eyJhbGciOiJ.eyJ1aWQiOjgsInNjb3BlIjo4LCJpYX" }
```
</d-rep-code>

<d-rep-title title="请求成功，返回token无效的openid">
<d-rep-status status_code="401" status_des="Unauthorized"/>
</d-rep-title>
<d-rep-code show_linenum="false">

```json
{
    "msg": "openid acquisition failed ,errcode:40029",
    "error_code": 10004,
    "request": "POST /v1/token"
}
```
</d-rep-code>

<d-rep-title title="无法与微信服务器建立连接">
<d-rep-status status_code="503" status_des="Service Unavailable"/>
</d-rep-title>
<d-rep-code show_linenum="false">

```json
{
    "msg": "openid acquisition failed due to network problems",
    "error_code": 10004,
    "request": "POST /v1/token"
}
```
</d-rep-code>
</d-rep>

### 返回参数

| 字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| token | string | token值 |

### 错误状态码

| 状态码 | 说明 |
| :--- | :--- |
| 10004 | 认证失败 |

### 示例代码

```javascript
userlogin: function () {
    wx.login({
        success(res) {
            if (res.code) {
                wx.request({
                    url: 'http://localhost:3000/v1/token',
                    method: 'POST',
                    data: {
                        account: res.code,
                        type:100
                    },
                    success(res){
                        const code = res.statusCode.toString()
                        if(code.startsWith('2')){
                            wx.setStorageSync('token', res.data.token)
                        }
                    }
                })
            } else {
                console.log('登录失败！' + res.errMsg)
            }
        }
    })
}
```



## 1.2 验证Token

### 功能描述

客户端主动验证token是否合法或者token是否过期，然后决定是否获取新的token

### 请求说明

> 请求方式：<d-req-method http_methods="POST"/>  请求URL ：/v1/token/verify

### 请求参数

| 字段  | 字段类型 | 字段说明          |
| :---- | :------- | :---------------- |
| token | String   | 待验证的token令牌 |

### 返回结果

<d-rep-status status_code="200" status_des="OK"/> 请求成功，返回验证结果

```json
{ result: false }
```

<d-rep-status status_code="200" status_des="OK"/> 请求成功，但无法达到预期，参数错误

```json
{
    msg: ["token字段是必填参数"],
    error_code: 10001,
    request: "POST /v1/token/verify"
}
```

### 返回参数

| 字段   | 字段类型 | 字段说明   |
| :----- | :------- | :--------- |
| result | Boolean  | 验证的结果 |

### 错误状态码

| 状态码 | 说明     |
| :----- | :------- |
| 10001  | 参数错误 |

### 示例代码

```javascript
verifytoken: function () {
    wx.request({
        url: 'http://localhost:3000/v1/token/verify',
        method: 'POST',
        data: {
            token:wx.getStorageSync('token')
        },
        success: (res) => {
            console.log(res.data)
        }
    })
}
```

