## About Me

Hi. I'm Ryan Burnette. From time to time I find myself developing for the web
in the command-line environment. Tmux is an integral part of my development
workflow.  Over time I have compiled this cheatsheet of frequently used
commands, shortcuts, concepts and other useful ideas related to tmux.

## What Is tmux?

Tmux is a terminal multiplexer. If you're familiar with gnu screen, tmux starts
with the same basic functionality then builds upon it in a very valuable way.
It gives you the ability to tile terminal panes in the command-line
environment. Tiling your terminals allows you to interact with multiple
terminals on a single screen by observing and switching between them.

## Installation

### macOS

The best way to install tmux on macOS is using [homebrew](https://brew.io).

```bash
brew install tmux
```

### Ubuntu

```bash
sudo apt-get install tmux -y
```

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

## About Commands

### Prefix

Commands are run by first entering your prefix. By default, the prefix is `<crtl+b>`.

## Tabs/Windows

A tmux session is made up of one or more tabs, sometimes referred to as
windows.

### Create Window

```bash
<prefix> c
```

### List Windows

```bash
<prefix> w
```

### Next Window

```bash
<prefix> n
```
### Previous Window

```bash
<prefix> p
```

### Find Window

```bash
<prefix> f
```

### Name Window

```bash
<prefix> ,
```

### Kill Window

```bash
<prefix> &
```

## Panes

A tmux tab is made up of one or more panes.

### Vertical Split

```bash
<prefix> %
```

### Horizontal Split

```bash
<prefix> "
```

### Swap Panes

```bash
<prefix> o
```

### Show Pane Numbers

```bash
<prefix> q
```

### Kill Pane

```bash
<prefix> x
```

### Move Pane Left

```bash
<prefix> {
```

### Move Pane Right

```bash
<prefix> }
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

Tmuxinator is a Ruby Gem that is a helpful companion to tmux. It gives you a
mechanism for configuring presets to go with your projects.

One of my favorite benefits is that tmuxinator sets the default directory for
any new tabs or panes to the directory of the project. This saves a minute
amount of time and frustration for each new tab or pane, but added up over the
course of many hours of work on the tmux project, it's a huge benefit.
