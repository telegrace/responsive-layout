import json
import os.path
import re

def main():
    file_path = "src/data/sidebarLinks.json"
    pages_path = "src/components/pages"

    user_input = input("Use default file path: src/data/sidebarLinks.json? y/n ")
    if user_input == "n" or user_input == "N":
        file_path = input("Enter file path: ")

    user_input = input("Use default file path for pages: src/components/pages? y/n ")
    if user_input == "n" or user_input == "N":
        pages_path = input("Enter file path: ")
    
    file = open(file_path, "r")
    data = json.load(file)

    dir_path = os.getcwd()

    for link in data:
        pageName = re.sub(r"\W", "", link["title"])

        page_content = """
type %s = {}
        
const %s: React.FC<%s> = (props) => {
  console.log(props);
  return (
    <>
      <h1>Here is the %s.</h1>
    </>
  );
};
export default %s;
""" %(pageName+"Props", pageName+"Page", pageName+"Props", pageName, pageName+"Page")

        file_path = pages_path + "/" + pageName + ".tsx"
        abs_path = os.path.join(dir_path, file_path)

        if (os.path.isfile(r""+abs_path)):
            print("❗ File: " +pageName+".tsx already exists!")
        else:
            page_file = open(file_path, "w")
            page_file.write(page_content)
            print("✅ File: " +pageName+".tsx created!")


main()