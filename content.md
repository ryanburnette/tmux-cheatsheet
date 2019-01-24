This is my [tmux]() cheatsheet with the most commonly used commands. I refer to
other cheatsheets often and those are linked at the bottom.

## Managing Sessions

### New Session

```bash
tmux new-session -s <name>
```

### List Sessions

```bash
tmux ls
```

### Attach Session

```bash
tmux attach-session -t <name>
```

### Kill Session

```bash
tmux kill-session -t myname
```

### Tab Completion

Note that tab completion works with tmux commands. When used in conjuction with zsh, it can make life easier.

## Commands

TODO

## Tabs

A tmux session is made up of one or more tabs.

```
c  create window
w  list windows
n  next window
p  previous window
f  find window
,  name window
&  kill window
```

## Panes

A tmux tab is made up of one or more panes.

```
%  vertical split
"  horizontal split

o  swap panes
q  show pane numbers
x  kill pane
+  break pane into window (e.g. to select text by mouse to copy)
-  restore pane from window
⍽  space - toggle between layouts
<prefix> q (Show pane numbers, when the numbers show up type the key to goto that pane)
<prefix> { (Move the current pane left)
<prefix> } (Move the current pane right)
<prefix> z toggle pane zoom
```

## Pairing

I use tmux as a tool for pairing with other developers.

TODO

## tmuxinator

TODO

## References

TODO

[1]: https://gist.github.com/MohamedAlaa/2961058
[2]: https://hackernoon.com/a-gentle-introduction-to-tmux-8d784c404340
