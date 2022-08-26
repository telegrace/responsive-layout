import json
import re

def main():
    file_path = "src/data/sidebarLinks.json"
    utils_path = "src/components/utils/"

    user_input = input("Use default file path: src/data/sidebar-links.json? y/n ")
    if user_input == "n" or user_input == "N":
        file_path = input("Enter file path: ")

    user_input = input("Use default file path for pages: src/components/utils? y/n ")
    if user_input == "n" or user_input == "N":
        utils_path = input("Enter file path: ")
    
    file = open(file_path, "r")
    data = json.load(file)

    imports = ""
    exports = "\nexport {\n"
    import_line_app = "\n//import {"

    for link in data:

        pageName = re.sub(r"\W", "", link["title"])

        import_line =  "import %s from './../pages/%s'; \n" %(pageName+"Page", pageName+"Page")
        imports = imports + import_line 
        
        export_line = "%s,\n" %(pageName+"Page")
        exports = exports + export_line

        import_line_app = import_line_app + pageName + "Page, "

    import_line_app = import_line_app + "};"
    exports = exports + "};"

    file_path = utils_path + "importPages.tsx"
    print(file_path)
    importPages_file = open(file_path, "w")
    importPages_file.write(imports + exports + import_line_app)

    print("✅ File: importPages.tsx created!")

main()
