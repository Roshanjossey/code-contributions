import sys
import os
import magic
from bs4 import BeautifulSoup
from transformers import pipeline

# Load the toxicity detection model
classifier = pipeline("text-classification", model="unitary/toxic-bert")

# List of offensive words (modify as needed)
OFFENSIVE_WORDS = ["fuck", "shit", "bitch"]  

def is_text_file(file_path):
    """Check if the file is a text-based file (not binary)"""
    mime = magic.Magic(mime=True)
    file_type = mime.from_file(file_path)
    return file_type.startswith("text")

def check_text(text):
    """Analyze text using the toxicity classifier"""
    result = classifier(text[:512])  # Limit to 512 tokens (model constraint)
    label = result[0]["label"]
    score = result[0]["score"]
    
    return label == "toxic" and score > 0.7  # If toxic, return True

def check_file_content(file_path):
    """Read file and analyze its content for toxicity"""
    if not is_text_file(file_path):
        print(f"⚠️ Skipping binary file: {file_path}")
        return False
    
    with open(file_path, "r", encoding="utf-8", errors="ignore") as file:
        content = file.read()
        
        # If it's an HTML file, extract text
        if file_path.endswith(".html"):
            soup = BeautifulSoup(content, "html.parser")
            content = soup.get_text()

        return check_text(content)

def check_filename(file_name):
    """Check if the filename contains offensive words"""
    lower_name = file_name.lower()
    for word in OFFENSIVE_WORDS:
        if word in lower_name:
            print(f"❌ Offensive word detected in filename: {file_name}")
            return True
    return False

def main():
    """Check all modified files in the PR"""
    offensive_found = False
    
    # Get list of modified files from Git
    modified_files = os.popen("git diff --name-only HEAD^ HEAD").read().split()
    
    for file in modified_files:
        if not os.path.exists(file):
            continue  # Skip deleted files
        
        # Check filename for offensive words
        if check_filename(file):
            offensive_found = True

        # Check file content for toxicity
        if check_file_content(file):
            print(f"❌ Offensive content detected in {file}")
            offensive_found = True

    # Block the PR if any offensive content was found
    if offensive_found:
        sys.exit(1)
    else:
        print("✅ No offensive content found.")
        sys.exit(0)

if __name__ == "__main__":
    main()
