import {
  Form,
  useActionData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import useDef from "../hooks/useDef";
import apiService from "../services/api.service";
import generateStory from "../utils/generateStory";
import Input from "./Input";

export default function StoryForm() {
  const params = useParams();
  const stories = useRouteLoaderData("app");
  const [definition, setDef] = useDef();
  const story = stories[params.id];
  const fields = stories[params.id].wordArray.map((field) => field.wordType);
  const formData = useActionData();
  let newStory = "";
  if (formData) {
    const responses = [];
    for (const value of formData.values()) {
      responses.push(value);
    }

    for (let i = 0; i < story.wordArray.length; i++) {
      story.wordArray[i].value = responses[i];
    }
    newStory = generateStory(story);
  }

  const handleChange = async (e) => {
    const input = e.target.value;
    if (input) {
      const returnedDef = await apiService.definition(input);
      if (returnedDef[0].shortdef) {
        setDef(returnedDef);
      }
    }
  };

  return (
    <>
      <div className="p-4 h-fit w-5/6 ">
        <h3 className=" text-center font-bold text-2xl mb-4">
          {stories[params.id].title}
        </h3>
        <div className="flex align-center ">
          <Form
            className="items-center max-w-1/4"
            method="post"
            onBlur={handleChange}
          >
            {fields.map((field, index) => (
              <Input key={index} id={field} label={field} />
            ))}
            <button className="w-fit" type="submit">
              Get Wonky
            </button>
          </Form>
          {definition && (
            <div className="min-w-3/4 border-2 border-orange-400 rounded-md overflow-auto p-4 ">
              {definition.map((entry, index) => (
                <>
                  <h4 className="underline font-bold  ">{entry.meta.id}</h4>
                  <ul key={index}>
                    {entry.shortdef.map((def, index) => (
                      <li key={index} className="pl-4">
                        {index + 1}: {def}
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
          )}
        </div>
        {newStory && (
          <div className="mt-6 ">
            <h4 className="text-center text-lg mb-2 font-bold">
              Enjoy your Wonkiness...
            </h4>
            <p>{newStory}</p>
          </div>
        )}
      </div>
    </>
  );
}
