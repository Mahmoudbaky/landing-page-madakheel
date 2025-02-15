import { getBlogPostById } from "@/lib/actions/blog.actions";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { splitTextIntoParagraphs } from "@/lib/utils";

const DetailsPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  const post = await getBlogPostById(id);

  const {
    blogTitle,
    blogImage,
    blogSummary,
    createdDate,
    blogAuthor,
    paragraphs,
  } = post?.fields;

  // const paragraphElements = paragraphs.content.map(
  //   (paragraph: any, index: number) => (
  //     <p key={index}>{paragraph.content[0].value}</p>
  //   )
  // );

  const date = new Date(createdDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  // const paragraphs = splitTextIntoParagraphs(postContent);

  return (
    <div className="min-h-screen flex flex-col wrapper" dir="rtl">
      <main className="max-w-[80%] flex-grow container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{blogTitle}</h1>
          <div className="flex gap-3 text-gray-600 mb-4">
            <p className="px-4 border-primary border-gray-200 border-[1.5px] rounded-md">
              {formattedDate}
            </p>
            <p className="px-4 border-primary border-gray-200 border-[1.5px] rounded-md">
              {blogAuthor}
            </p>
          </div>
          <hr className="border-gray-200 w-[300px] my-6" />

          <Image
            src={`https:${blogImage.fields.file.url}`}
            alt={blogImage.fields.title}
            width={blogImage.fields.file.details.image.width}
            height={blogImage.fields.file.details.image.height}
            className="object-fill w-full"
          />
          <div className="mt-7">
            <p className="h1-bold">{blogSummary}</p>
          </div>
          <div className="mt-7">
            {paragraphs.content.map((paragraph: any, index: number) =>
              paragraph.content[0].value === " " ? (
                <p key={index} className="my-5">
                  {" "}
                </p>
              ) : (
                <p key={index} className="text-pretty text-lg mb-7">
                  {paragraph.content[0].value}
                </p>
              )
            )}
          </div>
        </article>
      </main>
    </div>
  );
};

export default DetailsPage;

// <div className="max-w-[] mx-auto border-test">
//         <div className="py-8">
//           <h1 className="text-3xl font-bold mb-2">{blogTitle}</h1>
//           <p className="text-gray-500 text-sm">
//             {/* Published on <time datetime="2022-04-05"> {formattedDate}</time> */}
//             Published on {formattedDate}
//           </p>
//         </div>

//         <Image
//           src={`https:${blogImage.fields.file.url}`}
//           alt={blogImage.fields.title}
//           width={100}
//           height={100}
//           className="rounded-md max-h-[300px] max-w-full "
//         />

//         <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto text-justify">
//           {postContent}
//         </div>
//       </div>

{
  /* {paragraphs.contnet.map((c) => {
            c.content.map((p) => <p>{p.value}</p>);
          })} */
}
{
  /* {paragraphs.map((p, index) => (
            <p key={index} className="mt-8 text-pretty">
              {p}
            </p>
          ))} */
}

//  <p key={index}>{paragraph.content[0].value}</p>
