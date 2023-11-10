import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI,
  dangerouslyAllowBrowser: true,
});

export default openai;
