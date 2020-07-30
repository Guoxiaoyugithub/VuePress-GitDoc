## d-req 请求

`d-req`: 请求体

`d-req-parm`: 请求体中的请求项，一个请求体可以有多个请求项，请求项的标题用 `title` 属性设置

`d-req-parm-item`: 请求项中的详细参数列表，包含 `name` 名称、`necess`可填或是必填、`type` 参数的类型、`desc` 参数的描述

<d-req-title title="获取token" http_methods="POST" url="https://localhost:3000/v1/token"></d-req-title>

<d-req>
<d-req-parm title="Headers">
<d-req-parm-item name="token" necess="required" type="String" desc="用户的token型"></d-req-parm-item>
<d-req-parm-item name="id" necess="required" type="String" desc="用户id"></d-req-parm-item>
</d-req-parm>
<d-req-parm title="Request Parameters">
<d-req-parm-item name="type" necess="required" type="Integer" desc="用户的登录类型"></d-req-parm-item>
<d-req-parm-item name="account" necess="required" type="String" desc="用户账户"></d-req-parm-item>
<d-req-parm-item name="secret" necess="optional" type="String" desc="用户密码"></d-req-parm-item>
</d-req-parm>
</d-req>

### 示例代码
```html
<d-req>
<d-req-title title="获取token" http_methods="POST" url="https://localhost:3000/v1/token"></d-req-title>
<d-req-parm title="Request Parameters">
<d-req-parm-item name="type" necess="required" type="Integer" desc="用户的登录类型"></d-req-parm-item>
<d-req-parm-item name="account" necess="required" type="String" desc="用户账户"></d-req-parm-item>
<d-req-parm-item name="secret" necess="optional" type="String" desc="用户密码"></d-req-parm-item>
</d-req-parm>
</d-req>
```

### d-req-method

请求中的方法可以单独使用,通过 `http_methods` 属性设置请求的方法
<br><br>
<d-req-method http_methods="POST"/>
<d-req-method http_methods="GET"/>
<d-req-method http_methods="PUT"/>
<d-req-method http_methods="DELETE"/>
<d-req-method http_methods="PATCH"/>
<d-req-method http_methods="HEAD"/>
<d-req-method http_methods="OPTIONS"/>  

### 示例代码

```html
<d-req-method http_methods="POST"/>
<d-req-method http_methods="GET"/>
<d-req-method http_methods="PUT"/>
<d-req-method http_methods="DELETE"/>
<d-req-method http_methods="PATCH"/>
<d-req-method http_methods="HEAD"/>
<d-req-method http_methods="OPTIONS"/>  
```
