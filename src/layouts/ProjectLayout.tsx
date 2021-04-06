import { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import ShareButtons from '@components/ShareButtons';
import { FiGithub } from 'react-icons/fi';
import { GoBrowser } from 'react-icons/go';
import { ProjectPost } from '@src/types';
import { Browser, Github } from '@src/Icons/Social';

interface Iprops {
  children: React.ReactNode;
  frontMatter: ProjectPost;
}

const ProjectLayout: FunctionComponent<Iprops> = ({
  children,
  frontMatter,
}) => {
  if (!children || !frontMatter) {
    return (
      <div>
        <p>
          Frontmatter is:
          {typeof frontMatter}
        </p>
        <div>
          <p>
            children is
            {typeof children}
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="mb-4 max-w-xl w-full h-screen max-h-full">
        <NextSeo
          title={`${frontMatter.title} | lhowsam.com`}
          canonical={`https://lhowsam.com/projects/${frontMatter.slug}`}
          openGraph={{
            url: `https://lhowsam.com/projects/${frontMatter.slug}`,
            title: `${frontMatter.title} | lhowsam.com`,
          }}
        />
        <article className="flex flex-col max-w-lg w-full mx-0 mb-5">
          <h1 className="text-3xl dark:text-gray-300">{frontMatter.title}</h1>
          <div className="flex flex-row mt-5 dark:text-gray-300">
            <a
              href={frontMatter.github}
              target="_blank"
              rel="noreferrer"
              style={{
                marginRight: '35px',
                marginTop: '35px',
                marginBottom: '35px',
              }}
            >
              <Github />
            </a>
            {frontMatter.site && (
              <a
                href={frontMatter.site}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginRight: '35px',
                  marginTop: '35px',
                  marginBottom: '35px',
                }}
              >
                <Browser />
              </a>
            )}
          </div>
        </article>
        <hr />
        <p className="text-lg mt-4 mb-4 leading-10 dark:text-gray-300">{children}</p>
        <ShareButtons
          location={`https://lhowsam.com/projects/${frontMatter.slug}`}
        />
      </div>
    </>
  );
};
export default ProjectLayout;
