import json
import os
import sys

from bs4 import BeautifulSoup
from groq import Groq


client = Groq()
MODEL = "gemma2-9b-it"
SYSTEM_PROMPT = """\
Determine whether or not the given string contains any offensive material. 
Respond with true if the string contains any offensive material and false if it contains no offensive material.
Respond in json format with a field \"reason\" set to an explanation and \"flag\" set to true or false.
"""


def text_is_toxic(text: str) -> bool:
    """
    Analyze toxicity of text using an LLM served by Groq
    """
    result = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT,
            },
            {
                "role": "user",
                "content": f"'''\n{text}\n'''", 
            }
        ],
        temperature=0,
        max_completion_tokens=128, # Limit output to ~512 characters
        response_format={"type": "json_object"},
    ).choices[0].message.content
    print("[DEBUG] File content:", text.replace("\n", "\\n"))
    print("[DEBUG] Model response:", result)
    return json.loads(result)["flag"]


def file_is_toxic(file_path: str) -> bool:
    """
    Analyze the file path and content for toxicity
    """
    with open(file_path) as file:
        file_content = BeautifulSoup(
            file.read(), # Read the HTML file
            "html.parser",
        ).get_text() # Extract the text from the HTML file
    return text_is_toxic(file_path) or text_is_toxic(file_content)


if __name__ == "__main__":
    base = sys.argv[1]
    head = sys.argv[2]
    os.system(f"git fetch origin {base} {head}")
    toxic = False
    for file_path in os.popen(
        f"git diff --name-only origin/{base}...origin/{head}"
    ).read().split(): # For each file in the diff,
        if os.path.exists(file_path) and file_is_toxic(file_path): # Check it if it exists and is toxic
            print(f"🚩 Flagged {file_path}")
            toxic = True
    sys.exit(1) if toxic else sys.exit(0) # Exit with a non-zero status code if toxic
