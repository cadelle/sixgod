---
nav:
  title: Components
  path: /components
group:
  title: 展示组件
  path: /display
  order: 1
---

## Button

Demo:

```tsx
import React from 'react';
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: '20px',
        }}
      >
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="primary" danger>
          danger
        </Button>
        <Button type="link">Link Button</Button>
        <Button
          multiple={{
            children: ['只导出列表', '只导出统计图'],
            handleMenuClick: e => console.log('click', e),
            handleClick: e => console.log('click', e),
          }}
        >
          导出
        </Button>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button type="primary" disabled>
          Primary{' '}
        </Button>
        <Button disabled>Default </Button>
        <Button type="primary" disabled danger>
          danger
        </Button>
        <Button type="link" disabled>
          Link
        </Button>
        <Button
          disabled
          multiple={{
            children: ['只导出列表', '只导出统计图'],
            handleMenuClick: e => console.log('click', e),
            handleClick: e => console.log('click', e),
          }}
        >
          导出
        </Button>
      </div>
    </div>
  );
};
```

## API

| 属性     | 说明     | 类型                                                                                      | 默认值   |
| -------- | -------- | ----------------------------------------------------------------------------------------- | -------- |
| multiple | 组合按钮 | { handleMenuClick?: (e: any) => void, handleClick?: (e: any) => void, children?: String[] | Boolen } | false |

[更多技巧](https://d.umijs.org/guide/demo-principle)
