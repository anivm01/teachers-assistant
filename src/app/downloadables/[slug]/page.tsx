import { db } from "@/lib/db";

interface pageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: pageProps) => {
  const { slug } = params;

  const product = await db.downloadableProduct.findFirst({
    where: { title: decodeURIComponent(slug) },
    select: {
      title: true,
      description: true,
      featuredImage: {
        select: {
          url: true,
        },
      },
    },
  });

  if (!product) return;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {product.featuredImage && (
        <img alt={product.title} src={product.featuredImage.url} />
      )}
    </div>
  );
};

export default page;
