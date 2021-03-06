# grub2-bios-setup
# Autogenerated from man page /usr/share/man/man8/grub2-bios-setup.8.gz
complete -c grub2-bios-setup -s a -l allow-floppy -d 'make the drive also bootable as floppy (default for fdX devices)'
complete -c grub2-bios-setup -s b -l boot-image -d 'use FILE as the boot image [default=boot. img]'
complete -c grub2-bios-setup -s c -l core-image -d 'use FILE as the core image [default=core. img]'
complete -c grub2-bios-setup -s d -l directory -d 'use GRUB files in the directory DIR [default=/boot/grub2]'
complete -c grub2-bios-setup -s f -l force -d 'install even if problems are detected'
complete -c grub2-bios-setup -s m -l device-map -d 'use FILE as the device map [default=/boot/grub2/device. map]'
complete -c grub2-bios-setup -l no-rs-codes -d 'Do not apply any reed-solomon codes when embedding core. img'
complete -c grub2-bios-setup -s s -l skip-fs-probe -d 'do not probe for filesystems in DEVICE'
complete -c grub2-bios-setup -s v -l verbose -d 'print verbose messages'
complete -c grub2-bios-setup -s '?' -l help -d 'give this help list'
complete -c grub2-bios-setup -l usage -d 'give a short usage message'
complete -c grub2-bios-setup -s V -l version -d 'print program version'

