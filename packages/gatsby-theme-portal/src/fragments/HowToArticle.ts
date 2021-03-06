import { graphql } from 'gatsby';

export const query1 = graphql`
  fragment HowToFieldsFull on SanityHowToArticle {
    _type
    headline
    publishedAt(formatString: "MMMM D, YYYY")
    _updatedAt(formatString: "MMMM D, YYYY")
    skillLevel
    subheading
    time
    slug {
      current
    }
    id
    heroImage {
      asset {
        label
        title
        url
        metadata {
          dimensions {
            height
            width
          }
        }
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }
    }
    heroVideo {
      url
      youTubeCaption
    }
    _rawHowTobody(resolveReferences: { maxDepth: 10 })
    productList {
      buyNow
      smartProductID
      tagLine
      name
      slug {
        current
      }
      image {
        asset {
          url
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
    seo {
      metaDescription
      metaKeywords
      metaTitle
    }
    tags {
      name
      id
      tagCategory {
        name
        id
      }
    }
    toolList {
      name
      image {
        asset {
          url
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
    tags {
      name
    }
    author {
      name
      slug {
        current
      }
      image {
        alt
        asset {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
    readnext {
      ... on SanityGalleryArticle {
        headline
        slug {
          current
        }
        _type
        heroImage {
          alt
          asset {
            fluid(maxWidth: 380, maxHeight: 380) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
      ... on SanityFeatureArticle {
        headline
        slug {
          current
        }
        _type
        heroImage {
          alt
          asset {
            fluid(maxWidth: 380, maxHeight: 380) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
      ... on SanityHowToArticle {
        headline
        slug {
          current
        }
        _type
        heroImage {
          alt
          asset {
            fluid(maxWidth: 380, maxHeight: 380) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  }
`;

export const query2 = graphql`
  fragment HowToFieldsTile on SanityHowToArticle {
    headline
    publishedAt(formatString: "MMMM D, YYYY")
    skillLevel
    subheading
    time
    slug {
      current
    }
    id
    heroImage {
      alt
      asset {
        label
        title
        url
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }
    }
    _type
  }
`;
