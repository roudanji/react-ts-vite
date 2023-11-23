import CustomEditor from "@/components/editor/editorComponent";
import { useState } from "react";
import "./editUtils.less";

export default () => {
  const [editorHtml, setEditorHtml] = useState("");

  // 回调拿处理之后的 html
  const getHtmlDomData = (value: string) => {
    setEditorHtml(value);
  };

  return (
    <div className="edit_Utils_box">
      <h1>编辑器 (可全屏):</h1>
      <div className="edit">
        <CustomEditor onHtmlChange={getHtmlDomData} value="" />
      </div>
      <div className="show_html_box">
        <div className="left">
          <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
        </div>
        <div className="right">{editorHtml}</div>
      </div>
    </div>
  );
};
