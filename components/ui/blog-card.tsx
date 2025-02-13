import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";

const BlogCard = ({ post }: { post: any }) => {
  console.log(post.fields);

  const {
    blogTitle,
    blogImage,
    blogSummary,
    createdDate,
    blogAuthor,
    publish,
    postContent,
  } = post.fields;

  const date = new Date(createdDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className=" dark:bg-gray-800 rounded-xl  " dir="rtl">
      <div>
        <Image
          src={`https:${blogImage.fields.file.url}`}
          alt={blogImage.fields.title}
          width={blogImage.fields.file.details.image.width}
          height={blogImage.fields.file.details.image.height}
          className="rounded-md max-h-[300px] max-w-full "
        />
      </div>
      <div className="my-4 space-y-2">
        <p className="font-bold">{blogAuthor}</p>
        <h1 className="h3-bold">{blogTitle}</h1>
        <p className="text-justify">{blogSummary}</p>
        <p className="">{formattedDate}</p>
      </div>
      <Button variant="default" className="rounded-xl w-[100px]">
        أقرأالمزيد
      </Button>
    </div>
  );
};

export default BlogCard;

{
  /* <div className="flex flex-col">
  <div>
    <Image
      src={`https:${blogImage.fields.file.url}`}
      alt={blogImage.fields.title}
      width={blogImage.fields.file.details.image.width}
      height={blogImage.fields.file.details.image.height}
    />
  </div>
  <div></div>
  <Button></Button>
</div>; */
}
