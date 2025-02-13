import { PageProps, graphql, HeadFC } from "gatsby";
import { CodeBlock } from "../components/CodeBlocks";
//@ts-ignore
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
//@ts-ignore
import { Skew, SkewTwo } from "../components/Skew";
import { twMerge } from "tailwind-merge";
import React from "react";
import { SEO } from "../components/seo";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { StaticImage } from "gatsby-plugin-image";

// Can be autogenerated
// https://github.com/cometkim/gatsby-plugin-typegen
type Props = {
  allMdx: {
    nodes: { id: string; body: string; frontmatter: { title: string } }[];
  };
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-slate-200 flex flex-col align-center justify-center max-w-full p-8 sm:p-20">
      {children}
    </div>
  );
};

const components = {
  pre: (props: any) => <div {...props} />,
  code: CodeBlock,
  inlineCode: (props: any) => (
    <span
      className="text-red-600 text-md font-bold px-[4px] py-[2px] font-mono bg-yellow-500/75 rounded"
      // style={{ boxShadow: "0px 0px 0px 3px #1e1e1e" }}
      {...props}
    />
  ),
  a: (props: any) => <OutboundLink {...props} target="__blank" />,
};

// TODO add glitch effect to AntiPattern
// TODO white bar to the right when scaling down
//calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
const AntiPatternsLogo = () => (
  <div
    style={{}}
    className="flex items-center justify-center font-sans text-[calc(26px+(55-26)*((100vw-375px)/(1024-375)))] lg:text-[80px]"
  >
    <div className="-skew-x-[10deg] px-[12px] py-[5px] bg-white border-y-4 border-l-4 border-yellow-500 border-double">
      Linguistic
    </div>
    {/* <div className="mr-[10px] border-4 border-yhellow-500 border-dashed">Linguistic</div> */}
    <Skew className="border-y-4 border-r-4 border-yellow-500 border-double">
      Antipatterns
    </Skew>
  </div>
);

// Mode to sepperate file later

const AntiPatterns = () => (
  <SkewTwo fst="linguistic" snd="antipatterns"></SkewTwo>
);

export const Intro = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="font-bold  col-span-3 origin-bottom-left	bg-yellow-400 skew-y-[3deg] sm:skew-y-[0deg]  sm:-skew-x-[10deg] border-dashed border-x-4 border-y-4 text-slate-900 relative border border-yellow-500">
        <div className="-skew-y-[3deg] py-5 sm:py-0 sm:skew-y-[0deg] sm:skew-x-[10deg]">
          <Welcome />
        </div>
      </div>
      <div className="pt-8 col-span-3 md:col-span-2 lg:col-span-1 bg-stone-300 p-5 sm:pt-5 border-b-4 border-x-4 border-dashed border-yellow-500">
        <WhatIsIt />
      </div>
      <div className="col-span-3 md:col-span-1 bg-stone-200 p-5 border-b-4 border-x-4 md:border-l-0  border-dashed border-yellow-500 lg:border-r-0">
        <Origin />
      </div>
      <div className="col-span-3 lg:col-span-1 bg-stone-100 p-5 border-b-4 border-x-4 border-dashed border-yellow-500">
        <Differ />
      </div>
      <div className="col-span-3 lg:col-span-1  border-yellow-500 border-dashed border-x-4 border-b-4 flex items-center justify-center bg-red-500 flex justify-center items-center p-10">
        <h1 className="bg-red-500 text-stone-50 text-5xl text-center leading-normal">
          Who are we !?
        </h1>
      </div>
      <div className="col-span-3 border-l-4 lg:col-span-2 lg:border-l-0 bg-slate-50 p-5 border-b-4 border-r-4 border-dashed border-yellow-500 ">
        <div>
          <div className="">
            <div className="font-bold pb-4 text-xl flex flex-col items-center md:block">
              <span>We are </span>
              <div className="inline-flex">
                {/* TODO underscore non Tailwind*/}
                <OutboundLink
                  href="https://jameskoppelcoaching.com/"
                  style={{ textDecoration: "none" }}
                  target="__blank"
                >
                  <Skew
                    color="red"
                    className="inline-flex border-4 border-yellow-500 border-double flex items-center"
                  >
                    <div className="text-center">
                      Mirdin<span className="align-super text-xs">1</span>, the
                      Code Quality Company
                    </div>
                  </Skew>
                </OutboundLink>
              </div>
            </div>
            <p className="prose">
              Through our intense courses and 1-on-1 coaching, we have trained
              over 250 software engineers at the advanced level. This website is
              part of our mission to make the world's software less buggy and
              easier to change by creating common knowledge of scientific coding
              principles. Many of the examples in this website are ones we have
              directly gathered from students asked to share stories about
              difficult bugs they've encountered.
            </p>
          </div>
          <p className="text-md font-italic pt-4">
            <span className="align-super text-xs">1</span> Formerly{" "}
            <b>James Koppel Coaching, LLC</b>.
          </p>
        </div>
      </div>
    </div>
  );
};

const WhatIsIt = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-lg 2xl:text-2xl">
        What is a{" "}
        <span className="whitespace-nowrap">
          <SkewTwo
            fst="linguistic"
            snd="antipattern"
            className="text-base lg:text-sm xl:text-lg "
          />{" "}
          ?
        </span>
      </h2>
      <p>
        Have you ever had a gnarly bug, or even just a frustrating coding
        session, that could be ultimately traced back to something that just
        didn't do what you thought it did based on the name? We certainly have.
        These can be caused by two people who interpret a word differently, or
        one person making too many assumptions by themselves. But more often
        than not, they're caused by a problem where the name predictably leads
        people to believe a function does something it simply doesn't. The ways
        in which this happens are linqusitic antipatterns. As defined by the
        original researchers:
      </p>
      <blockquote>
        Linguistic Antipatterns (LAs) in software systems are recurring poor
        practices in the naming, documentation, and choice of identifiers in the
        implementation of an entity, thus possibly impairing program
        understanding.
      </blockquote>
      <p>
        This website is dedicated to cataloguing types of linguistic
        antipatterns and discussing the deeper reasons they cause problems and
        how to fix them.
      </p>
    </div>
  );
};

