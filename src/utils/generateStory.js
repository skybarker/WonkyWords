export default function generateStory(story) {
  let output = "";
  let text = story.text;
  const startPos = 0;
  let endPos = 0;
  for (let i = 0; i < story.wordArray.length; i++) {
    const toReplace = "~" + story.wordArray[i].wordType + "~";
    endPos = text.search(toReplace);
    output += text.slice(startPos, endPos);
    output += story.wordArray[i].value;
    text = text.slice(endPos + toReplace.length);
  }
  output += text;
  return output;
}
