# rx
# Autogenerated from man page /usr/share/man/man1/rx.1.gz
complete -c rx -s + -l append -d 'append received data to an existing file (ZMODEM, ASCII only)'
complete -c rx -s a -l ascii -d 'Convert files to '
complete -c rx -s b -l binary -d 'Binary (tell it like it is) file transfer override'
complete -c rx -s B -l bufsize -d 'Buffer   NUMBER bytes before writing to disk'
complete -c rx -s c -l with-crc -d 'XMODEM only.  Use 16 bit CRC (normally a one byte checksum is used)'
complete -c rx -s C -l allow-remote-commands -d 'allow remote command execution (  insecure )'
complete -c rx -s D -l null -d 'Output file data to /dev/null; for testing.  (Unix only)'
complete -c rx -l delay-startup -d 'Wait   N seconds before doing anything'
complete -c rx -s e -l escape -d 'Force sender to escape all control characters; normally XON, XOFF, DLE, CR-@-…'
complete -c rx -s E -l rename -d 'Rename incoming file if target filename already exists'
complete -c rx -s h -l help -d 'give help screen'
complete -c rx -s m -l min-bps -d 'Stop transmission if BPS-Rate (Bytes Per Second) falls below N for a certain …'
complete -c rx -s M -l min-bps-time -d 'Used together with --min-bps.  Default is 120 (seconds)'
complete -c rx -s O -l disable-timeouts -d 'Disable read timeout handling code'
complete -c rx -l o-sync -d 'Open output files in synchronous write mode'
complete -c rx -s p -l protect -d '(ZMODEM) Protect: skip file if destination file exists'
complete -c rx -s q -l quiet -d 'Quiet suppresses verbosity'
complete -c rx -s r -l resume -d 'Crash recovery mode.  lrz tries to resume interrupted file transfers'
complete -c rx -s R -l restricted -d 'Enter more restricted mode'
complete -c rx -s s -l stop-at -d 'Stop transmission at  HH hours,  MM minutes'
complete -c rx -s S -l timesync -d 'Request timesync packet from the sender'
complete -c rx -l syslog -d 'turn syslogging on or off.  the default is set at configure time'
complete -c rx -s t -l timeout -d 'Change timeout to  TIM tenths of seconds'
complete -c rx -l tcp-client -d 'Act as a tcp/ip client: Connect to the given port'
complete -c rx -l tcp-server -d 'Act as a server: Open a socket, print out what to do, wait for connection'
complete -c rx -s U -l unrestrict -d 'turn off restricted mode (this is not possible if running under a restricted …'
complete -c rx -l version -d 'prints out version number'
complete -c rx -s v -l verbose -d 'Verbose causes a list of file names to be appended to stderr'
complete -c rx -o wN -l windowsize -d 'Set window size to N'
complete -c rx -s X -l xmodem -d 'use XMODEM protocol'
complete -c rx -s y -l overwrite -d 'Yes, clobber any existing files with the same name'
complete -c rx -l ymodem -d 'use YMODEM protocol'
complete -c rx -s k -d 'option)'
complete -c rx -s 1 -d 'or auto use a buffer large enough to buffer the whole file'
complete -c rx -l tcp -d 'option of lsz (perhaps because your telnet doesn\'t allow to spawn a local pro…'
complete -c rx -s Z -l zmodem -d 'use ZMODEM protocol'

