import classNames from "classnames/bind";
import { createContext, useState } from "react";

import styles from "./EditorPage.module.scss";
import PublishForm from "~/components/PublishForm";
import BlogEditor from "~/components/BlogEditor";
const cx = classNames.bind(styles);

const blogStructure = {
    title: "",
    banner: "",
    content: [],
    tags: [],
    desc: "",
    author: { personal_info: {} },
};

export const EditorContext = createContext({});

function EditorPage() {
    const [blog, setBlog] = useState(blogStructure);

    const [editorState, setEditorState] = useState("editor");

    const [textEditor, setTextEditor] = useState({ isReady: false });

    return (
        <EditorContext.Provider
            value={{
                blog,
                setBlog,
                editorState,
                setEditorState,
                textEditor,
                setTextEditor,
            }}
        >
            {editorState === "editor" ? <BlogEditor /> : <PublishForm />}
        </EditorContext.Provider>
    );
}

export default EditorPage;
