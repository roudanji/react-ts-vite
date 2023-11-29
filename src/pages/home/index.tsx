import { Badge, Card, Space } from "antd";
import "./index.less";

export default () => {
  return (
    <div className="home_box">
      <div className="vertical">
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Badge.Ribbon text="闫鹏大飞机" color="cyan">
            <Card title="React Context 开发模式" size="small">
              <p>
                可前往 scr / layouts / meunComponent || scr / pages / login 查看
              </p>
              <br />
              <p>完全避免大量拆分组件之后互相传值导致代码冗余的问题</p>
              <br />
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="闫鹏大飞机" color="cyan">
            <Card
              title="代码格式规范 Eslint / Prettier - Code formatter 插件"
              size="small"
            >
              <p>具体规范配置在根目录 .eslintrc.cjs 文件 ( 规范文件 )</p>
              <br />
              <p>.eslintignore 文件内可编写你不需要格式的文件</p>
              <br />
              <p>使用 pnpm format 可一键对全局项目代码进行格式化</p>
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="闫鹏大飞机" color="cyan">
            <Card title="axios 封装" size="small">
              <p>src / utils / request.ts </p>
              <br />
              <p>125 行有具体调用示例</p>
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="闫鹏大飞机" color="cyan">
            <Card title="组件库主题  / 左侧菜单栏主题" size="small">
              <p>src / index.less </p>
              <br />
              <p>组件库主题具体在 scr / style文件</p>
              <br />
              <p>
                使用 style 文件中的 index.less
                引入了所有组件库主题使用在了根目录的 index.less 文件
              </p>
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="闫鹏大飞机" color="cyan">
            <Card title="导航栏 / 面包屑" size="small">
              <p>使用的是 Tabs 组件实现</p>
              <br />
              <p>
                具体实现逻辑在 src / layouts / meunComponent / hooks / hooks.tsx
              </p>
              <br />
              <p>
                src / layouts / meunComponent / components / MenuComponent.tsx
              </p>
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="闫鹏大飞机" color="cyan">
            <Card title="动态路由" size="small">
              <p>Mock / userInfo / jurisdiction 字段</p>
              <br />
              <p>菜单配置在 layouts / menus.tsx 文件中</p>
              <br />
              <p>具体过滤方法是 findMenuDataByKey 依据 key 值过滤</p>
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="闫鹏大飞机" color="cyan">
            <Card title="富文本编辑器" size="small">
              <p>借助的是 wangEditor 插件库</p>
              <br />
              <p>具体封装在 src / component / editor </p>
              <br />
              <p>
                可以根据工具栏配置自由更改 调用方式和回显方式可参考 scr / pages
                / editUtils / editUtils.tsx 文件
              </p>
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="闫鹏大飞机" color="cyan">
            <Card title="message / notification 组件二封" size="small">
              <p>这两个组件进行了封装 可以节省大量重复性代码</p>
              <br />
              <p>具体配置可以前往 scr / components / messageComponent</p>
              <br />
              <p>具体配置可以前往 scr / components / notificationComponent</p>
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="闫鹏大飞机" color="cyan">
            <Card title="判断接口是否正常返回" size="small">
              <p>封装了映射函数建议整体项目使用 可以节省大量重复判断</p>
              <br />
              <p>映射函数 ( isInterfaceSuccess ) scr / utils / utils.ts</p>
            </Card>
          </Badge.Ribbon>
        </Space>
      </div>
    </div>
  );
};
