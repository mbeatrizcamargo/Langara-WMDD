# Langara-WMDD
Copyright Maria Beatriz Camargo

Arquitecture:
- every nav item has its own folder, with the exception of "Home", that is set in the root as index.html

Templates:
- this folder contains templates for each different page, to make it easier to create new content

Notes:
- organized by term > subject > week
- each term is inside a section tag, with 2 classes: "terms" and "term$", $ being the number of the term
- each subject is inside an article tag, with 2 classes: "subjects" and "xxxx-nnnn" this last one being the code of the subject
- each subject has its own folder, where the weekly pages are organized
- each subject folder is named "nn-xxxx-nnnn" -> number of the term followed by subject code
- each week is named using the subject code followed by the number of the week, using "week$$"
- the main page of each subject is called "nn-xxxx-nnnn-main.html"

CSS:
- global.css is applied to all pages, and has basic styling, such as font and max-width
- style.css is applied to all pages, except for subjects related to coding, when applicable
