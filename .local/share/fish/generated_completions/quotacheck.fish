# quotacheck
# Autogenerated from man page /usr/share/man/man8/quotacheck.8.gz
complete -c quotacheck -s b -l backup -d 'Forces  quotacheck to make backups of the quota file before writing the new d…'
complete -c quotacheck -s v -l verbose -d 'quotacheck reports its operation as it progresses'
complete -c quotacheck -s d -l debug -d 'Enable debugging mode'
complete -c quotacheck -s u -l user -d 'Only user quotas listed in  /etc/mtab or on the filesystems specified are to …'
complete -c quotacheck -s g -l group -d 'Only group quotas listed in  /etc/mtab or on the filesystems specified are to…'
complete -c quotacheck -s c -l create-files -d 'Don\'t read existing quota files.  Just perform a new scan and save it to disk'
complete -c quotacheck -s f -l force -d 'Forces checking and writing of new quota files on filesystems with quotas ena…'
complete -c quotacheck -s M -l try-remount -d 'This flag forces checking of filesystem in read-write mode if a remount fails'
complete -c quotacheck -s m -l no-remount -d 'Don\'t try to remount filesystem read-only.  See comment with option  -M '
complete -c quotacheck -s i -l interactive -d 'Interactive mode.  By default  quotacheck exits when it finds an error'
complete -c quotacheck -s n -l use-first-dquot -d 'If the quota files become corrupted, it is possible for duplicate entries for…'
complete -c quotacheck -s F -l format -d 'Check and fix quota files of specified format (ie'
complete -c quotacheck -s a -l all -d 'Check all mounted non-NFS filesystems in  /etc/mtab'
complete -c quotacheck -s R -l exclude-root -d 'When used together with the'

