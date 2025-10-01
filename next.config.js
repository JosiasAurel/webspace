/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb'
    }
  }
};

const remarkEmbedder = fauxRemarkEmbedder.default;
const oembedTransformer = fauxOembedTransformer.default;

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkMath,
      [remarkEmbedder, { transformers: [oembedTransformer] }],
      remarkGfm,
    ],
    rehypePlugins: [rehypeMathjax, rehypeHighlight],
    providerImportSource: "@mdx-js/react",
  },
});

export default withMDX({
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  outputFileTracing: true,
  swcMinify: true,
});

/* module.exports = {
    outputFileTracing: true,
    swcMinify: true
} */
