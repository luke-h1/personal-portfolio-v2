import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC})  {
      edges {
        node {
          excerpt
          timeToRead
          excerpt
          id
          frontmatter {
            title
            date
            slug 
            
          }
        }
      }
    }
  }
`);

  return data.allMdx.edges.map((post) => ({
    title: post.node.frontmatter.title,
    date: post.node.frontmatter.date,
    slug: post.node.frontmatter.slug,
    excerpt: post.node.excerpt,
    id: post.node.id,
    timeToRead: post.node.timeToRead,
  }));
};
export default usePosts;
