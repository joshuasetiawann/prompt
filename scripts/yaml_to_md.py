#!/usr/bin/env python3
"""Deprecated shim. The catalog is now built by build_prompts.py, which is the
single source of truth: it regenerates each ready_to_use_prompt from one master
template, rewrites prompts/*.yaml in canonical form, and emits prompts-md/*.md,
prompts-md/README.md, PROMPT_INDEX.yaml, and ALL_PROMPTS.yaml.

Kept so existing muscle-memory / links to this path keep working.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build_prompts import build  # noqa: E402

if __name__ == "__main__":
    print("[yaml_to_md.py is deprecated -> running build_prompts.build()]")
    sys.exit(build(check="--check" in sys.argv))
