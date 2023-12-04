import { Badge, Card, Space } from "antd";
import "./index.less";

export default () => {
  return (
    <div className="home_box">
      <div className="home_left">
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Badge.Ribbon text="代码开发模式" color="magenta">
            <Card title="React Context 开发模式" size="small">
              <p>
                可前往 scr / layouts / meunComponent || scr / pages / login 查看
              </p>
              <br />
              <p>完全避免大量拆分组件之后互相传值导致代码冗余的问题</p>
              <br />
              <p>
                componets 文件放你拆分的组件, hooks.tsx
                放此页面所需要的所有数据和逻辑, type 写你的 TS 类型注解, service
                可以放此页面所需的接口
              </p>
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="全局组件样式" color="purple">
            <Card title="组件库主题  / 左侧菜单栏主题" size="small">
              <p>src / index.less </p>
              <br />
              <p>组件库主题具体在 scr / style文件</p>
              <br />
              <p>
                使用 style 文件中的 index.less
                引入了所有组件库主题使用在了根目录的 index.less 文件
                (全局滚动条已隐藏样式)
              </p>
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="导航栏 / Tabs" color="pink">
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

          <Badge.Ribbon text="代码规范" color="cyan">
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

          <Badge.Ribbon text="动态菜单" color="volcano">
            <Card title="动态路由" size="small">
              <p>Mock / userInfo / jurisdiction 字段</p>
              <br />
              <p>菜单配置在 layouts / menus.tsx 文件中</p>
              <br />
              <p>具体过滤方法是 findMenuDataByKey 依据 key 值过滤</p>
            </Card>
          </Badge.Ribbon>
        </Space>
      </div>
      <div className="home_right">
        <Space direction="vertical" size="middle" style={{ width: "99%" }}>
          <Badge.Ribbon text="封装" color="red">
            <Card title="axios 封装" size="small">
              <p>src / utils / request.ts </p>
              <br />
              <p>131 行有具体调用示例</p>
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="封装" color="red">
            <Card title="富文本编辑器封装" size="small">
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

          <Badge.Ribbon text="封装" color="red">
            <Card title="message / notification 组件二封" size="small">
              <p>这两个组件进行了封装 可以节省大量重复性代码</p>
              <br />
              <p>具体配置可以前往 scr / components / messageComponent</p>
              <br />
              <p>具体配置可以前往 scr / components / notificationComponent</p>
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="封装" color="red">
            <Card title="导出 Excel 封装" size="small">
              <p>src / utils / utils.ts</p>
              <br />
              <p>无采用插件借助 new Blob 实现生成下载链接</p>
              <br />
              <p>需要后端返回文件流导出</p>
            </Card>
          </Badge.Ribbon>

          <Badge.Ribbon text="封装" color="red">
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
