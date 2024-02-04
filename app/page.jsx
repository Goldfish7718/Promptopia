import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
        </h1>
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-powered Prompts</span>
        <p className="desc text-center">
            An Open-Source AI prompting tool for modern world to create, discover and share creative prompts.
        </p>

        <Feed />
    </section>
  )
}

export default Home