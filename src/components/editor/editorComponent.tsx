/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/exhaustive-deps */
import { MyEditorPropsType } from "@/@types/publicType";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import "@wangeditor/editor/dist/css/style.css";
import { useEffect, useState } from "react";

// todo onHtmlChange 回调获取 html 结构    value 用于回显    height 设置编辑器固定高度
const MyEditor = ({
  onHtmlChange,
  value = "",
  height,
}: MyEditorPropsType): JSX.Element => {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null);

  // 编辑器内容
  const [html, setHtml] = useState<string>("");

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
      setHtml(value);
    }, 100);
  }, []);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {};
  toolbarConfig.toolbarKeys = [
    "headerSelect",
    "blockquote",
    "|",
    "bold",
    "underline",
    "italic",
    {
      key: "group-more-style",
      title: "更多",
      iconSvg:
        // eslint-disable-next-line quotes
        '<svg viewBox="0 0 1024 1024"><path d="M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path></svg>',
      menuKeys: [
        "through",
        // "code", // 行内代码
        "sup",
        "sub",
        "clearStyle",
      ],
    },
    "color", // 文字颜色调整
    "bgColor", // 背景色调整
    "|",
    "fontSize", // 字号调整
    "fontFamily", // 字体格式
    "lineHeight", // 调整行高
    "|",
    "bulletedList", // 无序列表
    "numberedList", // 有序列表
    {
      key: "group-justify",
      title: "对齐",
      iconSvg:
        // eslint-disable-next-line quotes
        '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>',
      menuKeys: [
        "justifyLeft",
        "justifyRight",
        "justifyCenter",
        "justifyJustify",
      ],
    }, // 左右居中对齐
    {
      key: "group-indent",
      title: "缩进",
      iconSvg:
        // eslint-disable-next-line quotes
        '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z"></path></svg>',
      menuKeys: ["indent", "delIndent"],
    }, // 增加缩进 减少缩进
    "insertTable", // 插入表格
    // "codeBlock", // 代码块
    "divider", // 分割线
    "|",
    "undo", // 撤销
    "redo", // reset
    "fullScreen", // 点击全屏按钮
  ];

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: "请输入内容...",
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      // eslint-disable-next-line eqeqeq, no-eq-null
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: "1px solid #ccc" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => {
            setHtml(editor.getHtml());
            onHtmlChange(editor.getHtml()); // 回调拿值
          }}
          mode="default"
          style={{ height, overflowY: "hidden" }}
        />
      </div>
    </>
  );
};

export default MyEditor;
