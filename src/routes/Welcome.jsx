import { useRouteLoaderData, Link } from "react-router-dom";

export default function Welcome() {
  const stories = useRouteLoaderData("app");

  return (
    <>
      <div className="p-4 border-2 rounded-md border-orange-400 w-2/3 h-fit max-w-md">
        <h2 className="font-bold text-xl h-fit text-center">
          Here is a list of the Wonky Words stories that are available to choose
          from:
        </h2>
        <ul className="mt-8 text-center text-xl font-medium">
          {stories.map((story, index) => (
            <li key={index}>
              <Link to={`/story/` + story.id}> {story.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
