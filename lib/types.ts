import type { Entry, EntryFields } from "contentful";

interface ContentfulImage {
  fields: {
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
    title: string;
  };
}

interface BlogPostFields {
  blogTitle: EntryFields.Text;
  blogImage: ContentfulImage;
  blogSummary: EntryFields.Text;
  createdDate: EntryFields.Date;
  blogAuthor: EntryFields.Text;
  publish: EntryFields.Boolean;
  postContent: EntryFields.Text;
  Paragraphs: EntryFields.Text;
}

export interface BlogPost extends Entry<BlogPostFields> {
  contentTypeId: "blog";
}
