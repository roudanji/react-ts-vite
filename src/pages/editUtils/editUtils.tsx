import { EditorParamsConfigType } from "@/@types/publicType";
import CustomEditor from "@/components/editor/editorComponent";
import { useState } from "react";
import "./editUtils.less";

export default () => {
  const [editorHtml, setEditorHtml] = useState("");

  // 回调拿处理之后的 html
  const getHtmlDomData = (value: string) => setEditorHtml(value);

  const CustomEditorConfig: EditorParamsConfigType = {
    onHtmlChange: getHtmlDomData,
    value: "",
    height: "500px",
    placeholder: "请输入内容......",
  };

  return (
    <div className="edit_Utils_box">
      <h1>编辑器 (可全屏):</h1>
      <div className="edit">
        <CustomEditor {...CustomEditorConfig} />
      </div>

      <div className="show_html_box">
        <div className="leftHtml">{editorHtml}</div>
        <div className="rightHtml">
          <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
        </div>
      </div>
    </div>
  );
};
