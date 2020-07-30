### d-rep 响应

`d-rep`: 响应体

`d-rep-title`: 响应结果的说明

`d-rep-status`: 响应的状态码以及状态说明

`d-rep-code`: 响应结果返回的代码

<d-rep>
<d-rep-title title="请求成功，返回token">
<d-rep-status status_code="200" status_des="OK"/> 
</d-rep-title>
<d-rep-code show_linenum="false">

```json
{ "token": "eyJhbGciOiJ.eyJ1aWQiOjgsInNjb3BlIjo4LCJpYX" }
```
</d-rep-code>
</d-rep>

### 示例代码
```html
<d-rep>
<d-rep-title title="请求成功，返回token">
<d-rep-status status_code="200" status_des="OK"/> 
</d-rep-title>
<d-rep-code show_linenum="false">
 ` ` `json
 { "token": "eyJhbGciOiJ.eyJ1aWQiOjgsInNjb3BlIjo4LCJpYX" }
 ` ` `
</d-rep-code>
```

### d-rep-status
状态码可以单独使用，如下所示
<br>

<d-rep-status status_code="100" status_des="Continue"/> 
<br>
<br>

<d-rep-status status_code="200" status_des="OK"/> 
<br>
<br>

<d-rep-status status_code="300" status_des="Multiple Choices"/> 
<br>
<br>

<d-rep-status status_code="400" status_des="Bad Request"/> 
<br>
<br>

<d-rep-status status_code="500" status_des="Internal Server Error"/> 

### 示例代码
```html
<d-rep-status status_code="100" status_des="Continue"/> 
<d-rep-status status_code="200" status_des="OK"/> 
<d-rep-status status_code="300" status_des="Multiple Choices"/> 
<d-rep-status status_code="400" status_des="Bad Request"/> 
<d-rep-status status_code="500" status_des="Internal Server Error"/> 
```