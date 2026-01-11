try:
    import fitz  # PyMuPDF
except ImportError:
    import subprocess
    subprocess.check_call(['pip', 'install', 'PyMuPDF'])
    import fitz

doc = fitz.open('KongZhiSyuen_Resume_2026.pdf')
text = ''
for page in doc:
    text += page.get_text()
print(text)
doc.close()
