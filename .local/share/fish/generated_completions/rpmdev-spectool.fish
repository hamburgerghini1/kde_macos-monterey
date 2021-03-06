# rpmdev-spectool
# Autogenerated from man page /usr/share/man/man1/rpmdev-spectool.1.gz
complete -c rpmdev-spectool -s h -l help -d 'show this help message and exit . SS "Operating mode:"'
complete -c rpmdev-spectool -l list-files -l lf -s l -d 'lists the expanded sources/patches (default)'
complete -c rpmdev-spectool -l get-files -l gf -s g -d 'gets the sources/patches that are listed with a URL'
complete -c rpmdev-spectool -l version -s V -d 'Print the version and exit . SS "Files on which to operate:"'
complete -c rpmdev-spectool -l all -s a -d 'all files, sources and patches (default)'
complete -c rpmdev-spectool -l sources -s S -d 'all sources'
complete -c rpmdev-spectool -l patches -s P -d 'all patches'
complete -c rpmdev-spectool -l source -s s -d 'specified sources'
complete -c rpmdev-spectool -l patch -s p -d 'specified patches . SS "Miscellaneous:"'
complete -c rpmdev-spectool -l define -s d -d 'defines RPM macro \'macro\' to be \'value\''
complete -c rpmdev-spectool -l directory -s C -d 'download into specified directory (default \'. \')'
complete -c rpmdev-spectool -l sourcedir -s R -d 'download into rpm\'s %{_sourcedir}'
complete -c rpmdev-spectool -l dry-run -l dryrun -s n -d 'don\'t download anything, just show what would be done'
complete -c rpmdev-spectool -l force -s f -d 'try to unlink and download if target files exist'
complete -c rpmdev-spectool -l debug -s D -d 'output debug info, don\'t clean up when done'

