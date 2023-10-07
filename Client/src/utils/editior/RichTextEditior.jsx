import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import { Editor, Transforms, createEditor } from "slate";
import isHotkey from "is-hotkey";
import { withHistory } from "slate-history";
import { Button, Toolbar } from "./RichTextControls";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@chakra-ui/react";
import {
  FaHeading,
  FaQuoteRight,
  FaBold,
  FaListOl,
  FaListUl,
  FaItalic,
  FaCode,
  FaUnderline,
} from "react-icons/fa";

import "./RichTextEditior.css";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

// bug found here
const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "Enter your post here." }],
  },
];

const LIST_TYPES = ["numbered-list", "bulleted-list"];

const RichEditor = ({ existingBody }) => {
  const [value, setValue] = useState(initialValue);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  useEffect(() => {
    if (existingBody) {
      setValue([
        {
          type: "paragraph",
          text: existingBody,
        },
      ]);
    }
  }, [existingBody]);

  const onChangeEditorValue = (val) => {
    setValue(val);
  };

  return (
    <Slate editor={editor} value={value} onChange={onChangeEditorValue}>
      <Toolbar>
        <MarkButton format="bold" icon="bold" />
        <MarkButton format="italic" icon="italic" />
        <MarkButton format="underline" icon="underlined" />
        <MarkButton format="code" icon="code" />
        <BlockButton format="heading-one" icon="header1" />
        <BlockButton format="block-quote" icon="in_quotes" />
        <BlockButton format="numbered-list" icon="list_numbered" />
        <BlockButton format="bulleted-list" icon="list_bulleted" />
      </Toolbar>
      <Editable
        className="editor"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey];
              toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  let thisIcon = FaBold;
  if (icon === "italic") {
    thisIcon = FaItalic;
  } else if (icon === "underlined") {
    thisIcon = FaUnderline;
  } else if (icon === "code") {
    thisIcon = FaCode;
  }
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon as={thisIcon} />
    </Button>
  );
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  let thisIcon = FaHeading;
  if (icon === "heading1") {
    thisIcon = FaItalic;
  } else if (icon === "heading2") {
    thisIcon = FaUnderline;
  } else if (icon === "in_quotes") {
    thisIcon = FaQuoteRight;
  } else if (icon === "list_numbered") {
    thisIcon = FaListOl;
  } else if (icon === "list_bulleted") {
    thisIcon = FaListUl;
  }
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon as={thisIcon} />
    </Button>
  );
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  });

  return !!match;
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => LIST_TYPES.includes(n.type),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.code) {
    children = <code>{children}</code>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

export default RichEditor;