const Welcome = () => {
  return (
    <div className="px-4 py-8 xs:p-5 flex items-center justify-center ">
      <div>
        <div className="text-xl sm:text-lg lg:text-xl  2xl:text-2xl leading-loose">
          This is a website to teach you to identify and fix <AntiPatterns /> in
          your code
        </div>
      </div>
    </div>
  );
};

const Origin = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-lg 2xl:text-2xl">Origin</h2>

      <p>
        Linguistic antipatterns were first studied in a series of papers led by
        Venera Arnaoudova. In the two main papers, they identified many types of
        linguistic antipatterns by scrutinizing several codebases, built
        scanners to find large numbers of examples, and then conducted a study
        where 11 professional engineers and 19 graduate students were asked
        their opinions on examples of each anti-pattern.
      </p>

      <ul>
        <li>
          <OutboundLink href="http://assets.ptidej.net/Publications/Documents/CSMR13d.doc.pdf">
            A New Family of Software Anti-Patterns: Linguistic Anti-Patterns
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="http://veneraarnaoudova.ca/wp-content/uploads/2014/10/2014-EMSE-Arnaodova-et-al-Perception-LAs.pdf">
            Linguistic Antipatterns: What They Are and How Developers Perceive
            Them
          </OutboundLink>
        </li>
      </ul>

      <p>
        We take inspiration from Arnaoudova's work, but depart significantly
        from it, giving a smaller but broader set of anti-patterns.
      </p>
    </div>
  );
};

const Differ = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-lg 2xl:text-2xl">
        How does this website differ from the original{" "}
        <SkewTwo
          fst="Linguistic"
          snd="Antipatterns"
          className="text-base lg:text-sm xl:text-lg "
        />{" "}
        <span className="whitespace-nowrap">papers ?</span>
      </h2>
      <p>
        The original Linguistic Antipattern papers catalogued 18 types. Each of
        these were very narrow. Some are exceptionally rare. This larger set is
        great for people trying to build static analyzers to find them. But we
        believe a smaller list of broader anti-patterns is better for learning
        and memory. We have collapsed the original list of 18 narrow patterns
        into 3 broader ones, and then added several of our own based on stories
        of bad bugs caused by poor names. We also try to connect each of the
        antipattern types to deeper software-engineering principles. For more of
        this philosophy, read our newsletter on{" "}
        <OutboundLink href="http://us16.campaign-archive.com/?u=8b565c97b838125f69e75fb7f&id=361788c0ea">
          Why Not to Study Design Patterns
        </OutboundLink>
      </p>
    </div>
  );
};

const GithubLink = ({ className }: { className?: string }) => (
  <OutboundLink
    target="__blank"
    className="hover:scale-[1.005] bg-yellow-500 text-white rounded-full px-2 sm:p-1 sm:px-3 shadow-md font-sans font-bold text-[15px] flex items-center justify-content gap-1"
    href="https://github.com/Linguistic-Antipatterns/linguistic-antipatterns.github.io"
  >
    <StaticImage
      placeholder="tracedSVG"
      tracedSVGOptions={{ color: "black" }}
      src="../images/github/GitHub-Mark/PNG/GitHub-Mark-64px.png"
      alt="Github logo"
      className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"
    />
    Contribute
  </OutboundLink>
);

///////////////// END///////////////

const IndexPage: React.FC<PageProps<Props>> = ({ data }) => {
  const [selected, setSelected] = React.useState<string>(
    data.allMdx.nodes[0].id
  );

  return (
    <Layout>
      <div className="absolute right-3 top-3 text-lg">
        <GithubLink />
      </div>
      <div className="pt-5 pb-14 md:pb-20 md:pt-0">
        <AntiPatternsLogo />
      </div>

      <div className="">
        <Intro />
      </div>
      <div id="logo" className="flex flex-col items-center pb-8">
        <div className="py-16">
          <h2 className="text-2xl sm:text-4xl">
            <SkewTwo
              fst="Linguistic"
              snd="Antipatterns"
              className="py-2 px-4"
            />
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2">
          {data.allMdx.nodes.map((node) => (
            <button
              key={node.id}
              onClick={() => setSelected(node.id)}
              className={twMerge(
                "rounded p-3 bg-white border-4 border-yellow-500 font-bold max-w-[160px] md:max-w-none",
                selected === node.id ? "bg-yellow-500" : "hover:bg-slate-100"
              )}
            >
              {node.frontmatter.title}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {data.allMdx.nodes
          .filter((x) => x.id === selected)
          .map((node) => (
            <article
              key={node.id}
              className="prose-sm max-w-[100%] md:prose bg-zinc-50/75 p-4 rounded"
            >
              <MDXProvider components={components}>
                <MDXRenderer>{node.body}</MDXRenderer>
              </MDXProvider>
            </article>
          ))}
      </div>

      <div className="flex justify-center">
        <a
          href="#logo"
          className={twMerge(
            "my-10 bg-yellow-500/75",
            "border-dashed w-50 rounded-xl p-3 text-red-500 border-4 border-yellow-500 font-bold hover:bg-yellow-500/50 hover:scale-[1.005]"
          )}
        >
          Scroll back to selection
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        body
        frontmatter {
          title
        }
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <>
    <SEO />
    <title>Home Page</title>
  </>
);
