---
title: "Hello, world: how this blog is built"
date: 2026-11-07
section: technical-studies
lang: en
tags: [devops, meta]
description: "A short tour of the stack behind these pages: Astro, Markdown, and a Neovim-flavoured reader theme."
draft: true
---

This is a placeholder post so the reader theme has something to render. Replace it with your first real text, or delete it.

## Writing a post

Every post is a Markdown file under `src/content/blog/`. The front matter decides where it shows up:

```yaml
---
title: "My post"
date: 2026-11-07
section: technical-studies   # technical-studies | fichamentos | comments | articles
lang: en                     # en | pt
tags: [devops, privacy]
description: "One-line summary shown in lists and meta tags."
draft: false
---
```

## Code blocks

Fenced code is highlighted at build time with a Tokyo Night-style palette and gets a line-number gutter, like `:set number`.

```c
#include <stdio.h>

static int add(int a, int b)
{
	return (a + b);
}

int main(void)
{
	printf("%d\n", add(40, 2)); // 42
	return (0);
}
```

```bash
# capture 20 packets on the default interface
sudo tcpdump -c 20 -nn -i any 'tcp port 443'
```

### Inline elements

Inline `code`, **strong text**, *emphasis*, and [links](/blog) all pick up the theme.

> Blockquotes are set off with a violet rule, useful for fichamentos.

| Layer | Role |
| --- | --- |
| 7 | Application |
| 4 | Transport |
| 3 | Network |

## That's it

Push to `main` and GitHub Actions rebuilds the site.
