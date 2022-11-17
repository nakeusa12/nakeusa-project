import React, { useEffect, useRef, useState } from "react";

const Editor = ({ onChange, name, value }) => {
    const editorRef = useRef();
    const [editorLoaded, setEditorLoaded] = useState(false);
    const { CKEditor, ClassicEditor } = editorRef.current || {};
  
    useEffect(() => {
      editorRef.current = {
        CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
        ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
      };
      setEditorLoaded(true);
    }, []);
  
  return (
    <>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const description = editor.getData();
            // console.log({ event, editor, data })
            onChange(description);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
};

export default Editor;