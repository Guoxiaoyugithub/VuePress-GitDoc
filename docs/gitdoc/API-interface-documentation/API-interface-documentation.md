## 1.1 登录


<d-req-title title="获取token" http_methods="POST" url="https://localhost:3000/v1/token"></d-req-title>

支持常用的请求方法：
<d-req-method http_methods="POST"/>
<d-req-method http_methods="GET"/>
<d-req-method http_methods="PUT"/>
<d-req-method http_methods="DELETE"/>
<d-req-method http_methods="PATCH"/>
<d-req-method http_methods="HEAD"/>
<d-req-method http_methods="OPTIONS"/>  

<d-tips type="point">本系统使用Basic Authentication进行认证。在header中使用Authorization字段来传输token。对于向服务端发送的token其格式为‘BASIC Base64加密文本’</d-tips>

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

### 响应结果


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


<d-req-title title="验证token" http_methods="POST" url="https://localhost:3000/v1/token/verify"></d-req-title>

客户端主动验证token是否合法或者token是否过期，然后决定是否获取新的token

<d-req>
<d-req-parm title="Request Parameters">
<d-req-parm-item name="token" necess="required" type="String" desc="待验证的token令牌"></d-req-parm-item>
</d-req-parm>
</d-req>

### 响应结果

<d-rep>
<d-rep-title title="请求成功，返回验证结果">
<d-rep-status status_code="200" status_des="OK"/> 
</d-rep-title>
<d-rep-code show_linenum="false">

```json
{ result: false }
```
</d-rep-code>

<d-rep-title title="请求成功，但无法达到预期，参数错误">
<d-rep-status status_code="200" status_des="OK"/>
</d-rep-title>
<d-rep-code show_linenum="false">

```json
{
    msg: ["token字段是必填参数"],
    error_code: 10001,
    request: "POST /v1/token/verify"
}
```
</d-rep-code>

</d-rep>


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

