let blogs = [
  {
    id: `0`,
    title: `Network programming`,
    image: require(`../images/linux/ArchlinuxInstallation.png`),
    date: `2020-05-01`,
    catagory: `np`,
    description: `基于linux聊天室的网络编程`,
    link: `https://www.github.com/celiae/`,
    headers: [{ name: "socket.h", msg: "Some description of code" }],
  },
  {
    id: `1`,
    title: `ArchLinux Installation`,
    image: require(`../images/linux/ArchlinuxInstallation.png`),
    date: `2020-05-04`,
    catagory: `linux`,
    description: `Archlinux官网,下载.iso文件和.sig文件,34行命令安装ArchLinux.`,
    link: `https://wiki.archlinux.org`,
    links: [
      { id: `0`, url: `https://www.archlinux.org/`, text: `ArchLinux官网` },
      { id: `1`, url: `https://wiki.archlinux.org`, text: `ArchLinux Wiki` },
    ],
    shell: [
      {
        id: `0`,
        text: `下载 ArchLinux 系统，.iso文件和.sig文件`,
        code: `https://www.archlinux.org/`,
      },
      {
        id: `1`,
        text: `确认资源安全性`,
        code: `gpg --keyserver-options auto-key-retrieve --verify archlinux-version-x86_64.iso.sig`,
      },
      {
        id: `2`,
        text: `或在已有的ArchLinux系统中执行`,
        code: `pacman-key -v archlinux-version-x86_64.iso.sig`,
      },
      {
        id: `3`,
        text: `进入联网工具iwctl`,
        code: `iwctl`,
      },
      {
        id: `4`,
        text: `查看网卡`,
        code: `device list`,
      },
      {
        id: `5`,
        text: `扫描wifi`,
        code: `station wlan0 scan`,
      },
      {
        id: `6`,
        text: `扫描结果`,
        code: `station device get-networks`,
      },
      {
        id: `7`,
        text: `连接相应wifi SSID为wifi名`,
        code: `station device connect SSID`,
      },
      {
        id: `8`,
        text: `是否联网`,
        code: `ping archlinux.org`,
      },
      {
        id: `9`,
        text: `确认系统时间`,
        code: `timedatectl set-ntp true`,
      },
      {
        id: `10`,
        text: `镜像源是下载软件包的服务器,在这里,我们把China那一块URL移到最上面,pacman则会优先从China源下载,速度更快`,
        code: `vim /etc/pacman.d/mirrorlist`,
      },
      {
        id: `11`,
        text: `关掉系统自选镜像源`,
        code: `systemctl stop reflector.service`,
      },
      {
        id: `12`,
        text: `是UEFI启动马,有文件则是,空则是普通BIOS`,
        code: `ls /sys/firmware/efi/efivars`,
      },
      {
        id: `13`,
        text: `
        磁盘情况,一定清晰自己的磁盘哪个分区放着哪些东西,
        后面的命令行根据自己的情况进行修改`,
        code: `lsblk`,
      },
      {
        id: `14`,
        text: `cfdisk工具操作磁盘, 磁盘文件"/dev/nvme0n1"根据自己的情况进行修改`,
        code: `cfdisk /dev/nvme0n1`,
      },
      {
        id: `15`,
        text: `格式化主分区, btrfs/ext4/... 格式, 根据自己的情况进行修改`,
        code: `mkfs.btrfs /dev/nvme0n1p2`,
      },
      {
        id: `16`,
        text: `格式化grub启动分区,根据自己的情况进行修改`,
        code: `mkfs.vfat /dev/nvme0n1p1`,
      },
      {
        id: `17`,
        text: `挂载主分区,根据自己的情况进行修改`,
        code: `mount /dev/nvme0n1p2 /mnt`,
      },
      {
        id: `18`,
        code: `pacstrap /mnt 
        base base-devel linux linux-firmware grub os-prober\
        networkmanager efibootmgr bash-completion\
        archlinux-keyring openssh vim\
        gnome gnome-tweaks gnome-keyring ibus ibus-libpinyin\
        git firefox jdk-openjdk mariadb man-pages tcpdump yarn
        #(os-prober是双系统需要下载的包)`,
        text: `pacstrap安装软件包,base是基础软件包,base-devel是基础软件包的编译依赖,linux是系统软件包,linux-firmware是系统软件包的驱动,grub是启动软件包,vim是编辑器,dhcpcd是网络驱动,iwd是网络驱动,efibootmgr是UEFI启动马,bash-completion是编辑器插件,zsh是编辑器,archlinux-keyring是软件包签名,openssh是网络驱动,os-prober是双系统需要下载的包`,
      },
      {
        id: `19`,
        text: `启动时自动挂载主分区`,
        code: `genfstab -U /mnt >> /mnt/etc/fstab`,
      },
      {
        id: `20`,
        text: `切换根分区`,
        code: `arch-chroot /mnt`,
      },
      {
        id: `21`,
        text: `主机名设为'testhostname',
         bash会显示为[root@testhostname]`,
        code: `echo 'testhostname' > /etc/hostname`,
      },
      {
        id: `22`,
        text: `内核`,
        code: `mkinitcpio -P`,
      },
      {
        id: `23`,
        text: `设置root密码`,
        code: `passwd`,
      },
      {
        id: `24`,
        text: `准备grub分区挂载点`,
        code: `mkdir /boot/efi`,
      },
      {
        id: `25`,
        text: `挂载启动分区`,
        code: `mount /dev/nvme0n1p1 /boot/efi`,
      },
      {
        id: `26`,
        text: `安装grub,引导程序`,
        code: `grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader=GRUB`,
      },
      {
        id: `27`,
        text: `允许grub检测系统 GRUB_DISABLE_OS_PROBER=true true 改为 false`,
        code: `vim /etc/default/grub`,
      },
      {
        id: `28`,
        text: `生成grub配置文件`,
        code: `grub-mkconfig -o /boot/grub/grub.cfg`,
      },
      {
        id: `29`,
        text: `创建用户,sudo授权`,
        code: `useradd -m testuser -G wheel && passwd testuser`,
      },
      {
        id: `30`,
        text: `设置时区 Region/City 可替换为 Asia/Shanghai`,
        code: `ln -sf /usr/share/zoneinfo/Region/City /etc/localtime`,
      },
      {
        id: `31`,
        text: `一些软件需要用到LANG环境变量,设置为en_US.UTF-8`,
        code: `echo 'LANG=en_US.UTF-8' > /etc/locale.conf`,
      },
      {
        id: `32`,
        text: `退出硬盘系统至iso安装系统,或者按Ctrl+d`,
        code: `exit`,
      },
      {
        id: `33`,
        text: `重启`,
        code: `reboot`,
      },
    ],
  },
  {
    id: `2`,
    title: `Iptables Configuration`,
    image: require(`../images/linux/IptablesConfiguration.png`),
    date: `2020-05-10`,
    catagory: `linux`,
    description: ``,
    link: `https://wiki.archlinux.org`,
    links: [`https://www.archlinux.org/`],
    shell: [
      {
        id: `0`,
        text: `下载 ArchLinux 系统，.iso文件和.sig文件`,
        code: `https://www.archlinux.org/`,
      },
      {
        id: `1`,
        text: `确认资源安全性`,
        code: `gpg --keyserver-options auto-key-retrieve --verify archlinux-version-x86_64.iso.sig`,
      },
    ],
  },
  {
    id: `3`,
    title: `Git Tutorial`,
    image: require(`../images/linux/Git.png`),
    date: `2020-05-10`,
    catagory: `linux`,
    description: ``,
    link: `https://wiki.archlinux.org`,
    links: [`https://www.archlinux.org/`],
    shell: [
      {
        id: `0`,
        text: `下载 ArchLinux 系统，.iso文件和.sig文件`,
        code: `https://www.archlinux.org/`,
      },
      {
        id: `1`,
        text: `确认资源安全性`,
        code: `gpg --keyserver-options auto-key-retrieve --verify archlinux-version-x86_64.iso.sig`,
      },
    ],
  },
  {
    id: `4`,
    title: `Docker`,
    image: require(`../images/linux/Docker.png`),
    date: `2020-05-10`,
    catagory: `linux`,
    description: ``,
    link: `https://wiki.archlinux.org`,
    links: [`https://www.archlinux.org/`],
    shell: [
      {
        id: `0`,
        text: `下载 ArchLinux 系统，.iso文件和.sig文件`,
        code: `https://www.archlinux.org/`,
      },
      {
        id: `1`,
        text: `确认资源安全性`,
        code: `gpg --keyserver-options auto-key-retrieve --verify archlinux-version-x86_64.iso.sig`,
      },
    ],
  },
  {
    id: `5`,
    title: `KMP`,
    image: require(`../images/linux/Docker.png`),
    date: `2020-05-10`,
    catagory: `algorithm`,
    link: `https://wiki.archlinux.org`,
    description: ``,
    complexity: {
      time: `O(n)`,
      space: `O(n)`,
    },
    creator: `@kmp`,
    type: `unknown`,
    link: `https://www.github.com/celiae/`,
  },
];

export function getBlogs() {
  return blogs;
}
export function getBlogsOfCatagory(catagory) {
  return blogs.filter((blog) => blog.catagory === catagory);
}
export function getBlog(id) {
  return blogs.find((blog) => blog.id === id);
}
