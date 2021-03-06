# unoconv
# Autogenerated from man page /usr/share/man/man1/unoconv.1.gz
complete -c unoconv -s c -l connection -d 'UNO connection string to be used by the client to connect to an LibreOffice i…'
complete -c unoconv -s d -l doctype -d 'Specify the LibreOffice document type of the backend format'
complete -c unoconv -s e -l export -d 'Set specific export filter options (related to the used LibreOffice filter)'
complete -c unoconv -s f -l format -d 'Specify the output format for the document'
complete -c unoconv -s F -l field -d 'Add or replace user-defined text field with value . sp . if n \\{\\'
complete -c unoconv -s i -l import -d 'Set specific import filters options (related to the used LibreOffice import f…'
complete -c unoconv -s I -l input-filter-name -d 'Specify the input filter name, used when the file ending doesn\'t match the fi…'
complete -c unoconv -s l -l listener -d 'Start unoconv as listener for unoconv clients to connect to'
complete -c unoconv -s M -l meta -d 'Add or replace document metadata with value . sp . if n \\{\\'
complete -c unoconv -s n -l no-launch -d 'By default if no listener is running, unoconv will launch its own (temporary)…'
complete -c unoconv -s o -l output -d 'If the argument is a directory, put the converted documents in this directory'
complete -c unoconv -l password -d 'Provide a password to decrypt the document'
complete -c unoconv -l pipe -d 'Use a pipe as an alternative connection mechanism to talk to LibreOffice'
complete -c unoconv -s p -l port -d 'Port to listen on (as listener) or to connect to (as client). sp . if n \\{\\'
complete -c unoconv -l preserve -d 'Keep timestamp and permissions of the original document'
complete -c unoconv -s s -l server -d 'Server (address) to listen on (as listener) or to connect to (as client). sp '
complete -c unoconv -l show -d 'List the possible output formats to be used with -f'
complete -c unoconv -l stdin -d 'Read input file from stdin (filenames are ignored if provided)'
complete -c unoconv -l stdout -d 'Print converted output file to stdout'
complete -c unoconv -s t -l template -d 'Specify the template to use for importing styles from'
complete -c unoconv -s T -l timeout -d 'When unoconv starts its own listener, try to connect to it for an amount of s…'
complete -c unoconv -s v -l verbose -d 'Be more and more and more verbose'

