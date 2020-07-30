## d-log日志

> 适用于基于时间轴的项目日志
## 用法
`d-log`: 单个日志块，具有 `title` 属性。可在 `title` 中记录版本号及时间。

`d-log-item`: 日志的改动大类，可在 `type` 属性中书写改动大类的标题。

`d-log-item-li`: 日志的详细改动项，在标签中写下具体改动的内容即可。

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

### 示例代码

```html
<d-log title="15.0.0 - 2020-07-20">
<d-log-item type="Fixed">
<d-log-item-li>spelling and grammer</d-log-item-li>
</d-log-item>
<d-log-item type="Change">
<d-log-item-li>update sponsors</d-log-item-li>
</d-log-item>
</d-log>
```