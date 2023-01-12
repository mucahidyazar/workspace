---
title: Instalar Arch linux + wifi and xfce4
date: '2017-08-04'
layout: post
draft: false
tags:
  - Linux
  - Arch
---

Se você quer aprender linux de verdade, Arch é a minha distribuição favorita, esteja preparado pra quebrar muito a cabeça, mas relaxa que você vai aprender!

## Boot Arch Linux pela USB usando pendrive

### Baixar Arch Linux
Baixar o arquivo .iso:
https://www.archlinux.org/download/

### Baixar Rufus
Rufus é um programa pra criar pendrives bootaveis apartir de arquivos .iso
https://rufus.akeo.ie/

Abra o rufus, seleciona o seu arquivo .iso, selecione o local do pendrive e BURN!

Agora você esta pronto pra ligar o PC pelo pendrive e seguir as proximas etapas!

Divirta-se!

## Trocar layout do teclado para abnt2
```bash
    loadkeys br-abnt2
```

## Mostrar Partições
```bash
    fdisk -l
```

## Create Partitions
```bash
    cfdisk
```

## Format Partitions
```bash
    mkfs.ext4 /dev/sda1
```

```bash
    mkfs.ext4 /dev/sda5
```

```bash
    mkswap /dev/sda2
```

```bash
    swapon /dev/sda2
```

## Install Arch

```bash
    mount /dev/sda1 /mnt
```

```bash
    mkdir /mnt/home
```

```bash
    mount /dev/sda5 /mnt/home
```

```bash
    pacstrap /mnt base base-devel
```

```bash
    genfstab /mnt >> /mnt/etc/fstab
```

```bash
    cat /mnt/etc/fstab
```

```bash
    arch-chroot /mnt /bin/bash
```

## Set password
```bash
    passwd
```
## Enable internet
```bash
    hostnamectl set-hostname ocana-note
```

## Enable 32bit packages
uncomment multilib line from:
```bash
    nano /etc/pacman.conf
```

## Sincronize  Repos
```bash
    pacman -Sy
```

## Create User
```bash
    useradd -m -g users -G wheel,storage,power -s /bin/bash angeloocana
```
```bash
    passwd angeloocana
```

# Install sudo
```bash
    pacman -S sudo
```
enable sudo for users, uncomment %wheel ALL=(ALL) ALL
```bash
    EDITOR=nano visudo
```

## Grub installation
```bash
    pacman -S grub os-prober
```
```bash
    grub-install /dev/sda
```
```bash
    grub-mkconfig -o /boot/grub/grub.cfg
```

## Exit
```bash
    exit
```
```bash
     umount /mnt/home
```
```bash
    umount /mnt
```
```bash
    poweroff
```

## Install xfce4
```bash
    sudo pacman -Syu
```
```bash
    sudo pacman -S xorg xorg-server
```
```bash
    sudo pacman -S xfce4 xfce4-goodies
```

## Change keyboard to abnt2 permanently

Go to 'Applications' -> 'Settings' -> 'Settings Manager' -> 'Session and Startup' -> 'Application Autostart' then click 'Add' button and just paste the command in the "Command" field, give a name and here you go.
```bash
    setxkbmap -model abnt2 -layout br -variant abnt2
```

## Datetime
To check the current zone defined for the system:
```bash
    timedatectl
```

To list available zones:
```bash
    timedatectl list-timezones
```

To change your time zone:
```bash
    timedatectl set-timezone Zone/SubZone   
```

Synchronize date time, maybe you have to restart to see the changes:
```bash
    sudo hwclock --systohc --utc
```    

## Audio
```bash
    sudo pacman -S alsa-utils pulseaudio
```

# Programs
## Vim
```bash
    sudo pacman -S vim
```

## Yaourt
```bash
    sudo vim /etc/pacman.conf
```
Add to the botton:
```conf
    [archlinuxfr]
    SigLevel = Never
    Server = http://repo.archlinux.fr/$arch
```

```bash
    sudo pacman -Sy yaourt
```
# Troubleshooting

## Fix audio
```
    alsactl restore
```

## Links
 - https://www.ostechnix.com/install-arch-linux-latest-version/
