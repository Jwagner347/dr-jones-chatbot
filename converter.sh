# convert all files in sample_docs from docx to markdown using pandoc
# usage: ./converter.sh

# convert all files in sample_docs from docx to markdown using pandoc
for file in _assets/sample_docs/docx/*.docx; do
  pandoc -s -f docx -t markdown_strict --extract-media='./_assets/attachments/$file' "$file" -o "_assets/sample_docs/markdown/$(basename "$file" .docx).md"
done

