import CustomEditor from "@/components/editor/editorComponent";
import { useState } from "react";

export default () => {
  const [editorHtml, setEditorHtml] = useState("");

  // 回调拿处理之后的 html
  const getHtmlDomData = (value: string) => {
    setEditorHtml(value);
  };

  return (
    <div>
      <CustomEditor onHtmlChange={getHtmlDomData} value="" />

      {/* dangerouslySetInnerHTML 可自动读取 html 做显示 */}
      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
    </div>
  );
};
