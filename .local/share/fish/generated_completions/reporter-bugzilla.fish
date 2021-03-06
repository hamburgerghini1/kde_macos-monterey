# reporter-bugzilla
# Autogenerated from man page /usr/share/man/man1/reporter-bugzilla.1.gz
complete -c reporter-bugzilla -s d -d 'Path to problem directory'
complete -c reporter-bugzilla -s c -d 'Path to configuration file'
complete -c reporter-bugzilla -s b -d 'When creating bug, attach binary files too'
complete -c reporter-bugzilla -s f -d 'Force reporting even if this problem is already reported'
complete -c reporter-bugzilla -s F -d 'Formatting file for initial comment'
complete -c reporter-bugzilla -s A -d 'Formatting file for duplicates'
complete -c reporter-bugzilla -s t -d 'Upload FILEs to the already created bug on Bugzilla site'
complete -c reporter-bugzilla -s w -d 'Add bugzilla user to CC list [of bug with this ID].  Applicable only with -t'
complete -c reporter-bugzilla -s h -l duphash -d 'Search in Bugzilla by abrt\'s DUPHASH and print BUG_ID'
complete -c reporter-bugzilla -s p -l product -d 'Specify a Bugzilla\'s product (ignored without -h).  Default: "Fedora"'
complete -c reporter-bugzilla -s g -l group -d 'When creating a new ticket restrict access to this group only'

