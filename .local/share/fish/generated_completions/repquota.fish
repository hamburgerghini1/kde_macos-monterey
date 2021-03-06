# repquota
# Autogenerated from man page /usr/share/man/man8/repquota.8.gz
complete -c repquota -s a -l all -d 'Report on all filesystems indicated in  /etc/mtab to be read-write with quotas'
complete -c repquota -s v -l verbose -d 'Report all quotas, even if there is no usage'
complete -c repquota -s c -l cache -d 'Cache entries to report and translate uids/gids to names in big chunks by sca…'
complete -c repquota -s C -l no-cache -d 'Translate individual entries'
complete -c repquota -s t -l truncate-names -d 'Truncate user/group names longer than 9 characters'
complete -c repquota -s n -l no-names -d 'Don\'t resolve UIDs/GIDs to names.  This can speedup printing a lot'
complete -c repquota -s s -l human-readable -d 'Try to report used space, number of used inodes and limits in more appropriat…'
complete -c repquota -s p -l raw-grace -d 'When user is in grace period, report time in seconds since epoch when his gra…'
complete -c repquota -s i -l no-autofs -d 'Ignore mountpoints mounted by automounter'
complete -c repquota -s F -l format -d 'Report quota for specified format (ie.  don\'t perform format autodetection)'
complete -c repquota -s g -l group -d 'Report quotas for groups'
complete -c repquota -s P -l project -d 'Report quotas for projects'
complete -c repquota -s u -l user -d 'Report quotas for users.  This is the default'
complete -c repquota -s O -l output -d 'Output quota report in the specified format'

