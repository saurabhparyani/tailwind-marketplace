"use client";

import { Button } from "@/components/ui/button";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import { cn } from "@/lib/utils";
import {
  useCurrentEditor,
  EditorProvider,
  type Editor,
  extensions,
  useEditor,
  EditorContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo,
  Code,
  ImageIcon,
  QuoteIcon,
  UnderlineIcon,
} from "lucide-react";

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-5">
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        type="button"
        className="font-semibold"
        variant={
          editor.isActive("heading", { level: 1 }) ? "default" : "secondary"
        }
      >
        <Heading1 className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        type="button"
        className="font-semibold"
        variant={
          editor.isActive("heading", { level: 2 }) ? "default" : "secondary"
        }
      >
        <Heading2 className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        type="button"
        className="font-semibold"
        variant={
          editor.isActive("heading", { level: 3 }) ? "default" : "secondary"
        }
      >
        <Heading3 className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        type="button"
        className="font-semibold"
        variant={editor.isActive("bold") ? "default" : "secondary"}
      >
        <Bold className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        type="button"
        className="font-semibold"
        variant={editor.isActive("italic") ? "default" : "secondary"}
      >
        <Italic className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        type="button"
        className="font-semibold"
        variant={editor.isActive("underline") ? "default" : "secondary"}
      >
        <UnderlineIcon className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        type="button"
        className="font-semibold"
        variant={editor.isActive("strike") ? "default" : "secondary"}
      >
        <Strikethrough className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        type="button"
        className="font-semibold"
        variant={editor.isActive("quote") ? "default" : "secondary"}
      >
        <QuoteIcon className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        type="button"
        className="font-semibold"
        variant={editor.isActive("bulletList") ? "default" : "secondary"}
      >
        <List className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        type="button"
        className="font-semibold"
        variant={editor.isActive("orderedList") ? "default" : "secondary"}
      >
        <ListOrdered className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCode().run()}
        type="button"
        className="font-semibold"
        variant={editor.isActive("code") ? "default" : "secondary"}
      >
        <Code className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().undo().run()}
        type="button"
        className="font-semibold"
        variant="secondary"
      >
        <Undo className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().redo().run()}
        type="button"
        className="font-semibold"
        variant="secondary"
      >
        <Redo className="w-4 h-4" />
      </Button>
    </div>
  );
};

export function RichEditor() {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Image],
    content: "<p>Hello World</p>",
    editorProps: {
      attributes: {
        class:
          "focus:outline-none font-medium text-xl min-h-[150px] prose prose-sm sm:prose-base",
      },
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="rounded-lg border p-2 min-h-[150px] mt-2"
      />
    </div>
  );
}
