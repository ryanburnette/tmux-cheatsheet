Hi. I'm Ryan Burnette, and I use tmux in my web development stack. This is my
cheatsheet containing the commands and options that I use most frequently. I
refer to other cheatsheets often and those are linked at the bottom.

## What Is tmux?

Tmux is a terminal multiplexer. For those familiar with screen, tmux starts
with that basic functionality and builds upon it.

## Managing Sessions

Instances of tmux are referred to as sessions.

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

## Windows

A tmux session is made up of one or more windows, sometimes referred to as tabs.

### Create Window

```bash
<ctrl> c
```

### List Windows

```bash
<ctrl> w
```

```
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

Tmux is a great tool for pairing between two developers who are in different
locations. Let's consider two developers, one who will be the host, the other
will be the remote. The host is running a command line environment with tmux on
their workstation, the remote developer is able to log in to the host
developer's workstation via SSH.

The host developer creates a special tmux session in the following way.

The remote developer connects to the host developer's workstation using SSH,
then runs the following command on the host developer's machine to join.

## Tmuxinator

TODO
