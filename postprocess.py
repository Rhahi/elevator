import os

answer_foramt = """
{{
    init: function(elevators, floors) {{
        {0}
    }},
    update: function(dt, elevators, floors) {{
        {1}
    }}
}}"""

with open("./build/main-bundle.js") as f:
    lines = f.readlines()

lines.pop()  # remove source map
lines.pop()  # remove semicolon
assert lines[-1].strip() == "/******/ })()"
idx = lines.index('const __submit__ = "";\n')
lines[idx] = "init(elevators, floors);\n"
init = "".join(lines)
update = ""

with open("./build/postprocess.js", "w") as f:
    f.write(answer_foramt.format(init, update))
    f.write("\n")
