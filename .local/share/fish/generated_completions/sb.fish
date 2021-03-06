# sb
# Autogenerated from man page /usr/share/man/man1/sb.1.gz
complete -c sb -s + -l append -d 'Instruct the receiver to append transmitted data to an existing file (ZMODEM …'
complete -c sb -s 2 -l twostop -d 'use two stop bits (if possible)'
complete -c sb -s 8 -l try-8k -d 'Try to go up to 8KB blocksize'
complete -c sb -l start-8k -d 'Start with 8KB blocksize.  Like --try-8k'
complete -c sb -s a -l ascii -d 'Convert NL characters in the transmitted file to CR/LF'
complete -c sb -s b -l binary -d '(ZMODEM) Binary override: transfer file without any translation'
complete -c sb -s B -l bufsize -d 'Use a readbuffer of   NUMBER bytes'
complete -c sb -s c -l command -d 'Send COMMAND to the receiver for execution, return with COMMAND\'s exit status'
complete -c sb -s C -l command-tries -d 'Retry to send command N times (default: 11)'
complete -c sb -s d -l dot-to-slash -d 'Change all instances of ". " to "/" in the transmitted pathname.  Thus, C'
complete -c sb -l delay-startup -d 'Wait  N seconds before doing anything'
complete -c sb -s e -l escape -d 'Escape all control characters; normally XON, XOFF, DLE, CR-@-CR, and Ctrl-X a…'
complete -c sb -s E -l rename -d 'Force the sender to rename the new file if a file with the same name already …'
complete -c sb -s f -l full-path -d 'Send Full pathname'
complete -c sb -s h -l help -d 'give help'
complete -c sb -s i -l immediate-command -d 'Send COMMAND to the receiver for execution, return immediately upon the recei…'
complete -c sb -s k -l 1k -d '(XMODEM/YMODEM) Send files using 1024 byte blocks rather than the default 128…'
complete -c sb -s L -l packetlen -d 'Use ZMODEM sub-packets of length N'
complete -c sb -s m -l min-bps -d 'Stop transmission if BPS-Rate (Bytes Per Second) falls below N for a  certain…'
complete -c sb -s M -l min-bps-time -d 'Used together with --min-bps.  Default is 120 (seconds)'
complete -c sb -s l -l framelen -d 'Wait for the receiver to acknowledge correct data every  N (32 <= N <= 1024) …'
complete -c sb -s n -l newer -d '(ZMODEM) Send each file if destination file does not exist'
complete -c sb -s N -l newer-or-longer -d '(ZMODEM) Send each file if destination file does not exist'
complete -c sb -s o -l 16-bit-crc -d '(ZMODEM) Disable automatic selection of 32 bit CRC'
complete -c sb -s O -l disable-timeouts -d 'Disable read timeout handling'
complete -c sb -s p -l protect -d '(ZMODEM) Protect existing destination files by skipping transfer if the desti…'
complete -c sb -s q -l quiet -d 'Quiet suppresses verbosity'
complete -c sb -s R -l restricted -d 'Restricted mode: restricts pathnames to the current directory and PUBDIR (usu…'
complete -c sb -s r -l resume -d '(ZMODEM) Resume interrupted file transfer'
complete -c sb -s s -l stop-at -d 'Stop transmission at  HH  hours,   MM minutes'
complete -c sb -s S -l timesync -d 'enable timesync protocol support.  See timesync. doc for further  information'
complete -c sb -l syslog -d 'turn syslogging on or off.  the default is set at configure time'
complete -c sb -s t -l timeout -d 'Change timeout to  TIM tenths of seconds'
complete -c sb -s T -l turbo -d 'Do not escape certain characters (^P, ^P|0x80, telenet escape sequence [CR + …'
complete -c sb -l tcp -d 'Try to initiate a TCP/IP connection'
complete -c sb -l tcp-client -d 'Act as a tcp/ip client: Connect to the given port'
complete -c sb -l tcp-server -d 'Act as a server: Open a socket, print out what to do, wait for connection'
complete -c sb -s u -d 'Unlink the file after successful transmission'
complete -c sb -s U -l unrestrict -d 'Turn off restricted mode (this is not possible if running under a  restricted…'
complete -c sb -s w -l windowsize -d 'Limit the transmit window size to N bytes (ZMODEM)'
complete -c sb -s v -l verbose -d 'Verbose output to stderr.  More v\'s generate more output'
complete -c sb -s X -l xmodem -d 'use XMODEM protocol'
complete -c sb -s y -l overwrite -d 'Instruct a ZMODEM receiving program to overwrite any existing file with the s…'
complete -c sb -s Y -l overwrite-or-skip -d 'Instruct a ZMODEM receiving program to overwrite any existing file with the s…'
complete -c sb -l ymodem -d 'use ZMODEM protocol'
complete -c sb -s 1 -d 'or auto use a buffer large enough to buffer the whole file'
complete -c sb -s Z -l zmodem -d 'use ZMODEM protocol'

