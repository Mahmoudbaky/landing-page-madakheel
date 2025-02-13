type ContentfulImage = {
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
};

export type BlogPost = {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    blogTitle: string;
    blogImage: ContentfulImage;
    blogSummary: string;
    createdDate: string;
    blogAuthor: string;
    publish: boolean;
    postContent: string;
  };
};
