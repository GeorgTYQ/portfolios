import {getPayload} from "@/locales/payload.js"
import Link from "next/link";
import { formateDate } from "@/app/(landing-page)/utils/functions/FormatDate.js";
const PostsSection = async () => {
  const payload = await getPayload();
  const posts = await payload.find({
    collection: 'posts',
    limit: 3,
    sort: '-createdAt',
})

  return (
    <div className="max-w-7xl mx-auto px-4 py-23 sm:px-6 lg:px-8" id="blog">
      <div className="flex gap-12 sm:gap-24">
        <div className="w-72">
          <h2 className="text-4xl font-bold text-light">
            Latest from <br/> 
            the Blog
          </h2>
        </div>
      <div className="flex-1 grid grid-cols-2 gap-12">
        {posts.docs.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.id} className="group block ">
            <article className="space-y-4">
              <h3 className="text-2xl font-semibold text-light group-hover:text-purple-500 transition-colors">
                {post.title}
              </h3>
              <div>
                <time className="text-slate-300">{formateDate(post.createdAt)}</time>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
    </div>
  )
}

export default PostsSection;