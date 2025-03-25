import classNames from "classnames/bind";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./EditorPage.module.scss";
import PublishForm from "~/components/PublishForm";
import BlogEditor from "~/components/BlogEditor";
import axios from "axios";
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
    let { blog_id } = useParams();

    const [blog, setBlog] = useState(blogStructure);

    const [editorState, setEditorState] = useState("editor");

    const [textEditor, setTextEditor] = useState({ isReady: false });

    useEffect(() => {
        if (!blog_id) return;
        axios
            .post(
                process.env.REACT_APP_SERVER_DOMAIN +
                    "/render/get-blog-details",
                { blog_id, draft: true, mode: "edit" }
            )
            .then(({ data: { blog } }) => {
                setBlog(blog);
            })
            .catch((err) => {
                setBlog(blogStructure);
            });
    }, []);

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
