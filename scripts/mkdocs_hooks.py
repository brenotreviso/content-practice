"""MkDocs hook: links like ../docs/x.md work on GitHub (templates/, checklists/
live at the repo root) but on the website those folders sit inside docs/. Rewrite them."""
import re

def on_page_markdown(markdown, page, config, files):
    if page.file.src_uri.split("/")[0] in ("templates", "checklists"):
        markdown = re.sub(r"\]\(\.\./docs/", "](../", markdown)
    return markdown
